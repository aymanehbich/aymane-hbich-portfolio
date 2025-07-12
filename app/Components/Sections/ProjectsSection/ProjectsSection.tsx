import {
  Badge,
  Button,
  Card,
  CardSection,
  Container,
  Divider,
  Grid,
  GridCol,
  Group,
  Image,
  Overlay,
  Paper,
  Text,
  Title,
} from "@mantine/core";
import React from "react";
import { IconBrandGithub, IconExternalLink } from "@tabler/icons-react";
import classes from "./Projects.module.css";
const projects = [
  {
    title: "Todo Application",
    category: "Web Application",
    summary: "Manage tasks with real-time sync and analytics.",
    image: "/p1.png",
    description:
      "A comprehensive Todo application with React, TypeScript, and Firebase featuring user authentication, task management, real-time updates, and analytics dashboard.",
    technologies: [
      "React",
      "TypeScript",
      "Firebase",
      "Mantine UI",
      "Mantine Charts",
      "React Router v7",
    ],
    demoLink: "https://toodle-hbich.vercel.app",
    githubLink: "https://github.com/aymanehbich/Toodle",
  },
  {
    title: "QuickLink – Modern URL Shortener",
    category: "Web Application",
    summary:
      "Shorten URLs, track clicks, and generate QR codes with a polished dashboard.",
    image: "/p2.png",
    description:
      "QuickLink is a sleek, full-featured URL shortening app built with React, TypeScript, and Supabase. It supports user authentication, real-time click analytics, QR code generation, and a responsive, elegant UI using Mantine. The dashboard allows users to manage and monitor all their shortened links efficiently.",
    technologies: [
      "React",
      "TypeScript",
      "Mantine UI",
      "React Router v7",
      "Supabase",
      "Context API",
      "qrcode.js",
    ],
    demoLink: "https://quicklink-aymane.vercel.app/",
    githubLink: "https://github.com/aymanehbich/QuickLink",
  },
];
export default function ProjectsSection() {
  return (
    <Container id="projects" fluid pb="xl" pt={80}>
      <Paper maw={700} mx="auto" mb="xl">
        <Title ta="center" order={2} fw={800} size="h1">
          Projects
        </Title>
        <Text ta="center" c="gray.7" size="lg">
          Here are all of my projects that I have worked on, showcasing my
          skills and expertise in web development.
        </Text>
      </Paper>
      <Grid mt="lg">
        {projects.map((project, index) => (
          <GridCol key={index} span={{ base: 12, sm: 6, lg: 4 }}>
            <Card withBorder radius="md" shadow="xs" padding="md" h="100%">
              {/* Image with overlay */}
              <CardSection>
                <div className={classes.imageWrapper}>
                  <Image
                    src={project.image}
                    alt={`${project.title} preview`}
                    // height={200}
                    mah={200}
                    fit="cover"
                  />
                  <Overlay className={classes.hoverOverlay} zIndex={1} />
                  <div className={classes.overlayContent}>
                    <Text fw={600} size="sm" mb={4} c="white">
                      {project.summary}
                    </Text>
                    <Text size="xs" c="gray.2" lineClamp={3}>
                      {project.description}
                    </Text>
                  </div>
                </div>
              </CardSection>
              <Badge
                // variant="gradient"
                variant="filled"
                // gradient={{ from: "#784c97", to: "myColor" }}
                className={classes.category}
                // mt="sm"
              >
                {project.category}
              </Badge>
              {/* Always visible content */}

              <Divider my="sm" />

              <Text c="gray.9" size="lg" fw={700}>
                {project.title}
              </Text>

              <Group mt="xs" gap="xs" justify="flex-start">
                {project.technologies.map((tech, idx) => (
                  <Badge key={idx} size="sm" c="gray.6" variant="dot">
                    {tech}
                  </Badge>
                ))}
              </Group>

              <div style={{ flexGrow: 1 }} />

              <Group grow justify="space-between" mt="md">
                <Button
                  component="a"
                  href={project.demoLink}
                  target="_blank"
                  rightSection={<IconExternalLink size={18} />}
                  variant="filled"
                  radius="xl"
                >
                  Live Demo
                </Button>
                <Button
                  component="a"
                  href={project.githubLink}
                  target="_blank"
                  rightSection={<IconBrandGithub size={18} />}
                  variant="outline"
                  radius="xl"
                >
                  GitHub
                </Button>
              </Group>
            </Card>
          </GridCol>
        ))}
      </Grid>
    </Container>
  );
}
