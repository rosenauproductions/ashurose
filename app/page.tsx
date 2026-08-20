import Image from "next/image";
import familyflowAppearance from "../public/familyflow-appearance.png";
import familyflowHousehold from "../public/familyflow-household.png";
import familyflowSettings from "../public/familyflow-settings.png";
import familyflowWall from "../public/familyflow-wall.png";
import { SiteFooter, SiteHeader } from "./components/site-chrome";

const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const benefits = [
  {
    n: "01",
    title: "Chores and rewards",
    body: "Assign chores by person, check them off on the wall, and celebrate when the list is clear. Rewards sit where the kids already look.",
  },
  {
    n: "02",
    title: "Everyone’s schedule",
    body: "Google Calendar synced live. Multiple people, each with a color. Day, week, or month views—large enough to read from across the room.",
  },
  {
    n: "03",
    title: "Everything else the family needs",
    body: "Lists, weather, the clock, feeds—together on the same wall as the chores and the week.",
  },
  {
    n: "04",
    title: "Made for the wall",
    body: "Kiosk mode, large touch targets, a sleep schedule, and a kitchen-friendly display. Built for standing and glancing, not scrolling.",
  },
];

function WaitlistCta({ variant }: { variant: "light" | "on-cta" }) {
  const primary =
    variant === "light"
      ? "inline-flex rounded-full bg-cta px-6 py-3 text-sm font-semibold text-white hover:opacity-90"
      : "inline-flex rounded-full bg-card px-6 py-3 text-sm font-semibold text-foreground hover:bg-frost";
  const secondary =
    variant === "light"
      ? "inline-flex rounded-full border border-line bg-card px-6 py-3 text-sm font-semibold hover:bg-frost"
      : "inline-flex rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10";
  const note = variant === "light" ? "text-muted" : "text-white/85";
  const mail =
    variant === "light"
      ? "font-semibold text-foreground underline decoration-cta decoration-2 underline-offset-4 hover:text-cta"
      : "font-semibold text-white underline decoration-mist decoration-2 underline-offset-4 hover:text-mist";

  return (
    <div>
      <div className="flex flex-wrap gap-3">
        <a
          className={primary}
          href="mailto:info@ashurose.com?subject=FamilyFlow%20waitlist"
        >
          Join the waitlist
        </a>
        <a className={secondary} href="mailto:support@ashurose.com">
          support@ashurose.com
        </a>
      </div>
      <p className={`mt-3 text-sm ${note}`}>
        Waitlist:{" "}
        <a
          className={mail}
          href="mailto:info@ashurose.com?subject=FamilyFlow%20waitlist"
        >
          info@ashurose.com
        </a>
      </p>
    </div>
  );
}

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <SiteHeader />

      <main className="flex flex-1 flex-col">
        <section className="relative overflow-hidden pb-10 pt-4">
          <div
            aria-hidden
            className="wall-grid pointer-events-none absolute inset-0 opacity-80"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-mist/70 blur-2xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute right-[8%] top-24 hidden h-40 w-40 rounded-[2rem] bg-sky/25 lg:block"
          />

          <div className="relative mx-auto w-full max-w-6xl px-6">
            <p className="inline-flex rounded-full bg-sky-deep px-3 py-1 text-[11px] font-semibold uppercase text-card">
              FamilyFlow · coming soon
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-bold leading-[1.08] sm:text-6xl lg:text-[4.4rem]">
              Chores they finish.{" "}
              <span className="text-cta">Rewards they can see.</span>
            </h1>
            <p className="mt-4 text-xl font-medium text-sky-deep sm:text-2xl">
              Hang the week on the wall.
            </p>
          </div>

          <div className="relative mx-auto mt-10 w-full max-w-6xl px-6">
            <div className="relative">
              <div
                aria-hidden
                className="pointer-events-none absolute -bottom-5 left-8 right-10 top-10 rounded-[2.5rem] bg-sky-deep"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute -right-3 top-2 h-24 w-24 rounded-full bg-cta/80 sm:h-28 sm:w-28"
              />
              <figure className="relative z-10 overflow-hidden rounded-[2rem] border-[6px] border-card shadow-[0_30px_70px_rgba(28,36,48,0.16)]">
                <div className="relative aspect-[16/10] w-full">
                  <Image
                    src={familyflowWall}
                    alt="FamilyFlow wall showing kids’ chores, the week’s schedule, weather, and the time"
                    fill
                    priority
                    sizes="(max-width: 1152px) 100vw, 1152px"
                    className="object-cover object-center"
                  />
                </div>
              </figure>
            </div>
            <p className="relative z-10 mt-8 max-w-3xl text-xl font-semibold leading-8 sm:text-2xl sm:leading-9">
              Assign by kid. Check it off. Celebrate when the list is clear. The
              week hangs right beside it.
            </p>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-muted">
              FamilyFlow helps families organize kids’ chores and reward them
              when the work is done—on a shared wall everyone can see.
            </p>
            <div className="mt-8">
              <WaitlistCta variant="light" />
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

        <section className="relative overflow-hidden bg-sky-deep py-16 text-card sm:py-20">
          <p className="pointer-events-none absolute -bottom-8 left-0 text-[16vw] font-bold leading-none text-white/5">
            WALL
          </p>
          <div className="relative mx-auto max-w-6xl px-6">
            <p className="text-sm font-semibold uppercase text-mist">
              Visible without asking
            </p>
            <h2 className="mt-3 max-w-4xl text-4xl font-bold leading-tight sm:text-5xl">
              The chores you don’t have to nag about.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-mist">
              Assign by person, check off on the wall, and celebrate when the
              list is clear. Rewards live where the kids already look—not in
              another app they forget to open.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <p className="rounded-2xl bg-white/10 px-5 py-4 leading-7">
                <span className="block text-sm font-semibold uppercase text-mist">
                  Phone reminder
                </span>
                Remember → open the app → hope they check it.
              </p>
              <p className="rounded-2xl bg-card px-5 py-4 font-medium leading-7 text-foreground">
                <span className="block text-sm font-semibold uppercase text-sky">
                  FamilyFlow
                </span>
                Walk into the kitchen → see whose turn it is → check it off.
              </p>
            </div>
          </div>
        </section>

        <section id="familyflow" className="mx-auto w-full max-w-6xl px-6 py-20">
          <p className="text-sm font-semibold uppercase text-sky">
            On the wall
          </p>
          <h2 className="mt-2 max-w-xl text-4xl font-bold leading-tight sm:text-5xl">
            Chores first. Then the week. Then the glass.
          </h2>
          <figure className="mt-10 overflow-hidden rounded-[1.5rem] border border-line bg-card md:max-w-xl">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={familyflowHousehold}
                alt="FamilyFlow household people and color assignments"
                fill
                sizes="(max-width: 768px) 100vw, 576px"
                className="object-cover object-[center_58%]"
              />
            </div>
            <figcaption className="p-5">
              <p className="font-semibold">A color for each kid</p>
              <p className="mt-1 text-sm leading-6 text-muted">
                Assign chores by person so everyone can see whose work it is from
                across the room.
              </p>
            </figcaption>
          </figure>
          <div className="mt-10 grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2">
            {benefits.map((item) => (
              <article key={item.n} className="bg-card p-8 sm:p-10">
                <p className="text-4xl font-bold text-mist">{item.n}</p>
                <h3 className="mt-4 text-2xl font-semibold">{item.title}</h3>
                <p className="mt-3 leading-7 text-muted">{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-6 pb-20">
          <p className="text-sm font-semibold uppercase text-sky">
            Already on Google Calendar
          </p>
          <h2 className="mt-2 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
            Your calendars. Still on the wall.
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">
            FamilyFlow connects to the calendars your family already uses. Give
            everyone a color, choose which calendars appear, and see the week
            next to the chores—not in a separate app.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <figure className="overflow-hidden rounded-[1.5rem] border border-line bg-card">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={familyflowSettings}
                  alt="FamilyFlow settings for Google Calendar connections"
                  fill
                  sizes="(max-width: 768px) 100vw, 560px"
                  className="object-cover object-[center_38%]"
                />
              </div>
              <figcaption className="p-5">
                <p className="font-semibold">Choose which calendars appear</p>
                <p className="mt-1 text-sm leading-6 text-muted">
                  You are not starting a new calendar. You are putting the ones
                  you already keep onto the glass.
                </p>
              </figcaption>
            </figure>
            <figure className="overflow-hidden rounded-[1.5rem] border border-line bg-card">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={familyflowAppearance}
                  alt="FamilyFlow appearance options for calendar view, clock style, and light display"
                  fill
                  sizes="(max-width: 768px) 100vw, 560px"
                  className="object-cover object-[center_72%]"
                />
              </div>
              <figcaption className="p-5">
                <p className="font-semibold">Made for the wall</p>
                <p className="mt-1 text-sm leading-6 text-muted">
                  Two-week view, flip clock, and light mode—set once for a
                  kitchen display, not another iPad home screen.
                </p>
              </figcaption>
            </figure>
          </div>
        </section>

        <section id="contact" className="mx-auto mb-16 w-full max-w-6xl px-6">
          <div className="relative overflow-hidden rounded-[2rem] bg-cta px-8 py-14 text-white sm:px-14">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-mist/40"
            />
            <h2 className="relative text-4xl font-bold sm:text-5xl">
              Write to us.
            </h2>
            <p className="relative mt-4 max-w-lg text-lg text-white/85">
              FamilyFlow waitlist or product questions—we read every note.
            </p>
            <div className="relative mt-8">
              <WaitlistCta variant="on-cta" />
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
