import { classVariable } from "@/utils/classUtils";
import { VariantProps, cva } from "class-variance-authority";
import React from "react";

export const helperTextVariants = cva("bg-none text-neutral-bodyText data-[app-error=true]:text-error-100 text-xs", {
  variants: {
    sizes: {
      small: "",
    },
  },
});

export interface FormHelperTextProps
  extends React.LabelHTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof helperTextVariants> {
  error?: boolean;
}

const FormHelperText = React.forwardRef<HTMLParagraphElement, FormHelperTextProps>(
  ({ children, sizes, error }, ref) => {
    return (
      <p data-app-error={Boolean(error)} className={`  ${classVariable(helperTextVariants({ sizes }))}`} ref={ref}>
        {children}
      </p>
    );
  }
);

FormHelperText.displayName = "FormHelperText";

export default FormHelperText;
