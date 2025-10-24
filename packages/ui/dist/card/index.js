"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from '@rickandmorty/utils';
const Card = ({ className, ...props }) => (_jsx("div", { className: cn('rounded-lg border bg-card text-card-foreground shadow-sm', className), ...props }));
Card.displayName = 'Card';
const CardHeader = ({ className, ...props }) => (_jsx("div", { className: cn('flex flex-col space-y-1.5 p-6', className), ...props }));
CardHeader.displayName = 'CardHeader';
const CardTitle = ({ className, ...props }) => (_jsx("h3", { className: cn('text-2xl font-semibold leading-none tracking-tight', className), ...props }));
CardTitle.displayName = 'CardTitle';
const CardDescription = ({ className, ...props }) => (_jsx("p", { className: cn('text-sm text-muted-foreground', className), ...props }));
CardDescription.displayName = 'CardDescription';
const CardContent = ({ className, ...props }) => (_jsx("div", { className: cn('p-6 pt-0', className), ...props }));
CardContent.displayName = 'CardContent';
export { Card, CardHeader, CardTitle, CardDescription, CardContent };
//# sourceMappingURL=index.js.map