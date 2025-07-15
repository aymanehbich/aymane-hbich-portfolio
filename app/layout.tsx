// import "@mantine/core/styles.css";
// Global styles (required for all Mantine components)
import "@mantine/core/styles/baseline.css";
import "@mantine/core/styles/default-css-variables.css";
import "@mantine/core/styles/global.css";
// Component-specific styles
import "@mantine/core/styles/UnstyledButton.css";
import "@mantine/core/styles/Paper.css";
import "@mantine/core/styles/CloseButton.css";
import "@mantine/core/styles/Overlay.css";
import "@mantine/core/styles/Input.css";
// import '@mantine/core/styles/Flex.css';
import "@mantine/core/styles/ActionIcon.css";
import "@mantine/core/styles/Avatar.css";
import "@mantine/core/styles/Button.css";
import "@mantine/core/styles/Container.css";
import "@mantine/core/styles/Group.css";
import "@mantine/core/styles/Text.css";
import "@mantine/core/styles/Title.css";
import "@mantine/core/styles/AppShell.css";
import "@mantine/core/styles/Burger.css";
import "@mantine/core/styles/Stack.css";
import "@mantine/core/styles/Divider.css";
import "@mantine/core/styles/Card.css";
import "@mantine/core/styles/Badge.css";
import "@mantine/core/styles/Anchor.css";
import "@mantine/core/styles/Grid.css";
import "@mantine/core/styles/SimpleGrid.css";
import "@mantine/core/styles/Center.css";
import "@mantine/core/styles/Image.css";
import "@mantine/core/styles/ThemeIcon.css";
import "@mantine/core/styles/Progress.css";
import "@mantine/core/styles/Code.css";
import "@mantine/core/styles/Loader.css";
import React from "react";
import {
  MantineProvider,
  ColorSchemeScript,
  mantineHtmlProps,
} from "@mantine/core";
import { theme } from "../theme";
import MainLayout from "./Layouts/MainLayout/MainLayout";
import localFont from "next/font/local";
import { Public_Sans } from "next/font/google";
export const metadata = {
  title: {
    default: "Hi, I'm Aymane Hbich | Full Stack Developer",
    template: "%s | Aymane Hbich",
  },
  description:
    "I am a Full Stack Developer with expertise in React and Next.js, passionate about building efficient and scalable web applications.",
  metadataBase: new URL("https://aymanehbich.me/"),
  openGraph: {
    title: "Aymane Hbich Portfolio",
    description: "Showcasing my work in React, Next.js",
    url: "https://aymanehbich.me",
    siteName: "Aymane Hbich",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Aymane Hbich Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  linkedIn: {
    title: "Aymane Hbich | Full Stack Developer",
    description:
      "Explore my portfolio showcasing projects in React, Next.js, and more.",
    url: "https://www.linkedin.com/in/aymane-hbich-6a4276307",
  },
};
const myFont = localFont({
  src: [
    {
      path: "./fonts/made_mariage_regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/made_mariage_medium.woff2",
      weight: "500",
      style: "normal",
    },
    { path: "./fonts/made_mariage_bold.woff2", weight: "700", style: "normal" },
  ],
  display: "swap",
  variable: "--font-my",
  fallback: ["system-ui", "arial"],
});
const publicSans = Public_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Use what you need
  variable: "--font-sans",
  display: "swap",
});
export default function RootLayout({ children }: { children: any }) {
  return (
    <html
      lang="en"
      className={`${myFont.variable} ${publicSans.variable}`}
      {...mantineHtmlProps}
    >
      <head>
        <ColorSchemeScript />
        {/* <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        /> */}
      </head>
      <body>
        <MantineProvider theme={theme}>
          <MainLayout>{children}</MainLayout>
        </MantineProvider>
      </body>
    </html>
  );
}
