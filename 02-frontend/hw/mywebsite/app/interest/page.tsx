import Link from "next/link";
import { profile } from "../profile";

export default function InterestPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12 sm:py-16">
      <header className="mb-10 border-b border-pale-sky pb-8">
        <p className="mb-3 text-sm font-bold uppercase tracking-widest text-rosewood">Outside of class / {profile.interest}</p>
        <h1 className="mb-5 text-5xl font-black tracking-tight">{profile.interest}: {profile.interestTitle}</h1>
        <p className="text-lg leading-relaxed">{profile.interestIntro}</p>
      </header>

      <section className="mb-9">
        <h2 className="mb-4 text-3xl font-bold">Why it matters to me</h2>
        <p className="leading-relaxed">{profile.interestStory}</p>
      </section>

      <section className="mb-9 rounded-lg border border-glaucous bg-pale-sky p-6">
        <h2 className="mb-4 text-2xl font-semibold">A few things to share</h2>
        <ul className="list-disc space-y-3 pl-5 leading-relaxed">
          <li>{profile.factOne}</li>
          <li>{profile.factTwo}</li>
          <li>{profile.factThree}</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="mb-3 text-2xl font-medium">Explore more</h2>
        <a className="font-bold text-rosewood underline underline-offset-4 hover:text-dusty-lavender" href={profile.interestLink}>{profile.interestLinkText} →</a>
      </section>
      <Link className="font-semibold text-rosewood underline underline-offset-4 hover:text-dusty-lavender" href="/">← Back to Home</Link>
    </main>
  );
}

