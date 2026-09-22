import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { TechnicalSkills } from './components/TechnicalSkills';
import { SignSensePro } from './components/SignSensePro';
import { OtherProjects } from './components/OtherProjects';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Achievements } from './components/Achievements';
import { GitHubSection } from './components/GitHubSection';
import { DeveloperApproach } from './components/DeveloperApproach';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { FadeInSection } from './components/FadeInSection';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0B0F17] text-[#EDEFF5] flex flex-col selection:bg-[#3FE3C4]/20 selection:text-[#3FE3C4]">
      {/* Sticky Navigation */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Content Sections with Framer Motion Reveal on Scroll */}
      <main className="flex-1">
        <Hero onOpenResume={() => setIsResumeOpen(true)} />

        <FadeInSection id="about-section-wrapper">
          <About />
        </FadeInSection>

        <FadeInSection id="skills-section-wrapper">
          <TechnicalSkills />
        </FadeInSection>

        <FadeInSection id="signsence-section-wrapper">
          <SignSensePro />
        </FadeInSection>

        <FadeInSection id="projects-section-wrapper">
          <OtherProjects />
        </FadeInSection>

        <FadeInSection id="experience-section-wrapper">
          <Experience />
        </FadeInSection>

        <FadeInSection id="education-section-wrapper">
          <Education />
        </FadeInSection>

        <FadeInSection id="achievements-section-wrapper">
          <Achievements />
        </FadeInSection>

        <FadeInSection id="github-section-wrapper">
          <GitHubSection />
        </FadeInSection>

        <FadeInSection id="approach-section-wrapper">
          <DeveloperApproach />
        </FadeInSection>

        <FadeInSection id="contact-section-wrapper">
          <Contact />
        </FadeInSection>
      </main>

      {/* Footer and Final Opportunity CTA */}
      <FadeInSection id="footer-section-wrapper">
        <Footer onOpenResume={() => setIsResumeOpen(true)} />
      </FadeInSection>

      {/* Recruiter-Ready Complete Digital Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}


