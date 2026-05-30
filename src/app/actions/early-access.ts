"use server";

import { Resend } from "resend";
import { promises as fs } from "fs";
import path from "path";

const resend = new Resend(process.env.RESEND_API_KEY);

interface SignupResult {
  ok: boolean;
  message: string;
}

const SIGNUPS_FILE = path.join(process.cwd(), "data", "signups.json");

async function ensureDataDir() {
  const dir = path.dirname(SIGNUPS_FILE);
  try {
    await fs.access(dir);
  } catch {
    await fs.mkdir(dir, { recursive: true });
  }
}

async function saveSignup(email: string) {
  await ensureDataDir();
  let list: { email: string; ts: string }[] = [];
  try {
    const raw = await fs.readFile(SIGNUPS_FILE, "utf-8");
    list = JSON.parse(raw);
  } catch {
    list = [];
  }
  if (list.find((s) => s.email === email)) return false; // already exists
  list.push({ email, ts: new Date().toISOString() });
  await fs.writeFile(SIGNUPS_FILE, JSON.stringify(list, null, 2));
  return true;
}

export async function joinEarlyAccess(
  _prev: SignupResult | null,
  formData: FormData,
): Promise<SignupResult> {
  const email = String(formData.get("email") || "")
    .trim()
    .toLowerCase();

  // Validate
  if (!email) {
    return { ok: false, message: "Please enter your email." };
  }
  const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!valid) {
    return { ok: false, message: "That doesn't look like a valid email." };
  }

  // Save to local file (best-effort; will only work on Vercel writable runtime)
  let isNew = true;
  try {
    isNew = await saveSignup(email);
  } catch (err) {
    // File write fails on Vercel serverless (read-only fs). That's fine — we still email.
    console.warn("Signup file write skipped:", err);
  }

  // Send admin notification
  try {
    await resend.emails.send({
      from: "Solace Beta <onboarding@resend.dev>",
      to: process.env.ADMIN_EMAIL || "",
      subject: `🦋 New Solace early-access signup: ${email}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, sans-serif; max-width: 540px; margin: 0 auto; padding: 32px; background: #e8ebe6; border-radius: 24px;">
          <h2 style="font-family: Manrope, sans-serif; font-weight: 900; font-size: 28px; color: #0e0f0c; margin: 0 0 12px 0;">
            🦋 New early-access signup
          </h2>
          <p style="font-size: 16px; color: #454745; margin: 0 0 16px 0;">
            Someone just joined the Solace private beta:
          </p>
          <div style="background: #ffffff; padding: 16px 20px; border-radius: 16px; font-family: monospace; font-size: 15px; color: #0e0f0c;">
            ${email}
          </div>
          <p style="font-size: 13px; color: #868685; margin: 20px 0 0 0;">
            Saved at ${new Date().toLocaleString()}
          </p>
        </div>
      `,
    });
  } catch (err) {
    console.error("Admin email failed:", err);
  }

  // Send welcome email to user
  try {
    await resend.emails.send({
      from: "Aura at Solace <onboarding@resend.dev>",
      to: email,
      subject: "Welcome to Solace 🦋",
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, sans-serif; max-width: 560px; margin: 0 auto; padding: 40px 32px; background: #e8ebe6;">
          <div style="text-align: center; margin-bottom: 32px;">
            <div style="display: inline-block; padding: 12px 20px; background: #9fe870; border-radius: 9999px; font-weight: 700; color: #0e0f0c; font-size: 13px;">
              You're on the list
            </div>
          </div>

          <h1 style="font-family: Manrope, Georgia, serif; font-weight: 900; font-size: 36px; line-height: 1.05; color: #0e0f0c; margin: 0 0 20px 0; text-align: center;">
            Hi — thank you for joining Solace.
          </h1>

          <p style="font-size: 17px; line-height: 1.55; color: #454745; margin: 0 0 16px 0;">
            I'm Aura. I'll be your gentle companion when Solace opens to you in the coming weeks.
          </p>

          <p style="font-size: 17px; line-height: 1.55; color: #454745; margin: 0 0 16px 0;">
            Nothing about this will be loud or demanding. Just two quiet minutes a day. A small reflection. A gentle question.
          </p>

          <p style="font-size: 17px; line-height: 1.55; color: #454745; margin: 0 0 32px 0;">
            We'll send one more note when your invite is ready — and that's it until then.
          </p>

          <div style="text-align: center; padding: 24px 0; border-top: 1px solid rgba(14,15,12,0.08); margin-top: 32px;">
            <p style="font-size: 13px; color: #868685; margin: 0;">
              Small reflections. Meaningful growth.
            </p>
            <p style="font-size: 13px; color: #868685; margin: 8px 0 0 0;">
              — The Solace team
            </p>
          </div>
        </div>
      `,
    });
  } catch (err) {
    console.error("Welcome email failed:", err);
    return {
      ok: true,
      message:
        "You're in! We had a small hiccup sending your confirmation — but you're on the list.",
    };
  }

  return {
    ok: true,
    message: isNew
      ? "You're in. Check your inbox 🦋"
      : "You're already on the list 🦋",
  };
}
