import React from 'react';
import { EDUCATION_ITEMS } from '../data/portfolioData';
import { GraduationCap, Award, MapPin, Calendar, CheckCircle2 } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-[#0B0F17] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#141C30] border border-[#25314F] text-xs font-mono text-[#3FE3C4] mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Qualifications</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Education
          </h2>
          <p className="mt-2 text-base text-[#8D96AE]">
            Consistent academic excellence spanning technical coursework, core computer science, and data engineering fundamentals.
          </p>
        </div>

        {/* Education Timeline Cards */}
        <div className="space-y-6">
          {EDUCATION_ITEMS.map((item, idx) => (
            <div
              key={idx}
              id={`edu-item-${idx}`}
              className={`rounded-2xl border p-6 sm:p-8 transition-all ${
                idx === 0
                  ? 'bg-[#0E1524] border-[#3FE3C4]/40 shadow-xl'
                  : 'bg-[#0E1524]/60 border-[#25314F]'
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded bg-[#141C30] text-[#3FE3C4] border border-[#25314F]">
                      {item.gradeBadge}
                    </span>
                    {idx === 0 && (
                      <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        Top Academic Percentile
                      </span>
                    )}
                  </div>
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-white">
                    {item.institution}
                  </h3>
                  <div className="text-base font-medium text-[#C4C9D6]">
                    {item.degree}
                  </div>
                  {item.location && (
                    <div className="flex items-center gap-1.5 text-xs text-[#8D96AE] font-mono">
                      <MapPin className="w-3.5 h-3.5 text-[#8D96AE]" />
                      <span>{item.location}</span>
                    </div>
                  )}
                </div>

                <div className="flex flex-col sm:flex-row md:flex-col items-start md:items-end gap-2">
                  <div className="px-3.5 py-1.5 rounded-xl bg-[#141C30] border border-[#25314F] text-xs font-mono text-[#8D96AE] flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#3FE3C4]" />
                    <span>Graduation: {item.period}</span>
                  </div>
                  <div className="px-4 py-2 rounded-xl bg-[#3FE3C4]/10 border border-[#3FE3C4]/30 text-[#3FE3C4] font-heading font-bold text-base sm:text-lg flex items-center gap-2">
                    <Award className="w-4 h-4 text-[#3FE3C4]" />
                    <span>{item.score}</span>
                  </div>
                </div>
              </div>

              {idx === 0 && (
                <div className="mt-6 pt-5 border-t border-[#1F293D] flex flex-wrap items-center gap-4 text-xs font-mono text-[#8D96AE]">
                  <span className="flex items-center gap-1 text-[#3FE3C4]">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Core Coursework:</span>
                  </span>
                  <span>Data Structures & Algorithms</span>
                  <span>•</span>
                  <span>Object-Oriented Programming (OOP)</span>
                  <span>•</span>
                  <span>Database Management Systems (DBMS)</span>
                  <span>•</span>
                  <span>Computer Networks & Operating Systems</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
