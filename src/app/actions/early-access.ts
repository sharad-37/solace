"use server";

import { promises as fs } from "fs";
import path from "path";

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
  if (list.find((s) => s.email === email)) return false;
  list.push({ email, ts: new Date().toISOString() });
  await fs.writeFile(SIGNUPS_FILE, JSON.stringify(list, null, 2));
  return true;
}

/* ═════════════════════════════════════════
   Admin Notification via Resend
   (works because it sends only to YOUR verified email)
   ═════════════════════════════════════════ */
async function notifyAdmin(email: string, totalCount: number) {
  if (!process.env.RESEND_API_KEY || !process.env.ADMIN_EMAIL) return;

  try {
    const { Resend } = await import("resend");
    const resend = new Resend(process.env.RESEND_API_KEY);

    const ts = new Date().toLocaleString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });

    await resend.emails.send({
      from: "Solace Admin <onboarding@resend.dev>",
      to: process.env.ADMIN_EMAIL,
      subject: `🦋 New signup: ${email}`,
      html: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Solace signup</title>
</head>
<body style="margin: 0; padding: 0; background-color: #e8ebe6; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #e8ebe6;">
    <tr>
      <td align="center" style="padding: 40px 16px;">
        <table role="presentation" width="520" cellpadding="0" cellspacing="0" border="0" style="max-width: 520px; width: 100%;">

          <!-- Brand -->
          <tr>
            <td style="padding-bottom: 24px;">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="vertical-align: middle; padding-right: 8px;">
                    <svg width="22" height="22" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                      <path d="M32 30 C32 30 18 12 8 16 C2 19 4 30 14 32 C22 33 30 32 32 30Z" fill="#0e0f0c"/>
                      <path d="M32 30 C32 30 46 12 56 16 C62 19 60 30 50 32 C42 33 34 32 32 30Z" fill="#0e0f0c"/>
                      <path d="M32 34 C32 34 20 38 16 48 C13 55 22 56 28 50 C31 47 32 40 32 34Z" fill="#0e0f0c" opacity="0.75"/>
                      <path d="M32 34 C32 34 44 38 48 48 C51 55 42 56 36 50 C33 47 32 40 32 34Z" fill="#0e0f0c" opacity="0.75"/>
                      <ellipse cx="32" cy="32" rx="2" ry="10" fill="#0e0f0c"/>
                    </svg>
                  </td>
                  <td style="vertical-align: middle; font-family: 'Manrope', sans-serif; font-weight: 900; font-size: 15px; color: #0e0f0c; letter-spacing: -0.01em;">
                    Solace · Admin
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Card -->
          <tr>
            <td style="background-color: #ffffff; border-radius: 20px; padding: 32px;">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 16px;">
                <tr>
                  <td style="background-color: #9fe870; padding: 5px 12px; border-radius: 9999px; font-family: -apple-system, sans-serif; font-weight: 700; color: #0e0f0c; font-size: 11px; text-transform: uppercase; letter-spacing: 0.06em;">
                    🦋 New signup
                  </td>
                </tr>
              </table>

              <h2 style="font-family: 'Manrope', sans-serif; font-weight: 900; font-size: 26px; line-height: 30px; letter-spacing: -0.01em; color: #0e0f0c; margin: 0 0 8px 0;">
                Someone just joined the beta.
              </h2>

              <p style="font-family: -apple-system, sans-serif; font-size: 14px; line-height: 20px; color: #868685; margin: 0 0 24px 0;">
                ${ts}
              </p>

              <div style="background-color: #e8ebe6; padding: 14px 18px; border-radius: 14px; margin-bottom: 20px;">
                <p style="font-family: -apple-system, sans-serif; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; color: #868685; margin: 0 0 4px 0;">
                  Email
                </p>
                <p style="font-family: 'SF Mono', Monaco, monospace; font-size: 15px; color: #0e0f0c; margin: 0; word-break: break-all;">
                  ${email}
                </p>
              </div>

              <div style="display: inline-block; background-color: #0e0f0c; padding: 10px 18px; border-radius: 9999px;">
                <span style="font-family: -apple-system, sans-serif; font-size: 13px; color: rgba(244,246,241,0.7); margin-right: 6px;">Total signups:</span>
                <span style="font-family: 'Manrope', sans-serif; font-weight: 900; font-size: 14px; color: #9fe870;">${totalCount}</span>
              </div>

              <!-- Reminder -->
              <p style="font-family: -apple-system, sans-serif; font-size: 12px; line-height: 18px; color: #868685; margin: 24px 0 0 0; padding-top: 16px; border-top: 1px solid rgba(14,15,12,0.06);">
                💡 Remember to send them a welcome reply when you're ready, or save the full list from <code style="background: rgba(14,15,12,0.06); padding: 2px 6px; border-radius: 4px; font-family: monospace;">data/signups.json</code>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
      `,
    });
  } catch (err) {
    console.error("Admin notification failed:", err);
  }
}

/* ═════════════════════════════════════════
   Server Action
   ═════════════════════════════════════════ */
export async function joinEarlyAccess(
  _prev: SignupResult | null,
  formData: FormData,
): Promise<SignupResult> {
  const email = String(formData.get("email") || "")
    .trim()
    .toLowerCase();

  if (!email) return { ok: false, message: "Please enter your email." };

  const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!valid)
    return { ok: false, message: "That doesn't look like a valid email." };

  // Save locally (best-effort)
  let isNew = true;
  let totalCount = 1;
  try {
    isNew = await saveSignup(email);
    const raw = await fs.readFile(SIGNUPS_FILE, "utf-8");
    totalCount = JSON.parse(raw).length;
  } catch {
    // serverless FS read-only on Vercel; that's expected
  }

  // Notify yourself (works on Resend sandbox because it sends only to your verified email)
  await notifyAdmin(email, totalCount);

  return {
    ok: true,
    message: isNew
      ? "You're on the list 🦋 We'll be in touch soon."
      : "You're already on the list 🦋",
  };
}
