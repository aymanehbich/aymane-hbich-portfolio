import {
  Avatar,
  Button,
  Container,
  Group,
  Paper,
  Text,
  Title,
} from "@mantine/core";
import React from "react";
import { IconArrowUpRight, IconDownload } from "@tabler/icons-react";
import classes from "./Hero.module.css";
import Image from "next/image";
import ProfilePic from "../../../../public/HBICH_AYMANE.webp";
export default function HeroSection() {
  return (
    <Container id="hero" size="lg" pb="xl" maw={900} px={0} pt={40}>
      <Paper
        w={150}
        h={150}
        mx="auto"
        radius={150}
        bd="2px dashed gray.4"
        mb="md"
        style={{ overflow: "hidden" }}
      >
        <Image
          src={ProfilePic}
          alt="Aymane Hbich"
          width={150}
          height={150}
          priority={false}
          loading="lazy"
        />
      </Paper>
      <Text ff="var(--font-my)" fz={22} fw={500} ta="center">
        Hi! I&apos;m aymane hbich👋
      </Text>
      <Title className={classes.HeroTitle} size={55} ta="center">
        Full Stack Developer Based in Morocco
      </Title>
      <Text
        // size="xl"
        c="gray.7"
        ta="center"
        className={classes.HeroDescription}
      >
        I am a full stack developer from Morocco with experience in building
        modern web applications using JavaScript, React, Node.js and other
        cutting-edge technologies.
      </Text>
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
