import React from 'react';
import { ACHIEVEMENTS, CERTIFICATIONS } from '../data/portfolioData';
import { Award, FileText, Brain, GraduationCap, CheckCircle2, ShieldCheck } from 'lucide-react';

export const Achievements: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'GraduationCap':
        return <GraduationCap className="w-5 h-5 text-[#3FE3C4]" />;
      case 'FileText':
        return <FileText className="w-5 h-5 text-[#F2A868]" />;
      case 'Award':
        return <Award className="w-5 h-5 text-[#60A5FA]" />;
      case 'Brain':
        return <Brain className="w-5 h-5 text-[#A78BFA]" />;
      default:
        return <Award className="w-5 h-5 text-[#3FE3C4]" />;
    }
  };

  return (
    <section className="py-20 bg-[#0E1524]/60 border-t border-[#1F293D] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#141C30] border border-[#25314F] text-xs font-mono text-[#3FE3C4] mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Milestones & Credibility</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Achievements & Certifications
          </h2>
          <p className="mt-2 text-base text-[#8D96AE]">
            Verified milestones across competitive academic standards, research publishing, and technical certifications.
          </p>
        </div>

        {/* 4 Clean Achievement Highlights Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {ACHIEVEMENTS.map((item, idx) => (
            <div
              key={item.title}
              id={`achievement-card-${idx}`}
              className="p-6 rounded-2xl bg-[#0B0F17] border border-[#25314F] hover:border-[#3FE3C4]/40 transition-all duration-200 group flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-xl bg-[#141C30] border border-[#25314F] group-hover:border-[#3FE3C4]/30 transition-colors">
                    {getIcon(item.iconName)}
                  </div>
                  <span className="text-[10px] font-mono font-medium text-[#3FE3C4] bg-[#3FE3C4]/10 px-2 py-0.5 rounded border border-[#3FE3C4]/20">
                    {item.tag}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-lg text-white">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#C4C9D6] leading-relaxed">
                  {item.detail}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-[#1F293D] flex items-center gap-1.5 text-[11px] font-mono text-[#8D96AE]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#3FE3C4]" />
                <span>Verified Academic Record</span>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Subsection */}
        <div className="rounded-3xl bg-[#0B0F17] border border-[#25314F] p-6 sm:p-8 lg:p-10 shadow-lg space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#1F293D]">
            <div>
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#3FE3C4]" />
                Technical Certifications & Training
              </h3>
              <p className="text-xs sm:text-sm text-[#8D96AE] font-mono mt-0.5">
                Accredited specialized learning in Machine Learning, Full-Stack, and Cloud Architecture
              </p>
            </div>
            <div className="text-xs font-mono text-[#8D96AE] bg-[#141C30] px-3 py-1.5 rounded-lg border border-[#25314F] self-start sm:self-auto">
              Total Certifications: 8 Verified
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {CERTIFICATIONS.map((cert, idx) => (
              <div
                key={idx}
                id={`cert-item-${idx}`}
                className="p-4 rounded-xl bg-[#0E1524] border border-[#25314F] hover:border-[#3FE3C4]/30 transition-colors flex items-center justify-between gap-4"
              >
                <div className="space-y-1">
                  <div className="font-semibold text-sm text-white">
                    {cert.title}
                  </div>
                  <div className="text-xs text-[#8D96AE] font-mono">
                    {cert.issuer} {cert.year ? `• ${cert.year}` : ''}
                  </div>
                </div>

                {cert.badge && (
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-[#141C30] text-[#3FE3C4] border border-[#25314F] whitespace-nowrap flex-shrink-0">
                    {cert.badge}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
