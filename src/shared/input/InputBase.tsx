import React from "react";
import { VariantProps, cva } from "class-variance-authority";
import { Prettify } from "@/@types/baseInterface";
import { classVariable } from "@/utils/classUtils";

interface InputFormProps {
  label?: string | React.ReactNode;
  select?: boolean;
  error?: boolean;
}
const inputCvaVariant = cva("", {
  variants: {
    sizes: {
      small: "",
      medium: "",
      large: "",
    },
  },
  defaultVariants: {
    sizes: "medium",
  },
});
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
