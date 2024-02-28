import type { Path } from "nice-path";
import stripAnsiFromString from "strip-ansi";
import kleur from "kleur";
import stringDedent from "string-dedent";

kleur.enabled = true;

/**
 * De-indents (dedents) passed in strings
 *
 * From npm package [string-dedent](https://npm.im/string-dedent).
 */
export const dedent = stringDedent;

/**
 * Remove ANSI control characters from a string.
 *
 * From npm package [strip-ansi](https://npm.im/strip-ansi).
 */
export function stripAnsi(input: string | number | Path) {
  if (typeof input === "string") {
    return stripAnsiFromString(input);
  } else {
    return stripAnsiFromString(String(input));
  }
}

/**
 * Wrap a string in double quotes, and escape any double-quotes inside using `\"`.
 */
export const quote = (str: string | number | Path) => {
  if (typeof str !== "string") {
    str = String(str);
  }
  return JSON.stringify(str);
};

// Colors

/**
 * Wrap a string with the ANSI control characters that will make it black text
 * when printed to a terminal.
 *
 * From npm package [kleur](https://npm.im/kleur).
 */
export const black: (input: string | number | Path) => string =
  kleur.black as any;

/**
 * Wrap a string with the ANSI control characters that will make it red text
 * when printed to a terminal.
 *
 * From npm package [kleur](https://npm.im/kleur).
 */
export const red: (input: string | number | Path) => string = kleur.red as any;

/**
 * Wrap a string with the ANSI control characters that will make it green text
 * when printed to a terminal.
 *
 * From npm package [kleur](https://npm.im/kleur).
 */
export const green: (input: string | number | Path) => string =
  kleur.green as any;

/**
 * Wrap a string with the ANSI control characters that will make it yellow text
 * when printed to a terminal.
 */
export const yellow: (input: string | number | Path) => string =
  kleur.yellow as any;

/**
 * Wrap a string with the ANSI control characters that will make it blue text
 * when printed to a terminal.
 *
 * From npm package [kleur](https://npm.im/kleur).
 */
export const blue: (input: string | number | Path) => string =
  kleur.blue as any;

/**
 * Wrap a string with the ANSI control characters that will make it magenta text
 * when printed to a terminal.
 *
 * From npm package [kleur](https://npm.im/kleur).
 */
export const magenta: (input: string | number | Path) => string =
  kleur.magenta as any;

/**
 * Wrap a string with the ANSI control characters that will make it cyan text
 * when printed to a terminal.
 *
 * From npm package [kleur](https://npm.im/kleur).
 */
export const cyan: (input: string | number | Path) => string =
  kleur.cyan as any;

/**
 * Wrap a string with the ANSI control characters that will make it white text
 * when printed to a terminal.
 *
 * From npm package [kleur](https://npm.im/kleur).
 */
export const white: (input: string | number | Path) => string =
  kleur.white as any;

/**
 * Wrap a string with the ANSI control characters that will make it gray text
 * when printed to a terminal.
 *
 * From npm package [kleur](https://npm.im/kleur).
 */
export const gray: (input: string | number | Path) => string =
  kleur.gray as any;

/**
 * Wrap a string with the ANSI control characters that will make it grey text
 * when printed to a terminal.
 *
 * From npm package [kleur](https://npm.im/kleur).
 */
export const grey: (input: string | number | Path) => string =
  kleur.grey as any;

// Background Colors

/**
 * Wrap a string with the ANSI control characters that will make it have a black
 * background when printed to a terminal.
 *
 * From npm package [kleur](https://npm.im/kleur).
 */
export const bgBlack: (input: string | number | Path) => string =
  kleur.bgBlack as any;

/**
 * Wrap a string with the ANSI control characters that will make it have a red
 * background when printed to a terminal.
 *
 * From npm package [kleur](https://npm.im/kleur).
 */
export const bgRed: (input: string | number | Path) => string =
  kleur.bgRed as any;

/**
 * Wrap a string with the ANSI control characters that will make it have a green
 * background when printed to a terminal.
 *
 * From npm package [kleur](https://npm.im/kleur).
 */
export const bgGreen: (input: string | number | Path) => string =
  kleur.bgGreen as any;

/**
 * Wrap a string with the ANSI control characters that will make it have a
 * yellow background when printed to a terminal.
 *
 * From npm package [kleur](https://npm.im/kleur).
 */
export const bgYellow: (input: string | number | Path) => string =
  kleur.bgYellow as any;

/**
 * Wrap a string with the ANSI control characters that will make it have a blue
 * background when printed to a terminal.
 *
 * From npm package [kleur](https://npm.im/kleur).
 */
export const bgBlue: (input: string | number | Path) => string =
  kleur.bgBlue as any;

/**
 * Wrap a string with the ANSI control characters that will make it have a
 * magenta background when printed to a terminal.
 *
 * From npm package [kleur](https://npm.im/kleur).
 */
export const bgMagenta: (input: string | number | Path) => string =
  kleur.bgMagenta as any;

/**
 * Wrap a string with the ANSI control characters that will make it have a cyan
 * background when printed to a terminal.
 *
 * From npm package [kleur](https://npm.im/kleur).
 */
export const bgCyan: (input: string | number | Path) => string =
  kleur.bgCyan as any;

/**
 * Wrap a string with the ANSI control characters that will make it have a white
 * background when printed to a terminal.
 *
 * From npm package [kleur](https://npm.im/kleur).
 */
export const bgWhite: (input: string | number | Path) => string =
  kleur.bgWhite as any;

// Modifiers

/**
 * Wrap a string with the ANSI control character that resets all terminal styling.
 *
 * From npm package [kleur](https://npm.im/kleur).
 */
export const reset: (input: string | number | Path) => string =
  kleur.reset as any;

/**
 * Wrap a string with the ANSI control characters that will make it have a bold
 * style when printed to a terminal.
 *
 * From npm package [kleur](https://npm.im/kleur).
 */
export const bold: (input: string | number | Path) => string =
  kleur.bold as any;

/**
 * Wrap a string with the ANSI control characters that will make it have a
 * dimmed style when printed to a terminal.
 *
 * From npm package [kleur](https://npm.im/kleur).
 */
export const dim: (input: string | number | Path) => string = kleur.dim as any;

/**
 * Wrap a string with the ANSI control characters that will make it
 * italicized when printed to a terminal.
 *
 * From npm package [kleur](https://npm.im/kleur).
 */
export const italic: (input: string | number | Path) => string =
  kleur.italic as any;

/**
 * Wrap a string with the ANSI control characters that will make it underlined
 * when printed to a terminal.
 *
 * From npm package [kleur](https://npm.im/kleur).
 */
export const underline: (input: string | number | Path) => string =
  kleur.underline as any;

/**
 * Wrap a string with ANSI control characters such that its foreground (text)
 * and background colors will be swapped when it's printed to a terminal.
 *
 * From npm package [kleur](https://npm.im/kleur).
 */
export const inverse: (input: string | number | Path) => string =
  kleur.inverse as any;

/**
 * Wrap a string with ANSI control characters such that it will be hidden when
 * printed to a terminal.
 *
 * From npm package [kleur](https://npm.im/kleur).
 */
export const hidden: (input: string | number | Path) => string =
  kleur.hidden as any;

/**
 * Wrap a string with the ANSI control characters that will make have a
 * horizontal line through its center when printed to a terminal.
 *
 * From npm package [kleur](https://npm.im/kleur).
 */
export const strikethrough: (input: string | number | Path) => string =
  kleur.strikethrough as any;
