import { AppShell, Button, Group, UnstyledButton } from "@mantine/core";
import React from "react";
import classes from "./Navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <AppShell.Navbar py="md" px={4}>
      <UnstyledButton component={Link} href="/#about" className={classes.link}>
        About
      </UnstyledButton>
      <UnstyledButton component={Link} href="/#skills" className={classes.link}>
        Skills
      </UnstyledButton>
      <UnstyledButton
        component={Link}
        href="/#education"
        className={classes.link}
      >
        Education
      </UnstyledButton>
      <UnstyledButton
        component={Link}
        href="/#experience"
        className={classes.link}
      >
        Experience
      </UnstyledButton>
      <UnstyledButton
        component={Link}
        href="/#projects"
        className={classes.link}
      >
        Projects
      </UnstyledButton>
      {/* <Button
        mt="md"
        mx="md"
        component={Link}
        href="#contact"
        variant="default"
        radius="xl"
        size="md"
        rightSection={<IconArrowRight size={16} />}
      >
        Connect
      </Button> */}
    </AppShell.Navbar>
  );
}
