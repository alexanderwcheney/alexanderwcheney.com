import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Coaching · Alexander W Cheney",
  description:
    "One-on-one coaching for transitions, inner work, and finding your edge.",
};

const calendlyUrl = "https://calendly.com/alexanderwcheney";

const sections = [
  {
    heading: "Who I'd love to talk to",
    items: [
      "People in the middle of a big transition: leaving a career, moving to a new country, or quietly wondering whether they should",
      "People who can sense something is there but can't quite name it yet, or who have named it and are working on accepting it",
      "People curious about meditation, contemplation, and the inner psyche who want a practical companion for the exploring",
      "People working through relationships, frustrations, or emotions that feel heavier than they'd like",
    ],
  },
  {
    heading: "What I think I'm good at",
    items: [
      "Keeping things in confidence. People tell me things, and they stay with me.",
      "Sitting with difficult emotions without rushing to fix them",
      "Finding where your edge is and what's just past it",
      "Pointing you toward books, practices, and people so you can keep going on your own",
    ],
  },
  {
    heading: "How it works",
    items: [
      "50-minute sessions over video, or in person if you're in San Francisco or the Bay Area",
      "Roughly monthly, with things to explore on your own in between",
      "My first five clients are free. I'm new to doing this formally, and I'd like to learn alongside people who don't mind that.",
    ],
  },
  {
    heading: "Who I'm probably not right for",
    items: [
      "Anyone looking for career tactics like managing up, promotion cycles, or interview prep. Plenty of people do that better than I would.",
      "Anyone who wants a drill sergeant. I won't push you or break down walls; I work best with people who already have some self-awareness and momentum.",
      "Anyone in crisis. I'm not a therapist. That said, helping you figure out what to bring to a therapist is something I'd genuinely enjoy.",
    ],
  },
];

const Coaching = () => {
  return (
    <main className="mx-auto flex min-h-screen max-w-2xl flex-col gap-12 px-6 py-16">
      <Link
        href="/"
        className="text-sm text-stone-400 transition-colors hover:text-amber-500"
      >
        ← branches of life
      </Link>

      <header className="flex flex-col gap-6">
        <h1 className="font-serif text-4xl md:text-5xl text-balance">
          Let&apos;s talk.
        </h1>
        <div className="flex flex-col gap-4 font-serif text-lg leading-relaxed text-stone-300">
          <p>
            I&apos;ve always ended up helping people figure things out.
            I&apos;ve coached swimmers, managed soccer and competitive video
            game teams, and tutored more subjects than I can remember. Lately
            I&apos;ve noticed that one-on-one conversations are where I do my
            best work, and they&apos;re also what I find myself pouring energy
            into without trying. So I&apos;m making it official, or at least
            official-ish.
          </p>
          <p>
            My favorite conversations find where your edge is, the place where
            things start to feel a little uncomfortable, and look at what&apos;s
            just beyond it. Then we figure out the tools and small steps to get
            there, and you go do the exploring. A lot of that happens through
            meditation and looking inward. I facilitate meditation, and I&apos;m
            drawn to Jungian ideas about the psyche.
          </p>
          <p>
            &ldquo;Coaching&rdquo; is the closest word I&apos;ve found for
            this, even though it makes me picture a whistle. (I did own a
            whistle once. Swim coach.)
          </p>
        </div>
      </header>

      {sections.map(({ heading, items }) => (
        <section key={heading} className="flex flex-col gap-4">
          <h2 className="font-serif text-2xl text-amber-500">{heading}</h2>
          <ul className="flex flex-col gap-2 font-serif text-lg leading-relaxed text-stone-300">
            {items.map((item) => (
              <li key={item} className="flex gap-3">
                <span aria-hidden="true" className="text-stone-500">
                  –
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>
      ))}

      <section className="flex flex-col gap-6 border-t border-stone-800 pt-12">
        <h2 className="font-serif text-2xl text-amber-500">Getting started</h2>
        <p className="font-serif text-lg leading-relaxed text-stone-300">
          The first step is a free intro call. We&apos;ll talk about what&apos;s
          going on for you and whether I&apos;m a good fit. If I&apos;m not,
          I&apos;ll do my best to point you somewhere better.
        </p>
        <a
          href={calendlyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="self-start rounded-full bg-amber-500 px-6 py-3 font-serif text-lg text-stone-950 transition-colors hover:bg-amber-400"
        >
          Book a free intro call
        </a>
      </section>
    </main>
  );
};

export default Coaching;
