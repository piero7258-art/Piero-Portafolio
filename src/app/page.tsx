import { About } from "@/components/About";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Contact, CreativeProcess, DjSessions, ExperienceTimeline, Footer, Services, Skills } from "@/components/Sections";
import { getProjects } from "@/data/projects";

export default function Home() {
  const projects = getProjects();

  return (
    <main>
      <Hero />
      <About />
      <Projects projects={projects} />
      <Services />
      <ExperienceTimeline />
      <Skills />
      <CreativeProcess />
      <DjSessions />
      <Contact />
      <Footer />
    </main>
  );
}
