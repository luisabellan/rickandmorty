"use client";
import { jsx, jsxs } from 'react/jsx-runtime';
import { useState } from 'react';

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

export { CharacterList };
//# sourceMappingURL=index.mjs.map
//# sourceMappingURL=index.mjs.map