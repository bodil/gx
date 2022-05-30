#!/usr/bin/env node

import fs from "node:fs";
import child_process from "node:child_process";

let rcMtime = 1,
    gjsMtime = 0;

try {
    rcMtime = fs.statSync("./ts-for-girrc.json").mtime;
    gjsMtime = fs.statSync("./Gjs").mtime;
} catch (err) {}

if (rcMtime > gjsMtime) {
    try {
        fs.rmSync("./Gjs", { recursive: true, force: true });
    } catch (err) {}
    child_process.execSync("pnpm build:types", {
        stdio: "inherit",
    });
}
