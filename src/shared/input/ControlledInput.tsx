import React from "react";
import { AiFillEyeInvisible } from "react-icons/ai";
import { MdVisibility } from "react-icons/md";
import { Controller, FieldValues } from "react-hook-form";
import OutlineInput from "./OutlineInput";
import { BaseControlledParameter } from "@/@types/baseInterface";

type OmitTextFied = Omit<React.ComponentProps<typeof OutlineInput>, "name" | "error" | "value" | "onBlur"> & {
  subText?: string;
  /**
   * @param {isNumber} shoud be "currency" or "decimal" or "integer"
   */
  isNumber?: "currency" | "decimal" | "integer";
};
export interface ControlledInputProps<TFieldValues extends FieldValues>
  extends OmitTextFied,
    BaseControlledParameter<TFieldValues> {
  ref?: React.MutableRefObject<HTMLInputElement | null>;
}

function ControlledInput<TFieldValue extends FieldValues>(props: ControlledInputProps<TFieldValue>) {
  const { name, control, rules, type, helperText, ...rest } = props;
  const [showPassword, setShowPassword] = React.useState<boolean>(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const renderPasswordToggle = () =>
    type === "password" ? (
      <span onClick={togglePasswordVisibility}>
        {showPassword ? (
          <AiFillEyeInvisible className=" text-brand-primary text-2xl" />
        ) : (
          <MdVisibility className=" text-brand-primary text-2xl" />
        )}
      </span>
    ) : undefined;
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { ref, name: cname, ...fields }, fieldState: { error } }) => {
        return (
          <OutlineInput
            name={cname}
            ref={ref}
            {...fields}
            error={Boolean(error?.message)}
            FormHelperTextProps={{
              "data-app-error": Boolean(error?.message),
              error: Boolean(error),
            }}
            endAdornment={renderPasswordToggle()}
            type={showPassword ? "text" : type}
            {...rest}
            {...fields}
            helperText={error?.message || helperText || ""}
          />
        );
      }}
    />
  );
}

export default ControlledInput;
