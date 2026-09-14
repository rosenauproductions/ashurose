# Claude, start here

Open this folder: `/Users/christopherrosenau/Documents/GitHub/ashurrose` (extra **r** in the folder name). GitHub repo is `rosenauproductions/ashurose`. Live site: https://www.ashurose.com.

This is the **AshurRose marketing site**, not the FamilyFlow app. Brand: **AshurRose** (software solutions company). Domain is **ashurose.com** (one r). Do not title the public site Rosenau Productions or “studio.”

DNS stays at **GoDaddy**. Microsoft 365 email is on this domain. **Do not switch nameservers to Vercel.** Public emails: info@, support@, admin@. Never put chris.rosenau@ on the site.

FamilyFlow is the homepage product (chores + rewards first; wall calendar supports). Hinterviewer only on `/products` → hinterviewer.com. Waitlist is `mailto:info@ashurose.com`.

The FamilyFlow **app** already lives at https://familyflow.ashurose.com — repo `/Users/christopherrosenau/Documents/GitHub/family-wall-calendar`. Push to `main` deploys this marketing site on Vercel. Do not force-push.

---

@AGENTS.md

# AshurRose — Claude handover

Public marketing site for **AshurRose**, a software solutions company. The homepage sells **FamilyFlow** (chores and rewards for kids on a shared wall). **Hinterviewer** is a second product, listed only on `/products`.

Owner: Christopher Rosenau / Rosenau Productions (legal/ops only — not the public brand title).

This repo is **not** the FamilyFlow product app. Do not mix them up.

## Where it is

| What | Where |
|------|--------|
| Local git repo | `/Users/christopherrosenau/Documents/GitHub/ashurrose` (folder spelling: **ashurrose**, extra r) |
| GitHub | https://github.com/rosenauproductions/ashurose (repo name: **ashurose**, one r) |
| Production | https://www.ashurose.com · https://ashurose.com |
| Vercel project | `ashurose` on team **RosenauProductions** (`team_M281dwym4rgiMTX09vVUtovg`, Hobby) |
| FamilyFlow app | https://familyflow.ashurose.com — local `/Users/christopherrosenau/Documents/GitHub/family-wall-calendar` — GitHub `rosenauproductions/family-wall-calendar` |

Open **this** folder in Claude Code. No `.env` is required for the marketing site.

## Stack

- Next.js **16** App Router + React 19 + TypeScript + Tailwind CSS v4
- Font: **Libre Franklin** (`next/font/google`)
- Static marketing pages only — no database, no Auth.js, no API routes

Read Next.js docs under `node_modules/next/dist/docs/` before using Next APIs — this major is not the Next.js from older training data.

`AGENTS.md` is the Next.js-generated agent block. Leave it; `next dev` will recreate it if removed.

## Brand and copy rules

- Public name: **AshurRose**. Domain: **ashurose.com** (one r).
- Tagline posture: software solutions company. Footer copy: “A software solutions company.”
- **Do not** call it a studio. **Do not** use “Rosenau Productions” as the site title or header.
- FamilyFlow story order: **chores + rewards for kids first**; wall calendar and Google Calendar are supporting, not the lead.
- Homepage is FamilyFlow only. Hinterviewer belongs on `/products` and links out to https://hinterviewer.com/ — do not put Hinterviewer on `/`.
- Waitlist: `mailto:info@ashurose.com?subject=FamilyFlow%20waitlist` (component: `app/components/waitlist-cta.tsx`). There is no form backend.
- Public mailboxes on the site: **info@**, **support@**, **admin@**. Personal **chris.rosenau@** is M365 only — keep it off the public site.
- Current hero still says “FamilyFlow · coming soon” even though the product app is live on the subdomain. Do not silently flip that to a live login link unless the owner asks.

### Palette (live tokens in `app/globals.css`)

| Token | Hex | Use |
|-------|-----|-----|
| `--background` | `#F7FAFC` | Page mist background |
| `--foreground` | `#1C2430` | Body text |
| `--muted` | `#5C6778` | Secondary text |
| `--sky` | `#4A8BB8` | Accents / kickers |
| `--cta` | `#2B7BBF` | Buttons and emphasis |
| `--sky-deep` | `#3A6F96` | Dark sky bands |
| `--mist` | `#B7D4EA` | Soft sky wash (CSS name; not the page background) |
| `--frost` | `#EEF5FA` | Pale panels |
| `--card` | `#FFFFFF` | Cards |

Keep Libre Franklin. Keep the cool mist/sky look — do not warm the palette back toward a studio/gold site.

## DNS, email, and certificates (do not break M365)

Registrar and DNS: **GoDaddy**. Nameservers (verified): `ns03.domaincontrol.com` / `ns04.domaincontrol.com`.

**Do not switch nameservers to Vercel.** Microsoft 365 mail depends on GoDaddy DNS.

Verified records (Sep 2026):

| Record | Value |
|--------|--------|
| Apex `A` `@` | `64.29.17.1` (GoDaddy allows only one A on `@`) |
| `www` `CNAME` | `ashurose.com` (optional hygiene: `cname.vercel-dns.com` — apex A must stay) |
| `MX` | `ashurose-com.mail.protection.outlook.com` |
| `familyflow` | Vercel DNS (`*.vercel-dns-017.com`) → FamilyFlow app |

Mailboxes: info@, support@, admin@, plus personal chris.rosenau@ (not public).

If Firefox shows `SEC_ERROR_UNKNOWN_ISSUER`, that was **DNSFilter / NetAlerts** intercepting TLS — not a bad Vercel certificate. Check another network or disable the filter before “fixing” certs.

Vercel project `family-wall-calendar` owns `familyflow.ashurose.com`. This marketing project owns the apex / www site. Do not attach the product app domain to this repo.

## Routes and copy

| Route | File | Role |
|-------|------|------|
| `/` | `app/page.tsx` | FamilyFlow sales homepage |
| `/familyflow` | `app/familyflow/page.tsx` | Feature walkthrough |
| `/products` | `app/products/page.tsx` | FamilyFlow + Hinterviewer |
| Chrome | `app/components/site-chrome.tsx` | Header/footer, logo |
| Waitlist | `app/components/waitlist-cta.tsx` | mailto CTAs |
| Metadata / OG | `app/layout.tsx` | `metadataBase` https://ashurose.com |

Nav: Home · FamilyFlow · Products · Contact (`/#contact`).

## Images — real vs temp

**Brand (keep)**

- `public/ashurrose-logo.png` — wordmark used in header/footer
- `public/icon.png`, `app/icon.png`, `app/apple-icon.png`, `app/favicon.ico`, `public/favicon.ico` — AR monogram tab icon (mist crop so it reads at small sizes)

**Real FamilyFlow screenshots (keep until replaced with newer captures)**

- `public/familyflow-wall.png` — kitchen wall (also duplicated as unused `public/familyflow.png`)
- `public/familyflow-household.png` — people and colors
- `public/familyflow-settings.png` — Google Calendar / RSS settings
- `public/familyflow-appearance.png` — appearance / clock / view

Used on `/` and `/products`. Household, settings, and appearance also used on `/familyflow`.

**Temp illustrations — replace with real product shots** (`app/familyflow/page.tsx` only)

- `public/temp-chores.png` — generic checklist
- `public/temp-rewards.png` — generic star
- `public/temp-people.png` — generic colored dots
- `public/temp-wall-tablet.png` — generic wall tablet

**Leftover Next.js starter (unused)**

- `public/file.svg`, `globe.svg`, `window.svg`, `next.svg`, `vercel.svg`

## Run locally

```bash
cd /Users/christopherrosenau/Documents/GitHub/ashurrose
npm install
npm run dev
```

Then http://localhost:3000. No env file.

## Deploy

Push `main` to GitHub. Vercel auto-deploys this project.

```bash
git push origin main
```

Do not force-push `main`. Owner historically wants commit + push for this site when the work is meant to go live.

## Related: FamilyFlow app

Product code, kiosk wall, chores, Google Calendar, weather, and household data live in:

- Local: `/Users/christopherrosenau/Documents/GitHub/family-wall-calendar`
- GitHub: https://github.com/rosenauproductions/family-wall-calendar
- Live: https://familyflow.ashurose.com
- Handover: that repo’s `CLAUDE.md`

Marketing copy here; product behavior there. Screenshot updates for this site usually come from capturing the live wall / settings UI.

## Open next steps

1. Replace `temp-*.png` on `/familyflow` with real FamilyFlow screenshots (chores board, rewards, people, hung tablet/kiosk).
2. Optional DNS hygiene: point `www` CNAME at `cname.vercel-dns.com` instead of `ashurose.com`. Leave apex `A` at `64.29.17.1`. Do not touch nameservers.
3. Decide with the owner whether homepage “coming soon” / waitlist should stay, or whether to link https://familyflow.ashurose.com.
4. Remove unused starter SVGs and duplicate `public/familyflow.png` if cleaning assets.
5. GitHub repo description still says “studio” and homepage is `ashurose.vercel.app` — stale; update on GitHub if touching repo metadata.
6. FamilyFlow **subdomain is done** (app is live). Do not rebuild that on this marketing project.
