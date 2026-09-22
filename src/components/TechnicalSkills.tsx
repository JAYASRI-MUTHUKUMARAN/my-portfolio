import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Code, Terminal, Globe, Brain, Database, Wrench, Sparkles } from 'lucide-react';

export const TechnicalSkills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const getCategoryIcon = (key: string) => {
    switch (key) {
      case 'programming':
        return <Code className="w-4 h-4 text-[#3FE3C4]" />;
      case 'backend':
        return <Terminal className="w-4 h-4 text-[#F2A868]" />;
      case 'frontend':
        return <Globe className="w-4 h-4 text-[#60A5FA]" />;
      case 'aiml':
        return <Brain className="w-4 h-4 text-[#A78BFA]" />;
      case 'databases':
        return <Database className="w-4 h-4 text-[#34D399]" />;
      case 'tools':
        return <Wrench className="w-4 h-4 text-[#F472B6]" />;
      default:
        return <Code className="w-4 h-4 text-[#3FE3C4]" />;
    }
  };

  const filteredCategories =
    selectedCategory === 'all'
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((cat) => cat.categoryKey === selectedCategory);

  return (
    <section id="skills" className="py-20 bg-[#0B0F17] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#141C30] border border-[#25314F] text-xs font-mono text-[#3FE3C4] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical Competencies</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Technical Skills
          </h2>
          <p className="mt-2 text-base text-[#8D96AE]">
            Verified proficiencies across software engineering, backend services, modern web interfaces, and applied machine learning.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          <button
            type="button"
            id="filter-all-skills"
            onClick={() => setSelectedCategory('all')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-colors ${
              selectedCategory === 'all'
                ? 'bg-[#3FE3C4] text-[#0B0F17] font-semibold shadow-sm'
                : 'bg-[#141C30] text-[#8D96AE] hover:text-white border border-[#25314F]'
            }`}
          >
            All Skills
          </button>
          {SKILL_CATEGORIES.map((cat) => (
            <button
              key={cat.categoryKey}
              id={`filter-${cat.categoryKey}`}
              onClick={() => setSelectedCategory(cat.categoryKey)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-colors flex items-center gap-1.5 ${
                selectedCategory === cat.categoryKey
                  ? 'bg-[#3FE3C4] text-[#0B0F17] font-semibold shadow-sm'
                  : 'bg-[#141C30] text-[#8D96AE] hover:text-white border border-[#25314F]'
              }`}
            >
              {getCategoryIcon(cat.categoryKey)}
              <span>{cat.title}</span>
            </button>
          ))}
        </div>

        {/* Categorized Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => (
            <div
              key={category.title}
              id={`skill-card-${category.categoryKey}`}
              className="p-6 rounded-2xl bg-[#0E1524] border border-[#25314F] hover:border-[#3FE3C4]/40 transition-all duration-200 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#25314F]">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-[#141C30] border border-[#25314F]">
                      {getCategoryIcon(category.categoryKey)}
                    </div>
                    <h3 className="font-heading font-semibold text-lg text-white">
                      {category.title}
                    </h3>
                  </div>
                  <span className="text-xs font-mono text-[#8D96AE]">
                    {category.skills.length} tools
                  </span>
                </div>

                {/* Skill Badges */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-[#141C30] text-[#EDEFF5] border border-[#25314F] group-hover:border-[#3FE3C4]/20 hover:border-[#3FE3C4] hover:text-[#3FE3C4] transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-[#1F293D] flex items-center justify-between text-[11px] font-mono text-[#8D96AE]">
                <span>Applied in Production & Projects</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#3FE3C4]"></span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
