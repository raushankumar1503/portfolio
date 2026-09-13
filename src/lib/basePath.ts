/**
 * Runtime base path resolver for GitHub Pages deployment.
 * On GitHub Pages the site lives under /<repo>/, so all public-asset
 * references must be prefixed at runtime.
 * The CI step (actions/configure-pages) injects basePath into next.config
 * during the build; we mirror that same base path here for component-level asset URLs.
 */

/**
 * Returns the base path for the current deployment.
 * In production (GitHub Pages) this is "/portfolio".
 * Locally / in preview it's "".
 */
export function getBasePath(): string {
  // NEXT_PUBLIC_BASE_PATH is set by actions/configure-pages at build time.
  // Fallback to repo-name heuristic for local preview.
  if (typeof process !== "undefined" && process.env.NEXT_PUBLIC_BASE_PATH) {
    return process.env.NEXT_PUBLIC_BASE_PATH;
  }
  return "";
}

/**
 * Prefix a public-asset path with the current base path.
 * Usage: withBasePath("/profile.jpg") → "/portfolio/profile.jpg" on Pages.
 */
export function withBasePath(path: string): string {
  const base = getBasePath();
  if (!base) return path;
  if (!path.startsWith("/")) return `${base}/${path}`;
  return `${base}${path}`;
}

/**
 * Prefix an internal route (pages/anchors) with the base path.
 * Used for anchor links like "#projects" which should remain unchanged.
 */
export function withBasePathRoute(route: string): string {
  if (route.startsWith("#") || route.startsWith("http")) return route;
  const base = getBasePath();
  if (!base) return route;
  return `${base}${route}`;
}