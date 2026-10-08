import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import {
  Github,
  Linkedin,
  Mail,
  Twitter,
  ArrowUpRight,
  Copy,
  Check,
  MapPin,
  Phone,
} from 'lucide-react';

interface HeroProps {
  onOpenResume: () => void;
  onOpenContact: () => void;
  onShowToast: (text: string, type?: 'success' | 'info') => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, onOpenContact, onShowToast }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PORTFOLIO_DATA.profile.email);
      setCopiedEmail(true);
      onShowToast('Email copied to clipboard!', 'success');
      setTimeout(() => setCopiedEmail(false), 2200);
    } catch {
      onShowToast('Email: ' + PORTFOLIO_DATA.profile.email, 'info');
    }
  };

  const handleCopyPhone = async () => {
    try {
      await navigator.clipboard.writeText(PORTFOLIO_DATA.profile.phone);
      setCopiedPhone(true);
      onShowToast('Phone number copied to clipboard!', 'success');
      setTimeout(() => setCopiedPhone(false), 2200);
    } catch {
      onShowToast('Phone: ' + PORTFOLIO_DATA.profile.phone, 'info');
    }
  };

  return (
    <section className="relative pt-12 pb-20 md:py-24 border-b border-[#1E202B] overflow-hidden">
      {/* Subtle radial ambient gradient backdrop */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Authentic Typographic Impact & Overview (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Availability status line */}
            <div className="flex flex-wrap items-center gap-2.5 text-xs text-neutral-400 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="font-medium text-emerald-400">Open to Roles</span>
              <span aria-hidden="true" className="text-neutral-600">·</span>
              <span>Software Engineer (Go &amp; Distributed Systems)</span>
              <span aria-hidden="true" className="text-neutral-600">·</span>
              <span className="flex items-center gap-1 text-neutral-300">
                <MapPin className="w-3.5 h-3.5 text-neutral-400" />
                Bengaluru, India
              </span>
            </div>

            {/* Primary Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12] mb-4 max-w-2xl [text-wrap:balance]">
              Ragini Sharma
            </h1>

            <div className="text-xl sm:text-2xl font-medium text-blue-400 mb-5">
              Software Engineer &middot; Backend &amp; Distributed Systems
            </div>

            {/* Sub-lead Narrative */}
            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed mb-8 max-w-xl font-normal">
              {PORTFOLIO_DATA.profile.tagline} Currently building core RESTful CMS APIs &amp; secure onboarding at{' '}
              <span className="text-white font-medium">Diamante</span> and developing BFT consensus mechanisms for{' '}
              <span className="text-white font-medium">Hyperledger Fabric</span>.
            </p>

            {/* Primary CTA + Action Bar */}
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <button
                onClick={onOpenContact}
                className="px-5 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-sm transition-all duration-150 flex items-center gap-2 whitespace-nowrap active:scale-[0.98]"
              >
                <span>Get in Touch</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenResume}
                className="px-4 py-2.5 text-xs font-medium text-neutral-200 hover:text-white bg-[#13141E] hover:bg-[#1A1C2B] border border-[#262838] rounded-lg transition-colors whitespace-nowrap"
              >
                View Full Resume
              </button>

              <button
                onClick={handleCopyEmail}
                className="px-3.5 py-2.5 text-xs font-medium text-neutral-400 hover:text-neutral-200 bg-[#13141E] hover:bg-[#1A1C2B] border border-[#262838] rounded-lg transition-colors flex items-center gap-2 whitespace-nowrap"
                title="Copy email to clipboard"
                aria-label="Copy email address"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400 font-mono">Email Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span className="font-mono">raginisharma.r07@gmail.com</span>
                  </>
                )}
              </button>

              <button
                onClick={handleCopyPhone}
                className="px-3.5 py-2.5 text-xs font-medium text-neutral-400 hover:text-neutral-200 bg-[#13141E] hover:bg-[#1A1C2B] border border-[#262838] rounded-lg transition-colors flex items-center gap-1.5 whitespace-nowrap"
                title="Copy phone number"
                aria-label="Copy phone number"
              >
                {copiedPhone ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400 font-mono">Copied</span>
                  </>
                ) : (
                  <>
                    <Phone className="w-3.5 h-3.5 text-neutral-400" />
                    <span className="font-mono">+91-7411602133</span>
                  </>
                )}
              </button>
            </div>

            {/* Direct Social / Verified Online Profiles */}
            <div className="pt-6 border-t border-[#1C1E2B] flex flex-wrap items-center gap-5 text-xs text-neutral-400">
              <span className="uppercase tracking-wider text-neutral-500 font-semibold">Profiles:</span>
              <a
                href={PORTFOLIO_DATA.profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-white transition-colors text-neutral-300"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-3.5 h-3.5 text-blue-400" />
                <span>LinkedIn</span>
              </a>
              <a
                href={PORTFOLIO_DATA.profile.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-white transition-colors text-neutral-300"
                aria-label="GitHub Profile"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
              <a
                href={PORTFOLIO_DATA.profile.twitter}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-white transition-colors text-neutral-300"
                aria-label="X Account"
              >
                <Twitter className="w-3.5 h-3.5 text-sky-400" />
                <span>X (@raginis_kafila)</span>
              </a>
              <a
                href={`mailto:${PORTFOLIO_DATA.profile.email}`}
                className="flex items-center gap-1.5 hover:text-white transition-colors text-neutral-300"
                aria-label="Email Ragini Sharma"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Email</span>
              </a>
            </div>
          </div>

          {/* Right Column: Clean Architectural Portrait Card */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end">
            <div className="relative w-full max-w-md">
              <div className="relative aspect-[3/4] sm:aspect-square w-full rounded-2xl overflow-hidden bg-[#141520] border border-[#27293B] shadow-2xl">
                {!imageLoaded && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-8 bg-gradient-to-br from-[#12131D] to-[#0A0B12] text-center">
                    <span className="text-4xl font-bold text-neutral-300 font-mono tracking-tight">RS</span>
                    <span className="text-xs text-neutral-500 mt-2">Ragini Sharma</span>
                    <span className="text-[11px] text-neutral-600 mt-1 font-mono">Bengaluru, India</span>
                  </div>
                )}

                <img
                  src={PORTFOLIO_DATA.profile.portrait}
                  alt="Portrait of Ragini Sharma, Software Engineer"
                  referrerPolicy="no-referrer"
                  onLoad={() => setImageLoaded(true)}
                  className={`w-full h-full object-cover transition-opacity duration-500 ${
                    imageLoaded ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              </div>

              {/* Bottom Card Summary under the portrait */}
              <div className="mt-4 p-4 rounded-xl bg-[#10111A] border border-[#1E202E] flex items-center justify-between text-xs">
                <div>
                  <div className="text-neutral-400">Current Role</div>
                  <div className="font-semibold text-white mt-0.5">Software Engineer @ Diamante</div>
                </div>
                <div className="text-right">
                  <div className="text-neutral-400">Core Stack</div>
                  <div className="font-mono text-blue-400 mt-0.5">Go · Redis · PostgreSQL</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quantified Metrics Ribbon */}
        <div className="mt-16 pt-10 border-t border-[#1C1E2B] grid grid-cols-2 md:grid-cols-4 gap-8">
          {PORTFOLIO_DATA.stats.map((stat) => (
            <div key={stat.label} className="flex flex-col">
              <span className="text-3xl md:text-4xl font-bold text-white font-mono tabular-nums tracking-tight">
                {stat.value}
              </span>
              <span className="text-sm font-semibold text-neutral-200 mt-1">
                {stat.label}
              </span>
              <span className="text-xs text-neutral-400 mt-0.5">
                {stat.caption}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
