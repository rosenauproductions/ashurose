import Image from "next/image";
import familyflow from "../public/familyflow.png";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <header className="mx-auto flex w-full max-w-5xl items-baseline justify-between px-6 py-8">
        <p className="font-serif text-2xl tracking-tight">Ashurose</p>
        <p className="text-sm text-muted">Studio</p>
      </header>

      <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-16 px-6 pb-20 pt-8">
        <section className="max-w-2xl">
          <p className="mb-4 text-sm uppercase tracking-[0.2em] text-rose">
            Rosenau Productions
          </p>
          <h1 className="font-serif text-5xl leading-[1.1] tracking-tight sm:text-6xl">
            Software for the home, and for the trades.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-muted">
            Ashurose is the studio behind FamilyFlow and Hinterviewer. We
            build tools people actually use—on the kitchen wall, and in the
            shop.
          </p>
          <p className="mt-8">
            <a
              className="text-sm text-foreground underline decoration-rose/60 underline-offset-4 transition-colors hover:text-rose"
              href="mailto:info@ashurose.com"
            >
              info@ashurose.com
            </a>
          </p>
        </section>

        <section className="flex flex-col gap-8">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.18em] text-rose">
              Primary product
            </p>
            <h2 className="mt-3 font-serif text-3xl">FamilyFlow</h2>
            <p className="mt-4 leading-7 text-muted">
              A touch-screen family wall calendar. Shared schedules, chores,
              and the day ahead—built for the kitchen, not a phone.
            </p>
          </div>
          <figure className="overflow-hidden rounded-2xl border border-line bg-black/20 shadow-[0_24px_80px_rgba(0,0,0,0.45)]">
            <Image
              src={familyflow}
              alt="FamilyFlow touch-screen family calendar showing week view, chores, weather, and clock"
              priority
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="h-auto w-full"
            />
          </figure>
          <div className="flex flex-wrap items-baseline gap-x-6 gap-y-2 text-sm">
            <p className="text-muted">Coming soon</p>
            <a
              className="text-foreground underline decoration-rose/60 underline-offset-4 transition-colors hover:text-rose"
              href="mailto:support@ashurose.com"
            >
              FamilyFlow support
            </a>
          </div>
        </section>

        <section>
          <article className="flex max-w-xl flex-col border border-line p-8">
            <p className="text-xs uppercase tracking-[0.18em] text-rose">
              Product
            </p>
            <h2 className="mt-3 font-serif text-3xl">Hinterviewer</h2>
            <p className="mt-4 leading-7 text-muted">
              Video resumes for trade schools. Students show hands-on skill;
              employers see what a paper résumé cannot.
            </p>
            <a
              className="mt-8 text-sm text-foreground underline decoration-rose/60 underline-offset-4 transition-colors hover:text-rose"
              href="https://hinterviewer.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Visit hinterviewer.com
            </a>
          </article>
        </section>
      </main>

      <footer className="mx-auto flex w-full max-w-5xl flex-col gap-3 border-t border-line px-6 py-8 text-sm text-muted sm:flex-row sm:items-baseline sm:justify-between">
        <p>© {new Date().getFullYear()} Ashurose</p>
        <p className="flex flex-wrap gap-x-4 gap-y-1">
          <a
            className="underline decoration-rose/40 underline-offset-4 transition-colors hover:text-rose"
            href="mailto:chris.rosenau@ashurose.com"
          >
            Chris Rosenau
          </a>
          <a
            className="underline decoration-rose/40 underline-offset-4 transition-colors hover:text-rose"
            href="mailto:admin@ashurose.com"
          >
            admin@ashurose.com
          </a>
        </p>
      </footer>
    </div>
  );
}
