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
  Overlay,
  Paper,
  Text,
  Title,
} from "@mantine/core";
import React from "react";
import { IconBrandGithub, IconExternalLink } from "@tabler/icons-react";
import classes from "./Projects.module.css";
import Image from "next/image";
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
  {
    title: "Summify – AI-Powered Article and Text Summarization",
    category: "Web Application",
    summary:
      "Summarize long articles or text instantly with GPT-4o-powered AI summaries.",
    image: "/p3.png",
    description:
      "Summify is a modern, responsive summarization tool built with React, TypeScript, and Mantine UI. It allows users to summarize content via URLs or direct input, generating structured markdown output with bullet points, quotes, and key takeaways using GPT-4o. Features include copy-to-clipboard, real-time UX feedback, and optimized lazy-loading performance. The app integrates Flask and Azure AI for seamless article parsing and summarization.",
    technologies: [
      "React 19",
      "TypeScript",
      "Mantine UI v7",
      "Redux Toolkit",
      "RTK Query",
      "React Markdown",
      "Flask API",
      "Extractus",
    ],
    demoLink: "https://summify-by-hbich-aymane.vercel.app/",
    githubLink: "https://github.com/aymanehbich/summify",
  },
  {
    title: "Dépannage Services",
    category: "Client Project",
    summary:
      "Emergency home services platform for plumbing, electrical, locksmith & heating.",
    image: "/p4.png",
    description:
      "A professional service booking website built for a client, offering rapid intervention in plumbing, electrical, locksmith, and heating services. Features include online reservation, customer testimonials, FAQ, and a contact section. Available 24/7 for emergency interventions.",
    technologies: [
      "WordPress",
      "Elementor",
      "PHP",
      "CSS",
    ],
    demoLink: "https://depannageservices.com/",
    githubLink: "",
  },
];
export default function ProjectsSection() {
  return (
    <Container id="projects" fluid pb="xl" pt={80} px={0}>
      <Paper maw={700} mx="auto" mb="xl">
        <Title ff="var(--font-my)" ta="center" order={2} fw={900} size="h1">
          Projects
        </Title>
        <Text ff="var(--font-my)" ta="center" c="gray.7" size="md" fw={500}>
          Here are all of my projects that I have worked on, showcasing my
          skills and expertise in web development.
        </Text>
      </Paper>
      <Grid mt="lg">
        {projects.map((project, index) => (
          <GridCol key={index} span={{ base: 12, sm: 6, lg: 4 }}>
            <Card shadow="none" padding={0} className={classes.card}>
              {/* Image with hover overlay */}
              <CardSection style={{ position: "relative" }}>
                <div className={classes.imageWrapper}>
                  <Image
                    src={project.image}
                    width={400}
                    height={210}
                    alt={`${project.title} preview`}
                    quality={80}
                    className={classes.projectImage}
                  />
                  <Overlay className={classes.hoverOverlay} zIndex={1} />
                  <div className={classes.overlayContent}>
                    <Text fw={700} size="sm" mb={6} c="white">
                      {project.summary}
                    </Text>
                    <Text size="xs" c="gray.3" lineClamp={4}>
                      {project.description}
                    </Text>
                  </div>
                </div>
                <Badge variant="light" className={classes.category}>
                  {project.category}
                </Badge>
              </CardSection>

              {/* Card body */}
              <div className={classes.cardBody}>
                <Text c="gray.9" size="lg" fw={700} mb={8}>
                  {project.title}
                </Text>

                <Group gap={6} wrap="wrap" mb="md">
                  {project.technologies.map((tech, idx) => (
                    <Badge key={idx} size="sm" variant="light" radius="sm" c="gray.7">
                      {tech}
                    </Badge>
                  ))}
                </Group>

                <div style={{ flexGrow: 1 }} />

                <Divider mb="md" c="gray.2" />

                <Group grow gap="sm">
                  <Button
                    component="a"
                    href={project.demoLink}
                    target="_blank"
                    rightSection={<IconExternalLink size={15} />}
                    variant="filled"
                    radius="xl"
                    size="sm"
                  >
                    Live Demo
                  </Button>
                  {project.githubLink && (
                    <Button
                      component="a"
                      href={project.githubLink}
                      target="_blank"
                      rightSection={<IconBrandGithub size={15} />}
                      variant="default"
                      radius="xl"
                      size="sm"
                    >
                      GitHub
                    </Button>
                  )}
                </Group>
              </div>
            </Card>
          </GridCol>
        ))}
      </Grid>
    </Container>
  );
}
