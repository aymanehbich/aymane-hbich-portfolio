import {
  Container,
  Grid,
  GridCol,
  Group,
  Paper,
  Progress,
  Text,
  Title,
} from "@mantine/core";
import React from "react";
import { skillsData, skillsStats } from "../../../constants";

export default function SkillsSection() {
  return (
    <Container id="skills" fluid pb="xl" px={0} pt={80}>
      <Paper maw={700} mx="auto" mb="xl">
        <Title ff="var(--font-my)" ta="center" order={2} fw={900} size="h1">
          Skills & Expertise
        </Title>
        <Text ff="var(--font-my)" ta="center" c="gray.7" size="md" fw={500}>
          A wide set of technical and soft skills acquired through academic
          training, internships, and self-learning.
        </Text>
      </Paper>
      <Grid mt="xl">
        {skillsData.map((section, index) => (
          <GridCol key={index} span={{ base: 12, md: 6, lg: 4 }}>
            <Title fw={700} order={2}>
              {section.category}
            </Title>
            {section.skills.map((skill, idx) => (
              <Paper mt="xs" py="sm" key={idx}>
                <Group mb={5} justify="space-between">
                  <Text c="gray.7" size="md">
                    {skill.name}
                  </Text>
                  <Text c="gray.7" size="md">
                    {skill.level}%
                  </Text>
                </Group>
                <Progress
                  value={skill.level}
                  aria-label={`${skill.name} skill level`}
                />
              </Paper>
            ))}
          </GridCol>
        ))}
      </Grid>
      <Grid mt="xl">
        {skillsStats.map((item, index) => (
          <GridCol key={index} span={{ base: 12, md: 4, lg: 3 }}>
            <Paper withBorder shadow="sm" p="lg" ta="center" radius="md">
              <Text ff="var(--font-my)" fw={700} fz="h1">
                {item.value}
              </Text>
              <Text c="gray.7" fz={20}>
                {item.label}
              </Text>
            </Paper>
          </GridCol>
        ))}
      </Grid>
    </Container>
  );
}
