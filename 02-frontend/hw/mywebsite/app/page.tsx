import Link from "next/link";
import { profile } from "./profile";

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12 sm:py-16">
      <header className="mb-12 border-b border-pale-sky pb-10">
        <p className="mb-3 text-sm font-bold uppercase tracking-widest text-rosewood">Hello, welcome to my website!</p>
        <h1 className="mb-5 text-5xl font-black tracking-tight sm:text-6xl" style={{ color: "var(--color-rosewood)" }}>{profile.name}</h1>
        <p className="max-w-xl text-lg leading-relaxed">{profile.bio}</p>
        <a className="mt-6 inline-block font-bold text-rosewood underline underline-offset-4 hover:text-dusty-lavender" href={profile.github}>Find me on GitHub →</a>
      </header>

      <section className="mb-10">
        <h2 className="mb-5 text-3xl font-bold">Experience</h2>
        <article className="rounded-lg border border-pale-sky bg-pale-sky p-6">
          <h3 className="mb-2 text-xl font-semibold">TANX 3003 — High School Robotics Team</h3>
          <p className="font-medium text-rosewood">Vice President &amp; Programming Lead</p>
          <p className="mt-1 text-sm text-ink">Sep 2021 – June 2026</p>
          <p className="mt-5 leading-relaxed">
            Led programming in Java for the team&apos;s FIRST Robotics Competition robot, developing its vision system, drive system, and controls for various robot components.
          </p>
        </article>
        <article className="mt-5 rounded-lg border border-pale-sky bg-pale-sky p-6">
          <h3 className="mb-2 text-xl font-semibold">Canandaigua Academy IT Department</h3>
          <p className="font-medium text-rosewood">Student IT Helper</p>
          <p className="mt-1 text-sm text-ink">August 2025</p>
          <p className="mt-5 leading-relaxed">
            Optimized school district hardware by formatting and imaging desktop applications, laptops, and Chromebooks for student and faculty useage.
          </p>
        </article>
        <article className="mt-5 rounded-lg border border-pale-sky bg-pale-sky p-6">
          <h3 className="mb-2 text-xl font-semibold">Student Technical Services</h3>
          <p className="font-medium text-rosewood">President</p>
          <p className="mt-1 text-sm text-ink">September 2024 - June 2026</p>
          <p className="mt-5 leading-relaxed">
            Oversaw the repair and maintenace of school district harware, specifically disassembling and reassmebling Crombook componets like motherboards and LCDs.
          </p>
        </article>
      </section>

      <section>
        <h2 className="mb-3 text-2xl font-medium">Outside of class</h2>
        <p className="mb-4 leading-relaxed">Get to know a little more about my interest in {profile.interest.toLowerCase()}.</p>
        <Link className="inline-block rounded-md bg-rosewood px-5 py-3 font-semibold text-porcelain hover:bg-soft-rosewood" href="/interest">Explore {profile.interest} →</Link>
      </section>
    </main>
  );
}

