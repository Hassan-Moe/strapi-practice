"use client";

import { ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "ghost"
  | "outline"
  | "danger"
  | "square";
type ButtonSize = "sm" | "md" | "lg";

interface BaseButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  loading?: boolean;
  disabled?: boolean;
  children: ReactNode;
  className?: string;
}

// Exclude props that conflict with Framer Motion
type HTMLButtonProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "onDrag" | "onDragEnd" | "onDragStart" | "onAnimationStart" | "onAnimationEnd"
>;

interface ButtonAsButton
  extends BaseButtonProps, Omit<HTMLButtonProps, keyof BaseButtonProps> {
  href?: never;
  target?: never;
}

interface ButtonAsLink extends BaseButtonProps {
  href: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
  onClick?: () => void;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

export default function Button({
  variant = "primary",
  size = "md",
  startIcon,
  endIcon,
  loading = false,
  disabled = false,
  children,
  className = "",
  ...props
}: ButtonProps) {
  const variants = {
    primary:
      "bg-slate-600 border-slate-400 text-white hover:bg-blue-700 hover:shadow-lg active:bg-blue-800 disabled:bg-blue-400",
    secondary:
      "bg-gray-100 border-slate-200 text-gray-900 hover:bg-gray-200 hover:border-slate-300 active:bg-gray-300 disabled:bg-gray-50",
    ghost:
      "bg-transparent border-transparent  hover:bg-gray-100 active:bg-gray-200 disabled:text-gray-400",
    outline:
      " border-slate-300   hover:border-slate-400 active:bg-gray-100 disabled:border-gray-200",
    danger:
      "bg-red-600 border-red-600 text-white hover:bg-red-700 hover:shadow-lg active:bg-red-800 disabled:bg-red-400",
    square:
      " border-gray-200 overflow-hidden  hover:border-slate-300 active:scale-95",
    pagination:
      " border-gray-200 overflow-hidden  hover:border-slate-300 active:scale-95",
  };

  const sizes = {
    sm: "h-8 px-3 text-sm gap-1.5",
    md: "h-10 px-4 text-base gap-2",
    lg: "h-12 px-6 text-lg gap-2.5",
  };

  const squareSizes = {
    sm: "w-9 h-9 text-sm",
    md: "w-10 h-10 text-base",
    lg: "w-11 h-11 text-lg",
  };

  const iconSizes = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
  };

  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-lg border transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2";

  const isSquare = variant === "square";
  const sizeStyles = isSquare ? squareSizes[size] : sizes[size];
  const variantStyles = variants[variant];
  const isDisabled = disabled || loading;

  const content = (
    <>
      {loading && <Loader2 className={`${iconSizes[size]} animate-spin`} />}
      {!loading && startIcon && (
        <span className={iconSizes[size]}>{startIcon}</span>
      )}
      {!isSquare && <span>{children}</span>}
      {isSquare && children}
      {!loading && endIcon && (
        <span className={iconSizes[size]}>{endIcon}</span>
      )}
    </>
  );

  const combinedClassName = `${baseStyles} ${variantStyles} ${sizeStyles} ${className}`;

  // Render as Link if href is provided
  if ("href" in props && props.href) {
    const { href, target, onClick } = props;

    if (target === "_blank") {
      return (
        <motion.a
          href={href}
          target={target}
          rel="noopener noreferrer"
          onClick={onClick}
          className={combinedClassName}
          {...(!isDisabled && {
            whileHover: { scale: 1.03 },
            whileTap: { scale: 0.98 },
          })}
          aria-disabled={isDisabled}
        >
          {content}
        </motion.a>
      );
    }

    return (
      <Link href={href} target={target} passHref legacyBehavior>
        <motion.a
          onClick={onClick}
          className={combinedClassName}
          {...(!isDisabled && {
            whileHover: { scale: 1.03 },
            whileTap: { scale: 0.98 },
          })}
          aria-disabled={isDisabled}
        >
          {content}
        </motion.a>
      </Link>
    );
  }

  // Render as button
  const buttonProps = props as ButtonAsButton;

  return (
    <motion.button
      {...buttonProps}
      disabled={isDisabled}
      className={combinedClassName}
      {...(!isDisabled && {
        whileHover: { scale: 1.03 },
        whileTap: { scale: 0.98 },
      })}
    >
      {content}
    </motion.button>
  );
}
