import { cn } from "@/lib/utils";

interface PhoneSolidIconProps {
  className?: string;
}

export function PhoneSolidIcon({ className }: PhoneSolidIconProps) {
  return (
    <svg
      viewBox="0 0 20 20"
      aria-hidden="true"
      className={cn("h-[1.08em] w-[1.08em] translate-y-[0.35px] fill-current", className)}
    >
      <path d="M2 3.5A1.5 1.5 0 0 1 3.5 2h2.75a1.5 1.5 0 0 1 1.474 1.227l.514 2.576a1.5 1.5 0 0 1-.814 1.639l-1.26.63a11.04 11.04 0 0 0 5.764 5.764l.63-1.26a1.5 1.5 0 0 1 1.639-.814l2.576.514A1.5 1.5 0 0 1 18 13.75v2.75A1.5 1.5 0 0 1 16.5 18h-1C8.596 18 2 11.404 2 4.5v-1Z" />
    </svg>
  );
}
