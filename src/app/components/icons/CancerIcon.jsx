export default function CancerIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10 12a4 4 0 1 0-4-4" />
      <path d="M14 12a4 4 0 1 1 4-4" />
      <circle cx="10" cy="16" r="2" />
      <circle cx="14" cy="16" r="2" />
    </svg>
  );
}
