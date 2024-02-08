/* eslint-disable no-unused-vars */
import * as React from "react";
declare module "react" {
  // interface HTMLProps<T> {
  //   block?: string;
  //   element?: string;
  //   modifiers?: string;
  // }
  interface HTMLAttributes<T> {
    "data-app-active"?: boolean;
    "data-app-disabled"?: boolean;
    "data-app-error"?: boolean;
    "data-app-indeterminate"?: boolean;
    "data-app-focus"?: boolean;
  }
}
