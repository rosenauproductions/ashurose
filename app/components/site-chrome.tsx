import Image from "next/image";
import Link from "next/link";
import logo from "../../public/ashurrose-logo.png";

export function SiteHeader() {
  return (
    <header className="relative z-20 mx-auto flex w-full max-w-6xl items-center justify-between px-6 pt-6 pb-4">
      <Link href="/" className="flex items-center rounded-xl bg-white px-2 py-1 shadow-sm" aria-label="AshurRose home">
        <Image
          src={logo}
          alt="AshurRose"
          className="h-10 w-auto"
          sizes="80px"
        />
      </Link>
      <nav className="flex items-center gap-5 text-sm font-medium text-muted sm:gap-7">
        <Link className="hover:text-foreground" href="/#familyflow">
          FamilyFlow
        </Link>
        <Link className="hover:text-foreground" href="/products">
          Products
        </Link>
        <Link className="hover:text-foreground" href="/#contact">
          Contact
        </Link>
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-6 py-6">
        <Link href="/" className="flex items-center gap-3" aria-label="AshurRose">
          <span className="rounded-lg bg-white px-1.5 py-0.5 shadow-sm">
            <Image src={logo} alt="" className="h-7 w-auto" sizes="56px" />
          </span>
          <span className="text-sm text-muted">
            © {new Date().getFullYear()} AshurRose
          </span>
        </Link>
        <a
          className="text-sm text-muted hover:text-foreground"
          href="mailto:admin@ashurose.com"
        >
          admin@ashurose.com
        </a>
      </div>
    </footer>
  );
}
