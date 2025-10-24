'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { DONATION_CONFIG } from '@rickandmorty/config/donation';
export const KofiButton = ({ text = 'Support on Ko-fi', color = '#29abe0', hideDonateText = false }) => {
    if (!DONATION_CONFIG.kofi.enabled) {
        return (_jsx("div", { className: "text-center py-4", children: _jsx("p", { className: "text-gray-600 italic", children: "Donations are currently disabled to maintain compliance with unemployment benefit regulations." }) }));
    }
    return (_jsx("div", { className: "kofi-button-container", children: _jsx("a", { href: `https://ko-fi.com/${DONATION_CONFIG.kofi.username}`, target: "_blank", rel: "noopener noreferrer", className: "inline-block", children: _jsx("img", { height: "36", style: { border: '0px', height: '36px' }, src: "https://storage.ko-fi.com/cdn/kofi3.png?v=3", alt: text, title: text }) }) }));
};
//# sourceMappingURL=index.js.map