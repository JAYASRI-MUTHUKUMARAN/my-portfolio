import React, { useState } from 'react';
import {
  FileText,
  Github,
  Linkedin,
  ArrowRight,
  Code2,
  Sparkles,
  ExternalLink,
  Copy,
  Check,
} from 'lucide-react';
import { PERSONAL_INFO, QUICK_STATS } from '../data/portfolioData';
import { HeroHeadshot } from './HeroHeadshot';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="home" className="relative pt-28 pb-16 sm:pt-36 sm:pb-20 overflow-hidden">
      {/* Background architectural glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#3FE3C4]/5 blur-[120px] rounded-full pointer-events-none -z-10"></div>
      <div className="absolute top-40 right-10 w-[300px] h-[300px] bg-blue-500/5 blur-[100px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Recruiter 20-Second Instant Snapshot Banner */}
        <div
          id="recruiter-quick-glance-bar"
          className="mb-8 p-3 rounded-xl bg-[#141C30]/70 border border-[#25314F] flex flex-wrap items-center justify-between gap-3 text-xs font-mono backdrop-blur-sm"
        >
          <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-[#8D96AE]">
            <span className="flex items-center gap-1.5 text-[#3FE3C4] font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#3FE3C4] animate-pulse"></span>
              Recruiter Quick Snapshot:
            </span>
            <span className="text-[#EDEFF5] font-medium">B.Tech IT (2026 Grad)</span>
            <span className="text-[#25314F]">•</span>
            <span className="text-[#3FE3C4] font-semibold">8.98 CGPA</span>
            <span className="text-[#25314F]">•</span>
            <span className="text-[#EDEFF5]">Puducherry, India (Open to Relocation / Remote)</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              id="hero-copy-email-chip"
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-[#0E1524] text-[#8D96AE] hover:text-[#3FE3C4] border border-[#25314F] transition-colors"
            >
              {copiedEmail ? <Check className="w-3 h-3 text-[#3FE3C4]" /> : <Copy className="w-3 h-3" />}
              <span>{copiedEmail ? 'Email Copied' : 'Copy Email'}</span>
            </button>
            <button
              type="button"
              id="hero-quick-resume-chip"
              onClick={onOpenResume}
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-[#3FE3C4]/10 text-[#3FE3C4] border border-[#3FE3C4]/30 hover:bg-[#3FE3C4]/20 transition-colors font-semibold"
            >
              <FileText className="w-3 h-3" />
              <span>Resume PDF</span>
            </button>
          </div>
        </div>

        {/* Main Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Heading and CTAs */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#141C30] border border-[#25314F] text-xs font-mono text-[#3FE3C4]">
              <Sparkles className="w-3.5 h-3.5 text-[#3FE3C4]" />
              <span>Available for Full-Time Roles • 2026 Batch</span>
            </div>

            <div className="space-y-3">
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
                Hi, I'm <span className="text-white">Jayasri Muthukumaran.</span>
              </h1>
              <h2 className="text-xl sm:text-2xl font-semibold text-[#3FE3C4] leading-snug">
                Software Developer building practical solutions with Python, Web Technologies and AI/ML.
              </h2>
            </div>

            <p className="text-base sm:text-lg text-[#8D96AE] leading-relaxed max-w-xl">
              B.Tech Information Technology graduate with an <strong className="text-[#EDEFF5]">8.98 CGPA</strong> and hands-on experience building web applications, backend systems and AI-powered projects. I enjoy turning real-world problems into reliable, user-friendly software.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <a
                href="#projects"
                id="hero-primary-cta"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-heading font-semibold text-sm sm:text-base bg-[#3FE3C4] text-[#062420] hover:bg-[#5CEBD1] transition-all shadow-md shadow-[#3FE3C4]/20 hover:translate-y-[-1px]"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                type="button"
                id="hero-secondary-resume-cta"
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-heading font-semibold text-sm sm:text-base bg-[#141C30] text-[#EDEFF5] border border-[#25314F] hover:border-[#3FE3C4] hover:text-[#3FE3C4] transition-all"
              >
                <FileText className="w-4 h-4 text-[#3FE3C4]" />
                <span>Download Resume</span>
              </button>
            </div>

            {/* Social / External Links */}
            <div className="pt-3 flex flex-wrap items-center gap-3 text-sm text-[#8D96AE]">
              <span className="text-xs font-mono uppercase tracking-wider text-[#8D96AE]/70">Profiles:</span>
              <a
                id="hero-github-btn"
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#141C30] border border-[#25314F] hover:border-[#3FE3C4] hover:text-[#3FE3C4] transition-colors font-mono text-xs text-[#EDEFF5]"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
                <ExternalLink className="w-3 h-3 text-[#8D96AE]" />
              </a>

              <a
                id="hero-linkedin-btn"
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#141C30] border border-[#25314F] hover:border-[#3FE3C4] hover:text-[#3FE3C4] transition-colors font-mono text-xs text-[#EDEFF5]"
              >
                <Linkedin className="w-3.5 h-3.5 text-[#3FE3C4]" />
                <span>LinkedIn</span>
                <ExternalLink className="w-3 h-3 text-[#8D96AE]" />
              </a>

              <a
                id="hero-leetcode-btn"
                href={PERSONAL_INFO.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#141C30] border border-[#25314F] hover:border-[#F2A868] hover:text-[#F2A868] transition-colors font-mono text-xs text-[#EDEFF5]"
              >
                <Code2 className="w-3.5 h-3.5 text-[#F2A868]" />
                <span>LeetCode</span>
                <ExternalLink className="w-3 h-3 text-[#8D96AE]" />
              </a>
            </div>
          </div>

          {/* Right Column: Professional Headshot Component */}
          <div className="lg:col-span-5 flex justify-center">
            <HeroHeadshot />
          </div>
        </div>

        {/* Section 7: Quick Profile Cards */}
        <div id="quick-profile-cards" className="mt-14 sm:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {QUICK_STATS.map((stat, idx) => (
            <div
              key={stat.label}
              id={`profile-card-${idx}`}
              className="p-5 rounded-2xl bg-[#141C30]/80 border border-[#25314F] hover:border-[#3FE3C4]/50 transition-all duration-200 group hover:translate-y-[-2px] shadow-sm"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono text-[#3FE3C4] uppercase tracking-wider">
                  {stat.highlight}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#25314F] group-hover:bg-[#3FE3C4] transition-colors"></span>
              </div>
              <div className="font-heading text-3xl sm:text-4xl font-bold text-white group-hover:text-[#3FE3C4] transition-colors">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-[#EDEFF5] mt-1">{stat.label}</div>
              <div className="text-xs text-[#8D96AE] mt-0.5">{stat.note}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
