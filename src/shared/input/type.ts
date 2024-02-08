import React from "react";

export interface FormHelperTextProps extends React.LabelHTMLAttributes<HTMLParagraphElement> {
  error?: boolean;
}

interface IlabelAttribute {
  htmlFor?: string;
}

export interface InputLabelProps extends React.InputHTMLAttributes<HTMLLabelElement>, IlabelAttribute {
  error?: boolean;
}
