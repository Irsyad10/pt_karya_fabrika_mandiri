import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "mint" | "yellow" | "black" | "white" | "ash";
  size?: "sm" | "md";
}

export function Badge({
  className,
  variant = "mint",
  size = "md",
  children,
  ...props
}: BadgeProps) {
  const variantClasses = {
    mint: "bg-[#0065bf]/15 text-[#0065bf] border border-[#0065bf]/30",
    yellow: "bg-[#0065bf] text-[#ffffff] font-semibold border-0",
    black: "bg-[#012655] text-[#ffffff] border-0",
    white: "bg-[#ffffff] text-[#012655] border border-[#a4a6a9]/40",
    ash: "bg-[#a4a6a9]/20 text-[#484d53] border-0",
  };

  const sizeClasses = {
    sm: "px-2.5 py-1 text-[11px] leading-tight",
    md: "px-3.5 py-1.5 text-[12px] leading-tight",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-[64px] font-mono font-medium tracking-tight uppercase select-none transition-colors",
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
