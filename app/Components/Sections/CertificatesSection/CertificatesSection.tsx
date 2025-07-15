import {
  Anchor,
  Avatar,
  Card,
  Code,
  Container,
  Grid,
  GridCol,
  Group,
  Image,
  Paper,
  Text,
  Title,
} from "@mantine/core";
import classes from "./CertificatesSection.module.css";
const certificates = [
  {
    title: "JavaScript Algorithms and Data Structures (Beta)",
    issuer: "freeCodeCamp",
    issued: "October 2024",
    credentialId: "aymane_hbich-jaads",
    link: "https://freecodecamp.org/certification/aymane_hbich/javascript-algorithms-and-data-structures-v8",
    skills: ["JavaScript", "Problem Solving"],
    logo: "/logos/freecodecamp.jpeg",
    pdf: "/certificates/javascript-certificate.pdf",
  },
  {
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    issued: "September 2024",
    credentialId: "aymane_hbich-rwd",
    link: "https://freecodecamp.org/certification/aymane_hbich/responsive-web-design",
    skills: [
      "Bootstrap (Framework)",
      "Responsive Web Design",
      "CSS",
      "Responsiveness",
      "HTML5",
    ],
    logo: "/logos/freecodecamp.jpeg",
    pdf: "/certificates/responsive-web-design.pdf",
  },
  {
    title: "Introduction to NoSQL",
    issuer: "Great Learning",
    issued: "October 2024",
    credentialId: "VDOEUEFR",
    link: "https://verify.mygreatlearning.com/",
    skills: ["NoSQL", "MongoDB"],
    logo: "/logos/great_learning.png",
    pdf: "/certificates/nosql-intro.pdf",
  },
  {
    title: "SQL and Relational Databases 101",
    issuer: "IBM",
    issued: "July 2024",
    credentialId: "course-v1:BDU DB0101EN v1",
    link: "https://courses.cognitiveclass.ai/certificates/9275465f50b84b188d6838d14f48b572",
    skills: ["DBMS", "SQL", "Database Design", "Data Manipulation"],
    logo: "/logos/ibm.jpeg",
    pdf: "/certificates/sql-relational-db.pdf",
  },
];
export default function CertificatesSection() {
  return (
    <Container id="certificates" fluid pb="xl" px={0} pt={80}>
      <Paper maw={700} mx="auto" mb="xl">
        <Title ff="var(--font-my)" ta="center" order={2} fw={900} size="h1">
          Certificates And Achievements
        </Title>
        <Text ff="var(--font-my)" ta="center" c="gray.7" size="lg" fw={500}>
          A collection of my professional certifications and notable
          achievements that reflect my commitment to continuous learning and
          excellence in software development.
        </Text>
      </Paper>
      <Grid>
        {certificates.map((cert, index) => (
          <GridCol key={index} span={{ base: 12, md: 6, lg: 4 }}>
            <Card
              withBorder
              radius="md"
              // p="md"
              className={classes.card}
              h="100%"
            >
              <Text tt="uppercase" c="dimmed" fw={700} size="xs">
                Certification
              </Text>

              <Text className={classes.title} mt="xs" mb="md" fw={600}>
                {cert.title}
              </Text>
              <Text size="sm" c="gray.7">
                Issued by {cert.issuer} · <strong>{cert.issued}</strong>
              </Text>
              <Text size="sm" c="gray.7">
                Credential ID:{" "}
                <Code color="myColor" c="white">
                  {cert.credentialId}
                </Code>
              </Text>
              <Text size="sm" c="gray.7">
                Skills: {cert.skills.join(" · ")}
              </Text>
              <div style={{ flexGrow: 1 }}></div>
              <Group wrap="nowrap" justify="space-between" mt="sm">
                <Group gap="xs" wrap="nowrap">
                  <Avatar
                    size={24}
                    src={cert.logo}
                    alt={`${cert.issuer} logo`}
                    role="img"
                  />
                  <Text size="sm">{cert.issuer}</Text>
                </Group>
                <Group gap="xs">
                  <Anchor
                    href={cert.link}
                    target="_blank"
                    size="sm"
                    fw={500}
                    aria-label={`View ${cert.title} credential from ${cert.issuer}`}
                    // underline="always"
                  >
                    Show credential
                  </Anchor>
                  <Anchor
                    href={cert.pdf}
                    target="_blank"
                    size="sm"
                    fw={500}
                    // underline="always"
                    aria-label={`Download ${cert.title} certificate PDF`}
                  >
                    View PDF
                  </Anchor>
                </Group>
              </Group>
            </Card>
          </GridCol>
        ))}
      </Grid>
    </Container>
  );
}
