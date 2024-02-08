import React from "react";

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
