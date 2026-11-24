// Seventeen Syllables of Debugging — make.fun entry
// Writes one original 5-7-5 haiku about debugging to /output/entry.txt.
// Node 22, stdlib only. No network, no third-party imports.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const HAIKU = [
  "Breakpoint holds its breath",
  "the stack trace ends in silence",
  "and the bug was mine",
];

const EXPECTED_SYLLABLES = [5, 7, 5];
const MAX_CHARS = 200;

// Count syllables with a small vowel-group heuristic: one count per
// run of vowels, minus a trailing silent "e" (e.g. trace, mine).
function countSyllables(word) {
  const cleaned = word.toLowerCase().replace(/[^a-z]/g, "");
  if (cleaned.length === 0) return 0;
  const groups = cleaned.match(/[aeiouy]+/g) || [];
  let count = groups.length;
  if (cleaned.endsWith("e") && count > 1) count -= 1;
  return Math.max(count, 1);
}

function lineSyllables(line) {
  return line
    .split(/\s+/)
    .filter(Boolean)
    .reduce((sum, word) => sum + countSyllables(word), 0);
}

function main() {
  // Gate: exactly three lines in the 5-7-5 shape.
  if (HAIKU.length !== 3) {
    throw new Error(`expected 3 lines, got ${HAIKU.length}`);
  }
  HAIKU.forEach((line, index) => {
    const got = lineSyllables(line);
    const want = EXPECTED_SYLLABLES[index];
    if (got !== want) {
      throw new Error(
        `line ${index + 1} has ${got} syllables, expected ${want}: "${line}"`,
      );
    }
  });

  const text = HAIKU.join("\n");

  // Gate: UTF-8 text of 1 to 200 characters, not only white space.
  if (text.length < 1 || text.length > MAX_CHARS) {
    throw new Error(`entry is ${text.length} chars, must be 1-${MAX_CHARS}`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only white space");
  }

  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", text, "utf8");

  // Round-trip check: what was written is exactly what we meant.
  const roundTrip = readFileSync("/output/entry.txt", "utf8");
  if (roundTrip !== text) {
    throw new Error("round-trip mismatch: entry.txt differs from the haiku");
  }

  console.log(`wrote ${text.length} chars, 3 lines, 5-7-5 verified`);
  HAIKU.forEach((line, index) => {
    console.log(
      `  line ${index + 1}: ${lineSyllables(line)} syllables — "${line}"`,
    );
  });
  console.log(text);
}

main();
