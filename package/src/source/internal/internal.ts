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
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return undefined;
  }
}
