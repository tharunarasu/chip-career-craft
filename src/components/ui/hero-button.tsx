import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const heroButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary: "bg-gradient-primary text-primary-foreground shadow-elegant hover:shadow-glow hover:scale-105 active:scale-95",
        accent: "bg-gradient-accent text-accent-foreground shadow-elegant hover:shadow-glow hover:scale-105 active:scale-95",
        outline: "border-2 border-primary text-primary bg-background/80 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground hover:shadow-card",
        ghost: "text-primary hover:bg-primary/10 hover:text-primary",
      },
      size: {
        sm: "h-9 px-4 py-2 text-sm",
        md: "h-11 px-8 py-3",
        lg: "h-14 px-12 py-4 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface HeroButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof heroButtonVariants> {
  asChild?: boolean;
}

const HeroButton = React.forwardRef<HTMLButtonElement, HeroButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(heroButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
HeroButton.displayName = "HeroButton";

export { HeroButton, heroButtonVariants };