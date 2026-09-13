/**
 * Base path for this GitHub Pages deployment.
 * The site is served from https://raushankumar1503.github.io/portfolio/,
 * so every public-asset URL must be prefixed with "/portfolio".
 * This constant is fixed for this repository and is NOT read from an
 * environment variable, because at runtime (static export / browser)
 * those env vars are unavailable.
 */
export const BASE_PATH = "/portfolio";

/**
 * Prefix a public-asset path with the base path.
 * Usage: withBasePath("/profile.jpg") -> "/portfolio/profile.jpg".
 */
export function withBasePath(path: string): string {
  return `${BASE_PATH}${path.startsWith("/") ? path : `/${path}`}`;
}

/**
 * Prefix an internal route with the base path, leaving anchors and
 * external http(s) links unchanged.
 */
export function withBasePathRoute(route: string): string {
  if (route.startsWith("#") || route.startsWith("http")) return route;
  return `${BASE_PATH}${route.startsWith("/") ? route : `/${route}`}`;
}
