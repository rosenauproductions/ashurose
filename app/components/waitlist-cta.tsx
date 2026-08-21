export function WaitlistCta({ variant }: { variant: "light" | "on-cta" }) {
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
