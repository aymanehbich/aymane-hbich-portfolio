import {
  Container,
  Divider,
  Grid,
  GridCol,
  Image,
  Paper,
  Text,
  Title,
} from "@mantine/core";
import React from "react";

export default function AboutSection() {
  return (
    <Container id="about" fluid pb="xl" pt={80} px={0}>
      <Paper maw={700} mx="auto" mb="xl">
        <Title ff="var(--font-my)" ta="center" order={2} fw={900} size="h1">
          About me
        </Title>
        <Text ff="var(--font-my)" ta="center" c="gray.7" size="lg" fw={500}>
          A brief look into my journey as a developer and tech enthusiast.
        </Text>
      </Paper>
      <Grid mt="xl" align="flex-start" justify="space-between">
        <GridCol span={{ base: 12, md: 6, lg: 6 }}>
          <Text size="lg" c="gray.9" fw={500}>
            I am a full stack developer from Morocco with experience in building
            modern web applications using JavaScript, React, Node.js and other
            cutting-edge technologies. I have a passion for creating efficient,
            scalable, and user-friendly applications that solve real-world
            problems.
          </Text>
          <Divider my="xs" variant="dotted" c="gray.4" size="sm" />
          <Text size="lg" c="gray.9" fw={500}>
            Also I am a tech enthusiast who loves to explore new technologies
            and frameworks. I enjoy learning about the latest trends in web
            development and applying them to my projects to create innovative
            solutions that meet the needs of users. I am always looking for new
            challenges and opportunities to grow as a developer and contribute
            to the tech community through open-source projects and
            collaborations.
          </Text>
          <Divider my="xs" variant="dotted" c="gray.4" size="sm" />
          <Text size="lg" c="gray.9" fw={500}>
            I am always looking for new challenges and opportunities to grow as
            a developer and contribute to the tech community through open-source
            projects and collaborations.
          </Text>
        </GridCol>
        <GridCol span={{ base: 12, md: 6, lg: 6 }}>
          <Image
            src="/HBICH_AYMANE.png"
            maw={500}
            mx="auto"
            bd="2px dashed gray.4"
            radius="md"
            alt="Aymane HBICH"
          />
        </GridCol>
      </Grid>
    </Container>
  );
}
