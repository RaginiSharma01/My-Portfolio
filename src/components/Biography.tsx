import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Briefcase, GraduationCap, Compass, ShieldCheck } from 'lucide-react';

export const Biography: React.FC = () => {
  return (
    <section id="about" className="py-24 border-b border-[#1E202B]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="text-xs font-semibold tracking-wider uppercase text-blue-400 mb-2">
            Biography &amp; Background
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white [text-wrap:balance]">
            Engineering resilient backend APIs and distributed consensus systems.
          </h2>
        </div>

        {/* 2-Column Editorial Grid: Longform Narrative & Principles */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          {/* Longform Narrative */}
          <div className="lg:col-span-7 space-y-5 text-neutral-300 leading-relaxed text-base">
            <p>
              I am a Software Engineer based in Bengaluru, India, pursuing my B.E. in Electrical and Electronics Engineering at <strong className="text-white font-medium">Rajarajeswari College of Engineering</strong> (GPA: 8.0 / 10.0) with an intense passion for backend architecture, operating systems, and distributed consensus.
            </p>
            <p>
              At <strong className="text-white font-medium">Diamante</strong>, I build mission-critical RESTful APIs for the <strong className="text-white font-medium">Shine Lane CMS</strong> platform—implementing versioned page/section content management, atomic draft-publish-rollback workflows, and multipart S3/CDN file uploads. I also engineered a Redis-backed OTP onboarding flow with attempt-locking and cooldown protections, built backend features for <strong className="text-white font-medium">Nitro Pay admin</strong>, and reduced database query response times by ~30% through PostgreSQL index tuning and N+1 elimination.
            </p>
            <p>
              In open source, I am designing a production-grade Byzantine Fault Tolerant (BFT) consensus library (<strong className="text-white font-medium">BiniBFT</strong>) for <strong className="text-white font-medium">Hyperledger Fabric</strong>, benchmarked against Raft, BFT-SMaRt, and Mir-BFT to eliminate malicious leader vulnerabilities and transaction censorship. Previously, as an intern at <strong className="text-white font-medium">Toyota Kirloskar Auto Parts</strong>, I built manufacturing asset management APIs with C# and Oracle Database to eliminate manual paper logging on the plant floor.
            </p>
          </div>

          {/* Core Principles */}
          <div className="lg:col-span-5 bg-[#10111A] border border-[#202230] rounded-2xl p-7">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-neutral-400 mb-6">
              <Compass className="w-4 h-4 text-blue-400" />
              <span>Engineering Tenets</span>
            </div>

            <div className="space-y-6">
              {PORTFOLIO_DATA.principles.map((principle) => (
                <div key={principle.title} className="space-y-1.5">
                  <h3 className="text-sm font-bold text-white">
                    {principle.title}
                  </h3>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Career Timeline Section */}
        <div id="experience" className="pt-12 border-t border-[#1C1E2B]">
          <div className="flex items-center gap-2.5 mb-10">
            <Briefcase className="w-5 h-5 text-blue-400" />
            <h3 className="text-2xl font-bold tracking-tight text-white">
              Professional Experience &amp; Contributions
            </h3>
          </div>

          <div className="space-y-12">
            {PORTFOLIO_DATA.experiences.map((exp) => (
              <div
                key={exp.id}
                className="relative pl-6 md:pl-8 border-l border-[#242636] space-y-3"
              >
                {/* Node indicator */}
                <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-blue-500 ring-4 ring-[#090A0F]" />

                {/* Header with Title and Period */}
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                  <div>
                    <h4 className="text-lg font-bold text-white">
                      {exp.role} <span className="text-neutral-400 font-normal">―</span> {exp.company}
                    </h4>
                    <div className="text-xs text-neutral-400 mt-0.5">
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  <div className="text-xs font-mono text-blue-400 tabular-nums">
                    {exp.period}
                  </div>
                </div>

                {/* Summary */}
                <p className="text-sm text-neutral-300 leading-relaxed max-w-3xl">
                  {exp.summary}
                </p>

                {/* Concrete Achievements from Resume */}
                <ul className="space-y-2 text-xs text-neutral-300 max-w-3xl pt-1">
                  {exp.achievements.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="text-blue-400 leading-none mt-1">―</span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Clean unboxed technology metadata with dot separators */}
                <div className="pt-2 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs text-neutral-400">
                  <span className="text-neutral-500 font-medium">Tech Stack:</span>
                  {exp.technologies.map((tech, i) => (
                    <React.Fragment key={tech}>
                      <span className="font-mono text-neutral-200">{tech}</span>
                      {i < exp.technologies.length - 1 && (
                        <span aria-hidden="true" className="text-neutral-600">·</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education & Academic Foundation Row */}
        <div className="mt-16 pt-12 border-t border-[#1C1E2B]">
          <div className="flex items-center gap-2.5 mb-8">
            <GraduationCap className="w-5 h-5 text-blue-400" />
            <h3 className="text-2xl font-bold tracking-tight text-white">
              Academic Education
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PORTFOLIO_DATA.education.map((edu) => (
              <div
                key={edu.degree}
                className="bg-[#10111A] border border-[#202230] rounded-2xl p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h4 className="text-base font-bold text-white">
                      {edu.degree}
                    </h4>
                    <span className="text-xs font-mono text-blue-400 shrink-0">
                      {edu.period}
                    </span>
                  </div>
                  <div className="text-sm text-neutral-300 font-medium mb-3">
                    {edu.institution}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-emerald-400 font-mono mb-4">
                    <ShieldCheck className="w-4 h-4 shrink-0" />
                    <span>{edu.grade}</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#1C1E2B] text-xs text-neutral-400">
                  <span className="text-neutral-500">Curriculum: </span>
                  {edu.focus}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
