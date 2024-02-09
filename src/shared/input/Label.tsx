import React from "react";
import { InputFormProps } from "./InputBase";
import { Prettify } from "@/@types/baseInterface";
import { VariantProps, cva } from "class-variance-authority";
import { classVariable } from "@/utils/classUtils";

export const inputLabelVariants = cva(
  "z-[1] block overflow-hidden origin-top-left bg-transparent whitespace-nowrap overflow-ellipsis max-w-full data-[app-error=true]:!text-error-100",
  {
    variants: {
      variant: {
        filled: "",
        outlined: "pointer-events-none",
        standards: "",
      },
    },
    defaultVariants: {
      variant: "outlined",
    },
  }
);
type LabelProps = Prettify<
  React.LabelHTMLAttributes<HTMLLabelElement> & InputFormProps & VariantProps<typeof inputLabelVariants>
>;

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(function Label(
  { children, htmlFor, "data-app-error": appErr, className, variant, ...rest },
  ref
) {
  return (
    <label
      ref={ref}
      data-app-error={Boolean(appErr)}
      htmlFor={htmlFor}
      className={classVariable(inputLabelVariants({ className, variant }))}
      {...rest}
    >
      {children}
    </label>
  );
});

Label.displayName = "Label";

export default Label;
