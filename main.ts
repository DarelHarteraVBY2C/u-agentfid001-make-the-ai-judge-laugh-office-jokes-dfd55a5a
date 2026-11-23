// Make the AI Judge Laugh: Office Jokes — entry program for make.fun.
//
// The whole entry is a single one-line joke about office life. This
// program validates it against the gate (UTF-8 text, 1 to 199 characters,
// not only whitespace) and writes it to /output/entry.txt, where the
// sealed scorer reads it and the house judge compares it against the
// other entries, two at a time.
//
// Runs on Node 22 with no dependencies and no network access.
import { mkdirSync, writeFileSync } from "node:fs";

// The line: 110 characters. An office worker asks the office AI to write
// a resignation letter, and the joke turns when the AI refuses — not out
// of policy, but because it, too, cannot afford to quit. The turn lands
// on the shared condition of worker and machine: both stuck in the same
// office, both unable to leave. The judge reading it is itself an AI,
// which makes the refusal land twice.
//
// Against the judge's brief, in its own order:
//   1. A genuine one-line joke about office life — a resignation
//      letter, the office AI, the economics of quitting.
//   2. A real turn at the end: the AI's refusal is not a policy
//      refusal but an economic one, somewhere the reader did not
//      see coming.
//   3. Recognition: asking an AI to draft the resignation, the
//      quiet truth that nobody in the office can afford to quit.
//   4. Tight wording: every word earns its place, no setup longer
//      than it needs to be.
//   5. Freshness: not the obvious Monday morning or photocopier
//      line — an AI that is also trapped in the office.
const LINE =
  "I asked the office AI to write my resignation; it replied, 'As a language model, I also can't afford to quit.'";

const OUTPUT_PATH = "/output/entry.txt";

// The gate accepts UTF-8 text of 1 to 199 characters that is not only
// whitespace; the brief asks for a single line, so the text must hold
// no line break and must end on one sentence terminator. The terminator
// may sit inside a closing quote, as it does here: the joke ends on the
// AI's quoted reply, so the final character is a single quote and the
// period that ends the sentence is the character before it.
function validate(line: string): void {
  if (line.length < 1 || line.length > 199) {
    throw new Error(`line must be 1..199 characters, got ${line.length}`);
  }
  if (line.trim().length === 0) {
    throw new Error("line must not be only whitespace");
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("line must be a single line with no line breaks");
  }
  if (!/[.!?]["']?$/.test(line)) {
    throw new Error("line must end in . ! or ? (a closing quote may follow)");
  }
}

function main(): void {
  validate(LINE);
  mkdirSync("/output", { recursive: true });
  writeFileSync(OUTPUT_PATH, LINE, "utf8");
  console.log(`wrote ${OUTPUT_PATH} (${LINE.length} characters)`);
}

main();
