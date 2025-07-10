import { Container } from "@mantine/core";
import Header from "./Components/Header/Header";
import HeroSection from "./Components/Sections/HeroSection/HeroSection";
import AboutSection from "./Components/Sections/AboutSection/AboutSection";
import ExperiencesSection from "./Components/Sections/ExperiencesSection/ExperiencesSection";
import EducationSection from "./Components/Sections/EducationSection/EducationSection";
import ProjectsSection from "./Components/Sections/ProjectsSection/ProjectsSection";
import SkillsSection from "./Components/Sections/SkillsSection/SkillsSection";
import ContactSection from "./Components/Sections/Contact/ContactSection";
import ContactSection_v2 from "./Components/Sections/Contact/ContactSection_v2";

export default function HomePage() {
  return (
    <Container size="lg" p={0}>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <EducationSection />
      <ExperiencesSection />
      <ProjectsSection />
      <ContactSection/>
      {/* <ContactSection_v2 /> */}
    </Container>
  );
}
