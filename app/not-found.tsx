import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found shell">
      <span>404</span>
      <h1>That project does not exist.</h1>
      <Link className="button button-primary" href="/">
        Back home
      </Link>
    </main>
  );
}
