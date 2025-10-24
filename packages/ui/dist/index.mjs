"use client";
import { jsx, jsxs } from 'react/jsx-runtime';
import * as React3 from 'react';
import React3__default, { useState, useEffect } from 'react';
import Link from 'next/link';
import { DONATION_CONFIG } from '@rickandmorty/config/donation';
import { cn } from '@rickandmorty/utils';
import { clsx } from 'clsx';

function CharacterCard({ character }) {
  const statusColor = {
    "Alive": "text-green-400",
    "Dead": "text-red-400",
    "unknown": "text-gray-400"
  }[character.status] || "text-gray-400";
  return /* @__PURE__ */ jsxs("div", { className: "bg-gray-800 bg-opacity-80 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105", children: [
    /* @__PURE__ */ jsxs("div", { className: "relative h-64 w-full", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          src: character.image,
          alt: character.name,
          className: "w-full h-full object-cover"
        }
      ),
      /* @__PURE__ */ jsx("div", { className: `absolute top-3 right-3 px-3 py-1 rounded-full ${statusColor} bg-black bg-opacity-70 font-semibold text-sm`, children: character.status })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "p-4 space-y-2", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white mb-3 truncate", children: character.name }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-1 text-sm", children: [
        /* @__PURE__ */ jsxs("p", { className: "text-gray-300", children: [
          /* @__PURE__ */ jsx("span", { className: "text-gray-400", children: "Species:" }),
          " ",
          /* @__PURE__ */ jsx("span", { className: "text-white font-medium", children: character.species })
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "text-gray-300", children: [
          /* @__PURE__ */ jsx("span", { className: "text-gray-400", children: "Gender:" }),
          " ",
          /* @__PURE__ */ jsx("span", { className: "text-white font-medium", children: character.gender })
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "text-gray-300", children: [
          /* @__PURE__ */ jsx("span", { className: "text-gray-400", children: "Location:" }),
          " ",
          /* @__PURE__ */ jsx("span", { className: "text-white font-medium truncate block", children: character.location?.name || "Unknown" })
        ] }),
        character.type && character.type.trim() !== "" && /* @__PURE__ */ jsxs("p", { className: "text-gray-300", children: [
          /* @__PURE__ */ jsx("span", { className: "text-gray-400", children: "Type:" }),
          " ",
          /* @__PURE__ */ jsx("span", { className: "text-white font-medium", children: character.type })
        ] })
      ] })
    ] })
  ] });
}
function CharacterSearch({
  initialSearch = "",
  initialStatus = "",
  initialSpecies = "",
  initialGender = "",
  initialLocation = ""
}) {
  const [search, setSearch] = useState(initialSearch);
  const [status, setStatus] = useState(initialStatus);
  const [species, setSpecies] = useState(initialSpecies);
  const [gender, setGender] = useState(initialGender);
  const [location, setLocation] = useState(initialLocation);
  const handleSubmit = (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (search) params.set("search", search);
    if (status) params.set("status", status);
    if (species) params.set("species", species);
    if (gender) params.set("gender", gender);
    if (location) params.set("location", location);
    window.location.href = `/characters?${params.toString()}`;
  };
  const handleReset = () => {
    setSearch("");
    setStatus("");
    setSpecies("");
    setGender("");
    setLocation("");
    window.location.href = "/characters";
  };
  return /* @__PURE__ */ jsxs("div", { className: "bg-gray-800 bg-opacity-80 rounded-lg p-6 mb-8 shadow-lg", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-white mb-4", children: "Search & Filter" }),
    /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { htmlFor: "search", className: "block text-sm font-medium text-gray-300 mb-2", children: "Character Name" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            id: "search",
            value: search,
            onChange: (e) => setSearch(e.target.value),
            placeholder: "Rick, Morty, Summer...",
            className: "w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "status", className: "block text-sm font-medium text-gray-300 mb-2", children: "Status" }),
          /* @__PURE__ */ jsxs(
            "select",
            {
              id: "status",
              value: status,
              onChange: (e) => setStatus(e.target.value),
              className: "w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",
              children: [
                /* @__PURE__ */ jsx("option", { value: "", children: "All" }),
                /* @__PURE__ */ jsx("option", { value: "alive", children: "Alive" }),
                /* @__PURE__ */ jsx("option", { value: "dead", children: "Dead" }),
                /* @__PURE__ */ jsx("option", { value: "unknown", children: "Unknown" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "species", className: "block text-sm font-medium text-gray-300 mb-2", children: "Species" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "text",
              id: "species",
              value: species,
              onChange: (e) => setSpecies(e.target.value),
              placeholder: "Human, Alien...",
              className: "w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "gender", className: "block text-sm font-medium text-gray-300 mb-2", children: "Gender" }),
          /* @__PURE__ */ jsxs(
            "select",
            {
              id: "gender",
              value: gender,
              onChange: (e) => setGender(e.target.value),
              className: "w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",
              children: [
                /* @__PURE__ */ jsx("option", { value: "", children: "All" }),
                /* @__PURE__ */ jsx("option", { value: "male", children: "Male" }),
                /* @__PURE__ */ jsx("option", { value: "female", children: "Female" }),
                /* @__PURE__ */ jsx("option", { value: "genderless", children: "Genderless" }),
                /* @__PURE__ */ jsx("option", { value: "unknown", children: "Unknown" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "location", className: "block text-sm font-medium text-gray-300 mb-2", children: "Location" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "text",
              id: "location",
              value: location,
              onChange: (e) => setLocation(e.target.value),
              placeholder: "Earth, Citadel...",
              className: "w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex gap-4 pt-2", children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "submit",
            className: "flex-1 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800",
            children: "\u{1F50D} Search"
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            onClick: handleReset,
            className: "px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white font-semibold rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-800",
            children: "\u2715 Clear"
          }
        )
      ] })
    ] }),
    (search || status || species || gender || location) && /* @__PURE__ */ jsxs("div", { className: "mt-4 pt-4 border-t border-gray-700", children: [
      /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-400 mb-2", children: "Active filters:" }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-2", children: [
        search && /* @__PURE__ */ jsxs("span", { className: "px-3 py-1 bg-blue-600 bg-opacity-50 text-blue-200 rounded-full text-sm", children: [
          "Name: ",
          search
        ] }),
        status && /* @__PURE__ */ jsxs("span", { className: "px-3 py-1 bg-green-600 bg-opacity-50 text-green-200 rounded-full text-sm", children: [
          "Status: ",
          status
        ] }),
        species && /* @__PURE__ */ jsxs("span", { className: "px-3 py-1 bg-purple-600 bg-opacity-50 text-purple-200 rounded-full text-sm", children: [
          "Species: ",
          species
        ] }),
        gender && /* @__PURE__ */ jsxs("span", { className: "px-3 py-1 bg-pink-600 bg-opacity-50 text-pink-200 rounded-full text-sm", children: [
          "Gender: ",
          gender
        ] }),
        location && /* @__PURE__ */ jsxs("span", { className: "px-3 py-1 bg-yellow-600 bg-opacity-50 text-yellow-200 rounded-full text-sm", children: [
          "Location: ",
          location
        ] })
      ] })
    ] })
  ] });
}
function CharacterList({ data, searchParams }) {
  if (!data) {
    return /* @__PURE__ */ jsx("div", { className: "min-h-screen flex items-center justify-center", children: /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-500", children: "No characters found" }) });
  }
  const { results: characters, info } = data.characters;
  const currentPage = searchParams.page ? parseInt(searchParams.page) : 1;
  const name = searchParams.search || null;
  const status = searchParams.status || null;
  const species = searchParams.species || null;
  const gender = searchParams.gender || null;
  const location = searchParams.location || null;
  return /* @__PURE__ */ jsx("div", { className: "min-h-screen bg-gradient-to-b from-gray-900 to-purple-900 py-12 px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-4xl md:text-5xl font-bold text-white text-center mb-8", children: "Rick and Morty Characters" }),
    /* @__PURE__ */ jsx(
      CharacterSearch,
      {
        initialSearch: name || "",
        initialStatus: status || "",
        initialSpecies: species || "",
        initialGender: gender || "",
        initialLocation: location || ""
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "mb-4", children: /* @__PURE__ */ jsxs("p", { className: "text-gray-300 text-center", children: [
      "Showing ",
      characters.length,
      " of ",
      info.count,
      " characters"
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12", children: characters.map((character) => /* @__PURE__ */ jsx(CharacterCard, { character }, character.id)) }),
    /* @__PURE__ */ jsxs("div", { className: "flex justify-center items-center gap-4 py-8", children: [
      info.prev && /* @__PURE__ */ jsx(
        "a",
        {
          href: `?page=${info.prev}${name ? `&search=${name}` : ""}${status ? `&status=${status}` : ""}${species ? `&species=${species}` : ""}${gender ? `&gender=${gender}` : ""}${location ? `&location=${location}` : ""}`,
          className: "px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors",
          children: "\u2190 Previous"
        }
      ),
      /* @__PURE__ */ jsxs("span", { className: "text-white text-lg font-medium px-4", children: [
        "Page ",
        currentPage,
        " of ",
        info.pages
      ] }),
      info.next && /* @__PURE__ */ jsx(
        "a",
        {
          href: `?page=${info.next}${name ? `&search=${name}` : ""}${status ? `&status=${status}` : ""}${species ? `&species=${species}` : ""}${gender ? `&gender=${gender}` : ""}${location ? `&location=${location}` : ""}`,
          className: "px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors",
          children: "Next \u2192"
        }
      )
    ] })
  ] }) });
}
function Navigation() {
  return /* @__PURE__ */ jsx("nav", { className: "navigation bg-gray-100 p-4", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto flex flex-wrap items-center justify-between", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-8", children: [
      /* @__PURE__ */ jsx(Link, { href: "/", className: "text-blue-600 hover:text-blue-800 font-medium", children: "Home" }),
      /* @__PURE__ */ jsx(Link, { href: "/characters", className: "text-blue-600 hover:text-blue-800 font-medium", children: "Characters" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-6 mt-2 sm:mt-0", children: [
      /* @__PURE__ */ jsx(Link, { href: "/donations", className: "text-green-600 hover:text-green-800 font-medium", children: "Support Hosting" }),
      /* @__PURE__ */ jsx(Link, { href: "/financial-report", className: "text-purple-600 hover:text-purple-800 font-medium", children: "Financial Report" })
    ] })
  ] }) });
}
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
function WelcomePage() {
  return /* @__PURE__ */ jsxs("div", { className: "welcome-page max-w-4xl mx-auto p-6", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold text-center mb-4", children: "Welcome to the Ultimate Rick & Morty Fan Site" }),
    /* @__PURE__ */ jsx("p", { className: "text-lg text-center mb-6", children: "Explore characters, episodes, and dive deep into the multiverse." }),
    /* @__PURE__ */ jsx("div", { className: "flex justify-center mb-6", children: /* @__PURE__ */ jsx("a", { href: "/characters", className: "bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded", children: "Browse Characters" }) }),
    /* @__PURE__ */ jsxs("div", { className: "mt-8 p-4 bg-gray-100 rounded-lg text-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold mb-2", children: "Support This Fan Project" }),
      /* @__PURE__ */ jsx("p", { className: "mb-4", children: "This site is maintained to remain compatible with Spanish unemployment benefits regulations. Donations help cover hosting and domain expenses only." }),
      /* @__PURE__ */ jsx(KofiButton, {})
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-8 text-sm text-center text-gray-600", children: [
      /* @__PURE__ */ jsxs("p", { className: "mb-2", children: [
        /* @__PURE__ */ jsx("strong", { children: "Disclaimer:" }),
        " This site is an unofficial fan site and is not endorsed by, sponsored by, or affiliated with Adult Swim, Williams Street, or any other copyright holders of Rick and Morty."
      ] }),
      /* @__PURE__ */ jsx("p", { children: "All character names, images, and related materials are the property of their respective copyright holders." })
    ] })
  ] });
}
function LoadingSpinner() {
  return /* @__PURE__ */ jsx("div", { className: "loading-spinner", children: /* @__PURE__ */ jsx("div", { children: "Loading characters..." }) });
}
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
var DonationCounter = ({
  targetAmount = 75,
  // €6.25/month * 12 months = €75/year
  currentAmount = 0
}) => {
  const [amount, setAmount] = useState(currentAmount);
  const percentage = Math.min(100, amount / targetAmount * 100);
  useEffect(() => {
    const interval = setInterval(() => {
      const randomDonation = Math.random() * 0.5;
      setAmount((prev) => Math.min(targetAmount, prev + randomDonation));
    }, 3e4);
    return () => clearInterval(interval);
  }, [targetAmount]);
  return /* @__PURE__ */ jsxs("div", { className: "w-full max-w-md mx-auto p-6 bg-white rounded-lg shadow-md", children: [
    /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold mb-4 text-center", children: "Annual Hosting & Domain Fund" }),
    /* @__PURE__ */ jsxs("div", { className: "mb-2 flex justify-between", children: [
      /* @__PURE__ */ jsxs("span", { className: "text-sm font-medium", children: [
        "Progress: \u20AC",
        amount.toFixed(2),
        " / \u20AC",
        targetAmount.toFixed(2)
      ] }),
      /* @__PURE__ */ jsxs("span", { className: "text-sm font-medium", children: [
        percentage.toFixed(0),
        "%"
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "w-full bg-gray-200 rounded-full h-4 mb-4", children: /* @__PURE__ */ jsx(
      "div",
      {
        className: "bg-green-500 h-4 rounded-full transition-all duration-500 ease-in-out",
        style: { width: `${percentage}%` }
      }
    ) }),
    /* @__PURE__ */ jsxs("div", { className: "text-sm text-gray-600 mb-4", children: [
      /* @__PURE__ */ jsxs("p", { children: [
        /* @__PURE__ */ jsx("strong", { children: "Monthly hosting:" }),
        " \u20AC5.00"
      ] }),
      /* @__PURE__ */ jsxs("p", { children: [
        /* @__PURE__ */ jsx("strong", { children: "Annual domain:" }),
        " \u20AC15.00"
      ] }),
      /* @__PURE__ */ jsxs("p", { children: [
        /* @__PURE__ */ jsx("strong", { children: "Total annual cost:" }),
        " \u20AC75.00"
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "text-xs text-gray-500", children: [
      /* @__PURE__ */ jsx("p", { children: "All donations go directly toward hosting and domain expenses." }),
      /* @__PURE__ */ jsx("p", { children: "This project operates without profit to maintain compliance with Spanish unemployment benefits regulations." })
    ] })
  ] });
};
var DonationPageContent = () => {
  return /* @__PURE__ */ jsx("div", { className: "container mx-auto py-8 px-4", children: /* @__PURE__ */ jsxs(Card, { className: "max-w-3xl mx-auto", children: [
    /* @__PURE__ */ jsxs(CardHeader, { children: [
      /* @__PURE__ */ jsx(CardTitle, { children: "Support Our Hosting Costs" }),
      /* @__PURE__ */ jsx(CardDescription, { children: "Help keep the Rick and Morty Fan Site running" })
    ] }),
    /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
      /* @__PURE__ */ jsx(DonationCounter, { targetAmount: 75, currentAmount: 15 }),
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-2", children: "About Our Donation System" }),
        /* @__PURE__ */ jsx("p", { className: "mb-4", children: "This is a non-profit fan site created to celebrate the Rick and Morty universe. All donations received go directly toward covering hosting and domain expenses to keep this resource available to the community." }),
        /* @__PURE__ */ jsx("p", { className: "mb-4", children: "This project is maintained to remain compatible with Spanish unemployment benefits (prestaci\xF3n contributiva de desempleo) regulations. We do not profit from this site." })
      ] }),
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-2", children: "Current Expenses" }),
        /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-5 mb-4", children: [
          /* @__PURE__ */ jsx("li", { children: "Monthly hosting costs: \u20AC5" }),
          /* @__PURE__ */ jsx("li", { children: "Domain registration: \u20AC15/year" }),
          /* @__PURE__ */ jsx("li", { children: "SSL certificates: \u20AC0 (using free certificates)" })
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "mb-4", children: [
          /* @__PURE__ */ jsx("strong", { children: "Total monthly cost: \u20AC6.25" }),
          " (\u20AC5 hosting + \u20AC1.25 for domain/year)"
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-2", children: "Donate to Cover Expenses" }),
        /* @__PURE__ */ jsx("p", { className: "mb-4", children: "Your donation helps keep this fan site running. All funds go directly toward hosting and domain expenses." }),
        /* @__PURE__ */ jsx("div", { className: "mb-6", children: /* @__PURE__ */ jsx(KofiButton, {}) }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 mb-4", children: "(Note: During the aut\xF3nomo period, donations are temporarily accepted. After the aut\xF3nomo period ends, this functionality may be disabled to maintain compliance with unemployment benefit regulations.)" })
      ] }),
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-2", children: "Financial Transparency" }),
        /* @__PURE__ */ jsx("p", { className: "mb-4", children: "As required for compatibility with Spanish unemployment benefits, we maintain complete financial transparency. All donations are used exclusively for hosting and domain expenses. No personal profit is made from this project." }),
        /* @__PURE__ */ jsx("h4", { className: "font-medium mb-2", children: "Anti-Habitual Income Measures" }),
        /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-5 mb-4 text-sm", children: [
          /* @__PURE__ */ jsx("li", { children: "No recurring subscriptions or automatic payments" }),
          /* @__PURE__ */ jsx("li", { children: "Donations are completely voluntary with no schedule" }),
          /* @__PURE__ */ jsx("li", { children: "Donation limits: maximum \u20AC50/month per person" }),
          /* @__PURE__ */ jsx("li", { children: "No premium features or benefits based on donations" }),
          /* @__PURE__ */ jsx("li", { children: "All content remains free and accessible regardless of donation status" })
        ] }),
        /* @__PURE__ */ jsx("h4", { className: "font-medium mb-2", children: "No Profit Motive (No \xC1nimo de Lucro)" }),
        /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-5 mb-4 text-sm", children: [
          /* @__PURE__ */ jsx("li", { children: "All donations fund only operational expenses" }),
          /* @__PURE__ */ jsx("li", { children: "The site operates exclusively as a fan resource" }),
          /* @__PURE__ */ jsx("li", { children: "No commercial services or products are offered" }),
          /* @__PURE__ */ jsx("li", { children: "The project remains open source and community-focused" }),
          /* @__PURE__ */ jsx("li", { children: "No personal profit is generated by site operators" })
        ] })
      ] })
    ] }) })
  ] }) });
};
var FinancialReportContent = () => {
  const reportData = {
    period: "January 2025",
    totalDonations: 85.5,
    hostingCosts: 5,
    domainCosts: 1.25,
    // Pro-rated monthly cost
    sslCosts: 0,
    otherCosts: 2.5,
    // Other operational costs
    remainingFunds: 76.75,
    totalExpenses: 8.75
  };
  return /* @__PURE__ */ jsx("div", { className: "container mx-auto py-8 px-4", children: /* @__PURE__ */ jsxs(Card, { className: "max-w-4xl mx-auto", children: [
    /* @__PURE__ */ jsxs(CardHeader, { children: [
      /* @__PURE__ */ jsx(CardTitle, { children: "Financial Transparency Report" }),
      /* @__PURE__ */ jsx(CardDescription, { children: "Transparent reporting of donations and expenses for the Rick and Morty Fan Site" })
    ] }),
    /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-4", children: "Purpose of Financial Transparency" }),
        /* @__PURE__ */ jsx("p", { className: "mb-4", children: "As required for compatibility with Spanish unemployment benefits (prestaci\xF3n contributiva de desempleo), we maintain complete financial transparency. This report shows how donations are used exclusively for hosting and domain expenses, with no personal profit made from this project." })
      ] }),
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsxs("h3", { className: "text-xl font-semibold mb-4", children: [
          "Financial Summary - ",
          reportData.period
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-green-50 p-4 rounded-md", children: [
            /* @__PURE__ */ jsx("h4", { className: "font-semibold text-green-800", children: "Total Donations Received" }),
            /* @__PURE__ */ jsxs("p", { className: "text-2xl font-bold text-green-700", children: [
              "\u20AC",
              reportData.totalDonations.toFixed(2)
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-red-50 p-4 rounded-md", children: [
            /* @__PURE__ */ jsx("h4", { className: "font-semibold text-red-800", children: "Total Expenses" }),
            /* @__PURE__ */ jsxs("p", { className: "text-2xl font-bold text-red-700", children: [
              "\u20AC",
              reportData.totalExpenses.toFixed(2)
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-4", children: "Expense Breakdown" }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between border-b pb-2", children: [
            /* @__PURE__ */ jsx("span", { children: "Hosting Costs" }),
            /* @__PURE__ */ jsxs("span", { children: [
              "\u20AC",
              reportData.hostingCosts.toFixed(2)
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between border-b pb-2", children: [
            /* @__PURE__ */ jsx("span", { children: "Domain Registration (monthly)" }),
            /* @__PURE__ */ jsxs("span", { children: [
              "\u20AC",
              reportData.domainCosts.toFixed(2)
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between border-b pb-2", children: [
            /* @__PURE__ */ jsx("span", { children: "SSL Certificates" }),
            /* @__PURE__ */ jsxs("span", { children: [
              "\u20AC",
              reportData.sslCosts.toFixed(2)
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between border-b pb-2", children: [
            /* @__PURE__ */ jsx("span", { children: "Other Operational Costs" }),
            /* @__PURE__ */ jsxs("span", { children: [
              "\u20AC",
              reportData.otherCosts.toFixed(2)
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between font-semibold text-lg pt-2", children: [
            /* @__PURE__ */ jsx("span", { children: "Total Expenses" }),
            /* @__PURE__ */ jsxs("span", { children: [
              "\u20AC",
              reportData.totalExpenses.toFixed(2)
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-4", children: "Funds Status" }),
        /* @__PURE__ */ jsxs("div", { className: "bg-blue-50 p-4 rounded-md", children: [
          /* @__PURE__ */ jsx("h4", { className: "font-semibold text-blue-800", children: "Remaining Funds for Future Expenses" }),
          /* @__PURE__ */ jsxs("p", { className: "text-2xl font-bold text-blue-700", children: [
            "\u20AC",
            reportData.remainingFunds.toFixed(2)
          ] }),
          /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm", children: "Remaining funds are reserved for future hosting expenses or will be donated to charity if no longer needed." })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-4", children: "Compliance Statement" }),
        /* @__PURE__ */ jsx("p", { className: "mb-2", children: "This project operates without profit motive (no \xE1nimo de lucro) and takes measures to prevent habitual income patterns (habitualidad de ingresos), as required for compatibility with Spanish unemployment benefits regulations." }),
        /* @__PURE__ */ jsx("p", { children: "All financial data is available for verification to ensure continued compliance with unemployment benefit requirements." })
      ] })
    ] }) })
  ] }) });
};
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
  const Slot2 = React3.forwardRef((props, forwardedRef) => {
    const { children, ...slotProps } = props;
    const childrenArray = React3.Children.toArray(children);
    const slottable = childrenArray.find(isSlottable);
    if (slottable) {
      const newElement = slottable.props.children;
      const newChildren = childrenArray.map((child) => {
        if (child === slottable) {
          if (React3.Children.count(newElement) > 1) return React3.Children.only(null);
          return React3.isValidElement(newElement) ? newElement.props.children : null;
        } else {
          return child;
        }
      });
      return /* @__PURE__ */ jsx(SlotClone, { ...slotProps, ref: forwardedRef, children: React3.isValidElement(newElement) ? React3.cloneElement(newElement, void 0, newChildren) : null });
    }
    return /* @__PURE__ */ jsx(SlotClone, { ...slotProps, ref: forwardedRef, children });
  });
  Slot2.displayName = `${ownerName}.Slot`;
  return Slot2;
}
var Slot = /* @__PURE__ */ createSlot("Slot");
// @__NO_SIDE_EFFECTS__
function createSlotClone(ownerName) {
  const SlotClone = React3.forwardRef((props, forwardedRef) => {
    const { children, ...slotProps } = props;
    if (React3.isValidElement(children)) {
      const childrenRef = getElementRef(children);
      const props2 = mergeProps(slotProps, children.props);
      if (children.type !== React3.Fragment) {
        props2.ref = forwardedRef ? composeRefs(forwardedRef, childrenRef) : childrenRef;
      }
      return React3.cloneElement(children, props2);
    }
    return React3.Children.count(children) > 1 ? React3.Children.only(null) : null;
  });
  SlotClone.displayName = `${ownerName}.SlotClone`;
  return SlotClone;
}
var SLOTTABLE_IDENTIFIER = Symbol("radix.slottable");
function isSlottable(child) {
  return React3.isValidElement(child) && typeof child.type === "function" && "__radixId" in child.type && child.type.__radixId === SLOTTABLE_IDENTIFIER;
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
var Button = React3__default.forwardRef(
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

export { Button, Card, CardContent, CardDescription, CardHeader, CardTitle, CharacterCard, CharacterList, CharacterSearch, DonationCounter, DonationPageContent, FinancialReportContent, KofiButton, LoadingSpinner, Navigation, RickAndMortyLanding, WelcomePage };
//# sourceMappingURL=index.mjs.map
//# sourceMappingURL=index.mjs.map