"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import { cn } from '@rickandmorty/utils';
const buttonVariants = cva('inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50', {
    variants: {
        variant: {
            primary: 'bg-blue-600 text-white hover:bg-blue-700',
            secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
            ghost: 'hover:bg-accent hover:text-accent-foreground',
            link: 'text-primary underline-offset-4 hover:underline',
        },
        size: {
            default: 'h-10 px-4 py-2',
            sm: 'h-9 rounded-md px-3',
            lg: 'h-11 rounded-md px-8',
            icon: 'h-10 w-10',
        },
    },
    defaultVariants: {
        variant: 'primary',
        size: 'default',
    },
});
const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (_jsx(Comp, { className: cn(buttonVariants({ variant, size, className })), ref: ref, ...props }));
});
Button.displayName = 'Button';
export { Button, buttonVariants };
//# sourceMappingURL=index.js.map