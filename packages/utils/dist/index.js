'use strict';

var clsx = require('clsx');
var tailwindMerge = require('tailwind-merge');

// src/index.ts
function cn(...inputs) {
  return tailwindMerge.twMerge(clsx.clsx(inputs));
}

exports.cn = cn;
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map