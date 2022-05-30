#!/usr/bin/env node

import fs from "node:fs";

const files = fs.readdirSync("Gjs").filter((name) => /\d\.js$/.exec(name));

let source = "";
const modules = [];

for (const path of files) {
    const baseMatch = /^([A-Za-z0-9]+)-/.exec(path);
    if (baseMatch === null) {
        continue;
    }
    const base = baseMatch[1];
    source += `import { ${base} } from "./Gjs/${path}";\n`;
    modules.push(base);
}

source += `export { ${modules.join(", ")} };
import { Package, System, byteArray, Lang, gettext, Format, Mainloop, Signals } from "./Gjs/Gjs.js";
export { Package, System, byteArray, Lang, gettext, Format, Mainloop, Signals };
import _imports from "./Gjs/index.js";
export default _imports;
`;

fs.writeFileSync("index.ts", source);
