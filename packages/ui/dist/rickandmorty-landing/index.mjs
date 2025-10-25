"use client";
import * as React2 from 'react';
import React2__default, { useState } from 'react';
import { jsx, jsxs } from 'react/jsx-runtime';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function setRef(ref, value) {
  if (typeof ref === "function") {
    return ref(value);
  } else if (ref !== null && ref !== void 0) {
    ref.current = value;
  }
}
function composeRefs(...refs) {
  return (node) => {
    let hasCleanup = false;
    const cleanups = refs.map((ref) => {
      const cleanup = setRef(ref, node);
      if (!hasCleanup && typeof cleanup == "function") {
        hasCleanup = true;
      }
      return cleanup;
    });
    if (hasCleanup) {
      return () => {
        for (let i = 0; i < cleanups.length; i++) {
          const cleanup = cleanups[i];
          if (typeof cleanup == "function") {
            cleanup();
          } else {
            setRef(refs[i], null);
          }
        }
      };
    }
  };
}
// @__NO_SIDE_EFFECTS__
function createSlot(ownerName) {
  const SlotClone = /* @__PURE__ */ createSlotClone(ownerName);
  const Slot2 = React2.forwardRef((props, forwardedRef) => {
    const { children, ...slotProps } = props;
    const childrenArray = React2.Children.toArray(children);
    const slottable = childrenArray.find(isSlottable);
    if (slottable) {
      const newElement = slottable.props.children;
      const newChildren = childrenArray.map((child) => {
        if (child === slottable) {
          if (React2.Children.count(newElement) > 1) return React2.Children.only(null);
          return React2.isValidElement(newElement) ? newElement.props.children : null;
        } else {
          return child;
        }
      });
      return /* @__PURE__ */ jsx(SlotClone, { ...slotProps, ref: forwardedRef, children: React2.isValidElement(newElement) ? React2.cloneElement(newElement, void 0, newChildren) : null });
    }
    return /* @__PURE__ */ jsx(SlotClone, { ...slotProps, ref: forwardedRef, children });
  });
  Slot2.displayName = `${ownerName}.Slot`;
  return Slot2;
}
var Slot = /* @__PURE__ */ createSlot("Slot");
// @__NO_SIDE_EFFECTS__
function createSlotClone(ownerName) {
  const SlotClone = React2.forwardRef((props, forwardedRef) => {
    const { children, ...slotProps } = props;
    if (React2.isValidElement(children)) {
      const childrenRef = getElementRef(children);
      const props2 = mergeProps(slotProps, children.props);
      if (children.type !== React2.Fragment) {
        props2.ref = forwardedRef ? composeRefs(forwardedRef, childrenRef) : childrenRef;
      }
      return React2.cloneElement(children, props2);
    }
    return React2.Children.count(children) > 1 ? React2.Children.only(null) : null;
  });
  SlotClone.displayName = `${ownerName}.SlotClone`;
  return SlotClone;
}
var SLOTTABLE_IDENTIFIER = Symbol("radix.slottable");
function isSlottable(child) {
  return React2.isValidElement(child) && typeof child.type === "function" && "__radixId" in child.type && child.type.__radixId === SLOTTABLE_IDENTIFIER;
}
function mergeProps(slotProps, childProps) {
  const overrideProps = { ...childProps };
  for (const propName in childProps) {
    const slotPropValue = slotProps[propName];
    const childPropValue = childProps[propName];
    const isHandler = /^on[A-Z]/.test(propName);
    if (isHandler) {
      if (slotPropValue && childPropValue) {
        overrideProps[propName] = (...args) => {
          const result = childPropValue(...args);
          slotPropValue(...args);
          return result;
        };
      } else if (slotPropValue) {
        overrideProps[propName] = slotPropValue;
      }
    } else if (propName === "style") {
      overrideProps[propName] = { ...slotPropValue, ...childPropValue };
    } else if (propName === "className") {
      overrideProps[propName] = [slotPropValue, childPropValue].filter(Boolean).join(" ");
    }
  }
  return { ...slotProps, ...overrideProps };
}
function getElementRef(element) {
  let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
  let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.ref;
  }
  getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
  mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.props.ref;
  }
  return element.props.ref || element.ref;
}
var falsyToString = (value) => typeof value === "boolean" ? `${value}` : value === 0 ? "0" : value;
var cx = clsx;
var cva = (base, config) => (props) => {
  var _config_compoundVariants;
  if ((config === null || config === void 0 ? void 0 : config.variants) == null) return cx(base, props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
  const { variants, defaultVariants } = config;
  const getVariantClassNames = Object.keys(variants).map((variant) => {
    const variantProp = props === null || props === void 0 ? void 0 : props[variant];
    const defaultVariantProp = defaultVariants === null || defaultVariants === void 0 ? void 0 : defaultVariants[variant];
    if (variantProp === null) return null;
    const variantKey = falsyToString(variantProp) || falsyToString(defaultVariantProp);
    return variants[variant][variantKey];
  });
  const propsWithoutUndefined = props && Object.entries(props).reduce((acc, param) => {
    let [key, value] = param;
    if (value === void 0) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
  const getCompoundVariantClassNames = config === null || config === void 0 ? void 0 : (_config_compoundVariants = config.compoundVariants) === null || _config_compoundVariants === void 0 ? void 0 : _config_compoundVariants.reduce((acc, param) => {
    let { class: cvClass, className: cvClassName, ...compoundVariantOptions } = param;
    return Object.entries(compoundVariantOptions).every((param2) => {
      let [key, value] = param2;
      return Array.isArray(value) ? value.includes({
        ...defaultVariants,
        ...propsWithoutUndefined
      }[key]) : {
        ...defaultVariants,
        ...propsWithoutUndefined
      }[key] === value;
    }) ? [
      ...acc,
      cvClass,
      cvClassName
    ] : acc;
  }, []);
  return cx(base, getVariantClassNames, getCompoundVariantClassNames, props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
};
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
var buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-blue-600 text-white hover:bg-blue-700",
        secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "default"
    }
  }
);
var Button = React2__default.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsx(
      Comp,
      {
        className: cn(buttonVariants({ variant, size, className })),
        ref,
        ...props
      }
    );
  }
);
Button.displayName = "Button";

// ../config/src/donation.ts
var DONATION_CONFIG = {
  kofi: {
    username: process.env.NEXT_PUBLIC_KOFI_USERNAME || "your-kofi-username",
    enabled: process.env.NEXT_PUBLIC_KOFI_ENABLED === "true" || false
    // Default to false for compliance
  }
  // Other donation settings can be added here
};
var KofiButton = ({
  text = "Support on Ko-fi",
  color = "#29abe0",
  hideDonateText = false
}) => {
  if (!DONATION_CONFIG.kofi.enabled) {
    return /* @__PURE__ */ jsx("div", { className: "text-center py-4", children: /* @__PURE__ */ jsx("p", { className: "text-gray-600 italic", children: "Donations are currently disabled to maintain compliance with unemployment benefit regulations." }) });
  }
  return /* @__PURE__ */ jsx("div", { className: "kofi-button-container", children: /* @__PURE__ */ jsx(
    "a",
    {
      href: `https://ko-fi.com/${DONATION_CONFIG.kofi.username}`,
      target: "_blank",
      rel: "noopener noreferrer",
      className: "inline-block",
      children: /* @__PURE__ */ jsx(
        "img",
        {
          height: "36",
          style: { border: "0px", height: "36px" },
          src: "https://storage.ko-fi.com/cdn/kofi3.png?v=3",
          alt: text,
          title: text
        }
      )
    }
  ) });
};
function RickAndMortyLanding() {
  const [isSchwifty, setIsSchwifty] = useState(false);
  const handleSchwiftyClick = () => {
    setIsSchwifty(true);
    setTimeout(() => setIsSchwifty(false), 2e3);
  };
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gradient-to-b from-gray-900 to-purple-900 text-white", children: [
    /* @__PURE__ */ jsxs("section", { className: "relative py-20 px-4 text-center", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-black opacity-50" }),
      /* @__PURE__ */ jsxs("div", { className: "relative z-10 max-w-6xl mx-auto", children: [
        /* @__PURE__ */ jsx("h1", { className: `text-5xl md:text-7xl font-bold mb-6 ${isSchwifty ? "animate-bounce" : ""}`, children: "RICK AND MORTY" }),
        /* @__PURE__ */ jsx("p", { className: "text-xl md:text-2xl mb-8 max-w-3xl mx-auto", children: "Explore the infinite multiverse of the beloved animated series. Discover characters, episodes, and dive deep into the adventures of the genius but alcoholic scientist Rick Sanchez and his good-hearted but fretful grandson Morty." }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row justify-center gap-4 mb-10", children: [
          /* @__PURE__ */ jsx(
            Button,
            {
              onClick: handleSchwiftyClick,
              variant: "primary",
              className: "bg-green-600 hover:bg-green-700 text-lg py-3 px-8",
              children: isSchwifty ? "SCHWIFTY!" : "Get Schwifty"
            }
          ),
          /* @__PURE__ */ jsx(
            Button,
            {
              variant: "secondary",
              asChild: true,
              className: "bg-blue-600 hover:bg-blue-700 text-lg py-3 px-8",
              children: /* @__PURE__ */ jsx("a", { href: "/characters", children: "Explore Characters" })
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "py-16 px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-center mb-12", children: "Explore the Multiverse" }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-gray-800 bg-opacity-50 p-6 rounded-lg text-center", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-4 text-blue-400", children: "Characters" }),
          /* @__PURE__ */ jsx("p", { className: "mb-4", children: "Meet the diverse cast of characters from across the multiverse, including the Smith family, Citadel dwellers, and countless alien species." }),
          /* @__PURE__ */ jsx(Button, { variant: "secondary", asChild: true, children: /* @__PURE__ */ jsx("a", { href: "/characters", children: "Browse Characters" }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-gray-800 bg-opacity-50 p-6 rounded-lg text-center", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-4 text-purple-400", children: "Episodes" }),
          /* @__PURE__ */ jsx("p", { className: "mb-4", children: "Explore episode guides with summaries, trivia, and connections to the broader Rick and Morty universe." }),
          /* @__PURE__ */ jsx(Button, { variant: "secondary", disabled: true, children: "Coming Soon" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-gray-800 bg-opacity-50 p-6 rounded-lg text-center", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-4 text-yellow-400", children: "Locations" }),
          /* @__PURE__ */ jsx("p", { className: "mb-4", children: "Discover the vast array of locations across the multiverse, from the Citadel of Ricks to the Plumbus dimension." }),
          /* @__PURE__ */ jsx(Button, { variant: "secondary", disabled: true, children: "Coming Soon" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-16 px-4 bg-gray-800 bg-opacity-30", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto text-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-6", children: "About This Fan Project" }),
      /* @__PURE__ */ jsx("p", { className: "text-lg mb-6", children: "This site is an unofficial fan project created to celebrate the Rick and Morty universe. All content remains the property of their respective copyright holders." }),
      /* @__PURE__ */ jsxs("div", { className: "mt-8 p-6 bg-gray-900 rounded-lg inline-block", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-4", children: "Support This Project" }),
        /* @__PURE__ */ jsx("p", { className: "mb-4", children: "This site is maintained to remain compatible with Spanish unemployment benefits regulations. Donations help cover hosting and domain expenses only." }),
        /* @__PURE__ */ jsx(KofiButton, {})
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-16 px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto text-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-8", children: "Fun Facts" }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-gray-800 bg-opacity-50 p-6 rounded-lg", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-yellow-400 mb-2", children: "Infinite Multiverse" }),
          /* @__PURE__ */ jsx("p", { children: "There are infinite timelines and realities in the Rick and Morty universe, each with its own version of characters." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-gray-800 bg-opacity-50 p-6 rounded-lg", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-green-400 mb-2", children: "Plumbus" }),
          /* @__PURE__ */ jsx("p", { children: "A Plumbus is a multi-use tool that's soft, yet firm, and must be used in a specific sequence." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-gray-800 bg-opacity-50 p-6 rounded-lg", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-blue-400 mb-2", children: "C-137" }),
          /* @__PURE__ */ jsx("p", { children: "Rick C-137 is from dimension C-137, which was destroyed by a Cronenberg invasion." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-gray-800 bg-opacity-50 p-6 rounded-lg", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-purple-400 mb-2", children: "Get Schwifty" }),
          /* @__PURE__ */ jsx("p", { children: 'The song "Get Schwifty" won an Emmy for Outstanding Original Music and Lyrics.' })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("footer", { className: "py-8 px-4 border-t border-gray-700", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto text-center text-sm text-gray-400", children: [
      /* @__PURE__ */ jsxs("p", { className: "mb-2", children: [
        /* @__PURE__ */ jsx("strong", { children: "Disclaimer:" }),
        " This site is an unofficial fan site and is not endorsed by, sponsored by, or affiliated with Adult Swim, Williams Street, or any other copyright holders of Rick and Morty."
      ] }),
      /* @__PURE__ */ jsx("p", { children: "All character names, images, and related materials are the property of their respective copyright holders." })
    ] }) })
  ] });
}

export { RickAndMortyLanding };
//# sourceMappingURL=index.mjs.map
//# sourceMappingURL=index.mjs.map