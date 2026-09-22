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
    mint: "bg-[#d1ffca] text-[#000000] border-0",
    yellow: "bg-[#fff100] text-[#000000] font-semibold border-0",
    black: "bg-[#000000] text-[#ffffff] border-0",
    white: "bg-[#ffffff] text-[#000000] border border-[#c6c6c6]/50",
    ash: "bg-[#c6c6c6]/40 text-[#444444] border-0",
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
