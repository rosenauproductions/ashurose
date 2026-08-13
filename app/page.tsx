import Image from "next/image";
import familyflow from "../public/familyflow.png";

const benefits = [
  {
    title: "The week on the wall",
    body: "Google Calendar, family events, and the day ahead—large enough to read from across the kitchen.",
  },
  {
    title: "Chores that get done",
    body: "Assign tasks by person, check them off on the glass, and keep the household moving without another app on a phone.",
  },
  {
    title: "Built for touch",
    body: "FamilyFlow is a wall calendar first. Fingers, not tiny taps. Designed for a kitchen display, not a pocket.",
  },
  {
    title: "One household view",
    body: "Schedules, lists, weather, and the little things everyone needs to see—together, in one calm place.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-7">
        <a href="#top" className="text-2xl font-semibold text-foreground">
          AshurRose
        </a>
        <nav className="hidden items-center gap-8 text-sm text-muted sm:flex">
          <a className="transition-colors hover:text-foreground" href="#familyflow">
            FamilyFlow
          </a>
          <a className="transition-colors hover:text-foreground" href="#hinterviewer">
            Hinterviewer
          </a>
          <a className="transition-colors hover:text-foreground" href="#contact">
            Contact
          </a>
        </nav>
      </header>

      <main id="top" className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-6 pb-24">
        <section className="grid items-center gap-12 pb-8 pt-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-16 lg:pt-10">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-sage">
              FamilyFlow
            </p>
            <h1 className="mt-4 text-5xl font-semibold leading-[1.15] text-foreground sm:text-6xl">
              The family calendar that belongs on the wall.
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-8 text-muted">
              FamilyFlow is a touch-screen wall calendar from AshurRose.
              Shared schedules, chores, lists, and weather—built for the
              kitchen, not another phone in a pocket.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                className="inline-flex rounded-full bg-terracotta px-6 py-3 text-sm font-medium text-white shadow-sm transition-opacity hover:opacity-90"
                href="mailto:info@ashurose.com"
              >
                Join the waitlist
              </a>
              <a
                className="inline-flex rounded-full border border-line bg-card px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-sand"
                href="mailto:support@ashurose.com"
              >
                FamilyFlow support
              </a>
            </div>
            <p className="mt-4 text-sm text-muted">Coming soon · info@ashurose.com</p>
          </div>

          <figure className="overflow-hidden rounded-3xl border border-line bg-card shadow-[0_28px_60px_rgba(44,38,31,0.12)]">
            <Image
              src={familyflow}
              alt="FamilyFlow touch-screen family calendar showing week view, chores, weather, and clock"
              priority
              sizes="(max-width: 1024px) 100vw, 640px"
              className="h-auto w-full"
            />
          </figure>
        </section>

        <section id="familyflow" className="pt-16">
          <h2 className="max-w-2xl text-4xl font-semibold leading-snug">
            Everything the household needs to see, without picking up a phone.
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {benefits.map((item) => (
              <article
                key={item.title}
                className="rounded-3xl border border-line bg-card p-8 shadow-[0_10px_30px_rgba(44,38,31,0.05)]"
              >
                <h3 className="text-2xl font-semibold">{item.title}</h3>
                <p className="mt-3 leading-7 text-muted">{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section
          id="hinterviewer"
          className="mt-20 rounded-3xl border border-line bg-sand/50 px-8 py-12 sm:px-12"
        >
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-sage">
            Also from AshurRose
          </p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
            Hinterviewer
          </h2>
          <p className="mt-4 max-w-xl leading-7 text-muted">
            Video resumes for trade schools. Students show hands-on skill;
            employers see what a paper résumé cannot.
          </p>
          <a
            className="mt-6 inline-flex text-sm font-medium text-foreground underline decoration-terracotta/70 underline-offset-4 transition-colors hover:text-terracotta"
            href="https://hinterviewer.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Visit hinterviewer.com
          </a>
        </section>

        <section id="contact" className="mt-20 max-w-xl">
          <h2 className="text-4xl font-semibold">Say hello</h2>
          <p className="mt-4 leading-7 text-muted">
            Questions about FamilyFlow, waitlist access, or AshurRose—write
            to us. We read every note.
          </p>
          <a
            className="mt-6 inline-flex rounded-full bg-terracotta px-6 py-3 text-sm font-medium text-white shadow-sm transition-opacity hover:opacity-90"
            href="mailto:info@ashurose.com"
          >
            info@ashurose.com
          </a>
        </section>
      </main>

      <footer className="border-t border-line bg-card/60">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-6 py-8 text-sm text-muted sm:flex-row sm:items-baseline sm:justify-between">
          <p>© {new Date().getFullYear()} AshurRose</p>
          <p className="flex flex-wrap gap-x-5 gap-y-1">
            <a
              className="underline decoration-terracotta/40 underline-offset-4 transition-colors hover:text-terracotta"
              href="mailto:chris.rosenau@ashurose.com"
            >
              Chris Rosenau
            </a>
            <a
              className="underline decoration-terracotta/40 underline-offset-4 transition-colors hover:text-terracotta"
              href="mailto:admin@ashurose.com"
            >
              admin@ashurose.com
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
