// import "@mantine/core/styles.css";
// Global styles (required for all Mantine components)
import '@mantine/core/styles/baseline.css';
import '@mantine/core/styles/default-css-variables.css';
import '@mantine/core/styles/global.css';
// Component-specific styles
import '@mantine/core/styles/ScrollArea.css';
import '@mantine/core/styles/UnstyledButton.css';
import '@mantine/core/styles/VisuallyHidden.css';
import '@mantine/core/styles/Paper.css';
import '@mantine/core/styles/Popover.css';
import '@mantine/core/styles/CloseButton.css';
import '@mantine/core/styles/Loader.css';
import '@mantine/core/styles/Overlay.css';
import '@mantine/core/styles/ModalBase.css';
import '@mantine/core/styles/Input.css';
import '@mantine/core/styles/InlineInput.css';
import '@mantine/core/styles/Flex.css';
import '@mantine/core/styles/FloatingIndicator.css';
import '@mantine/core/styles/ActionIcon.css';
import '@mantine/core/styles/Avatar.css';
import '@mantine/core/styles/Button.css';
import '@mantine/core/styles/Container.css';
import '@mantine/core/styles/Group.css';
import '@mantine/core/styles/Text.css';
import '@mantine/core/styles/Title.css';
import '@mantine/core/styles/AppShell.css';
import '@mantine/core/styles/Burger.css';
import '@mantine/core/styles/Stack.css';
import '@mantine/core/styles/Divider.css';
import '@mantine/core/styles/Card.css';
import '@mantine/core/styles/Badge.css';
import '@mantine/core/styles/Anchor.css';
import '@mantine/core/styles/Grid.css';
import '@mantine/core/styles/SimpleGrid.css';
import '@mantine/core/styles/List.css';
import '@mantine/core/styles/Tooltip.css';
import '@mantine/core/styles/Center.css';
import '@mantine/core/styles/Image.css';
import '@mantine/core/styles/AspectRatio.css';
import '@mantine/core/styles/ThemeIcon.css';
import '@mantine/core/styles/Progress.css';
import React from "react";
import {
  MantineProvider,
  ColorSchemeScript,
  mantineHtmlProps,
} from "@mantine/core";
import { theme } from "../theme";
import MainLayout from "./Layouts/MainLayout/MainLayout";
import localFont from "next/font/local";
export const metadata = {
  title: "aymane hbich",
  description:
    "This is my portfolio website, showcasing my projects and skills.",
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
export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en" className={myFont.variable} {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <link
          rel="preload"
          href="/fonts/made_mariage_regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/made_mariage_medium.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/made_mariage_bold.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <MantineProvider theme={theme}>
          <MainLayout>{children}</MainLayout>
        </MantineProvider>
      </body>
    </html>
  );
}
