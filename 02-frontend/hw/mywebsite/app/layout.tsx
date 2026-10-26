import type { Metadata } from "next";
import Link from "next/link";
import { profile } from "./profile";
import "./globals.css";

export const metadata: Metadata = {
  title: profile.name + " | My Website",
  description: profile.bio,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* This navigation is shared by both pages. */}
        <nav aria-label="Main navigation" className="border-b border-pale-sky bg-pale-sky">
          <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-between gap-4 px-6 py-5">
            <span className="font-bold">My corner of the internet</span>
            <div className="flex gap-6 font-semibold">
              <Link className="underline-offset-4 hover:underline" href="/">Home</Link>
              <Link className="underline-offset-4 hover:underline" href="/interest">{profile.interest}</Link>
            </div>
          </div>
        </nav>
        {children}
        <footer className="mx-auto max-w-3xl border-t border-pale-sky px-6 py-6 text-sm text-ink">{profile.name} · Thanks for stopping by!</footer>
      </body>
    </html>
  );
}

