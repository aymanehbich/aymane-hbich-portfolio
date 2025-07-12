import { Container } from "@mantine/core";
import HeroSection from "./Components/Sections/HeroSection/HeroSection";
import AboutSection from "./Components/Sections/AboutSection/AboutSection";
import ExperiencesSection from "./Components/Sections/ExperiencesSection/ExperiencesSection";
import EducationSection from "./Components/Sections/EducationSection/EducationSection";
import ProjectsSection from "./Components/Sections/ProjectsSection/ProjectsSection";
import SkillsSection from "./Components/Sections/SkillsSection/SkillsSection";
import ContactSection from "./Components/Sections/Contact/ContactSection";
import CertificatesSection from "./Components/Sections/CertificatesSection/CertificatesSection";

export default function HomePage() {
  return (
    <Container size="lg" p={0}>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <EducationSection />
      <ExperiencesSection />
      <ProjectsSection />
      <CertificatesSection/>
      <ContactSection />
      {/* <ContactSection_v2 /> */}
    </Container>
  );
}
