// src/app/components/common/Button.tsx
"use client";

import React from 'react';
import { Slot } from '@radix-ui/react-slot';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    asChild?: boolean;
    variant?: 'blue' | 'red' | 'outlineBlue' | 'outlineRed' | 'purple';
    size?: 'sm' | 'md' | 'lg';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            className,
            variant = 'blue',
            size = 'md',
            asChild = false,
            ...props
        },
        ref
    ) => {
        const Comp = asChild ? Slot : 'button';

        const baseClasses = `
      inline-flex items-center justify-center
      font-body font-semibold rounded-md
      transition-colors duration-200 ease-in-out
      focus:outline-none focus:ring-2 focus:ring-offset-2
      disabled:opacity-50 disabled:cursor-not-allowed
    `;

        const variantClasses = {
            blue: `
        bg-[#1A2B4B] text-[#FFFFFF]
        hover:bg-[#1A2B4B]/90 focus:ring-[#1A2B4B]
          `,
            red: `
        bg-[#E53E3E] text-[#FFFFFF]
        hover:bg-[#E53E3E]/90 focus:ring-[#E53E3E]
          `,
            outlineBlue: `
        bg-transparent text-[#1A2B4B] border border-[#1A2B4B]
        hover:bg-[#1A2B4B] hover:text-[#FFFFFF] focus:ring-[#1A2B4B]
          `,
            outlineRed: `
        bg-transparent text-[#E53E3E] border border-[#E53E3E]
        hover:bg-[#E53E3E] hover:text-[#FFFFFF] focus:ring-[#E53E3E]
          `,
            purple: `
        bg-[#5B21B6] text-[#FFFFFF]
        hover:bg-[#5B21B6]/90 focus:ring-[#5B21B6]
          `,
        };

        const sizeClasses = {
            sm: 'px-3 py-1.5 text-sm',
            md: 'px-5 py-2.5 text-base',
            lg: 'px-7 py-3.5 text-lg',
        };

        return (
            <Comp
                className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className || ''}`}
                ref={ref}
                {...props}
            />
        );
    }
);

Button.displayName = 'Button';

export default Button;