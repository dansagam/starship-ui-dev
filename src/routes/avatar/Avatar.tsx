import * as React from "react";
import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import { AvatarProps } from "./type";
import { classVariable } from "@/utils/classUtils";

export const avatarVariants = cva(" bg-[#78C2ED] cursor-pointer overflow-hidden flex justify-center items-center", {
  variants: {
    size: {
      small: "w-10 h-10",
      medium: "w-15 h-15",
      large: "w-20 h-20",
    },
    variants: {
      rounded: "rounded-full",
      square: "w-full rounded-none",
    },
  },
  defaultVariants: {
    size: "large",
    variants: "rounded",
  },
});

const Avatar = React.forwardRef<HTMLImageElement, AvatarProps>(
  ({ className, src, size, children, variants, height, width, containerStyle, isCustomColour, ...prop }, ref) => {
    return (
      <div
        style={{ height, width, ...(isCustomColour ? containerStyle : undefined) }}
        className={twMerge(classVariable(avatarVariants({ className, size, variants })))}
      >
        {src ? (
          <img
            src={src}
            ref={ref}
            {...prop}
            className={twMerge("w-full h-full object-cover object-center", className)}
            height={height}
            width={width}
          />
        ) : (
          <div className=" text-neutral-white">{children}</div>
        )}
      </div>
    );
  }
);

Avatar.displayName = "Avatar";

Avatar.defaultProps = {
  height: 40,
  width: 40,
};

export default Avatar;
