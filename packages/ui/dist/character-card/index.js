"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export function CharacterCard({ character }) {
    const statusColor = {
        'Alive': 'text-green-400',
        'Dead': 'text-red-400',
        'unknown': 'text-gray-400',
    }[character.status] || 'text-gray-400';
    return (_jsxs("div", { className: "bg-gray-800 bg-opacity-80 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105", children: [_jsxs("div", { className: "relative h-64 w-full", children: [_jsx("img", { src: character.image, alt: character.name, className: "w-full h-full object-cover" }), _jsx("div", { className: `absolute top-3 right-3 px-3 py-1 rounded-full ${statusColor} bg-black bg-opacity-70 font-semibold text-sm`, children: character.status })] }), _jsxs("div", { className: "p-4 space-y-2", children: [_jsx("h3", { className: "text-xl font-bold text-white mb-3 truncate", children: character.name }), _jsxs("div", { className: "space-y-1 text-sm", children: [_jsxs("p", { className: "text-gray-300", children: [_jsx("span", { className: "text-gray-400", children: "Species:" }), ' ', _jsx("span", { className: "text-white font-medium", children: character.species })] }), _jsxs("p", { className: "text-gray-300", children: [_jsx("span", { className: "text-gray-400", children: "Gender:" }), ' ', _jsx("span", { className: "text-white font-medium", children: character.gender })] }), _jsxs("p", { className: "text-gray-300", children: [_jsx("span", { className: "text-gray-400", children: "Location:" }), ' ', _jsx("span", { className: "text-white font-medium truncate", children: character.location?.name || 'Unknown' })] }), character.type && character.type.trim() !== '' && (_jsxs("p", { className: "text-gray-300", children: [_jsx("span", { className: "text-gray-400", children: "Type:" }), ' ', _jsx("span", { className: "text-white font-medium", children: character.type })] }))] })] })] }));
}
//# sourceMappingURL=index.js.map