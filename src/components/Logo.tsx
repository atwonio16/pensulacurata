import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  variant?: "dark" | "light" | "orange";
  size?: "sm" | "md" | "lg";
}

export function Logo({ className, variant = "dark", size = "md" }: LogoProps) {
  const textColors = {
    dark: "text-[#141414]",
    light: "text-white",
    orange: "text-brand",
  };

  const sizes = {
    sm: "text-[18px]",
    md: "text-[24.8px]",
    lg: "text-[30px]",
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
    <div className={cn("flex h-12 w-12 items-center justify-center rounded-xl bg-brand", className)}>
      <span className="font-display text-xl font-extrabold tracking-tight text-white">
        P
        <span className="text-white/90">.</span>
      </span>
    </div>
  );
}
