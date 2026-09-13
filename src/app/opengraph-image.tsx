import { ImageResponse } from "next/og";
import { profile } from "@/content/portfolio";

export const alt = `${profile.name} — ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Social share card — a restrained editorial tile on paper. Auto-generated
 * at build; no image asset to maintain.
 */
export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 64,
          background: "#f7f5f0",
          color: "#16181d",
        }}
      >
        <div style={{ display: "flex", fontSize: 44, fontWeight: 700 }}>
          {profile.name}
        </div>
        <div style={{ display: "flex", fontSize: 26, color: "#646a73", maxWidth: 720 }}>
          {profile.role}
        </div>
      </div>
    ),
    size,
  );
}