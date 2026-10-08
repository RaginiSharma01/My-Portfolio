import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Github, Linkedin, Mail, Twitter, ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-[#06070B] border-t border-[#161722] text-neutral-400">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand & copyright */}
        <div className="flex flex-col sm:flex-row items-center gap-3 text-xs">
          <span className="font-bold text-white tracking-tight">Ragini Sharma</span>
          <span aria-hidden="true" className="hidden sm:inline text-neutral-600">·</span>
          <span>Bengaluru, India</span>
          <span aria-hidden="true" className="hidden sm:inline text-neutral-600">·</span>
          <span>© {new Date().getFullYear()} All rights reserved.</span>
        </div>

        {/* Links & back to top */}
        <div className="flex flex-wrap items-center justify-center gap-5 text-xs">
          <a
            href={PORTFOLIO_DATA.profile.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors flex items-center gap-1"
            aria-label="GitHub Profile"
          >
            <Github className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>

          <a
            href={PORTFOLIO_DATA.profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors flex items-center gap-1"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-3.5 h-3.5 text-blue-400" />
            <span>LinkedIn</span>
          </a>

          {PORTFOLIO_DATA.profile.twitter && (
            <a
              href={PORTFOLIO_DATA.profile.twitter}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1"
              aria-label="X Profile"
            >
              <Twitter className="w-3.5 h-3.5 text-sky-400" />
              <span>X</span>
            </a>
          )}

          <button
            onClick={onOpenResume}
            className="hover:text-white transition-colors"
          >
            Resume
          </button>

          <a
            href={`mailto:${PORTFOLIO_DATA.profile.email}`}
            className="hover:text-white transition-colors flex items-center gap-1"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Email</span>
          </a>

          <button
            onClick={scrollToTop}
            className="p-1.5 rounded bg-[#12131D] hover:bg-[#1A1C2B] text-neutral-400 hover:text-white transition-colors"
            title="Scroll to top"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
