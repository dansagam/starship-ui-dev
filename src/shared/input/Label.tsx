import React from "react";
import { InputFormProps } from "./InputBase";
import { Prettify } from "@/@types/baseInterface";

type LabelProps = Prettify<React.LabelHTMLAttributes<HTMLLabelElement> & InputFormProps>;

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(function Label(
  { children, htmlFor, "data-app-error": appErr, ...rest },
  ref
) {
  return (
    <label ref={ref} data-app-error={Boolean(appErr)} htmlFor={htmlFor} {...rest}>
      {children}
    </label>
  );
});

Label.displayName = "Label";

export default Label;
