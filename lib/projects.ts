export type Project = {
  slug: string;
  index: string;
  title: string;
  eyebrow: string;
  status: string;
  year: string;
  summary: string;
  short: string;
  stack: string[];
  repo?: string;
  repoLabel: string;
  privateRepo?: boolean;
  accent: "clay" | "sage" | "steel" | "sand" | "plum";
  architecture: string[];
  decisions: { title: string; text: string }[];
  proof: { label: string; value: string }[];
  context: string;
};

export const projects: Project[] = [
  {
    slug: "scrappy",
    index: "01",
    title: "Scrappy",
    eyebrow: "Municipal event data platform",
    status: "In development",
    year: "2026",
    summary:
      "A data pipeline for Portuguese municipal events: scrape heterogeneous public sources, normalize them into one contract, ingest them asynchronously, then expose the result through a .NET API, a Next.js backoffice and WhatsApp flows.",
    short:
      "Scraping, normalization and asynchronous ingestion for municipal event data, backed by .NET, MongoDB and Redis.",
    stack: [
      ".NET 10",
      "Next.js 16",
      "TypeScript",
      "MongoDB",
      "Redis",
      "BullMQ",
      "Playwright",
      "Crawlee",
      "Docker",
    ],
    repoLabel: "Private repository",
    privateRepo: true,
    accent: "sage",
    architecture: [
      "Public event sources",
      "Crawlee + Cheerio / Playwright",
      "Redis + BullMQ",
      "TypeScript ingestion worker",
      ".NET API",
      "MongoDB",
      "Next.js backoffice + WhatsApp",
    ],
    decisions: [
      {
        title: "Normalize before persistence",
        text: "Every source is translated into a shared RawEvent contract before entering the ingestion queue, reducing source-specific logic downstream.",
      },
      {
        title: "Queue the ingestion path",
        text: "Scraping and persistence are decoupled with Redis and BullMQ so a slow source or API call does not block the whole pipeline.",
      },
      {
        title: "Treat data quality as product logic",
        text: "The API handles territorial inference, deduplication, lifecycle rules and a QualityScore rather than leaving those concerns inside the scraper.",
      },
    ],
    proof: [
      { label: "API", value: ".NET 10" },
      { label: "Queue", value: "Redis / BullMQ" },
      { label: "Data", value: "MongoDB 8" },
      { label: "UI", value: "Next.js 16" },
    ],
    context:
      "The interesting part is not the scraper by itself; it is the boundary between unreliable external data and a predictable internal model. The project is structured around that boundary.",
  },
  {
    slug: "accessibility-validator",
    index: "02",
    title: "Accessibility Validator",
    eyebrow: "AMA / ARTE usability audit engine",
    status: "Private project",
    year: "2026",
    summary:
      "An automated auditing platform for Portuguese public websites, aligned with the AMA/ARTE Usability Seal. It combines browser automation, QualWeb, around 58 custom rules and an independent AccessMonitor-compatible score.",
    short:
      "A browser-driven accessibility and usability audit engine with deterministic rules, guarded interaction tests and report generation.",
    stack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Playwright",
      "QualWeb",
      "Ollama",
      "Vitest",
      "Docker",
    ],
    repoLabel: "Private repository",
    privateRepo: true,
    accent: "clay",
    architecture: [
      "URL / HTML input",
      "Playwright crawler",
      "Evaluation worker",
      "Passive + mutating rules",
      "QualWeb + assisted AI checks",
      "Aggregator + scoring",
      "JSON / PDF report",
    ],
    decisions: [
      {
        title: "Separate passive and mutating rules",
        text: "Read-only checks can run concurrently on a shared page, while interaction rules execute in isolated browser contexts so state cannot leak between checks.",
      },
      {
        title: "Block real submissions",
        text: "A dedicated route guard aborts state-changing requests from interaction rules, including POST/PUT/PATCH/DELETE and guarded same-origin fetch/XHR patterns.",
      },
      {
        title: "Use AI as a fallback, not the foundation",
        text: "Deterministic filters run first. When an assisted check is uncertain or the local model is unavailable, the system degrades to cantTell rather than inventing a pass/fail result.",
      },
    ],
    proof: [
      { label: "Rule set", value: "~58 custom checks" },
      { label: "Browser", value: "Playwright" },
      { label: "Scoring", value: "Selo + 0–10" },
      { label: "Output", value: "JSON + PDF" },
    ],
    context:
      "This project is primarily an engineering problem in correctness: interacting with arbitrary websites, isolating side effects, producing explainable outcomes and keeping the pipeline fast enough to use.",
  },
  {
    slug: "decozy",
    index: "03",
    title: "Decozy",
    eyebrow: "AI-assisted interior design MVP",
    status: "Public repository",
    year: "2026",
    summary:
      "A full-stack interior design platform that turns a room photo and a prompt into an asynchronous AI generation workflow, with projects, authentication, subscriptions and saved furniture suggestions around it.",
    short:
      "A full-stack AI image workflow with projects, authentication, subscription logic and asynchronous generation.",
    stack: [
      "Next.js",
      "TypeScript",
      "FastAPI",
      "Python 3.12",
      "PostgreSQL",
      "SQLAlchemy",
      "Alembic",
      "Stripe",
      "Google OAuth",
      "Docker",
    ],
    repo: "https://github.com/Goncas777/Decozy",
    repoLabel: "View public repository",
    accent: "sand",
    architecture: [
      "Next.js client",
      "FastAPI",
      "PostgreSQL",
      "Background task",
      "OpenAI image generation",
      "Polling",
      "Before / after result",
    ],
    decisions: [
      {
        title: "Do not block the request on generation",
        text: "The API creates a queued generation record, starts background work and returns immediately. The frontend polls for state transitions until the output is ready.",
      },
      {
        title: "Model auth and billing separately",
        text: "User identity, subscription state, project data and Stripe event idempotency are represented explicitly instead of being collapsed into one user table.",
      },
      {
        title: "Design the MVP with a production path",
        text: "Local Docker volumes and BackgroundTasks keep the MVP small, while the architecture documents a clear evolution toward object storage and a Redis-backed worker queue.",
      },
    ],
    proof: [
      { label: "Frontend", value: "Next.js" },
      { label: "Backend", value: "FastAPI" },
      { label: "Database", value: "PostgreSQL" },
      { label: "Payments", value: "Stripe" },
    ],
    context:
      "Decozy was developed as the final Web Programming project at ETIC Algarve. The focus was to make an AI feature behave like a product rather than a single API call.",
  },
  {
    slug: "medical-triage",
    index: "04",
    title: "AI Medical Triage",
    eyebrow: "Multi-agent triage backend",
    status: "Public repository",
    year: "2026",
    summary:
      "A FastAPI backend that simulates a preliminary triage workflow. CrewAI coordinates specialized roles for safety, diagnosis, medication and RAG validation, while deterministic questioning keeps the flow predictable and reduces unnecessary model calls.",
    short:
      "A safer multi-agent triage workflow with deterministic questioning, persistent sessions and containerized services.",
    stack: [
      "FastAPI",
      "Python 3.12",
      "CrewAI",
      "PostgreSQL",
      "SQLAlchemy",
      "Alembic",
      "Docker",
      "Nginx",
      "GitHub Actions",
    ],
    repo: "https://github.com/NelsonZarate/Ai-Medical-Triage-Assistant",
    repoLabel: "View public repository",
    accent: "steel",
    architecture: [
      "Patient input",
      "Deterministic questions",
      "Safety agent",
      "Doctor / RAG flow",
      "Medication stage",
      "FastAPI session state",
      "PostgreSQL",
    ],
    decisions: [
      {
        title: "Move repeated questioning out of the LLM",
        text: "Question selection became deterministic to avoid repeated prompts, cut token pressure and reduce failures caused by rate limits.",
      },
      {
        title: "Keep safety as an explicit stage",
        text: "Safety and RAG validation remain separate safeguards in the orchestration instead of being hidden inside one general-purpose prompt.",
      },
      {
        title: "Make local setup reproducible",
        text: "Docker Compose, Alembic, a Makefile and CI checks turn a multi-service prototype into something another developer can run and test consistently.",
      },
    ],
    proof: [
      { label: "API", value: "FastAPI" },
      { label: "Orchestration", value: "CrewAI" },
      { label: "Persistence", value: "PostgreSQL" },
      { label: "CI", value: "GitHub Actions" },
    ],
    context:
      "The strongest engineering decision in this project was reducing model responsibility where deterministic application logic was more reliable.",
  },
  {
    slug: "cstrader",
    index: "05",
    title: "CSTrader",
    eyebrow: "Virtual item marketplace MVP",
    status: "Public repository",
    year: "2025",
    summary:
      "A marketplace MVP for CS-style virtual items, with JWT authentication, wallet operations, user inventory, item listings, buy/sell flows and administrative endpoints over a FastAPI and PostgreSQL backend.",
    short:
      "A FastAPI marketplace MVP covering authentication, inventory, wallet operations and user-to-user skin trading.",
    stack: [
      "FastAPI",
      "Python",
      "PostgreSQL",
      "SQLAlchemy",
      "JWT",
      "Poetry",
      "Docker",
      "Makefile",
    ],
    repo: "https://github.com/NelsonZarate/CSTrader",
    repoLabel: "View public repository",
    accent: "plum",
    architecture: [
      "Client",
      "JWT auth",
      "FastAPI endpoints",
      "Marketplace rules",
      "SQLAlchemy",
      "PostgreSQL",
      "Admin + inventory flows",
    ],
    decisions: [
      {
        title: "Model the marketplace as domain flows",
        text: "Authentication, wallet transactions, inventory ownership and listings are separate concerns, which makes buy/sell operations easier to reason about.",
      },
      {
        title: "Automate setup for a team",
        text: "Make targets and Docker reduce the number of manual steps needed to initialize the database, seed data and run the API.",
      },
      {
        title: "Expose admin operations through the API",
        text: "Base skin management is represented as protected REST operations instead of a separate ad-hoc maintenance path.",
      },
    ],
    proof: [
      { label: "Backend", value: "FastAPI" },
      { label: "ORM", value: "SQLAlchemy" },
      { label: "Auth", value: "JWT" },
      { label: "Database", value: "PostgreSQL" },
    ],
    context:
      "CSTrader is a compact project, but it demonstrates the fundamentals of stateful product backends: ownership, authorization, money-like balances and transactional flows.",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
