"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { CharacterCard } from '../character-card';
import { CharacterSearch } from '../character-search';
export function CharacterList({ data, searchParams }) {
    if (!data) {
        return (_jsx("div", { className: "min-h-screen flex items-center justify-center", children: _jsx("p", { className: "text-xl text-gray-500", children: "No characters found" }) }));
    }
    const { results: characters, info } = data.characters;
    const currentPage = searchParams.page ? parseInt(searchParams.page) : 1;
    const name = searchParams.search || null;
    const status = searchParams.status || null;
    const species = searchParams.species || null;
    const gender = searchParams.gender || null;
    const location = searchParams.location || null;
    const origin = searchParams.origin || null;
    return (_jsx("div", { className: "min-h-screen bg-gradient-to-b from-gray-900 to-purple-900 py-12 px-4", children: _jsxs("div", { className: "max-w-7xl mx-auto", children: [_jsx("h1", { className: "text-4xl md:text-5xl font-bold text-white text-center mb-8", children: "Rick and Morty Characters" }), _jsx(CharacterSearch, { initialSearch: name || '', initialStatus: status || '', initialSpecies: species || '', initialGender: gender || '', initialLocation: location || '', initialOrigin: origin || '' }), _jsx("div", { className: "mb-4", children: _jsxs("p", { className: "text-gray-300 text-center", children: ["Showing ", characters.length, " of ", info.count, " characters"] }) }), _jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12", children: characters.map((character) => (_jsx(CharacterCard, { character: character }, character.id))) }), _jsxs("div", { className: "flex justify-center items-center gap-4 py-8", children: [info.prev && (_jsx("a", { href: `?page=${info.prev}${name ? `&search=${name}` : ''}${status ? `&status=${status}` : ''}${species ? `&species=${species}` : ''}${gender ? `&gender=${gender}` : ''}${location ? `&location=${location}` : ''}${origin ? `&origin=${origin}` : ''}`, className: "px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors", children: "\u2190 Previous" })), _jsxs("span", { className: "text-white text-lg font-medium px-4", children: ["Page ", currentPage, " of ", info.pages] }), info.next && (_jsx("a", { href: `?page=${info.next}${name ? `&search=${name}` : ''}${status ? `&status=${status}` : ''}${species ? `&species=${species}` : ''}${gender ? `&gender=${gender}` : ''}${location ? `&location=${location}` : ''}${origin ? `&origin=${origin}` : ''}`, className: "px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors", children: "Next \u2192" }))] })] }) }));
}
//# sourceMappingURL=index.js.map