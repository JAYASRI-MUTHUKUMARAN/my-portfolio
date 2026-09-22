import React from 'react';
import { EXPERIENCE_ITEMS } from '../data/portfolioData';
import { Briefcase, Calendar, CheckCircle2, TrendingUp, Bug, GitBranch } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-[#0E1524]/60 border-t border-[#1F293D] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#141C30] border border-[#25314F] text-xs font-mono text-[#3FE3C4] mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Practical Background</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Work Experience
          </h2>
          <p className="mt-2 text-base text-[#8D96AE]">
            Industry-aligned software internship focused on full-stack bug resolution, API latency reduction, and Agile team workflows.
          </p>
        </div>

        {/* Experience Timeline Item */}
        <div className="space-y-8">
          {EXPERIENCE_ITEMS.map((item, idx) => (
            <div
              key={idx}
              id="experience-card-launched-global"
              className="rounded-3xl bg-[#0B0F17] border border-[#25314F] p-6 sm:p-8 lg:p-10 shadow-xl space-y-6"
            >
              {/* Header Info */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#1F293D]">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-semibold bg-[#3FE3C4]/15 text-[#3FE3C4] border border-[#3FE3C4]/30">
                      {item.type}
                    </span>
                    <span className="text-xs font-mono text-[#8D96AE]">
                      Agile Development Sprint Cycles
                    </span>
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-white">
                    {item.role}
                  </h3>
                  <div className="text-base text-[#3FE3C4] font-medium mt-0.5">
                    {item.company}
                  </div>
                </div>

                <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#141C30] border border-[#25314F] text-xs font-mono text-[#8D96AE] self-start sm:self-auto">
                  <Calendar className="w-3.5 h-3.5 text-[#3FE3C4]" />
                  <span>{item.period}</span>
                </div>
              </div>

              {/* Key Impact Stats Callout */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-[#141C30] border border-[#25314F] flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-rose-500/10 text-rose-400 border border-rose-500/20">
                    <Bug className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-heading font-bold text-lg text-white">20+ Resolved</div>
                    <div className="text-xs text-[#8D96AE]">High-Priority Defects</div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#141C30] border border-[#25314F] flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-[#3FE3C4]/10 text-[#3FE3C4] border border-[#3FE3C4]/20">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-heading font-bold text-lg text-white">28% Latency Drop</div>
                    <div className="text-xs text-[#8D96AE]">Backend API Optimization</div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#141C30] border border-[#25314F] flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-[#60A5FA]/10 text-[#60A5FA] border border-[#60A5FA]/20">
                    <GitBranch className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-heading font-bold text-lg text-white">Agile & Git</div>
                    <div className="text-xs text-[#8D96AE]">Peer Reviews & Testing</div>
                  </div>
                </div>
              </div>

              {/* Detailed Bullet Points */}
              <div className="space-y-3 pt-2">
                <div className="text-xs font-mono text-[#8D96AE] uppercase tracking-wider">
                  Core Responsibilities & Accomplishments:
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {item.highlights.map((point, pIdx) => (
                    <div
                      key={pIdx}
                      className="p-3.5 rounded-xl bg-[#0E1524] border border-[#25314F] flex items-start gap-3 text-sm text-[#C4C9D6] leading-relaxed"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#3FE3C4] flex-shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Applied */}
              <div className="pt-4 border-t border-[#1F293D] flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono text-[#8D96AE] mr-2">Technologies Used:</span>
                {item.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md text-xs font-mono bg-[#141C30] text-[#EDEFF5] border border-[#25314F]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
