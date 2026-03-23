import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  variant?: "dark" | "light" | "orange";
  size?: "sm" | "md" | "lg";
}

export function Logo({ className, variant = "dark", size = "md" }: LogoProps) {
  const textColors = {
    dark: "text-black",
    light: "text-white",
    orange: "text-brand",
  };

  const sizes = {
    sm: "text-[1.35rem]",
    md: "text-[1.55rem]",
    lg: "text-[1.9rem]",
  };

  return (
    <div className={cn("flex items-center leading-none", className)}>
      <span className={cn("font-display font-extrabold tracking-[-0.03em]", sizes[size], textColors[variant])}>
        Pensulacurata
        <span className="text-brand">.</span>
      </span>
    </div>
  );
}

export function LogoMark({ className }: { className?: string }) {
  return (
    <div className={cn("w-12 h-12 rounded-xl bg-brand flex items-center justify-center", className)}>
      <span className="text-white font-display font-extrabold text-xl tracking-tight">
        P
        <span className="text-white/90">.</span>
      </span>
    </div>
  );
}
