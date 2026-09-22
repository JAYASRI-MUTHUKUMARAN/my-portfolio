import React from 'react';
import { OTHER_PROJECTS } from '../data/portfolioData';
import { FolderGit2, Github, ExternalLink, CheckCircle2 } from 'lucide-react';

export const OtherProjects: React.FC = () => {
  return (
    <section className="py-20 bg-[#0B0F17] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#141C30] border border-[#25314F] text-xs font-mono text-[#3FE3C4] mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Additional Engineering Projects</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white tracking-tight">
            More Software Projects
          </h2>
          <p className="mt-2 text-base text-[#8D96AE]">
            Practical web systems, machine learning utilities, and developer tooling built with clean architecture and real API integrations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {OTHER_PROJECTS.map((project, idx) => (
            <div
              key={project.id}
              id={`other-project-card-${idx}`}
              className="rounded-2xl bg-[#0E1524] border border-[#25314F] p-6 sm:p-7 hover:border-[#3FE3C4]/40 transition-all duration-200 flex flex-col justify-between group shadow-lg"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-xs font-mono text-[#3FE3C4] block mb-1">
                      {project.category}
                    </span>
                    <h3 className="font-heading text-xl sm:text-2xl font-bold text-white group-hover:text-[#3FE3C4] transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  <a
                    id={`project-github-link-${project.id}`}
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-[#141C30] border border-[#25314F] text-[#8D96AE] hover:text-[#3FE3C4] hover:border-[#3FE3C4] transition-colors"
                    title="View GitHub Repository"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>

                {project.problemStatement && (
                  <div className="p-3 rounded-xl bg-[#141C30]/60 border border-[#25314F] text-xs text-[#C4C9D6]">
                    <span className="font-mono text-[#8D96AE] font-semibold block mb-0.5">
                      Problem Solved:
                    </span>
                    {project.problemStatement}
                  </div>
                )}

                <div className="space-y-1">
                  <span className="font-mono text-xs text-[#8D96AE] font-medium block">
                    What I Built:
                  </span>
                  <p className="text-sm text-[#C4C9D6] leading-relaxed">
                    {project.whatIBuilt}
                  </p>
                </div>

                {project.metrics && project.metrics.length > 0 && (
                  <div className="pt-2 space-y-1.5">
                    {project.metrics.map((metric) => (
                      <div
                        key={metric}
                        className="flex items-center gap-2 text-xs font-mono text-[#3FE3C4]"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" />
                        <span>{metric}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="mt-6 pt-5 border-t border-[#1F293D] flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-[#141C30] text-[#EDEFF5] border border-[#25314F]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  id={`project-action-link-${project.id}`}
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-[#3FE3C4] hover:underline"
                >
                  <span>Explore Repository</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
