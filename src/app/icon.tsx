import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

/** Favicon — a quiet ink tile with the initial. */
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#16181d",
          fontFamily: "sans-serif",
          fontWeight: 700,
          fontSize: 18,
          color: "#f7f5f0",
        }}
      >
        R
      </div>
    ),
    { ...size },
  );
}