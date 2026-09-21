export function ArrowIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M5 19L19 5M9 5H19V15" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}
