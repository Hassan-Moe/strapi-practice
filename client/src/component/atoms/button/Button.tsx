"use client";

import { ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline" | "danger";
type ButtonSize = "sm" | "md" | "lg" | "square-sm" | "square-md" | "square-lg";

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

const MotionLink = motion.create(Link);

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
      "bg-primary text-primary-foreground hover:brightness-110 hover:shadow-md active:brightness-95 disabled:opacity-60 disabled:cursor-not-allowed",
    secondary:
      "bg-background-accent text-foreground-accent hover:bg-stone-700 dark:hover:bg-background-accent dark:hover:brightness-110 hover:shadow-md active:brightness-90 disabled:opacity-60 disabled:cursor-not-allowed",
    ghost:
      "bg-transparent border-transparent text-foreground hover:bg-muted/20 active:bg-muted/30 disabled:text-muted",
    outline:
      "border border-border bg-transparent text-foreground hover:bg-muted/10 hover:border-muted active:bg-muted/20 disabled:border-muted/50 disabled:text-muted",
    danger:
      "bg-red-600 border-red-600 text-white hover:bg-red-700 hover:shadow-md active:bg-red-800 disabled:bg-red-400",
  };

  const isSquare = size.startsWith("square") || size === "square-md";

  const baseSizes = {
    sm: " p-4 text-sm gap-1.5",
    md: " p-2 text-base gap-2",
    lg: " p-6 text-lg gap-2.5",
  };

  const squareSizes = {
    "square-sm": "h-8 w-8 p-0 text-sm",
    "square-md": "h-10 w-10 p-0 text-base",
    "square-lg": "h-12 w-12 p-0 text-lg",
  };

  const iconSizes = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    "square-sm": "w-4 h-4",
    "square-md": "w-5 h-5",
    "square-lg": "w-6 h-6",
  };

  const baseStyles =
    "inline-flex cursor-pointer items-center  justify-center font-bold rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-background-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:pointer-events-none";

  const sizeStyles = isSquare
    ? squareSizes[size as keyof typeof squareSizes] || squareSizes["square-md"]
    : baseSizes[size as keyof typeof baseSizes];

  const variantStyles = variants[variant] || "";

  const isDisabled = disabled || loading;

  const content = (
    <div className="flex items-center gap-2">
      {loading && <Loader2 className={`${iconSizes[size]} animate-spin`} />}
      {!loading && startIcon && (
        <div className="bg-background-secondary rounded-full p-2 flex items-center justify-center">
          {startIcon}
        </div>
      )}
      {children && <span>{children}</span>}
      {!loading && endIcon && (
        <div className="bg-background-secondary rounded-full p-2 flex items-center justify-center">
          {endIcon}
        </div>
      )}
    </div>
  );

  const combinedClassName = `${baseStyles} ${variantStyles} ${sizeStyles} ${className}`;

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
            whileHover: { scale: 1.02 },
            whileTap: { scale: 0.98 },
          })}
          aria-disabled={isDisabled}
        >
          {content}
        </motion.a>
      );
    }

    return (
      <MotionLink
        href={href}
        target={target}
        onClick={onClick}
        className={combinedClassName}
        {...(!isDisabled && {
          whileHover: { scale: 1.01 },
          whileTap: { scale: 0.98 },
        })}
        aria-disabled={isDisabled}
      >
        {content}
      </MotionLink>
    );
  }

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
