"use client";
import { AppShell } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Header from "../../Components/Header/Header";
import Navbar from "../../Components/Navbar/Navbar";
export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [opened, { toggle, close }] = useDisclosure();
  return (
    <AppShell
      header={{ height: 70 }}
      navbar={{
        width: 300,
        breakpoint: "md",
        collapsed: { desktop: true, mobile: !opened },
      }}
      styles={{ header: { borderBottom: "none" } }}
      padding="md"
    >
      <Header opened={opened} toggle={toggle} />
      <Navbar />
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}
