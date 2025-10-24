"use client";
import { cn } from '@rickandmorty/utils';
import { jsx } from 'react/jsx-runtime';

var Card = ({ className, ...props }) => /* @__PURE__ */ jsx(
  "div",
  {
    className: cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      className
    ),
    ...props
  }
);
Card.displayName = "Card";
var CardHeader = ({ className, ...props }) => /* @__PURE__ */ jsx(
  "div",
  {
    className: cn("flex flex-col space-y-1.5 p-6", className),
    ...props
  }
);
CardHeader.displayName = "CardHeader";
var CardTitle = ({ className, ...props }) => /* @__PURE__ */ jsx(
  "h3",
  {
    className: cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    ),
    ...props
  }
);
CardTitle.displayName = "CardTitle";
var CardDescription = ({ className, ...props }) => /* @__PURE__ */ jsx(
  "p",
  {
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
);
CardDescription.displayName = "CardDescription";
var CardContent = ({ className, ...props }) => /* @__PURE__ */ jsx("div", { className: cn("p-6 pt-0", className), ...props });
CardContent.displayName = "CardContent";

export { Card, CardContent, CardDescription, CardHeader, CardTitle };
//# sourceMappingURL=index.mjs.map
//# sourceMappingURL=index.mjs.map