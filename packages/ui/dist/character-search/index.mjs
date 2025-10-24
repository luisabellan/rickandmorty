"use client";
import { useState } from 'react';
import { jsxs, jsx } from 'react/jsx-runtime';

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

export { CharacterSearch };
//# sourceMappingURL=index.mjs.map
//# sourceMappingURL=index.mjs.map