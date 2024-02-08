import React from "react";
import { Control, FieldValues, Path, FieldErrorsImpl, RegisterOptions } from "react-hook-form";

export type Prettify<T> = {
  [K in keyof T]: T[K];
  // eslint-disable-next-line @typescript-eslint/ban-types
} & {};

export type ReactTag = keyof JSX.IntrinsicElements | React.JSXElementConstructor<any>;

export type PropsOf<TTag extends ReactTag> = TTag extends React.ElementType
  ? Prettify<Omit<React.ComponentProps<TTag>, "ref">>
  : never;

export type IChildren = {
  children: React.ReactNode;
};

export interface BaseControlledParameter<TFieldValues extends FieldValues> {
  /**
   *
   * it is equivalent to the controller error validation for the helperText
   */
  errors?: Partial<FieldErrorsImpl<TFieldValues>>;
  /**
   *
   * it is equivalent to the validation rule of Yup and Zod
   */
  control: Control<TFieldValues, any>;
  /**
   *
   * if `true` & @param {name} for the component name attribute
   */
  name: Path<TFieldValues>;
  /**
   *
   * it is equivalent to the validation rule of Yup and Zod
   */
  rules?: Omit<
    RegisterOptions<TFieldValues, Path<TFieldValues>>,
    "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
  >;
}
