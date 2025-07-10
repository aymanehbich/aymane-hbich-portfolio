import {
  AppShell,
  Burger,
  Button,
  Group,
  UnstyledButton,
} from "@mantine/core";
import Link from "next/link";
import classes from "./Header.module.css";
import IconArrowRight from "@tabler/icons-react/dist/esm/icons/IconArrowRight";
import { AYMANE_LOGO } from "../Logo/Logo";
import { useWindowScroll } from "@mantine/hooks";
import clsx from "clsx";
import { AYMANE_LOGO_MOBILE } from "../Logo/LogoMobile";

type HeaderProps = {
  opened: boolean;
  toggle: () => void;
};
export default function Header({ opened, toggle }: HeaderProps) {
  const [scroll] = useWindowScroll();
  const scrollYMax = 20; // Define the scroll threshold for header style change
  return (
    <AppShell.Header
      className={clsx(
        classes.header,
        scroll.y > scrollYMax && classes.headerScrolled
      )}
    >
      <Group h="100%" px="md">
        <Burger opened={opened} onClick={toggle} hiddenFrom="md" size="sm" />
        <Group justify="space-between" style={{ flex: 1 }}>
          {/* <UnstyledButton display="flex" component={Link} href="/">
            <MantineLogo size={30} />
          </UnstyledButton> */}
          <UnstyledButton display="flex" component={Link} href="/" visibleFrom="sm">
            <AYMANE_LOGO size={25} />
          </UnstyledButton>
          <UnstyledButton hiddenFrom="sm" display="flex" component={Link} href="/">
            <AYMANE_LOGO_MOBILE size={30} />
          </UnstyledButton>
          <Group
            visibleFrom="md"
            className={clsx(
              classes.linksWrapper,
              scroll.y > scrollYMax && classes.scrollModifier
            )}
          >
            <UnstyledButton
              component={Link}
              href="/#about"
              className={classes.link}
            >
              About
            </UnstyledButton>
            <UnstyledButton
              component={Link}
              href="/#skills"
              className={classes.link}
            >
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
          </Group>
          <Button
            component={Link}
            href="#contact"
            variant="outline"
            // gradient={{ from: "myColor", to: "red" }}
            radius="xl"
            // color="myColor"
            size="md"
            rightSection={<IconArrowRight size={16} />}
            // className={classes.connectButton}
          >
            Connect
          </Button>
        </Group>
      </Group>
    </AppShell.Header>
  );
}
