export default function TaurusIcon({ className }) {
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
      <circle cx="12" cy="14" r="8" />
      <line x1="6" y1="2" x2="6" y2="6" />
      <line x1="18" y1="2" x2="18" y2="6" />
      <line x1="6" y1="6" x2="18" y2="6" />
    </svg>
  );
}
