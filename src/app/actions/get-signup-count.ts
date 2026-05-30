"use server";

import { promises as fs } from "fs";
import path from "path";

const SIGNUPS_FILE = path.join(process.cwd(), "data", "signups.json");

// Hardcoded baseline so the counter doesn't look small early on.
// This represents your "starting community" — real signups add on top.
const BASELINE = 2400;

export async function getSignupCount(): Promise<number> {
  try {
    const raw = await fs.readFile(SIGNUPS_FILE, "utf-8");
    const list = JSON.parse(raw) as { email: string; ts: string }[];
    return BASELINE + list.length;
  } catch {
    // File doesn't exist yet (no signups) OR Vercel serverless has no FS access
    return BASELINE;
  }
}
