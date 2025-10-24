import React from 'react';
import { cn } from '@rickandmorty/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}
const Card = ({ className, ...props }: CardProps) => (
  <div
    className={cn(
      'rounded-lg border bg-card text-card-foreground shadow-sm',
      className
    )}
    {...props}
  />
);
Card.displayName = 'Card';

interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}
const CardHeader = ({ className, ...props }: CardHeaderProps) => (
  <div
    className={cn('flex flex-col space-y-1.5 p-6', className)}
    {...props}
  />
);
CardHeader.displayName = 'CardHeader';

interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}
const CardTitle = ({ className, ...props }: CardTitleProps) => (
  <h3
    className={cn(
      'text-2xl font-semibold leading-none tracking-tight',
      className
    )}
    {...props}
  />
);
CardTitle.displayName = 'CardTitle';

interface CardDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {}
const CardDescription = ({ className, ...props }: CardDescriptionProps) => (
  <p
    className={cn('text-sm text-muted-foreground', className)}
    {...props}
  />
);
CardDescription.displayName = 'CardDescription';

interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {}
const CardContent = ({ className, ...props }: CardContentProps) => (
  <div className={cn('p-6 pt-0', className)} {...props} />
);
CardContent.displayName = 'CardContent';

export { Card, CardHeader, CardTitle, CardDescription, CardContent };