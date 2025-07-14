import {
  Badge,
  Container,
  Group,
  Paper,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core";
import { IconBriefcase } from "@tabler/icons-react";
import React from "react";
const experiences = [
  {
    title: "Full Stack Web Developer Intern",
    company: "Oriental Regional Council",
    period: "April 2024 – May 2024",
    description:
      "Contributed to the development of a full-stack web application, collaborated with design and engineering teams, and managed APIs and databases efficiently.",
    technologies: ["React.js", "Laravel", "PHP", "MySQL"],
  },
];
export default function ExperiencesSection() {
  return (
    <Container id="experience" fluid pb="xl" px={0} pt={80}>
      <Paper maw={700} mx="auto" mb="xl">
        <Title ff="var(--font-my)" ta="center" order={2} fw={900} size="h1">
          Experiences
        </Title>
        <Text ff="var(--font-my)" ta="center" c="gray.7" size="lg" fw={500}>
          A snapshot of my recent hands-on development experience and technical
          contributions.
        </Text>
      </Paper>

      {experiences.map((experience, index) => (
        <Paper
          key={index}
          withBorder
          shadow="xs"
          p="xl"
          mt="lg"
          radius="md"
          bg="gray.0"
        >
          <Group align="flex-start" justify="space-between" mb="xs">
            <Group>
              <ThemeIcon variant="transparent" c="gray.8" size={32}>
                <IconBriefcase size={32} stroke={1.5} />
              </ThemeIcon>
              <Stack gap={0}>
                <Title size="h3" order={1} c="gray.8">
                  {experience.title}
                </Title>
                <Text size="md" c="gray.7">
                  {experience.company}
                </Text>
              </Stack>
            </Group>
            <Text c="gray.9" fw={500} size="md">
              {experience.period}
            </Text>
          </Group>

          <Text c="gray.7" size="md" mb="sm">
            {experience.description}
          </Text>

          <Group gap="xs" wrap="wrap">
            {experience.technologies.map((technology, i) => (
              <Badge key={i} color="gray" variant="light">
                {technology}
              </Badge>
            ))}
          </Group>
        </Paper>
      ))}
    </Container>
  );
}
