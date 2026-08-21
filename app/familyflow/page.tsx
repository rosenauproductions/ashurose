import type { Metadata } from "next";
import Image, { type StaticImageData } from "next/image";
import familyflowAppearance from "../../public/familyflow-appearance.png";
import familyflowHousehold from "../../public/familyflow-household.png";
import familyflowSettings from "../../public/familyflow-settings.png";
import familyflowWall from "../../public/familyflow-wall.png";
import tempChores from "../../public/temp-chores.png";
import tempPeople from "../../public/temp-people.png";
import tempRewards from "../../public/temp-rewards.png";
import tempWallTablet from "../../public/temp-wall-tablet.png";
import { SiteFooter, SiteHeader } from "../components/site-chrome";
import { WaitlistCta } from "../components/waitlist-cta";

export const metadata: Metadata = {
  title: "FamilyFlow",
  description:
    "FamilyFlow helps families organize kids’ chores and reward them on a shared wall—with the week, lists, and weather beside it.",
};

function Feature({
  kicker,
  title,
  body,
  image,
  alt,
  crop,
  reverse,
}: {
  kicker: string;
  title: string;
  body: string;
  image: StaticImageData;
  alt: string;
  crop?: string;
  reverse?: boolean;
}) {
  return (
    <article
      className={`grid items-center gap-10 lg:grid-cols-2 ${
        reverse ? "lg:[&>figure]:order-first" : ""
      }`}
    >
      <div>
        <p className="text-sm font-semibold uppercase text-sky">{kicker}</p>
        <h2 className="mt-2 text-3xl font-bold leading-tight sm:text-4xl">
          {title}
        </h2>
        <p className="mt-4 text-lg leading-8 text-muted">{body}</p>
      </div>
      <figure className="overflow-hidden rounded-[1.5rem] border border-line bg-card">
        <div className="relative aspect-[4/3] w-full">
          <Image
            src={image}
            alt={alt}
            fill
            sizes="(max-width: 1024px) 100vw, 560px"
            className={`object-cover ${crop ?? "object-center"}`}
          />
        </div>
      </figure>
    </article>
  );
}

export default function FamilyFlowPage() {
  return (
    <div className="flex min-h-full flex-1 flex-col">
      <SiteHeader />

      <main className="flex flex-1 flex-col">
        <section className="relative overflow-hidden pb-10 pt-4">
          <div
            aria-hidden
            className="wall-grid pointer-events-none absolute inset-0 opacity-80"
          />
          <div className="relative mx-auto w-full max-w-6xl px-6">
            <p className="inline-flex rounded-full bg-sky-deep px-3 py-1 text-[11px] font-semibold uppercase text-card">
              FamilyFlow · coming soon
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-bold leading-[1.08] sm:text-6xl">
              Chores they finish.{" "}
              <span className="text-cta">Rewards they can see.</span>
            </h1>
            <p className="mt-4 max-w-2xl text-xl font-medium text-sky-deep sm:text-2xl">
              On a shared wall in the kitchen—not another app they forget to
              open.
            </p>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
              FamilyFlow helps families organize kids’ chores and reward them
              when the work is done. The week hangs beside it: Google Calendar,
              lists, weather, and the time, on one piece of glass.
            </p>
          </div>

          <div className="relative mx-auto mt-10 w-full max-w-6xl px-6">
            <div className="relative">
              <div
                aria-hidden
                className="pointer-events-none absolute -bottom-5 left-8 right-10 top-10 rounded-[2.5rem] bg-sky-deep"
              />
              <figure className="relative z-10 overflow-hidden rounded-[2rem] border-[6px] border-card shadow-[0_30px_70px_rgba(28,36,48,0.16)]">
                <div className="relative aspect-[16/10] w-full">
                  <Image
                    src={familyflowWall}
                    alt="FamilyFlow wall showing kids’ chores beside the week’s schedule, weather, and clock"
                    fill
                    priority
                    sizes="(max-width: 1152px) 100vw, 1152px"
                    className="object-cover object-center"
                  />
                </div>
              </figure>
            </div>
            <p className="mt-8 max-w-3xl text-xl font-semibold leading-8 sm:text-2xl">
              Assign by kid. Check it off on the glass. Celebrate when the list
              is clear.
            </p>
          </div>
        </section>

        <div className="mx-auto w-full max-w-6xl space-y-24 px-6 py-20">
          <Feature
            kicker="Chores"
            title="Assigned by kid. Checked off on the wall."
            body="Give each chore a person and the days it is due. Kids tap the wall to mark it done—big targets, no hunting through a phone. When a row is finished, the wall can hide it, glow, and put a party hat on the name so the whole kitchen can see who wrapped up."
            image={tempChores}
            alt="Illustration of a chore checklist with checkmarks"
          />
          <Feature
            reverse
            kicker="Rewards"
            title="A celebration when the work is done."
            body="Turn on a reward for finishing the day’s chores: confetti, a golden glow, or a piñata. Parents write what the reward actually is—an allowance, a sleepover, extra screen time—and can set it per child. The popup lives on the same glass they just checked, so the prize is visible, not buried in a parent’s phone."
            image={tempRewards}
            alt="Illustration of a reward star"
          />
          <Feature
            kicker="People"
            title="A color for every child."
            body="Each person in the household gets a color. Chores, calendars, and names share it, so from across the room you can tell whose soccer practice and whose dishwasher night are on the wall."
            image={familyflowHousehold}
            alt="FamilyFlow household people and color assignments"
            crop="object-[center_58%]"
          />
          <Feature
            reverse
            kicker="Google Calendar"
            title="The calendars you already keep."
            body="FamilyFlow syncs the Google Calendars your family already uses—read, add, and edit from the wall. Choose which calendars appear. You are not maintaining a second family calendar. Day, week, two-week, month, and agenda views stay large enough to read while you stand there."
            image={familyflowSettings}
            alt="FamilyFlow settings for Google Calendar connections"
            crop="object-[center_38%]"
          />
          <Feature
            kicker="Household extras"
            title="Lists, weather, the clock, a feed."
            body="Shared lists sit next to the chores. Weather comes from the household location. A flip clock (or a quieter one) keeps the time on the glass. If you want a verse or a news feed, add an RSS widget at the top of the wall."
            image={familyflowAppearance}
            alt="FamilyFlow appearance options for calendar view, clock style, and light display"
            crop="object-[center_72%]"
          />
          <Feature
            reverse
            kicker="The display"
            title="Built to hang there all day."
            body="Kiosk and fullscreen modes, large touch targets, and a sleep schedule so the panel can go dark overnight. It is meant for a kitchen wall or a tablet on a stand—not for scrolling in a pocket."
            image={tempWallTablet}
            alt="Illustration of a wall tablet display"
          />
          <Feature
            kicker="One household"
            title="Everyone sees the same wall."
            body="Invite the rest of the family into one household so kids, parents, and a phone in a backpack are looking at the same chores and the same week. On a phone, FamilyFlow switches to a stacked list so you can check chores when you are not standing at the glass. Optional notifications ping when chores finish and before calendar events."
            image={tempPeople}
            alt="Illustration of household people as colored dots"
          />
        </div>

        <section id="waitlist" className="mx-auto mb-16 w-full max-w-6xl px-6">
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
