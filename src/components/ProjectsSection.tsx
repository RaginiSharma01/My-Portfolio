import React, { useState, useMemo } from 'react';
import { PORTFOLIO_DATA, Project } from '../data/portfolioData';
import { Github, ExternalLink, ArrowRight, Search, Code, CheckCircle2 } from 'lucide-react';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    'All',
    'Full-Stack & Web',
    'Backend & Cloud',
    'Distributed Systems & Open Source',
    'Enterprise Systems',
  ];

  const filteredProjects = useMemo(() => {
    return PORTFOLIO_DATA.projects.filter((project) => {
      const matchesCategory =
        activeCategory === 'All' || project.category === activeCategory;
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        query === '' ||
        project.title.toLowerCase().includes(query) ||
        project.tagline.toLowerCase().includes(query) ||
        project.techStack.some((tech) => tech.toLowerCase().includes(query));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="projects" className="py-24 border-b border-[#1E202B]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading & Filter Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold tracking-wider uppercase text-blue-400 mb-2">
              Selected Work & Systems
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white [text-wrap:balance]">
              Production engineering, open source, and architectural case studies.
            </h2>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72 shrink-0">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
            <input
              type="text"
              placeholder="Search by tech or title..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#12131D] border border-[#242636] focus:border-blue-500 rounded-lg pl-10 pr-4 py-2 text-xs text-white placeholder-neutral-500 outline-none transition-colors"
            />
          </div>
        </div>

        {/* Interactive Filter Tabs - Functional Segmented Buttons */}
        <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-[#12131D] border border-[#222434] rounded-xl mb-12 w-fit max-w-full">
          {categories.map((cat) => {
            const count =
              cat === 'All'
                ? PORTFOLIO_DATA.projects.length
                : PORTFOLIO_DATA.projects.filter((p) => p.category === cat).length;
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all duration-150 whitespace-nowrap flex items-center gap-2 ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-sm font-semibold'
                    : 'text-neutral-400 hover:text-white hover:bg-[#1A1C2B]'
                }`}
              >
                <span>{cat}</span>
                <span
                  className={`text-[10px] font-mono tabular-nums ${
                    isActive ? 'text-blue-100' : 'text-neutral-500'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="py-16 text-center bg-[#10111A] border border-[#202230] rounded-2xl p-8">
            <p className="text-sm text-neutral-400 mb-3">
              No engineering projects match your current filters.
            </p>
            <button
              onClick={() => {
                setActiveCategory('All');
                setSearchQuery('');
              }}
              className="text-xs text-blue-400 hover:text-blue-300 font-medium underline underline-offset-4"
            >
              Reset filters and search query
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group flex flex-col bg-[#10111A] hover:bg-[#131420] border border-[#202230] hover:border-[#2C2E42] rounded-2xl overflow-hidden transition-all duration-200"
              >
                {/* Media Preview Container */}
                <div
                  className="relative aspect-[16/10] w-full bg-[#161725] overflow-hidden border-b border-[#202230] cursor-pointer"
                  onClick={() => onSelectProject(project)}
                >
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300"
                    />
                  ) : (
                    /* CSS Fallback Container */
                    <div className="w-full h-full p-6 flex flex-col justify-between bg-gradient-to-br from-[#161826] to-[#0E0F18]">
                      <div className="flex items-center justify-between">
                        <Code className="w-6 h-6 text-blue-400" />
                        <span className="text-[11px] font-mono text-neutral-500">{project.year}</span>
                      </div>
                      <div>
                        <div className="text-base font-bold text-white mb-1">{project.title}</div>
                        <div className="text-xs text-neutral-400 line-clamp-2">{project.tagline}</div>
                      </div>
                    </div>
                  )}

                  {/* Quick hover badge overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                    <span className="px-3.5 py-1.5 bg-[#0C0D15]/90 border border-white/20 text-white text-xs font-medium rounded-lg shadow-lg flex items-center gap-1.5">
                      <span>Examine Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Unboxed Metadata with Typographic Separators */}
                    <div className="flex items-center gap-2 text-xs text-neutral-400 mb-2.5">
                      <span className="text-blue-400 font-medium">{project.category}</span>
                      <span aria-hidden="true" className="text-neutral-600">·</span>
                      <span className="font-mono tabular-nums">{project.year}</span>
                    </div>

                    {/* Card Title */}
                    <h3
                      onClick={() => onSelectProject(project)}
                      className="text-lg font-bold text-white mb-2 cursor-pointer hover:text-blue-400 transition-colors"
                    >
                      {project.title}
                    </h3>

                    {/* Tagline */}
                    <p className="text-xs text-neutral-300 leading-relaxed mb-4 line-clamp-2">
                      {project.tagline}
                    </p>

                    {/* Key Metric Preview */}
                    {project.metrics[0] && (
                      <div className="mb-4 flex items-center gap-2 text-xs text-emerald-400 font-mono">
                        <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                        <span className="truncate">{project.metrics[0]}</span>
                      </div>
                    )}
                  </div>

                  {/* Card Bottom: Tech Stack & Actions */}
                  <div>
                    {/* Unboxed Tech Stack */}
                    <div className="flex flex-wrap items-center gap-1.5 mb-5 pt-3 border-t border-[#1C1E2B]">
                      {project.techStack.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="text-[11px] font-mono text-neutral-400 px-2 py-0.5 bg-[#141522] border border-[#232536] rounded"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 4 && (
                        <span className="text-[11px] font-mono text-neutral-500">
                          +{project.techStack.length - 4}
                        </span>
                      )}
                    </div>

                    {/* Action Affordances */}
                    <div className="flex items-center justify-between text-xs pt-1">
                      <button
                        onClick={() => onSelectProject(project)}
                        className="text-neutral-300 hover:text-white font-medium flex items-center gap-1 group/btn transition-colors"
                      >
                        <span>Case Study</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                      </button>

                      <div className="flex items-center gap-3">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="p-1.5 text-neutral-400 hover:text-white rounded hover:bg-[#1A1C2B] transition-colors"
                          title="View Source on GitHub"
                          aria-label={`View ${project.title} on GitHub`}
                        >
                          <Github className="w-4 h-4" />
                        </a>
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="p-1.5 text-neutral-400 hover:text-white rounded hover:bg-[#1A1C2B] transition-colors"
                            title="Visit Live Deployment"
                            aria-label={`Visit live site for ${project.title}`}
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
