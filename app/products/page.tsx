import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import familyflowWall from "../../public/familyflow-wall.png";
import { SiteFooter, SiteHeader } from "../components/site-chrome";

export const metadata: Metadata = {
  title: "Products",
  description:
    "AshurRose is a software solutions company. Products: FamilyFlow, chores and rewards for kids on a shared wall, and Hinterviewer, video resumes for trade schools.",
};

export default function ProductsPage() {
  return (
    <div className="flex min-h-full flex-1 flex-col">
      <SiteHeader />

      <main className="mx-auto w-full max-w-6xl flex-1 px-6 py-12">
        <p className="text-sm font-semibold uppercase text-sky">AshurRose</p>
        <h1 className="mt-2 text-4xl font-bold sm:text-5xl">Products</h1>
        <p className="mt-4 max-w-xl text-lg leading-8 text-muted">
          AshurRose is a software solutions company. FamilyFlow for the home;
          Hinterviewer for the trades.
        </p>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <article className="flex flex-col overflow-hidden rounded-[2rem] border border-line bg-card">
            <div className="relative aspect-[16/10] w-full bg-frost">
              <Image
                src={familyflowWall}
                alt="FamilyFlow wall showing kids’ chores beside the week’s schedule"
                fill
                sizes="(max-width: 1024px) 100vw, 560px"
                className="object-cover object-center"
              />
            </div>
            <div className="flex flex-1 flex-col p-8">
              <p className="text-xs font-semibold uppercase text-cta">
                Primary
              </p>
              <h2 className="mt-2 text-3xl font-bold">FamilyFlow</h2>
              <p className="mt-3 flex-1 leading-7 text-muted">
                FamilyFlow helps families organize kids’ chores and reward them
                when the work is done—on a shared wall everyone can see. The week
                hangs right beside it.
              </p>
              <div className="mt-6 flex flex-wrap gap-4 text-sm font-semibold">
                <Link
                  className="underline decoration-cta decoration-2 underline-offset-4 hover:text-cta"
                  href="/familyflow"
                >
                  View FamilyFlow
                </Link>
                <a
                  className="hover:text-cta"
                  href="mailto:support@ashurose.com"
                >
                  support@ashurose.com
                </a>
              </div>
            </div>
          </article>

          <article className="flex flex-col rounded-[2rem] border border-line bg-frost/60 p-8">
            <p className="text-[5rem] font-bold leading-none text-mist">HV</p>
            <h2 className="mt-6 text-3xl font-bold">Hinterviewer</h2>
            <p className="mt-3 flex-1 leading-7 text-muted">
              Video resumes for trade schools. Students show hands-on skill;
              employers see what a paper résumé cannot.
            </p>
            <a
              className="mt-6 inline-flex text-sm font-semibold underline decoration-cta decoration-2 underline-offset-4 hover:text-cta"
              href="https://hinterviewer.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              hinterviewer.com
            </a>
          </article>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
