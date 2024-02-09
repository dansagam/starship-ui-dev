import { type VariantProps } from "class-variance-authority";
import React from "react";
import { avatarVariants } from "./Avatar";

export interface AvatarProps extends React.ImgHTMLAttributes<HTMLImageElement>, VariantProps<typeof avatarVariants> {
  containerStyle?: React.CSSProperties;
  isCustomColour?: boolean;
}
