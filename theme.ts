"use client";

import { createTheme, MantineColorsTuple, Text, Title } from "@mantine/core";
import classes from "./Title.module.css";
const myColor: MantineColorsTuple = [
  "#ffeaec",
  "#fcd4d7",
  "#f4a7ac",
  "#ec777e",
  "#e64f57",
  "#e3353f",
  "#e22732",
  "#c91a25",
  "#b41220",
  "#9e0419",
];
export const theme = createTheme({
  /* Put your mantine theme override here */
  colors: {
    myColor,
  },
  primaryColor: "myColor",
  // fontFamilyMonospace: "var(--font-my)",
  components: {
    Text: Text.extend({
      classNames: classes,
    }),
  },
});
