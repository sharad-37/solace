import { redirect } from "next/navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solace — Building in public",
  description:
    "A calm AI wellness companion built around 2-minute daily reflection. Now in early access.",
};

export default function LaunchPage() {
  redirect("/");
}
