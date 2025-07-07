"use client";
import React from "react";
import { rem, useMantineTheme } from "@mantine/core";

export interface CustomLogoProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: number | string;
  type?: "full" | "mark";
  text?: string;
}

export function AYMANE_LOGO({
  size = 35,
  type = "full",
  text = "",
}: CustomLogoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="Object"
      viewBox="0 0 468.28 61.19"
      // {...props}
      height={size}
    >
      <defs>
        <style>{".cls-1{fill:#e22732}"}</style>
      </defs>
      <path
        id="Shape_Right"
        d="M82.48 8.57 73.91 0 54.15 19.76l2.22 2.23 6.71 6.71 10.83-10.83 12.72 12.72-21.66 21.66 8.94 8.94 8.57-8.57 22.02-22.03L82.48 8.57z"
        className="cls-1"
        data-name="Shape Right"
      />
      <path
        id="Shape_Left"
        d="m34.71 39.2-4.12 4.12-12.72-12.73 10.46-10.46 1.31-1.31 9.88-9.88L30.59 0 14.91 15.68l-5.03 5.03-3.17 3.17L0 30.59l30.59 30.6 8.57-8.57 11.2-11.2-8.94-8.93-6.71 6.71z"
        className="cls-1"
        data-name="Shape Left"
      />
      <text
        style={{
          fontSize: 40,
          fontFamily: "GalanoGrotesque-ExtraBold,Galano Grotesque",
          fontWeight: 800,
          letterSpacing: ".08em",
          fill: "#e22732",
        }}
        transform="translate(125.37 44.73)"
      >
        {"HBICH "}
        <tspan
          x={154.76}
          y={0}
          style={{
            letterSpacing: ".08em",
          }}
        >
          {"AYMANE"}
        </tspan>
      </text>
    </svg>
  );
}
