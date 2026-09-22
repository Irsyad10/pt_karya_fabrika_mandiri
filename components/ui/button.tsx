import React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost" | "mint" | "link" | "outline-white";
  size?: "sm" | "md" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const sizeClasses = {
      sm: "px-4 py-2 text-[14px]",
      md: "px-6 py-3 text-[16px]",
      lg: "px-8 py-4 text-[18px]",
    };

    const variantClasses = {
      primary:
        "bg-[#000000] text-[#ffffff] rounded-[8px] hover:bg-[#2f2f2f] active:scale-[0.98] transition-all duration-150 font-medium tracking-tight",
      ghost:
        "bg-transparent text-[#444444] border-[1.5px] border-[#444444] rounded-[6px] hover:border-[#000000] hover:text-[#000000] hover:bg-[#f3f3f3] active:scale-[0.98] transition-all duration-150 font-medium tracking-tight",
      mint:
        "bg-[#d1ffca] text-[#000000] rounded-[8px] hover:bg-[#bbf0b3] active:scale-[0.98] transition-all duration-150 font-semibold tracking-tight",
      link:
        "bg-transparent text-[#000000] p-0 underline-offset-4 hover:underline font-medium",
      "outline-white":
        "bg-transparent text-[#ffffff] border-[1.5px] border-[#ffffff]/60 rounded-[6px] hover:border-[#ffffff] hover:bg-[#ffffff]/10 active:scale-[0.98] transition-all duration-150 font-medium tracking-tight",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:pointer-events-none select-none",
          sizeClasses[size],
          variantClasses[variant],
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
