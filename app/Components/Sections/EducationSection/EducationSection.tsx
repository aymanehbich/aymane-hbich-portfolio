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
import { IconSchool } from "@tabler/icons-react";
import React from "react";
const studies = [
  {
    degree: "Bachelor’s Degree in Software Engineering",
    school: "Higher School of Technology – EST Fès, Morocco",
    period: "Sep 2021 – Jun 2024",
    description:
      "Completed a professional bachelor's degree program with a focus on full-stack web development. Acquired strong practical and theoretical skills in HTML, CSS, JavaScript, PHP, React, and Laravel. Developed academic and real-world projects, including a final-year full-stack web application that addressed community needs.",
    subjects: [
      "Software Engineering",
      "PHP",
      "JavaScript",
      "HTML/CSS",
      "React",
      "Laravel",
      "Capstone Project",
      "Hackathons",
    ],
  },
  {
    degree: "Diploma in Full-Stack Web Development",
    school: "OFPPT – Oujda, Morocco",
    period: "Sep 2022 – Jul 2024",
    description:
      "Completed comprehensive training in both front-end and back-end development. Covered cloud-native applications, Agile methodologies, database systems, and information security. Graduated with honors ('Mention Bien').",
    subjects: [
      "JavaScript",
      "Laravel",
      "React.js",
      "MySQL",
      "Firebase",
      "Agile",
      "Cloud Applications",
    ],
  },
  {
    degree: "High School Diploma – Life and Earth Sciences",
    school: "Zerktouni High School – Guercif, Morocco",
    period: "Sep 2020 – Jul 2021",
    description:
      "Completed a general science curriculum with emphasis on biology, geology, and environmental science. Built a strong foundation in scientific reasoning and structured analysis.",
    subjects: ["Biology", "Geology", "Scientific Methodology"],
  },
];
export default function EducationSection() {
  return (
    <Container id="education" fluid pb="xl" px={0} pt={80}>
      <Paper maw={700} mx="auto" mb="xl">
        <Title ta="center" order={2} fw={800} size="h1">
          Education
        </Title>
        <Text ta="center" c="gray.7" size="lg">
          Academic path that shaped my mindset, skills, and technical approach.
        </Text>
      </Paper>

      {studies.map((study, index) => (
        <Paper
          key={index}
          withBorder
          shadow="xs"
          p="lg"
          mt="lg"
          radius="md"
          bg="gray.0"
        >
          <Group align="flex-start" justify="space-between" mb="xs">
            <Group wrap="nowrap">
              <ThemeIcon variant="transparent" c="gray.8" size={32}>
                <IconSchool size={32} stroke={1.5} />
              </ThemeIcon>
              <Stack gap={0}>
                <Title size="h3" order={1} c="gray.8">
                  {study.degree}
                </Title>
                <Text size="md" c="gray.7">
                  {study.school}
                </Text>
              </Stack>
            </Group>
            <Text c="gray.9" fw={500} size="md">
              {study.period}
            </Text>
          </Group>

          <Text c="gray.7" size="md" mb="sm">
            {study.description}
          </Text>

          <Group gap="xs" wrap="wrap">
            {study.subjects.map((subject, i) => (
              <Badge key={i} color="gray" variant="light">
                {subject}
              </Badge>
            ))}
          </Group>
        </Paper>
      ))}
    </Container>
  );
}
