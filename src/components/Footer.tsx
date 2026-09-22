import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Github, Linkedin, FileText, ArrowUp, Code2, Heart } from 'lucide-react';

interface FooterProps {
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0B0F17] border-t border-[#1F293D] relative overflow-hidden">
      {/* Section 32: Final CTA Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#141C30] via-[#0E1524] to-[#141C30] border border-[#25314F] text-center space-y-6 shadow-2xl relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B0F17] border border-[#25314F] text-xs font-mono text-[#3FE3C4]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3FE3C4] animate-pulse"></span>
            <span>Immediate 2026 Hiring Pipeline</span>
          </div>

          <div className="space-y-2 max-w-2xl mx-auto">
            <h3 className="font-heading text-2xl sm:text-4xl font-bold text-white tracking-tight">
              Have an opportunity? Let's connect.
            </h3>
            <p className="text-sm sm:text-base text-[#8D96AE]">
              I'm open to entry-level Software Developer, Python Developer, Web Developer and AI/ML opportunities.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              type="button"
              id="final-cta-resume-btn"
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-heading font-semibold text-sm bg-[#3FE3C4] text-[#062420] hover:bg-[#5CEBD1] transition-all shadow-md cursor-pointer"
            >
              <FileText className="w-4 h-4" />
              <span>View Resume</span>
            </button>

            <a
              id="final-cta-github-btn"
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-heading font-semibold text-sm bg-[#0B0F17] text-[#EDEFF5] border border-[#25314F] hover:border-[#3FE3C4] hover:text-[#3FE3C4] transition-all"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>

            <a
              id="final-cta-linkedin-btn"
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-heading font-semibold text-sm bg-[#0B0F17] text-[#EDEFF5] border border-[#25314F] hover:border-[#3FE3C4] hover:text-[#3FE3C4] transition-all"
            >
              <Linkedin className="w-4 h-4 text-[#3FE3C4]" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        {/* Bottom Metadata & Copyright */}
        <div className="mt-12 pt-8 border-t border-[#1F293D] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#8D96AE]">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <div className="w-6 h-6 rounded-md bg-[#141C30] border border-[#25314F] flex items-center justify-center text-[#3FE3C4]">
              <Code2 className="w-3.5 h-3.5" />
            </div>
            <span>© 2026 Jayasri Muthukumaran. Built with code, curiosity and continuous learning.</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#3FE3C4] transition-colors"
            >
              GitHub
            </a>
            <span className="text-[#25314F]">•</span>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#3FE3C4] transition-colors"
            >
              LinkedIn
            </a>
            <span className="text-[#25314F]">•</span>
            <button
              type="button"
              id="scroll-to-top-btn"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 hover:text-[#3FE3C4] transition-colors cursor-pointer"
              title="Back to Top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
