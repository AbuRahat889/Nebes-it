"use client";

import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import Link from "next/link";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline";
  size?: "default" | "sm" | "lg" | "icon";
  asChild?: boolean;
  href?: string;
  icon?: boolean;
  animateOnView?: boolean;
}

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primaryColor text-white text-sm lg:text-base font-medium rounded-[10px] leading-normal  w-full",
        outline:
          "text-primaryColor border-2 border-primaryColor text-sm lg:text-base font-medium rounded-[10px] leading-normal  w-full",
      },
      size: {
        default: "h-12",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, href, ...props }, ref) => {
    const Comp: any = asChild ? Slot : "button";

    if (href) {
      return (
        <div>
          <Link
            href={href}
            className={cn(
              buttonVariants({ variant, size, className }),
              "text-center"
            )}
          >
            {props.children}
          </Link>
        </div>
      );
    }

    return (
      <Comp
        className={cn(
          buttonVariants({ variant, size, className }),
          "px-1 text-center"
        )}
        ref={ref}
        {...(props as any)}
      >
        {props.children}
      </Comp>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
