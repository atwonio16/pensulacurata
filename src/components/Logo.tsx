import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  variant?: "dark" | "light" | "orange";
  size?: "sm" | "md" | "lg";
}

export function Logo({ 
  className, 
  variant = "dark",
  size = "md" 
}: LogoProps) {
  const textColors = {
    dark: "text-black",
    light: "text-white",
    orange: "text-brand",
  };

  const sizes = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl",
  };

  return (
    <div className={cn("flex items-center", className)}>
      <span 
        className={cn(
          "font-bold tracking-tight",
          sizes[size],
          textColors[variant]
        )}
      >
        Pensulacurata
        <span className="text-brand">.</span>
      </span>
    </div>
  );
}

export function LogoMark({ 
  className 
}: { 
  className?: string;
}) {
  return (
    <div 
      className={cn(
        "w-12 h-12 rounded-lg bg-brand flex items-center justify-center",
        className
      )}
    >
      <span className="text-white font-bold text-xl">
        P
        <span className="text-white/90">.</span>
      </span>
    </div>
  );
}
