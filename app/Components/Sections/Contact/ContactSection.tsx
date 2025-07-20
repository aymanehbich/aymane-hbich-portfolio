"use client";
import { IconMail, IconMapPin, IconPhone } from "@tabler/icons-react";
import {
  Button,
  Card,
  Container,
  Grid,
  GridCol,
  Group,
  Paper,
  SimpleGrid,
  Text,
  Textarea,
  TextInput,
  ThemeIcon,
  Title,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { sendEmail } from "../../../utils/sendEmail";
import { useState } from "react";
const ContactDetails = [
  {
    icon: IconMail,
    color: "myColor",
    text: "contact@aymanehbich.me",
  },
  {
    icon: IconMapPin,
    color: "myColor",
    text: "Morocco, Guercif",
  },
  {
    icon: IconPhone,
    color: "myColor",
    text: "+212 6 19 01 62 27",
  },
];
export default function ContactSection() {
  const [loading, setLoading] = useState(false);
  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validate: {
      name: (value) => value.trim().length < 2,
      email: (value) => !/^\S+@\S+$/.test(value),
      subject: (value) => value.trim().length === 0,
    },
  });
  const handleSubmit = async (values: {
    name: string;
    email: string;
    subject: string;
    message: string;
  }) => {
    setLoading(true);
    const res = await sendEmail(values);
    if (res.success) {
      form.reset();
    } else {
      // You can add a toast or alert here to notify the user
      console.error("Failed to send message:", res.error);
    }

    setLoading(false);
  };

  return (
    <Container id="contact" fluid pb="xl" px={0} pt={80}>
      <Paper maw={700} mx="auto" mb="xl">
        <Title ff="var(--font-my)" ta="center" order={2} fw={900} size="h1">
          Contact Me
        </Title>
        <Text ff="var(--font-my)" ta="center" c="gray.7" size="md" fw={500}>
          Interested in collaborating or have a question? Feel free to reach
          out! I&apos;m always open to discussing new projects, creative ideas,
          or opportunities to be part of your vision.
        </Text>
      </Paper>

      <Grid>
        {ContactDetails.map((detail, index) => (
          <GridCol span={{ base: 12, sm: 6, md: 4 }} key={index}>
            <Card withBorder p="md" radius="md">
              <Group wrap="nowrap">
                <ThemeIcon variant="transparent" color={detail.color}>
                  <detail.icon size={22} />
                </ThemeIcon>
                <Text size="sm" c="dimmed" lineClamp={1}>
                  {detail.text}
                </Text>
              </Group>
            </Card>
          </GridCol>
        ))}
      </Grid>
      <Text ta="center" c="gray.7" mt="xl">
        Or fill out the form below to send me a message directly.
      </Text>
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <SimpleGrid cols={{ base: 1, sm: 2 }} mt="lg">
          <TextInput
            label="Name"
            placeholder="Your name"
            name="name"
            variant="filled"
            {...form.getInputProps("name")}
          />
          <TextInput
            label="Email"
            placeholder="Your email"
            name="email"
            variant="filled"
            {...form.getInputProps("email")}
          />
        </SimpleGrid>

        <TextInput
          label="Subject"
          placeholder="Subject"
          mt="md"
          name="subject"
          variant="filled"
          {...form.getInputProps("subject")}
        />
        <Textarea
          mt="md"
          label="Message"
          placeholder="Your message"
          maxRows={10}
          minRows={5}
          autosize
          name="message"
          variant="filled"
          {...form.getInputProps("message")}
        />

        <Group justify="center" mt="xl">
          <Button type="submit" size="md" loading={loading}>
            Send message
          </Button>
        </Group>
      </form>
      {/* <div className={classes.wrapper}>
        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={50}>
          <div>
            <Title className={classes.title}>Get In Touch</Title>
            <Text className={classes.description} mt="sm" mb={30}>
              Interested in collaborating or have a question? Feel free to reach
              out! I'm always open to discussing new projects.
            </Text>

            <ContactIconsList />

            <Group mt="xl">{icons}</Group>
          </div>

          <div className={classes.form}>
            <TextInput
              label="Email"
              placeholder="your@email.com"
              required
              radius="sm"
              classNames={{ input: classes.input, label: classes.inputLabel }}
            />
            <TextInput
              label="Name"
              placeholder="John Doe"
              mt="md"
              radius="sm"
              classNames={{ input: classes.input, label: classes.inputLabel }}
            />
            <TextInput
              label="Subject"
              placeholder="Your subject"
              mt="md"
              radius="sm"
              classNames={{ input: classes.input, label: classes.inputLabel }}
            />
            <Textarea
              required
              label="Your message"
              placeholder="Write your message here..."
              minRows={4}
              mt="md"
              radius="sm"
              classNames={{ input: classes.input, label: classes.inputLabel }}
            />

            <Group mt="md" gap="sm" grow>
              <Button variant="outline" radius="sm">
                Cancel
              </Button>
              <Button variant="filled" radius="sm">
                Send message
              </Button>
            </Group>
          </div>
        </SimpleGrid>
      </div> */}
    </Container>
  );
}
