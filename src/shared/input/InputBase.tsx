import React from "react";
import { VariantProps, cva } from "class-variance-authority";
import { Prettify } from "@/@types/baseInterface";
import { classVariable } from "@/utils/classUtils";

export interface InputFormProps {
  label?: string | React.ReactNode;
  select?: boolean;
  error?: boolean;
}
const inputCvaVariant = cva(
  `
rounded-md bg-transparent border placeholder:text-[#0B2253]
placeholder:text-slate-400
data-[app-error=true]:border data-[app-error=true]:border-error-100
disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-neutral-bg disabled:border-neutral-border
focus:!outline-none focus:!border-[#0A74DC] focus:!border-3 focus:!ring-offset-2`,
  {
    variants: {
      sizes: {
        small: "py-1 px-2 text-sm",
        medium: "py-2 px-2 text-base",
        large: "py-3 px-2 text-base",
      },
    },
    defaultVariants: {
      sizes: "medium",
    },
  }
);
type InputBaseProps = Prettify<
  React.InputHTMLAttributes<Omit<HTMLInputElement, "size">> & InputFormProps & VariantProps<typeof inputCvaVariant>
>;

const InputBase = React.forwardRef<HTMLInputElement, InputBaseProps>(
  ({ sizes, className, error, type, placeholder, "data-app-error": appError, ...rest }, ref) => {
    return (
      <input
        aria-label={"sensor"}
        data-app-error={Boolean(appError || error)}
        className={`${classVariable(inputCvaVariant({ className, sizes }))} `}
        ref={ref}
        placeholder={placeholder || ""}
        type={type || "text"}
        {...rest}
      />
    );
  }
);

InputBase.displayName = "InputBase";

export default InputBase;
