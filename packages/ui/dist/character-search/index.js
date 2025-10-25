'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
export function CharacterSearch({ initialSearch = '', initialStatus = '', initialSpecies = '', initialGender = '', initialLocation = '', initialOrigin = '', }) {
    const [search, setSearch] = useState(initialSearch);
    const [status, setStatus] = useState(initialStatus);
    const [species, setSpecies] = useState(initialSpecies);
    const [gender, setGender] = useState(initialGender);
    const [location, setLocation] = useState(initialLocation);
    const [origin, setOrigin] = useState(initialOrigin);
    const handleSubmit = (e) => {
        e.preventDefault();
        const params = new URLSearchParams();
        if (search)
            params.set('search', search);
        if (status)
            params.set('status', status);
        if (species)
            params.set('species', species);
        if (gender)
            params.set('gender', gender);
        if (location)
            params.set('location', location);
        if (origin)
            params.set('origin', origin);
        window.location.href = `/characters?${params.toString()}`;
    };
    const handleReset = () => {
        setSearch('');
        setStatus('');
        setSpecies('');
        setGender('');
        setLocation('');
        setOrigin('');
        window.location.href = '/characters';
    };
    return (_jsxs("div", { className: "bg-gray-800 bg-opacity-80 rounded-lg p-6 mb-8 shadow-lg", children: [_jsx("h2", { className: "text-2xl font-bold text-white mb-4", children: "Search & Filter" }), _jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [_jsxs("div", { children: [_jsx("label", { htmlFor: "search", className: "block text-sm font-medium text-gray-300 mb-2", children: "Character Name" }), _jsx("input", { type: "text", id: "search", value: search, onChange: (e) => setSearch(e.target.value), placeholder: "Rick, Morty, Summer...", className: "w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" })] }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4", children: [_jsxs("div", { children: [_jsx("label", { htmlFor: "status", className: "block text-sm font-medium text-gray-300 mb-2", children: "Status" }), _jsxs("select", { id: "status", value: status, onChange: (e) => setStatus(e.target.value), className: "w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent", children: [_jsx("option", { value: "", children: "All" }), _jsx("option", { value: "alive", children: "Alive" }), _jsx("option", { value: "dead", children: "Dead" }), _jsx("option", { value: "unknown", children: "Unknown" })] })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "species", className: "block text-sm font-medium text-gray-300 mb-2", children: "Species" }), _jsx("input", { type: "text", id: "species", value: species, onChange: (e) => setSpecies(e.target.value), placeholder: "Human, Alien...", className: "w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "gender", className: "block text-sm font-medium text-gray-300 mb-2", children: "Gender" }), _jsxs("select", { id: "gender", value: gender, onChange: (e) => setGender(e.target.value), className: "w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent", children: [_jsx("option", { value: "", children: "All" }), _jsx("option", { value: "male", children: "Male" }), _jsx("option", { value: "female", children: "Female" }), _jsx("option", { value: "genderless", children: "Genderless" }), _jsx("option", { value: "unknown", children: "Unknown" })] })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "location", className: "block text-sm font-medium text-gray-300 mb-2", children: "Current Location" }), _jsx("input", { type: "text", id: "location", value: location, onChange: (e) => setLocation(e.target.value), placeholder: "Earth, Citadel...", className: "w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "origin", className: "block text-sm font-medium text-gray-300 mb-2", children: "Origin" }), _jsx("input", { type: "text", id: "origin", value: origin, onChange: (e) => setOrigin(e.target.value), placeholder: "Earth, Dimension...", className: "w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" })] })] }), _jsxs("div", { className: "flex gap-4 pt-2", children: [_jsx("button", { type: "submit", className: "flex-1 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800", children: "\uD83D\uDD0D Search" }), _jsx("button", { type: "button", onClick: handleReset, className: "px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white font-semibold rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-800", children: "\u2715 Clear" })] })] }), (search || status || species || gender || location || origin) && (_jsxs("div", { className: "mt-4 pt-4 border-t border-gray-700", children: [_jsx("p", { className: "text-sm text-gray-400 mb-2", children: "Active filters:" }), _jsxs("div", { className: "flex flex-wrap gap-2", children: [search && (_jsxs("span", { className: "px-3 py-1 bg-blue-600 bg-opacity-50 text-blue-200 rounded-full text-sm", children: ["Name: ", search] })), status && (_jsxs("span", { className: "px-3 py-1 bg-green-600 bg-opacity-50 text-green-200 rounded-full text-sm", children: ["Status: ", status] })), species && (_jsxs("span", { className: "px-3 py-1 bg-purple-600 bg-opacity-50 text-purple-200 rounded-full text-sm", children: ["Species: ", species] })), gender && (_jsxs("span", { className: "px-3 py-1 bg-pink-600 bg-opacity-50 text-pink-200 rounded-full text-sm", children: ["Gender: ", gender] })), location && (_jsxs("span", { className: "px-3 py-1 bg-yellow-600 bg-opacity-50 text-yellow-200 rounded-full text-sm", children: ["Current Location: ", location] })), origin && (_jsxs("span", { className: "px-3 py-1 bg-orange-600 bg-opacity-50 text-orange-200 rounded-full text-sm", children: ["Origin: ", origin] }))] })] }))] }));
}
//# sourceMappingURL=index.js.map