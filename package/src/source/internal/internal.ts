/**
 * Functions for internal use
 */

/**
 * @internal
 * For internal use
 */
export function parseJson<T>(str: string): T | undefined {
  try {
    return JSON.parse(str);
  } catch (error) {
    return undefined;
  }
}
