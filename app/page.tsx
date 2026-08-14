import Image from "next/image";
import familyflow from "../public/familyflow.png";
import { SiteFooter, SiteHeader } from "./components/site-chrome";

const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const benefits = [
  {
    n: "01",
    title: "The week on the wall",
    body: "Google Calendar and family events, large enough to read from across the kitchen.",
  },
  {
    n: "02",
    title: "Chores that get done",
    body: "Assign by person, check off on the glass—no extra app in anyone’s pocket.",
  },
  {
    n: "03",
    title: "Built for touch",
    body: "A wall calendar first. Fingers, not tiny taps. Kitchen display, not a phone.",
  },
  {
    n: "04",
    title: "One household view",
    body: "Schedules, lists, weather, and the day ahead—together, in one calm place.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <SiteHeader />

      <main className="flex flex-1 flex-col">
        <section className="relative overflow-hidden pb-8 pt-4">
          <div
            aria-hidden
            className="wall-grid pointer-events-none absolute inset-0 opacity-80"
          />
          <div
            aria-hidden
            className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-clay/70 blur-2xl"
          />
          <div
            aria-hidden
            className="absolute right-[8%] top-24 hidden h-40 w-40 rounded-[2rem] bg-sage/25 lg:block"
          />

          <div className="relative mx-auto grid w-full max-w-6xl items-start gap-10 px-6 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-5 lg:pt-10">
              <p className="inline-flex rounded-full bg-sage-deep px-3 py-1 text-[11px] font-semibold uppercase text-card">
                FamilyFlow · coming soon
              </p>
              <h1 className="mt-6 text-5xl font-bold leading-[1.08] sm:text-6xl lg:text-[4.4rem]">
                Hang the week
                <span className="mt-1 block text-terracotta">on the wall.</span>
              </h1>
              <p className="mt-6 max-w-md text-lg leading-8 text-muted">
                FamilyFlow is a touch-screen family calendar. Shared schedules,
                chores, lists, and weather—built for the kitchen, not another
                phone.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  className="inline-flex rounded-full bg-terracotta px-6 py-3 text-sm font-semibold text-white hover:opacity-90"
                  href="mailto:info@ashurose.com"
                >
                  Join the waitlist
                </a>
                <a
                  className="inline-flex rounded-full border border-line bg-card px-6 py-3 text-sm font-semibold hover:bg-sand"
                  href="mailto:support@ashurose.com"
                >
                  support@ashurose.com
                </a>
              </div>
            </div>

            <div className="relative lg:col-span-7 lg:min-h-[28rem]">
              <div
                aria-hidden
                className="absolute -bottom-6 left-6 right-16 top-16 rounded-[2.5rem] bg-sage-deep lg:left-10"
              />
              <div
                aria-hidden
                className="absolute -right-4 top-0 h-28 w-28 rounded-full bg-terracotta/80 lg:right-2"
              />
              <figure className="relative z-10 -rotate-2 overflow-hidden rounded-[2rem] border-[6px] border-card shadow-[0_30px_70px_rgba(42,36,28,0.22)] lg:ml-8 lg:mt-6">
                <div className="relative aspect-[16/10] w-full">
                  <Image
                    src={familyflow}
                    alt="FamilyFlow touch-screen family calendar showing week view, chores, weather, and clock"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 720px"
                    className="object-cover object-[center_20%]"
                  />
                </div>
              </figure>
              <p className="relative z-10 mt-8 ml-auto max-w-xs rotate-1 rounded-2xl bg-card px-4 py-3 text-sm leading-6 text-muted shadow-sm lg:mr-4">
                Week view, chores, weather, and the clock—meant to live where
                the family already gathers.
              </p>
            </div>
          </div>
        </section>

        <div
          aria-hidden
          className="grid grid-cols-7 border-y border-line bg-card text-center text-[11px] font-semibold uppercase text-muted"
        >
          {weekdays.map((day) => (
            <span
              key={day}
              className="border-r border-line py-3 last:border-r-0"
            >
              {day}
            </span>
          ))}
        </div>

        <section id="familyflow" className="mx-auto w-full max-w-6xl px-6 py-20">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="max-w-xl text-4xl font-bold leading-tight sm:text-5xl">
              Four things the household should never hunt for.
            </h2>
            <p className="max-w-sm text-muted">
              FamilyFlow puts the week where everyone can see it—and touch it.
            </p>
          </div>
          <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2">
            {benefits.map((item) => (
              <article key={item.n} className="bg-card p-8 sm:p-10">
                <p className="text-4xl font-bold text-clay">{item.n}</p>
                <h3 className="mt-4 text-2xl font-semibold">{item.title}</h3>
                <p className="mt-3 leading-7 text-muted">{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="relative overflow-hidden bg-sage-deep py-16 text-card">
          <p className="pointer-events-none absolute -bottom-8 left-0 text-[18vw] font-bold leading-none text-white/5">
            WALL
          </p>
          <div className="relative mx-auto max-w-6xl px-6">
            <p className="text-sm font-semibold uppercase text-clay">
              For the kitchen
            </p>
            <p className="mt-3 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
              Not another dashboard.
              <span className="text-clay"> A family wall.</span>
            </p>
          </div>
        </section>

        <section id="contact" className="mx-auto my-16 w-full max-w-6xl px-6">
          <div className="relative overflow-hidden rounded-[2rem] bg-terracotta px-8 py-14 text-white sm:px-14">
            <div
              aria-hidden
              className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-clay/40"
            />
            <h2 className="relative text-4xl font-bold sm:text-5xl">
              Write to the studio.
            </h2>
            <p className="relative mt-4 max-w-lg text-lg text-white/85">
              FamilyFlow waitlist or product questions—we read every note.
            </p>
            <div className="relative mt-8 flex flex-wrap gap-3">
              <a
                className="inline-flex rounded-full bg-card px-6 py-3 text-sm font-semibold text-foreground hover:bg-sand"
                href="mailto:info@ashurose.com"
              >
                info@ashurose.com
              </a>
              <a
                className="inline-flex rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
                href="mailto:support@ashurose.com"
              >
                support@ashurose.com
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
