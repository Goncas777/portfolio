import Link from "next/link";
import { ArrowIcon } from "./ArrowIcon";

export function Header() {
  return (
    <header className="site-header">
      <div className="header-inner shell">
        <Link className="brand" href="/" aria-label="Gonçalo Vieira — home">
          <span className="brand-mark">GV</span>
          <span className="brand-copy">
            <strong>Gonçalo Vieira</strong>
            <span>Software developer</span>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          <Link href="/#work">Work</Link>
          <Link href="/#about">About</Link>
          <Link href="/#stack">Stack</Link>
          <a
            className="nav-github"
            href="https://github.com/Goncas777"
            target="_blank"
            rel="noreferrer"
          >
            GitHub <ArrowIcon size={15} />
          </a>
        </nav>
      </div>
    </header>
  );
}
