import { Prettify } from "@/@types/baseInterface";
import React from "react";
import { FormMicsProps } from "@/shared/input/OutlineInput";
import { VariantProps, cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import CircularProgress from "../CircularProgress";
import { classVariable } from "@/utils/classUtils";

const buttonVariants = cva(
  "active:ring-2 inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none dark:hover:text-slate-100 disabled:opacity-50 disabled:pointer-events-none dark:focus:ring-offset-slate-900 data-[state=open]:bg-slate-100 dark:data-[state=open]:bg-slate-800",
  {
    variants: {
      size: {
        small: "h-9 px-2 rounded-md text-xs",
        medium: "h-11 px-4 rounded-md text-sm",
        large: "h-13 px-8 py-3 rounded-md text-base",
      },
      color: {
        primary: "bg-primary-main text-white",
        error: "bg-error-critical text-error",
      },
    },
    defaultVariants: {
      size: "medium",
      color: "primary",
    },
  }
);

type ButtonProps = Prettify<
  React.ButtonHTMLAttributes<HTMLButtonElement> &
    Omit<FormMicsProps, "helperText"> &
    VariantProps<typeof buttonVariants> & {
      loading?: boolean;
      loadingColor?: string;
    }
>;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { children, startAdornment, endAdornment, loading, loadingColor, color, className, size, ...rest },
  ref
) {
  return (
    <button ref={ref} className={classVariable(buttonVariants({ className, size, color }))} {...rest}>
      {startAdornment && startAdornment}
      <span className={twMerge("pl-2 pr-2")}>{loading ? <CircularProgress color={loadingColor} /> : children}</span>
      {endAdornment && endAdornment}
    </button>
  );
});

Button.displayName = "Button";

export default Button;
