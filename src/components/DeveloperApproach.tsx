import React from 'react';
import { DEVELOPER_STAGES } from '../data/portfolioData';
import { Compass, CheckCircle2, Workflow } from 'lucide-react';

export const DeveloperApproach: React.FC = () => {
  return (
    <section className="py-20 bg-[#0E1524]/60 border-t border-[#1F293D] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#141C30] border border-[#25314F] text-xs font-mono text-[#3FE3C4] mb-3">
            <Workflow className="w-3.5 h-3.5" />
            <span>Engineering Discipline</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white tracking-tight">
            How I Build Software
          </h2>
          <p className="mt-2 text-base text-[#8D96AE]">
            A structured, repeatable methodology for delivering reliable systems — from constraint discovery to measurable production optimization.
          </p>
        </div>

        {/* 4 Stages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {DEVELOPER_STAGES.map((stage) => (
            <div
              key={stage.step}
              id={`stage-card-${stage.step}`}
              className="p-6 rounded-2xl bg-[#0B0F17] border border-[#25314F] hover:border-[#3FE3C4]/40 transition-colors flex flex-col justify-between group shadow-sm"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[#1F293D]">
                  <span className="font-mono text-2xl font-bold text-[#3FE3C4]">
                    {stage.step}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-[#25314F] group-hover:bg-[#3FE3C4] transition-colors"></span>
                </div>

                <div>
                  <h3 className="font-heading text-xl font-bold text-white">
                    {stage.title}
                  </h3>
                  <p className="mt-1 text-xs text-[#3FE3C4] font-mono">
                    {stage.description}
                  </p>
                </div>

                <div className="pt-2 space-y-2">
                  {stage.practices.map((practice, pIdx) => (
                    <div
                      key={pIdx}
                      className="flex items-start gap-2 text-xs text-[#8D96AE] leading-relaxed"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#3FE3C4] flex-shrink-0 mt-0.5" />
                      <span>{practice}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-[#1F293D] text-[10px] font-mono text-[#8D96AE] uppercase tracking-wider">
                Stage {stage.step} Deliverable
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
