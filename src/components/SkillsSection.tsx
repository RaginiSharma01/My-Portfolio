import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Terminal, Cpu, Cloud, Users, Check } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  const getDomainIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Terminal className="w-5 h-5 text-blue-400" />;
      case 1:
        return <Cpu className="w-5 h-5 text-blue-400" />;
      case 2:
        return <Cloud className="w-5 h-5 text-blue-400" />;
      case 3:
      default:
        return <Users className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <section id="skills" className="py-24 border-b border-[#1E202B]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="max-w-2xl mb-16">
          <div className="text-xs font-semibold tracking-wider uppercase text-blue-400 mb-2">
            Technical Competencies & Craft
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white [text-wrap:balance]">
            Disciplined full-stack engineering across the entire software stack.
          </h2>
          <p className="text-sm text-neutral-400 mt-3 leading-relaxed">
            Eight years of shipping high-reliability systems with an emphasis on performance profiling, robust type contracts, and zero-downtime operations.
          </p>
        </div>

        {/* 4 Quadrants of Expertise */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {PORTFOLIO_DATA.skillCategories.map((category, idx) => (
            <div
              key={category.title}
              className="bg-[#10111A] border border-[#202230] rounded-2xl p-7 flex flex-col justify-between"
            >
              <div>
                {/* Domain Header */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-[#161724] border border-[#242637] rounded-lg">
                    {getDomainIcon(idx)}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">
                      {category.title}
                    </h3>
                    <p className="text-xs text-neutral-400 mt-0.5">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Skill List with Tabular Figures and Level */}
                <div className="mt-6 space-y-3">
                  {category.skills.map((skill) => {
                    const isSelected = selectedSkill === skill.name;
                    return (
                      <div
                        key={skill.name}
                        onClick={() =>
                          setSelectedSkill(isSelected ? null : skill.name)
                        }
                        className={`flex items-center justify-between p-2.5 rounded-lg border cursor-pointer transition-colors ${
                          isSelected
                            ? 'bg-[#181B2B] border-blue-500/50'
                            : 'bg-[#12131D]/60 border-[#1F212E] hover:border-[#2C2E42] hover:bg-[#141624]'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-medium text-neutral-200">
                            {skill.name}
                          </span>
                          {skill.featured && (
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                          )}
                        </div>

                        <div className="flex items-center gap-3 text-xs text-neutral-400 font-mono">
                          <span className="text-neutral-500">
                            {skill.category}
                          </span>
                          <span className="text-neutral-600">·</span>
                          <span className="text-blue-400 font-medium">
                            {skill.level}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Bottom Note */}
              <div className="mt-6 pt-4 border-t border-[#1C1E2B] flex items-center justify-between text-[11px] text-neutral-500">
                <span>{category.skills.length} core competencies</span>
                <span className="flex items-center gap-1 text-neutral-400">
                  <Check className="w-3 h-3 text-blue-400" />
                  Production Tested
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Selected Skill Banner / Insight (if user interacted) */}
        {selectedSkill && (
          <div className="p-4 bg-[#121422] border border-blue-500/40 rounded-xl flex items-center justify-between text-xs text-neutral-300 animate-in fade-in duration-150">
            <div>
              <span className="font-semibold text-white">Inspecting: {selectedSkill}</span>
              <span className="text-neutral-400 ml-2">
                Used in core production environments at Novus and featured open-source repositories.
              </span>
            </div>
            <button
              onClick={() => setSelectedSkill(null)}
              className="text-neutral-400 hover:text-white underline underline-offset-4"
            >
              Clear selection
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
