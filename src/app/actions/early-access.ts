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

/* ═══════════════════════════════════════════════════
   BRAND TOKENS (mirrored from design.md)
   ═══════════════════════════════════════════════════ */
const BRAND = {
  // Surface
  canvasSoft: "#e8ebe6",
  canvas: "#ffffff",
  inkSurface: "#0e0f0c",

  // Brand
  primary: "#9fe870",
  primaryPale: "#e2f6d5",
  onPrimary: "#0e0f0c",

  // Text
  ink: "#0e0f0c",
  inkDeep: "#163300",
  body: "#454745",
  mute: "#868685",

  // Borders
  borderSoft: "rgba(14,15,12,0.06)",
  borderMedium: "rgba(14,15,12,0.10)",
};

/* ═══════════════════════════════════════════════════
   THE SOLACE BUTTERFLY (inline SVG — same as icon.svg)
   Pass color to invert for dark surfaces.
   ═══════════════════════════════════════════════════ */
function butterflySvg(size: number, color: string = BRAND.ink) {
  return `
<svg width="${size}" height="${size}" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" style="display: inline-block; vertical-align: middle;">
  <path d="M32 30 C32 30 18 12 8 16 C2 19 4 30 14 32 C22 33 30 32 32 30Z" fill="${color}"/>
  <path d="M32 30 C32 30 46 12 56 16 C62 19 60 30 50 32 C42 33 34 32 32 30Z" fill="${color}"/>
  <path d="M32 34 C32 34 20 38 16 48 C13 55 22 56 28 50 C31 47 32 40 32 34Z" fill="${color}" opacity="0.75"/>
  <path d="M32 34 C32 34 44 38 48 48 C51 55 42 56 36 50 C33 47 32 40 32 34Z" fill="${color}" opacity="0.75"/>
  <ellipse cx="32" cy="32" rx="2" ry="10" fill="${color}"/>
</svg>`;
}

/* ═══════════════════════════════════════════════════
   ADMIN NOTIFICATION EMAIL — Wise design system
   ═══════════════════════════════════════════════════ */
function adminEmailHtml(email: string, totalCount: number) {
  const now = new Date();
  const ts = now.toLocaleString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  // Pull the localpart for a quick visual hint
  const localpart = email.split("@")[0];
  const domainPart = email.split("@")[1] || "";

  return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="color-scheme" content="light dark" />
  <meta name="supported-color-schemes" content="light dark" />
  <title>New Solace signup</title>
  <style>
    /* ─── Reset ─── */
    body, html { margin: 0 !important; padding: 0 !important; width: 100% !important; }
    table { border-collapse: collapse !important; mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
    img { border: 0; line-height: 100%; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; }
    a { color: inherit; text-decoration: none; }
    p { margin: 0; padding: 0; }
    h1, h2, h3, h4 { margin: 0; padding: 0; }

    /* ─── Brand-coherent dark mode ─── */
    @media (prefers-color-scheme: dark) {
      .bg-canvas-soft { background-color: ${BRAND.inkSurface} !important; }
      .bg-canvas { background-color: #1a1c18 !important; }
      .text-ink { color: ${BRAND.canvasSoft} !important; }
      .text-body { color: #b8bcbd !important; }
      .text-mute { color: #868685 !important; }
      .text-ink-deep { color: ${BRAND.primary} !important; }
      .border-soft { border-color: rgba(244,246,241,0.08) !important; }
      .stat-bg { background-color: rgba(159,232,112,0.08) !important; }
      .email-pill-bg { background-color: rgba(244,246,241,0.05) !important; }
      .butterfly-light { filter: invert(1) brightness(0.95); }
    }

    /* ─── Mobile ─── */
    @media only screen and (max-width: 600px) {
      .container { width: 100% !important; }
      .card { padding: 28px 24px !important; border-radius: 20px !important; }
      .outer-padding { padding: 24px 12px !important; }
      .h1-mobile { font-size: 28px !important; line-height: 32px !important; }
      .email-pill-mobile { font-size: 14px !important; padding: 12px 16px !important; }
    }
  </style>
</head>

<body class="bg-canvas-soft" style="margin: 0; padding: 0; background-color: ${BRAND.canvasSoft}; font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;">

  <!-- ─── Preheader (inbox preview) ─── -->
  <div style="display: none; max-height: 0; overflow: hidden; mso-hide: all; font-size: 1px; line-height: 1px; color: ${BRAND.canvasSoft};">
    A quiet new signup just joined the Solace beta — total reflectors growing.
  </div>

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" class="bg-canvas-soft" style="background-color: ${BRAND.canvasSoft};">
    <tr>
      <td align="center" class="outer-padding" style="padding: 56px 24px;">

        <!-- ═══════════ CONTAINER ═══════════ -->
        <table role="presentation" width="560" cellpadding="0" cellspacing="0" border="0" class="container" style="max-width: 560px; width: 100%;">

          <!-- ─── Brand mark ─── -->
          <tr>
            <td align="center" style="padding-bottom: 32px;">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td class="butterfly-light" style="vertical-align: middle; padding-right: 10px; line-height: 0;">
                    ${butterflySvg(28, BRAND.ink)}
                  </td>
                  <td class="text-ink" style="vertical-align: middle; font-family: 'Manrope', 'Inter', -apple-system, sans-serif; font-weight: 900; font-size: 20px; color: ${BRAND.ink}; letter-spacing: -0.02em; line-height: 1;">
                    Solace
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- ═══════════ MAIN CARD ═══════════ -->
          <tr>
            <td class="bg-canvas card" style="background-color: ${BRAND.canvas}; border-radius: 24px; padding: 40px 36px;">

              <!-- Lime "New signup" pill -->
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 24px;">
                <tr>
                  <td style="background-color: ${BRAND.primary}; padding: 7px 14px; border-radius: 9999px; font-family: 'Inter', sans-serif; font-weight: 700; color: ${BRAND.onPrimary}; font-size: 12px; text-transform: uppercase; letter-spacing: 0.08em; line-height: 1;">
                    🦋 &nbsp;New signup
                  </td>
                </tr>
              </table>

              <!-- Headline (Wise display-md, Manrope 900) -->
              <h1 class="text-ink h1-mobile" style="font-family: 'Manrope', 'Inter', sans-serif; font-weight: 900; font-size: 34px; line-height: 36px; letter-spacing: -0.02em; color: ${BRAND.ink}; margin: 0 0 6px 0;">
                Someone just joined.
              </h1>

              <!-- Subheadline with deep ink accent -->
              <p class="text-ink-deep" style="font-family: 'Manrope', 'Inter', sans-serif; font-weight: 900; font-size: 20px; line-height: 26px; letter-spacing: -0.01em; color: ${BRAND.inkDeep}; margin: 0 0 24px 0;">
                The list is growing — quietly.
              </p>

              <!-- Timestamp -->
              <p class="text-mute" style="font-family: 'Inter', sans-serif; font-size: 13px; line-height: 20px; color: ${BRAND.mute}; margin: 0 0 28px 0;">
                ${ts}
              </p>

              <!-- ─── Divider ─── -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 24px;">
                <tr>
                  <td class="border-soft" style="border-top: 1px solid ${BRAND.borderSoft}; font-size: 0; line-height: 0; height: 1px;">&nbsp;</td>
                </tr>
              </table>

              <!-- ─── Email block (signature interactive card pattern) ─── -->
              <p class="text-mute" style="font-family: 'Inter', sans-serif; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: ${BRAND.mute}; margin: 0 0 10px 0;">
                Reflector
              </p>

              <div class="email-pill-bg" style="background-color: ${BRAND.canvasSoft}; padding: 18px 20px; border-radius: 16px; margin-bottom: 24px;">
                <p class="text-ink email-pill-mobile" style="font-family: 'SF Mono', 'Monaco', 'Cascadia Code', 'Roboto Mono', monospace; font-size: 16px; line-height: 22px; color: ${BRAND.ink}; margin: 0; word-break: break-all; font-weight: 500;">
                  <span style="color: ${BRAND.ink};">${localpart}</span><span class="text-mute" style="color: ${BRAND.mute};">@${domainPart}</span>
                </p>
              </div>

              <!-- ─── Stat row (polarity-flipped dark pill — Wise signature) ─── -->
              <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="background-color: ${BRAND.ink}; padding: 14px 22px; border-radius: 9999px;">
                    <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td style="vertical-align: middle; padding-right: 8px; line-height: 0;">
                          ${butterflySvg(18, BRAND.primary)}
                        </td>
                        <td style="vertical-align: middle; font-family: 'Inter', sans-serif; font-size: 13px; color: rgba(244,246,241,0.6); padding-right: 8px; line-height: 1;">
                          Total reflectors
                        </td>
                        <td style="vertical-align: middle; font-family: 'Manrope', 'Inter', sans-serif; font-weight: 900; font-size: 16px; color: ${BRAND.primary}; letter-spacing: -0.01em; line-height: 1;">
                          ${totalCount.toLocaleString()}
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- ═══════════ HELPER NOTE ═══════════ -->
          <tr>
            <td style="padding: 28px 12px 0 12px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td class="text-mute" style="font-family: 'Inter', sans-serif; font-size: 12px; line-height: 18px; color: ${BRAND.mute}; padding: 14px 18px; background-color: rgba(14,15,12,0.025); border-radius: 12px;">
                    💡 &nbsp;Reply to this signup personally when you're ready — early-stage founders who do this convert 4× more believers.
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- ═══════════ FOOTER ═══════════ -->
          <tr>
            <td align="center" style="padding: 36px 12px 0 12px;">
              <p style="font-family: 'Manrope', 'Inter', sans-serif; font-weight: 600; font-style: italic; font-size: 13px; line-height: 18px; color: ${BRAND.mute}; margin: 0 0 4px 0;">
                Small reflections.
              </p>
              <p style="font-family: 'Manrope', 'Inter', sans-serif; font-weight: 600; font-style: italic; font-size: 13px; line-height: 18px; color: ${BRAND.mute}; margin: 0;">
                Meaningful growth.
              </p>
            </td>
          </tr>

        </table>

      </td>
    </tr>
  </table>

</body>
</html>`;
}

/* ═══════════════════════════════════════════════════
   PLAIN TEXT FALLBACK (for spam filters + minimal clients)
   ═══════════════════════════════════════════════════ */
function adminEmailText(email: string, totalCount: number) {
  return `🦋 NEW SOLACE SIGNUP

Someone just joined the beta.

Reflector: ${email}
Total reflectors: ${totalCount}
Time: ${new Date().toLocaleString()}

—
Small reflections. Meaningful growth.
Solace`;
}

/* ═══════════════════════════════════════════════════
   ADMIN NOTIFICATION (Resend → your verified email)
   ═══════════════════════════════════════════════════ */
async function notifyAdmin(email: string, totalCount: number) {
  if (!process.env.RESEND_API_KEY || !process.env.ADMIN_EMAIL) {
    console.warn("Resend env vars missing — admin notification skipped.");
    return;
  }

  try {
    const { Resend } = await import("resend");
    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: "Solace <onboarding@resend.dev>",
      to: process.env.ADMIN_EMAIL,
      subject: `🦋 New reflector: ${email}`,
      html: adminEmailHtml(email, totalCount),
      text: adminEmailText(email, totalCount),
    });
  } catch (err) {
    console.error("Admin notification failed:", err);
  }
}

/* ═══════════════════════════════════════════════════
   SERVER ACTION
   ═══════════════════════════════════════════════════ */
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
    // Vercel's serverless FS is read-only; that's expected
  }

  // Send beautifully branded admin notification
  await notifyAdmin(email, totalCount);

  return {
    ok: true,
    message: isNew
      ? "You're on the list 🦋 We'll be in touch soon."
      : "You're already on the list 🦋",
  };
}
