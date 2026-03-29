'use client'

import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../utils/cn'

const buttonShadowVariants = cva('relative inline-flex cursor-pointer group', {
  variants: {
    size: {
      default: '',
      sm: '',
      lg: '',
    },
  },
  defaultVariants: {
    size: 'default',
  },
})

const faceVariants = cva(
  'relative z-10 inline-flex items-center justify-center whitespace-nowrap rounded-[14px] border-2 border-foreground bg-background text-foreground font-semibold tracking-tight transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:translate-x-px group-hover:translate-y-px group-active:translate-x-0 group-active:translate-y-0 group-active:duration-100',
  {
    variants: {
      size: {
        default: 'px-9 py-3.5 text-base',
        sm: 'px-6 py-2.5 text-sm',
        lg: 'px-12 py-4 text-lg',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  },
)

export interface ButtonShadowProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonShadowVariants> {
  shadowClassName?: string
  faceClassName?: string
}

const ButtonShadow = React.forwardRef<HTMLButtonElement, ButtonShadowProps>(
  (
    { className, size, shadowClassName, faceClassName, children, ...props },
    ref,
  ) => {
    return (
      <button
        className={cn(buttonShadowVariants({ size, className }))}
        ref={ref}
        {...props}
      >
        <span
          className={cn(
            'absolute inset-0 rounded-[14px] bg-base opacity-0 translate-x-0 translate-y-0 transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:opacity-100 group-hover:-translate-x-px group-hover:-translate-y-px group-active:translate-x-0 group-active:translate-y-0 group-active:duration-100',
            shadowClassName,
          )}
        />
        <span className={cn(faceVariants({ size }), faceClassName)}>
          {children}
        </span>
      </button>
    )
  },
)
ButtonShadow.displayName = 'ButtonShadow'

export { ButtonShadow, buttonShadowVariants, faceVariants }
