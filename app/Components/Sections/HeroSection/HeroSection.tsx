import {
  Avatar,
  Button,
  Container,
  Group,
  Text,
  Title,
} from "@mantine/core";
import React from "react";
import { IconArrowUpRight, IconDownload } from "@tabler/icons-react";
import classes from "./Hero.module.css";
export default function HeroSection() {
  return (
    <Container id="hero" size="lg" pb="xl" maw={900} px={0} pt={80}>
      {/* <Paper mx="auto"> */}
      <Avatar
        src="/HBICH_AYMANE.png"
        radius={150}
        size={150}
        mx="auto"
        bd="2px dashed gray.4"
        mb="md"
      />
      <Text ff="--font-my" fz={22} fw={500} ta="center">
        Hi! I&apos;m aymane hbich👋
      </Text>
      <Title
        className={classes.HeroTitle}
        size={55}
        ta="center"
        ff="--font-my"
        fw={700}
      >
        Full Stack Developer Based in Morocco
      </Title>
      <Text size="xl" c="gray.7" ta="center">
        I am a full stack developer from Morocco with experience in building
        modern web applications using JavaScript, React, Node.js and other
        cutting-edge technologies.
      </Text>
      {/* </Paper> */}
      <Group mt="lg" justify="center" gap="xl">
        <Button
          variant="default"
          radius="xl"
          rightSection={<IconArrowUpRight size={22} />}
          size="lg"
          c="gray.9"
        >
          Let&apos;s Connect
        </Button>
        <Button
          variant="outline"
          radius="xl"
          rightSection={<IconDownload size={22} />}
          size="lg"
        >
          Download CV
        </Button>
      </Group>
    </Container>
  );
}
