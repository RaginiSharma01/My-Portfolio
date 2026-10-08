import React, { useEffect } from 'react';
import { Project } from '../data/portfolioData';
import { X, ExternalLink, Github, CheckCircle2, Layers } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  const [imageFailed, setImageFailed] = React.useState(false);

  // Reset error when project changes
  React.useEffect(() => {
    setImageFailed(false);
  }, [project?.id]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#10111A] border border-[#27293B] rounded-2xl shadow-2xl p-6 sm:p-8 text-[#F3F4F6]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-neutral-400 hover:text-white hover:bg-[#1C1E2C] rounded-lg transition-colors"
          aria-label="Close Case Study"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Metadata */}
        <div className="flex items-center gap-2 text-xs text-neutral-400 mb-3">
          <span className="font-medium text-blue-400">{project.category}</span>
          <span aria-hidden="true">·</span>
          <span>Released {project.year}</span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 tracking-tight">
          {project.title}
        </h3>
        <p className="text-sm sm:text-base text-neutral-300 mb-6 leading-relaxed">
          {project.tagline}
        </p>

        {/* Media Preview if image exists and has not failed */}
        {project.image && !imageFailed && (
          <div className="mb-6 rounded-xl overflow-hidden border border-[#222436] bg-[#161724] aspect-[16/9] w-full">
            <img
              src={project.image}
              alt={`${project.title} Interface Preview`}
              referrerPolicy="no-referrer"
              onError={() => setImageFailed(true)}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Quantified Metrics Highlight */}
        <div className="mb-8 p-4 bg-[#141622] border border-[#222436] rounded-xl grid grid-cols-1 sm:grid-cols-3 gap-4">
          {project.metrics.map((metric, i) => (
            <div key={i} className="flex items-start gap-2 text-xs text-neutral-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span className="font-medium leading-relaxed">{metric}</span>
            </div>
          ))}
        </div>

        {/* Problem & Solution Case Study Prose */}
        <div className="space-y-6 mb-8 text-sm">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">
              The Engineering Challenge
            </h4>
            <p className="text-neutral-300 leading-relaxed bg-[#0C0D15] p-4 rounded-lg border border-[#1C1E2B]">
              {project.problem}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">
              Architecture & Solution
            </h4>
            <p className="text-neutral-300 leading-relaxed bg-[#0C0D15] p-4 rounded-lg border border-[#1C1E2B]">
              {project.solution}
            </p>
          </div>

          {/* Key Architectural Innovations */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2.5 flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-blue-400" />
              <span>Architectural Specifications</span>
            </h4>
            <ul className="space-y-2">
              {project.architectureDetails.map((detail, idx) => (
                <li
                  key={idx}
                  className="text-xs text-neutral-300 flex items-start gap-2.5 pl-1"
                >
                  <span className="text-blue-400 font-mono">0{idx + 1}.</span>
                  <span className="leading-relaxed">{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Technology Stack Tags */}
        <div className="mb-8 pt-4 border-t border-[#1C1E2B]">
          <div className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2.5">
            Technologies & Frameworks
          </div>
          <div className="flex flex-wrap items-center gap-2 text-xs">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="font-mono px-2.5 py-1 bg-[#161724] border border-[#27293B] rounded text-neutral-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-end gap-3 pt-4 border-t border-[#1C1E2B]">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-2 text-xs font-medium text-neutral-200 hover:text-white bg-[#161724] hover:bg-[#1E2030] border border-[#27293B] rounded-lg transition-colors"
          >
            <Github className="w-4 h-4" />
            <span>Inspect Repository</span>
          </a>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-sm transition-colors"
            >
              <span>Explore Live Instance</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
