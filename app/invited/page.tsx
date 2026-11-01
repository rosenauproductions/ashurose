import type { Metadata } from "next";
import Image from "next/image";
import familyflowWall from "../../public/familyflow-wall.png";
import { SiteFooter, SiteHeader } from "../components/site-chrome";

/**
 * Landing page for families invited into the FamilyFlow early program.
 * Not linked from the nav and kept out of search — it's shared by link only.
 */
export const metadata: Metadata = {
  title: "You’re invited to FamilyFlow",
  description:
    "You’ve been invited to help shape FamilyFlow. It’s free for your family in exchange for honest feedback and your wish list.",
  robots: { index: false, follow: false },
};

const APP_URL = "https://familyflow.ashurose.com/login";
const SUPPORT = "mailto:support@ashurose.com?subject=FamilyFlow%20feedback";

function Step({ n, title, body }: { n: number; title: string; body: React.ReactNode }) {
  return (
    <li className="flex gap-4">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cta text-sm font-bold text-white">
        {n}
      </span>
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="mt-1 leading-7 text-muted">{body}</p>
      </div>
    </li>
  );
}

function Card({ kicker, title, children }: { kicker: string; title: string; children: React.ReactNode }) {
  return (
    <article className="rounded-[1.5rem] border border-line bg-card p-6 sm:p-8">
      <p className="text-sm font-semibold uppercase text-sky">{kicker}</p>
      <h3 className="mt-2 text-2xl font-bold leading-tight">{title}</h3>
      <div className="mt-3 space-y-3 leading-7 text-muted">{children}</div>
    </article>
  );
}

export default function InvitedPage() {
  return (
    <div className="flex min-h-full flex-1 flex-col">
      <SiteHeader />

      <main className="flex flex-1 flex-col">
        {/* Hero */}
        <section className="relative overflow-hidden pb-12 pt-4">
          <div aria-hidden className="wall-grid pointer-events-none absolute inset-0 opacity-80" />
          <div className="relative mx-auto grid w-full max-w-6xl items-center gap-10 px-6 lg:grid-cols-[1.1fr_1fr]">
            <div>
              <p className="inline-flex rounded-full bg-sky-deep px-3 py-1 text-[11px] font-semibold uppercase text-card">
                FamilyFlow · invited families
              </p>
              <h1 className="mt-6 text-5xl font-bold leading-[1.08] sm:text-6xl">
                You’re invited. <span className="text-cta">Help us build it.</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-muted">
                FamilyFlow puts your kids’ chores, rewards, and the family week on
                one shared screen. You’re one of a small group of families
                using it before it opens to everyone — and what you tell us
                decides what it becomes.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={APP_URL}
                  className="inline-flex rounded-full bg-cta px-6 py-3 text-sm font-semibold text-white hover:opacity-90"
                >
                  Open FamilyFlow
                </a>
                <a
                  href="#the-deal"
                  className="inline-flex rounded-full border border-line bg-card px-6 py-3 text-sm font-semibold hover:bg-frost"
                >
                  Read the deal first
                </a>
              </div>
            </div>
            <figure className="overflow-hidden rounded-[2rem] border-[6px] border-card shadow-[0_30px_70px_rgba(28,36,48,0.16)]">
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src={familyflowWall}
                  alt="FamilyFlow wall showing kids’ chores beside the week’s schedule, weather, and clock"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 520px"
                  className="object-cover object-center"
                />
              </div>
            </figure>
          </div>
        </section>

        {/* The deal */}
        <section id="the-deal" className="scroll-mt-6 bg-sky-deep py-16 text-white">
          <div className="mx-auto w-full max-w-4xl px-6">
            <p className="text-sm font-semibold uppercase text-mist">The deal</p>
            <h2 className="mt-2 text-4xl font-bold leading-tight sm:text-5xl">
              Free for your family. The price is your honesty.
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/90">
              Invited families get FamilyFlow — every feature, including
              Premium — at no cost. In return, we ask for two things:
            </p>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <div className="rounded-[1.5rem] bg-white/10 p-6">
                <p className="text-2xl font-bold">1. Don’t hold back.</p>
                <p className="mt-3 leading-7 text-white/90">
                  If something is confusing, slow, ugly, broken, or just
                  annoying, tell us — bluntly. Polite silence doesn’t help
                  anyone. “This is frustrating and here’s why” is the most
                  useful thing you can send.
                </p>
              </div>
              <div className="rounded-[1.5rem] bg-white/10 p-6">
                <p className="text-2xl font-bold">2. Send your wish list.</p>
                <p className="mt-3 leading-7 text-white/90">
                  Every time you catch yourself thinking “I wish it could…”,
                  write it down and send it. Big or small, practical or
                  far-fetched. Your wish list is our to-do list.
                </p>
              </div>
            </div>
            <p className="mt-8 text-lg leading-8 text-white/90">
              That’s it. Keep the feedback coming and FamilyFlow stays free
              for your family — now, and after FamilyFlow officially launches.
            </p>
          </div>
        </section>

        {/* What to expect */}
        <section className="py-16">
          <div className="mx-auto w-full max-w-6xl px-6">
            <p className="text-sm font-semibold uppercase text-sky">What to expect</p>
            <h2 className="mt-2 max-w-3xl text-4xl font-bold leading-tight">
              Early, real, and changing fast.
            </h2>
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              <Card kicker="It’s early" title="You’ll find rough edges">
                <p>
                  FamilyFlow works and families use it every day, but it isn’t
                  finished. You’ll hit bugs and things that don’t make sense
                  yet. That’s exactly what we want to hear about.
                </p>
              </Card>
              <Card kicker="It changes" title="Things will move around">
                <p>
                  We ship improvements often, many of them straight from
                  invited families. A screen may look different next week —
                  usually because someone asked for it.
                </p>
              </Card>
              <Card kicker="You’re heard" title="A real person reads it">
                <p>
                  Every report and idea is read by the person building
                  FamilyFlow. You’ll get replies right inside the app, and
                  you’ll see your ideas show up.
                </p>
              </Card>
              <Card kicker="Chores first" title="Built around the kids">
                <p>
                  Chores and rewards are the heart of it. Your calendar,
                  lists, and the weather sit beside them so the whole family
                  sees the day at a glance.
                </p>
              </Card>
              <Card kicker="Any screen" title="Wall, phone, or computer">
                <p>
                  Put it on a tablet in the kitchen, use it from your phone,
                  or open it on a computer. Kids sign in with a simple code —
                  no Google account needed.
                </p>
              </Card>
              <Card kicker="Your family’s data" title="Private by default">
                <p>
                  Your family’s information is yours. See the{" "}
                  <a
                    className="font-semibold text-foreground underline decoration-cta decoration-2 underline-offset-4 hover:text-cta"
                    href="https://familyflow.ashurose.com/privacy"
                  >
                    privacy page
                  </a>{" "}
                  for exactly what we keep and why.
                </p>
              </Card>
            </div>

            <div className="mt-10 rounded-[1.5rem] border-2 border-cta bg-frost p-6 sm:p-8">
              <p className="text-sm font-semibold uppercase text-cta">A note about apps</p>
              <h3 className="mt-2 text-2xl font-bold leading-tight">
                No app-store apps yet — same experience on the web.
              </h3>
              <div className="mt-3 max-w-3xl space-y-3 leading-7 text-muted">
                <p>
                  While FamilyFlow is in this early development stage, there are
                  no apps to download from the App Store or Google Play yet.
                  Instead, FamilyFlow runs in your web browser and gives you the
                  same experience the apps will — on a wall tablet, a phone, or a
                  computer.
                </p>
                <p>
                  <strong className="text-foreground">Tip:</strong> open FamilyFlow
                  on your phone or tablet and choose{" "}
                  <strong className="text-foreground">Add to Home Screen</strong>.
                  It gets its own icon and opens full-screen, just like an app.
                </p>
                <p>
                  When FamilyFlow goes live, we’ll release real apps — and your
                  family <strong className="text-foreground">stays free</strong>{" "}
                  after launch, too.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Getting started */}
        <section className="bg-frost py-16">
          <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase text-sky">Getting started</p>
              <h2 className="mt-2 text-4xl font-bold leading-tight">Up and running in minutes.</h2>
              <ol className="mt-8 space-y-6">
                <Step
                  n={1}
                  title="Sign in with Google"
                  body={
                    <>
                      Open{" "}
                      <a className="font-semibold text-cta hover:underline" href={APP_URL}>
                        familyflow.ashurose.com
                      </a>{" "}
                      and sign in with the Google account we invited. If you
                      were given an invite code, enter it when asked.
                    </>
                  }
                />
                <Step
                  n={2}
                  title="Set up your family"
                  body="Add the people in your house. A short setup guide walks you through it."
                />
                <Step
                  n={3}
                  title="Add a few chores"
                  body="Start small — a couple of chores per kid — and add rewards they can work toward."
                />
                <Step
                  n={4}
                  title="Put it where everyone sees it"
                  body="A tablet on the wall works best, but any screen in a shared spot will do."
                />
              </ol>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase text-sky">Sending feedback</p>
              <h2 className="mt-2 text-4xl font-bold leading-tight">Two easy ways.</h2>
              <div className="mt-8 space-y-5">
                <Card kicker="Best" title="Help & feedback in the app">
                  <p>
                    Go to <strong className="text-foreground">Settings → Help &amp; feedback</strong>{" "}
                    and pick bug, idea, or question. It sends along which
                    device you’re on, so you don’t have to explain your setup,
                    and our replies show up right there.
                  </p>
                </Card>
                <Card kicker="Anytime" title="Email us">
                  <p>
                    Write to{" "}
                    <a
                      className="font-semibold text-foreground underline decoration-cta decoration-2 underline-offset-4 hover:text-cta"
                      href={SUPPORT}
                    >
                      support@ashurose.com
                    </a>
                    . Screenshots and photos of the wall are always welcome.
                  </p>
                </Card>
                <div className="rounded-[1.5rem] border border-dashed border-sky p-6 leading-7 text-muted">
                  <p className="font-semibold text-foreground">What makes a great report</p>
                  <ul className="mt-2 list-disc space-y-1 pl-5">
                    <li>What you were trying to do</li>
                    <li>What happened instead</li>
                    <li>How it made you feel — “annoyed” is useful</li>
                    <li>A screenshot, if you can grab one</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="bg-cta py-14 text-white">
          <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-6 px-6 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-3xl font-bold">Thanks for helping build this.</h2>
              <p className="mt-2 text-white/90">
                Honest families make better software. We’re glad you’re here.
              </p>
            </div>
            <a
              href={APP_URL}
              className="inline-flex rounded-full bg-card px-6 py-3 text-sm font-semibold text-foreground hover:bg-frost"
            >
              Open FamilyFlow
            </a>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
