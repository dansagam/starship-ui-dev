import React from "react";
import { Prettify } from "@/@types/baseInterface";
import InputBase from "./InputBase";
import Label from "./Label";
import { twMerge } from "tailwind-merge";
import FormHelperText from "./FormHelperText";

export type FormMicsProps = {
  helperText?: string | React.ReactNode;
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
};
type OutlineInputProps = Prettify<
  React.ComponentProps<typeof InputBase> & {
    FormLabelProps?: React.ComponentProps<typeof Label>;
    FormHelperTextProps?: React.ComponentProps<typeof FormHelperText>;
  } & FormMicsProps
>;

const OutlineInput = React.forwardRef<HTMLInputElement, OutlineInputProps>(function OutlineInput(
  { sizes, label, error, className, FormLabelProps, helperText, id, FormHelperTextProps, ...rest },
  ref
) {
  const helperTextId = helperText && id ? `${id}-helper-text` : undefined;
  const inputLabelId = label && id ? `${id}-label` : undefined;
  return (
    <div>
      <div>
        <InputBase
          sizes={sizes}
          ref={ref}
          id={inputLabelId}
          data-app-error={Boolean(error)}
          className={twMerge("", className)}
          error={error}
          {...rest}
        />
        <Label htmlFor={inputLabelId} error={error} data-app-error={error} {...FormLabelProps}>
          {label}
        </Label>
      </div>
      {helperText && (
        <FormHelperText id={helperTextId} {...FormHelperTextProps}>
          {helperText}
        </FormHelperText>
      )}
    </div>
  );
});

export default OutlineInput;
