import React from "react";
import { Prettify } from "@/@types/baseInterface";
import InputBase from "./InputBase";
import Label from "./Label";
import { twMerge } from "tailwind-merge";
import FormHelperText from "./FormHelperText";
import { classVariable } from "@/utils/classUtils";
import { VariantProps, cva } from "class-variance-authority";

export const outlinedInputVariantes = cva("bg-none w-full border rounded-[4px] input-base", {
  variants: {
    // sizes: {
    //  small: "px-3 py-3",
    //  medium: "px-3 py-4",
    //  large: "px-3 py-5",
    // },
    fullWidth: {
      true: "w-full",
    },
  },
  defaultVariants: {},
});

export type FormMicsProps = {
  helperText?: string | React.ReactNode;
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
};
type OutlineInputProps = Prettify<
  React.ComponentProps<typeof InputBase> &
    VariantProps<typeof outlinedInputVariantes> & {
      FormLabelProps?: React.ComponentProps<typeof Label>;
      FormHelperTextProps?: React.ComponentProps<typeof FormHelperText>;
    } & FormMicsProps
>;

const OutlineInput = React.forwardRef<HTMLInputElement, OutlineInputProps>(function OutlineInput(
  {
    sizes,
    label,
    error,
    className,
    FormLabelProps,
    helperText,
    id,
    FormHelperTextProps,
    fullWidth,
    value,
    startAdornment,
    endAdornment,
    ...rest
  },
  ref
) {
  const [focused, setFocused] = React.useState(false);
  const helperTextId = helperText && id ? `${id}-helper-text` : undefined;
  const inputLabelId = label && id ? `${id}-label` : undefined;
  return (
    <div className="relative py-3 w-full">
      <div
        data-app-error={Boolean(error)}
        className={twMerge(
          "relative w-full py-1 flex items-center border rounded px-1  ",
          focused && "border-[2px] border-[#0A74DC] ",
          " data-[app-error=true]:text-error-100 data-[app-error=true]:border data-[app-error=true]:border-error-100"
        )}
      >
        {startAdornment && <div className=" flex justify-start items-center flex-wrap">{startAdornment}</div>}
        <InputBase
          sizes={sizes}
          ref={ref}
          id={inputLabelId}
          data-app-error={Boolean(error)}
          value={value}
          className={twMerge(
            "peer border-none outline-none transition-all duration-200 ease-linear   focus-within:bg-transparent ",
            classVariable(outlinedInputVariantes({ className, fullWidth }))
          )}
          error={error}
          onFocus={(e) => {
            setFocused(true);
            if (rest.onFocus) {
              rest.onFocus(e);
            }
          }}
          onBlurCapture={(e) => {
            setFocused(false);
            if (rest.onBlurCapture) {
              rest.onBlurCapture(e);
            }
          }}
          {...rest}
        />
        <Label
          htmlFor={inputLabelId}
          autoFocus
          {...(FormLabelProps || {})}
          data-app-active={Boolean(value)}
          data-app-error={Boolean(error)}
          className={classVariable(
            "transition-all  duration-700 ease-out origin-[0_0] ",
            "pointer-events-none absolute left-4 text-center mb-0 max-w-[90%]",
            "peer-focus:bg-white peer-focus:-translate-y-[1.4rem] peer-focus:scale-[0.75] peer-focus:text-text-main",
            // focused ? "bg-neutral-white -translate-y-[1.4rem] scale-[0.75] text-text-main": "",
            " data-[app-active=true]:-translate-y-[1.4rem] data-[app-active=true]:scale-[0.78] data-[app-active=true]:bg-white",
            "data-[app-error=true]:!text-error-100",
            " disabled:text-neutral-greyText",
            FormLabelProps?.className
          )}
          error={error}
        >
          {label}
        </Label>
        {endAdornment && <span className=" flex justify-start flex-wrap items-center">{endAdornment}</span>}
      </div>
      {helperText && (
        <FormHelperText id={helperTextId} {...FormHelperTextProps}>
          {helperText}
        </FormHelperText>
      )}
    </div>
  );
});

OutlineInput.defaultProps = {
  sizes: "medium",
  type: "text",
  label: "",
};

export default OutlineInput;
