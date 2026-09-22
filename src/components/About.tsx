import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { User, CheckCircle2, Code2, MapPin, GraduationCap, Briefcase } from 'lucide-react';
import { useProfilePhoto } from '../utils/photoStore';

export const About: React.FC = () => {
  const [photoUrl] = useProfilePhoto();
  const [imageError, setImageError] = useState(false);
  return (
    <section id="about" className="py-20 bg-[#0E1524]/60 border-t border-[#1F293D] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#141C30] border border-[#25314F] text-xs font-mono text-[#3FE3C4] mb-3">
            <User className="w-3.5 h-3.5" />
            <span>Profile Overview</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white tracking-tight">
            About Me
          </h2>
          <p className="mt-2 text-base text-[#8D96AE]">
            Engineering mindset, practical problem solving, and a commitment to continuous technical growth.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Professional Text */}
          <div className="lg:col-span-7 space-y-5 text-base sm:text-lg text-[#C4C9D6] leading-relaxed">
            <p className="bg-[#141C30]/50 p-5 rounded-2xl border border-[#25314F]/80 text-[#EDEFF5]">
              {PERSONAL_INFO.aboutIntro1}
            </p>
            <p>
              {PERSONAL_INFO.aboutIntro2}
            </p>
            <p>
              {PERSONAL_INFO.aboutIntro3}
            </p>

            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm font-mono text-[#EDEFF5]">
              <div className="p-3 rounded-xl bg-[#141C30] border border-[#25314F] flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#3FE3C4] flex-shrink-0" />
                <span>Clean Backend Architecture</span>
              </div>
              <div className="p-3 rounded-xl bg-[#141C30] border border-[#25314F] flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#3FE3C4] flex-shrink-0" />
                <span>Machine Learning Integration</span>
              </div>
              <div className="p-3 rounded-xl bg-[#141C30] border border-[#25314F] flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#3FE3C4] flex-shrink-0" />
                <span>REST API Design & Testing</span>
              </div>
              <div className="p-3 rounded-xl bg-[#141C30] border border-[#25314F] flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#3FE3C4] flex-shrink-0" />
                <span>Agile & Git Version Control</span>
              </div>
            </div>
          </div>

          {/* Quick Credential Box & Portrait */}
          <div className="lg:col-span-5 space-y-6">
            {/* Candidate Portrait Card */}
            <div className="p-5 rounded-2xl bg-[#141C30] border border-[#25314F] shadow-lg flex flex-col sm:flex-row items-center gap-5">
              <div className="relative w-28 h-28 rounded-2xl overflow-hidden border-2 border-[#3FE3C4]/50 shadow-md bg-[#0B0F17] flex items-center justify-center flex-shrink-0">
                {!imageError ? (
                  <img
                    src={photoUrl}
                    alt="Jayasri Muthukumaran - Software Developer"
                    onError={() => setImageError(true)}
                    className="w-full h-full object-cover object-top"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-[#141C30] text-[#3FE3C4] font-heading font-bold text-2xl">
                    JM
                  </div>
                )}
              </div>
              <div className="space-y-1 text-center sm:text-left">
                <div className="text-xs font-mono font-semibold text-[#3FE3C4] uppercase tracking-wider">
                  Verified Candidate
                </div>
                <h3 className="font-heading text-lg font-bold text-white">
                  Jayasri Muthukumaran
                </h3>
                <p className="text-xs text-[#8D96AE] font-mono">
                  B.Tech IT • 2026 Batch
                </p>
                <div className="pt-1.5 flex flex-wrap gap-1.5 justify-center sm:justify-start text-[11px] font-mono">
                  <span className="px-2 py-0.5 rounded bg-[#0E1524] text-[#3FE3C4] border border-[#25314F]">
                    CGPA 8.98
                  </span>
                  <span className="px-2 py-0.5 rounded bg-[#0E1524] text-emerald-400 border border-[#25314F]">
                    Open to Hire
                  </span>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#141C30] border border-[#25314F] shadow-lg space-y-5">
              <h3 className="font-heading text-lg font-semibold text-white flex items-center gap-2">
                <Code2 className="w-4 h-4 text-[#3FE3C4]" />
                Key Candidate Metrics
              </h3>

              <div className="space-y-4 divide-y divide-[#25314F] text-sm">
                <div className="pt-2 flex items-start gap-3">
                  <GraduationCap className="w-4 h-4 text-[#3FE3C4] mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-white">Degree & Distinction</div>
                    <div className="text-xs text-[#8D96AE]">
                      B.Tech Information Technology (July 2026)
                    </div>
                    <div className="text-xs text-[#3FE3C4] font-mono mt-0.5">
                      CGPA: 8.98 / 10.0 (First Class with Distinction)
                    </div>
                  </div>
                </div>

                <div className="pt-4 flex items-start gap-3">
                  <Briefcase className="w-4 h-4 text-[#F2A868] mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-white">Practical Experience</div>
                    <div className="text-xs text-[#8D96AE]">
                      Software Intern (Launched Global)
                    </div>
                    <div className="text-xs text-[#F2A868] font-mono mt-0.5">
                      20+ High-Priority Bugs Fixed • 28% API Optimization
                    </div>
                  </div>
                </div>

                <div className="pt-4 flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#60A5FA] mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-white">Location & Availability</div>
                    <div className="text-xs text-[#8D96AE]">
                      {PERSONAL_INFO.location}
                    </div>
                    <div className="text-xs text-[#60A5FA] font-mono mt-0.5">
                      Open to Chennai, Bengaluru, Hyderabad, or Remote
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-[#25314F]">
                <div className="text-xs font-mono text-[#8D96AE] mb-2">TARGET ROLES</div>
                <div className="flex flex-wrap gap-1.5">
                  {['Software Developer', 'Python Developer', 'Web Developer', 'AI/ML Engineer'].map((role) => (
                    <span
                      key={role}
                      className="px-2.5 py-1 rounded-md text-xs font-medium bg-[#0E1524] text-[#EDEFF5] border border-[#25314F]"
                    >
                      {role}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
