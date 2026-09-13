import { profile, links, SITE_URL } from "@/content/portfolio";

/**
 * JSON-LD structured data (ProfilePage + Person).
 * Only real, non-placeholder URLs are emitted in `sameAs` so we never
 * publish fabricated links. Add real profiles to `links` in content.
 */
export function JsonLd() {
  const sameAs = [links.github, links.linkedin].filter((u) => u.startsWith("http"));

  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    mainEntity: {
      "@type": "Person",
      name: profile.name,
      jobTitle: profile.role,
      url: SITE_URL,
      description: profile.summary,
      ...(sameAs.length ? { sameAs } : {}),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}