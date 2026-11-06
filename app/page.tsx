import Image from "next/image";
import { SiteFooter, SiteHeader } from "./components/site-chrome";
import { WaitlistCta } from "./components/waitlist-cta";

/**
 * FamilyFlow sales homepage. Story order: chores + rewards first, then every
 * screen, jobs & money, Olive & printables, calendar, the full feature list,
 * plans, privacy, questions. Screenshots are the real app with a made-up demo
 * family (public/shots).
 */

const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

type Shot = { src: string; w: number; h: number; alt: string };

const shots = {
  wall: { src: "/shots/wall.webp", w: 2400, h: 1350, alt: "FamilyFlow on a kitchen wall screen: the family's week, each kid's chores, weather, school news and the time" },
  kid: { src: "/shots/phone-kid.webp", w: 780, h: 1688, alt: "Maya's phone: 2 of 5 chores done today and what's still to do" },
  parent: { src: "/shots/phone-parent.webp", w: 780, h: 1688, alt: "A parent's phone showing how far along each kid is today" },
  overview: { src: "/shots/desk.webp", w: 2000, h: 1250, alt: "FamilyFlow on a computer: how each kid is doing today, with chores done, homework, money and points" },
  desk: { src: "/shots/desk-calendar.webp", w: 2000, h: 1250, alt: "FamilyFlow Desktop: the family's week on a computer" },
  jobs: { src: "/shots/jobs.webp", w: 2000, h: 1250, alt: "Jobs and money: each kid's balance, a job waiting for approval, and the money history" },
  print: { src: "/shots/print-chart-page.webp", w: 1600, h: 1237, alt: "A printed chore chart for Maya with a picture for each chore and a circle for each day" },
  olive: { src: "/shots/olive.webp", w: 860, h: 1720, alt: "Olive, FamilyFlow's puppy helper, sharing news and cheering on a kid" },
} satisfies Record<string, Shot>;

function Screenshot({ shot, className = "", sizes, priority }: { shot: Shot; className?: string; sizes: string; priority?: boolean }) {
  return (
    <Image
      src={shot.src}
      alt={shot.alt}
      width={shot.w}
      height={shot.h}
      sizes={sizes}
      priority={priority}
      className={`h-auto w-full ${className}`}
    />
  );
}

function Phone({ shot }: { shot: Shot }) {
  return (
    <div className="mx-auto w-full max-w-[270px] rounded-[2.6rem] border-[10px] border-foreground bg-foreground shadow-[0_24px_50px_rgba(28,36,48,0.22)]">
      <div className="overflow-hidden rounded-[1.9rem] bg-card">
        <Screenshot shot={shot} sizes="270px" />
      </div>
    </div>
  );
}

const screens = [
  {
    name: "Phones for kids",
    body: "Their own chores, points and money. A simple code signs them in. No email, no social anything.",
  },
  {
    name: "Phones for parents",
    body: "Add a chore in the car, approve a job from work, get a reminder before practice.",
  },
  {
    name: "Desktop",
    body: "Plan the week on a computer with a keyboard and a big calendar. See when every chore comes up.",
  },
  {
    name: "Tablets and TV",
    body: "Apps for Android tablets and Samsung TVs. Pair with a QR code and it starts with the device.",
  },
  {
    name: "A kitchen screen, if you like",
    body: "Optional: a shared touch screen where everyone sees whose turn it is, with a parent PIN and a bedtime dim.",
  },
];

const rewards = [
  ["Chores by kid, or for anyone", "Give each chore to someone, or leave it up for grabs. Whoever checks it off first gets the credit."],
  ["Schedules that fit real life", "Every day, school days, every other week, once, or “any day this week.” Group them into routines like Morning or Bedtime."],
  ["Points and a rewards menu", "Chores earn points. Kids pick what they're saving for (screen time, a trip for ice cream) and ask for it. You approve."],
  ["A party when the list is clear", "Confetti, a glow and a happy puppy. Finishing feels like something."],
  ["Nag until done", "Miss one and it carries over, pinned to the top with reminders, until it's checked off. Optional points off for late days."],
  ["History you can trust", "See who did what and when, which chores slip, and print a weekly report."],
];

const money = [
  ["Paid jobs", "Extra work that pays, separate from everyday chores. Pay once, or per item, like $1 a bag of leaves."],
  ["You approve before it's paid", "Kids log the job on their phone. You get a ping and approve it in one tap."],
  ["Balances and payouts", "Each kid's balance, what's waiting, and a payout history. Call it dollars or something fun like “bucks.”"],
];

const helper = [
  ["Olive walks you through it", "Making your first chore? Olive steps through each box and explains what it does."],
  ["Asks and answers", "“How do I add a reward?” She knows the app, and takes you right to the spot."],
  ["Fixes problems", "Something not working? She runs a few checks, tries a fix, and opens a support ticket if she can't solve it."],
  ["Cheers the kids on", "A little “nice job!” when they finish, and the news about what's new."],
];

const printables = [
  ["Chore and job charts", "A cute chart for each kid with a picture for every chore. Pick what shows, hide what doesn't (brushing teeth, say)."],
  ["Scan it back in", "Snap a photo of the filled-in chart with your phone. FamilyFlow checks everything off for you."],
  ["Homework planner and lists", "A weekly homework page for each kid, and grocery or packing lists with room to write."],
];

const featureGroups: Array<{ title: string; items: string[] }> = [
  {
    title: "Chores & rewards",
    items: [
      "Chores by kid or for anyone",
      "Daily, certain days, every other week, once, any day this week",
      "Routines (chore groups)",
      "Points and a rewards menu kids ask from",
      "Celebrations when the list is clear",
      "Nag until done, with optional late fines",
      "Chore history and printable reports",
    ],
  },
  {
    title: "Jobs & money",
    items: ["Paid jobs, once or per item", "Kids log jobs, parents approve", "Balances, payouts and history", "Your own name for money"],
  },
  {
    title: "Calendar",
    items: [
      "Google Calendar, synced live",
      "Choose which calendars show",
      "FamilyFlow's own calendar with who it's for",
      "Repeating events and phone reminders",
      "Day, week, two-week, month and agenda views",
    ],
  },
  {
    title: "Homework & lists",
    items: ["Assignments and step-by-step series", "Subjects with colors and icons", "Shared grocery and to-do lists", "Kids can add to lists"],
  },
  {
    title: "Every screen",
    items: [
      "Parent and kid phone apps",
      "Desktop for planning",
      "Android tablet and Samsung TV apps",
      "Changes show everywhere in seconds",
      "Optional shared kitchen screen with kiosk mode",
      "Parent PIN lock on shared screens",
    ],
  },
  {
    title: "Built-in helper & paper charts",
    items: [
      "Guided tours, field by field",
      "Answers questions and troubleshoots",
      "Printable chore, job, homework and list pages",
      "Scan a filled-in chart to check it off",
      "Weather, clock and school news",
    ],
  },
];

const plans = [
  {
    name: "Standard",
    monthly: "$4.99",
    yearly: "$49.99",
    blurb: "For smaller families getting organized.",
    items: ["Up to 4 people", "Chores, points and rewards", "Calendar with Google sync", "Lists and weather", "A built-in helper and printable chore charts", "Phones, tablets, computers and TV"],
  },
  {
    name: "Premium",
    monthly: "$7.99",
    yearly: "$79.99",
    blurb: "Everything, for the whole crew.",
    items: ["Everything in Standard", "Unlimited people", "Jobs, money and payouts", "Homework", "Late fines and money reports"],
    featured: true,
  },
];

const faqs = [
  ["Do I need special hardware?", "No. FamilyFlow works on the phones, tablets and computers you already have. A shared screen in the kitchen is an optional extra; any tablet or touch screen will do."],
  ["Do my kids need their own phones or email?", "No email, ever. Kids sign in with a simple code on any phone, tablet or computer, or use a shared family device."],
  ["Do I have to use Google Calendar?", "No. FamilyFlow has its own family calendar. If you already use Google, connect it and pick which calendars show."],
  ["Who can see our family's information?", "Only your family. Google sign-in keys are encrypted, and our support team can't look at your family unless a parent says yes."],
];

const kicker = "text-sm font-semibold uppercase text-sky";
const h2 = "mt-2 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl";
const lede = "mt-5 max-w-2xl text-lg leading-8 text-muted";

function Points({ items, tone = "light" }: { items: string[][]; tone?: "light" | "dark" }) {
  return (
    <ul className="mt-8 grid gap-5 sm:grid-cols-2">
      {items.map(([t, b]) => (
        <li key={t} className={tone === "dark" ? "rounded-2xl bg-white/10 p-5" : "rounded-2xl border border-line bg-card p-5"}>
          <p className="font-semibold">{t}</p>
          <p className={`mt-1 leading-7 ${tone === "dark" ? "text-mist" : "text-muted"}`}>{b}</p>
        </li>
      ))}
    </ul>
  );
}

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <SiteHeader />

      <main className="flex flex-1 flex-col">
        {/* Hero */}
        <section className="relative overflow-hidden pb-10 pt-4">
          <div aria-hidden className="wall-grid pointer-events-none absolute inset-0 opacity-80" />
          <div aria-hidden className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-mist/70 blur-2xl" />
          <div aria-hidden className="pointer-events-none absolute right-[8%] top-24 hidden h-40 w-40 rounded-[2rem] bg-sky/25 lg:block" />

          <div className="relative mx-auto w-full max-w-6xl px-6">
            <p className="inline-flex rounded-full bg-sky-deep px-3 py-1 text-[11px] font-semibold uppercase text-card">FamilyFlow · coming soon</p>
            <h1 className="mt-6 max-w-4xl text-5xl font-bold leading-[1.08] sm:text-6xl lg:text-[4.4rem]">
              Chores they finish. <span className="text-cta">Rewards they can see.</span>
            </h1>
            <p className="mt-4 max-w-2xl text-xl font-medium text-sky-deep sm:text-2xl">
              One family hub on every phone, tablet and computer. Chores, rewards, money, homework and the week, all in one place.
            </p>
            <div className="mt-8">
              <WaitlistCta variant="light" />
            </div>
          </div>

          <div className="relative mx-auto mt-12 w-full max-w-6xl px-6">
            <div className="relative">
              <div aria-hidden className="pointer-events-none absolute -bottom-5 left-8 right-10 top-10 rounded-[2.5rem] bg-sky-deep" />
              <div aria-hidden className="pointer-events-none absolute -right-3 top-2 h-24 w-24 rounded-full bg-cta/80 sm:h-28 sm:w-28" />
              <figure className="relative z-10 overflow-hidden rounded-[2rem] border-[6px] border-card bg-card shadow-[0_30px_70px_rgba(28,36,48,0.16)] lg:mr-40">
                <Screenshot shot={shots.overview} priority sizes="(max-width: 1152px) 100vw, 960px" />
              </figure>
              <div className="relative z-20 -mt-24 ml-auto w-40 sm:-mt-40 sm:w-52 lg:absolute lg:-bottom-10 lg:right-0 lg:mt-0 lg:w-60">
                <Phone shot={shots.kid} />
              </div>
            </div>
          </div>
        </section>

        <div aria-hidden className="grid grid-cols-7 border-y border-line bg-card text-center text-[11px] font-semibold uppercase text-muted">
          {weekdays.map((day) => (
            <span key={day} className="border-r border-line py-3 last:border-r-0">
              {day}
            </span>
          ))}
        </div>

        {/* 1. Chores & rewards */}
        <section id="chores" className="mx-auto w-full max-w-6xl px-6 py-20">
          <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1fr)_300px]">
            <div>
              <p className={kicker}>Chores & rewards</p>
              <h2 className={h2}>The chores you don’t have to nag about.</h2>
              <p className={lede}>
                Everyone can see whose turn it is. Kids check it off, earn points, and save up for rewards you choose. You stop being the reminder.
              </p>
              <Points items={rewards} />
            </div>
            <div className="lg:sticky lg:top-8">
              <Phone shot={shots.parent} />
              <p className="mt-4 text-center text-sm text-muted">A parent’s phone: how each kid is doing today.</p>
            </div>
          </div>
        </section>

        {/* 2. Every screen */}
        <section id="screens" className="relative overflow-hidden bg-sky-deep py-20 text-card">
          <p className="pointer-events-none absolute -bottom-8 left-0 text-[16vw] font-bold leading-none text-white/5">EVERYWHERE</p>
          <div className="relative mx-auto max-w-6xl px-6">
            <p className="text-sm font-semibold uppercase text-mist">On every screen you already have</p>
            <h2 className="mt-3 max-w-4xl text-4xl font-bold leading-tight sm:text-5xl">Change it anywhere. Every screen updates.</h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-mist">
              Phone apps for parents and kids, Desktop for planning the week, and tablet and TV apps. Want a shared screen in the kitchen? That works too.
            </p>
            <div className="mt-10 grid items-start gap-6 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)]">
              <figure>
                <div className="overflow-hidden rounded-[1.5rem] border-4 border-white/20 bg-card">
                  <Screenshot shot={shots.desk} sizes="(max-width: 1024px) 100vw, 640px" />
                </div>
                <figcaption className="mt-3 text-sm text-mist">Desktop: plan the week on a computer.</figcaption>
              </figure>
              <figure>
                <div className="overflow-hidden rounded-[1.5rem] border-4 border-white/20 bg-card">
                  <Screenshot shot={shots.wall} sizes="(max-width: 1024px) 100vw, 520px" />
                </div>
                <figcaption className="mt-3 text-sm text-mist">Optional: a shared screen in the kitchen.</figcaption>
              </figure>
            </div>
            <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {screens.map((s) => (
                <li key={s.name} className="rounded-2xl bg-white/10 p-5">
                  <p className="font-semibold">{s.name}</p>
                  <p className="mt-1 text-sm leading-6 text-mist">{s.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 3. Jobs & money */}
        <section id="money" className="mx-auto w-full max-w-6xl px-6 py-20">
          <p className={kicker}>Jobs & money</p>
          <h2 className={h2}>Extra work, real pay, no IOUs.</h2>
          <p className={lede}>
            Chores are what everyone does. Jobs are extra and pay money. FamilyFlow keeps track of who did what, what they’ve earned, and what you’ve paid out.
          </p>
          <figure className="mt-10 overflow-hidden rounded-[1.5rem] border border-line bg-card shadow-[0_20px_50px_rgba(28,36,48,0.08)]">
            <Screenshot shot={shots.jobs} sizes="(max-width: 1152px) 100vw, 1152px" />
          </figure>
          <ul className="mt-8 grid gap-5 md:grid-cols-3">
            {money.map(([t, b]) => (
              <li key={t} className="rounded-2xl border border-line bg-card p-5">
                <p className="font-semibold">{t}</p>
                <p className="mt-1 leading-7 text-muted">{b}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* 4. Built-in helper (Olive) & paper chore charts */}
        <section id="olive" className="bg-frost py-20">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-[300px_minmax(0,1fr)]">
            <Phone shot={shots.olive} />
            <div>
              <p className={kicker}>A built-in helper</p>
              <h2 className={h2}>A friendly helper who knows the app.</h2>
              <p className={lede}>Olive is FamilyFlow’s puppy. She shows you around, answers questions and helps when something isn’t right.</p>
              <Points items={helper} />
            </div>
          </div>
          <div className="mx-auto mt-20 grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
            <div>
              <p className={kicker}>Paper chore charts</p>
              <h2 className={h2}>Paper on the fridge, still in the app.</h2>
              <p className={lede}>Some kids love a chart they can mark with a crayon. Print one, and FamilyFlow can read it back.</p>
              <Points items={printables} />
            </div>
            <figure className="overflow-hidden rounded-[1.5rem] border border-line bg-card shadow-[0_20px_50px_rgba(28,36,48,0.08)]">
              <Screenshot shot={shots.print} sizes="(max-width: 1024px) 100vw, 600px" />
            </figure>
          </div>
        </section>

        {/* 5. Calendar */}
        <section id="calendar" className="mx-auto w-full max-w-6xl px-6 py-20">
          <p className={kicker}>The week, too</p>
          <h2 className={h2}>Your calendar, next to the chores.</h2>
          <p className={lede}>
            Connect the Google calendars you already keep, or use FamilyFlow’s own. Give everyone a color, and phones get a reminder before practice.
          </p>
        </section>

        {/* Full feature list */}
        <section id="features" className="mx-auto w-full max-w-6xl px-6 pb-20">
          <div className="rounded-[2rem] border border-line bg-card p-8 sm:p-12">
            <p className={kicker}>Everything in FamilyFlow</p>
            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">The full list.</h2>
            <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {featureGroups.map((g) => (
                <div key={g.title}>
                  <h3 className="text-lg font-semibold">{g.title}</h3>
                  <ul className="mt-3 space-y-2">
                    {g.items.map((it) => (
                      <li key={it} className="flex gap-2 leading-6 text-muted">
                        <span aria-hidden className="mt-[3px] text-cta">
                          ✓
                        </span>
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Plans */}
        <section id="pricing" className="mx-auto w-full max-w-6xl px-6 pb-20">
          <p className={kicker}>Plans</p>
          <h2 className={h2}>Simple pricing. Try it free.</h2>
          <p className={lede}>Every family starts with a 15-day free trial of everything. Save about two months by paying yearly.</p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {plans.map((p) => (
              <article
                key={p.name}
                className={`relative rounded-[1.75rem] p-8 sm:p-10 ${p.featured ? "bg-foreground text-card shadow-[0_24px_60px_rgba(28,36,48,0.2)]" : "border border-line bg-card"}`}
              >
                {p.featured ? (
                  <span className="absolute right-6 top-6 rounded-full bg-cta px-3 py-1 text-xs font-semibold uppercase text-white">Most families</span>
                ) : null}
                <h3 className="text-2xl font-semibold">{p.name}</h3>
                <p className={`mt-1 ${p.featured ? "text-mist" : "text-muted"}`}>{p.blurb}</p>
                <p className="mt-6">
                  <span className="text-5xl font-bold">{p.monthly}</span>
                  <span className={p.featured ? "text-mist" : "text-muted"}> / month</span>
                </p>
                <p className={`mt-1 text-sm ${p.featured ? "text-mist" : "text-muted"}`}>or {p.yearly} a year</p>
                <ul className="mt-6 space-y-2">
                  {p.items.map((it) => (
                    <li key={it} className="flex gap-2 leading-6">
                      <span aria-hidden className={p.featured ? "text-mist" : "text-cta"}>
                        ✓
                      </span>
                      {it}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* Privacy + FAQ */}
        <section id="questions" className="mx-auto w-full max-w-6xl px-6 pb-20">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
            <div>
              <p className={kicker}>Private by design</p>
              <h2 className={h2}>Your family’s stuff stays your family’s.</h2>
              <p className={lede}>
                No ads, and we don’t sell data. Google sign-in keys are encrypted. Our support team can’t look at your family unless a parent gives permission, and you can download or delete everything any time.
              </p>
              <p className="mt-6">
                <a className="text-sm font-semibold text-cta underline decoration-cta decoration-2 underline-offset-4 hover:opacity-80" href="https://familyflow.ashurose.com/privacy">
                  Read the Privacy & Security page
                </a>
              </p>
            </div>
            <dl className="divide-y divide-line rounded-[1.5rem] border border-line bg-card">
              {faqs.map(([q, a]) => (
                <div key={q} className="p-6">
                  <dt className="font-semibold">{q}</dt>
                  <dd className="mt-2 leading-7 text-muted">{a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section id="contact" className="mx-auto mb-16 w-full max-w-6xl px-6">
          <div className="relative overflow-hidden rounded-[2rem] bg-cta px-8 py-14 text-white sm:px-14">
            <div aria-hidden className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-mist/40" />
            <h2 className="relative text-4xl font-bold sm:text-5xl">Be one of the first families.</h2>
            <p className="relative mt-4 max-w-lg text-lg text-white/85">Join the waitlist, or write to us with questions. We read every note.</p>
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
