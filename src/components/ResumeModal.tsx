import React, { useEffect } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { X, Printer, Download, ExternalLink, Mail, Phone, MapPin } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onShowToast: (text: string, type?: 'success' | 'info') => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose, onShowToast }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    onShowToast('Resume prepared for printing / PDF saving.', 'success');
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-[#0E0F17] border border-[#26283A] rounded-2xl shadow-2xl text-[#E5E7EB] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Action Toolbar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#12131F]/90 backdrop-blur-md border-b border-[#212334]">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
              Verified Resume
            </span>
            <span aria-hidden="true" className="text-neutral-600">·</span>
            <span className="text-xs text-neutral-300 font-medium">Ragini Sharma</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 text-xs font-medium text-neutral-300 hover:text-white bg-[#191B2B] hover:bg-[#202338] border border-[#2A2D40] rounded-lg transition-colors flex items-center gap-1.5"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print</span>
            </button>
            <button
              onClick={handleDownload}
              className="px-3 py-1.5 text-xs font-medium text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors flex items-center gap-1.5 shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Save as PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-neutral-400 hover:text-white hover:bg-[#1A1C2C] rounded-lg transition-colors ml-2"
              aria-label="Close Resume"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Authentic Printable Resume Canvas matching PDF */}
        <div className="p-8 sm:p-12 space-y-7 bg-[#0B0C13] print:bg-white print:text-black">
          {/* Header */}
          <div className="border-b border-[#1E202F] pb-6 print:border-neutral-300 text-center sm:text-left">
            <h1 className="text-3xl font-bold text-white print:text-black tracking-tight">
              Ragini Sharma
            </h1>

            <div className="mt-2 flex flex-wrap items-center justify-center sm:justify-start gap-x-4 gap-y-1 text-xs text-neutral-300 print:text-neutral-700">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-neutral-400" />
                Bengaluru, India
              </span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1 font-mono">
                <Mail className="w-3.5 h-3.5 text-neutral-400" />
                raginisharma.r07@gmail.com
              </span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1 font-mono">
                <Phone className="w-3.5 h-3.5 text-neutral-400" />
                +91-7411602133
              </span>
            </div>

            {/* Online Links */}
            <div className="mt-2 flex flex-wrap items-center justify-center sm:justify-start gap-x-4 gap-y-1 text-xs text-blue-400 print:text-blue-600">
              <a
                href={PORTFOLIO_DATA.profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:underline flex items-center gap-1"
              >
                <span>LinkedIn (linkedin.com/in/ragini-sharma01)</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <span aria-hidden="true" className="text-neutral-600">·</span>
              <a
                href={PORTFOLIO_DATA.profile.github}
                target="_blank"
                rel="noreferrer"
                className="hover:underline flex items-center gap-1"
              >
                <span>GitHub (github.com/RaginiSharma01)</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              {PORTFOLIO_DATA.profile.twitter && (
                <>
                  <span aria-hidden="true" className="text-neutral-600">·</span>
                  <a
                    href={PORTFOLIO_DATA.profile.twitter}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline flex items-center gap-1"
                  >
                    <span>X (@raginis_kafila)</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </>
              )}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-blue-400 print:text-blue-800 mb-3 border-b border-[#1E202F] pb-1 print:border-neutral-200">
              Education
            </h2>
            <div className="space-y-3">
              <div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs">
                  <span className="font-bold text-white print:text-black">
                    Rajarajeswari College of Engineering, Bengaluru
                  </span>
                  <span className="font-mono text-neutral-400 print:text-neutral-600">
                    Dec 2022 – Aug 2026
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs text-neutral-300 print:text-neutral-700">
                  <span>B.E. in Electrical and Electronics Engineering</span>
                  <span className="font-mono font-medium text-emerald-400 print:text-emerald-700">
                    GPA: 8.0 / 10.0
                  </span>
                </div>
              </div>

              <div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs">
                  <span className="font-bold text-white print:text-black">
                    Maharani Lakshmi Ammani College for Women, Bengaluru
                  </span>
                  <span className="font-mono text-neutral-400 print:text-neutral-600">
                    Sept 2020 – Apr 2022
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs text-neutral-300 print:text-neutral-700">
                  <span>Pre-University Course (PCMC)</span>
                  <span className="font-mono font-medium text-emerald-400 print:text-emerald-700">
                    Score: 80%
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-blue-400 print:text-blue-800 mb-3 border-b border-[#1E202F] pb-1 print:border-neutral-200">
              Technical Skills
            </h2>
            <div className="space-y-1.5 text-xs">
              <div>
                <span className="font-bold text-neutral-200 print:text-black">Languages: </span>
                <span className="text-neutral-300 print:text-neutral-800">
                  Go, Java, JavaScript, HTML, CSS, C#
                </span>
              </div>
              <div>
                <span className="font-bold text-neutral-200 print:text-black">Frameworks &amp; Technologies: </span>
                <span className="text-neutral-300 print:text-neutral-800">
                  Fiber, React.js, PostgreSQL, Redis, Docker, Git, REST APIs, JWT, .NET, Oracle Database
                </span>
              </div>
              <div>
                <span className="font-bold text-neutral-200 print:text-black">CS fundamentals: </span>
                <span className="text-neutral-300 print:text-neutral-800">
                  OOPs, DBMS, Operating Systems, Computer Networks, Distributed Systems, BFT Consensus
                </span>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-blue-400 print:text-blue-800 mb-3 border-b border-[#1E202F] pb-1 print:border-neutral-200">
              Experience
            </h2>
            <div className="space-y-6">
              {/* Diamante */}
              <div className="space-y-1.5">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                  <span className="text-xs font-bold text-white print:text-black">
                    Software Engineer ― Diamante
                  </span>
                  <span className="text-xs font-mono text-neutral-400 print:text-neutral-600">
                    Feb 2026 – Present
                  </span>
                </div>
                <ul className="space-y-1 text-xs text-neutral-300 print:text-neutral-800">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 print:text-black">•</span>
                    <span>Built RESTful APIs for a CMS platform (Shine Lane), covering versioned page/section content management, draft-publish-rollback workflows, atomic publish-archive transactions, and S3/CDN-integrated multipart file-upload endpoints.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 print:text-black">•</span>
                    <span>Designed and implemented a Redis-backed OTP-verified step-wise trade-buyer onboarding flow, including OTP send/verify with cooldown, attempt-locking, and temporary verified-session tokens for a secure multi-step public form.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 print:text-black">•</span>
                    <span>Contributed to backend feature development for Nitro Pay admin, for internal management for the Nitro Pay payment applications.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 print:text-black">•</span>
                    <span>Developed JWT-based authentication middleware in Golang to enforce role-level access control across protected API routes, strengthening overall API security posture.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 print:text-black">•</span>
                    <span>Improved API response time by ~30% by optimizing PostgreSQL queries with selective indexing and eliminating N+1 query patterns; maintained &gt;80% test coverage using Go’s testing package.</span>
                  </li>
                </ul>
                <div className="text-[11px] text-neutral-400 print:text-neutral-600">
                  <span className="font-semibold">Tech Stack: </span>Go, Linux, PostgreSQL, Redis, REST API, Docker, JWT
                </div>
              </div>

              {/* Hyperledger Fabric */}
              <div className="space-y-1.5">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                  <span className="text-xs font-bold text-white print:text-black flex items-center gap-2">
                    <span>Open Source developer ― Hyperledger Fabric (BiniBFT)</span>
                    <a
                      href="https://github.com/RaginiSharma01/Hyperledger-BiniBFT"
                      target="_blank"
                      rel="noreferrer"
                      className="text-[11px] text-blue-400 print:text-blue-600 hover:underline font-normal flex items-center gap-0.5"
                    >
                      <span>github.com/RaginiSharma01/Hyperledger-BiniBFT</span>
                      <ExternalLink className="w-2.5 h-2.5" />
                    </a>
                  </span>
                  <span className="text-xs font-mono text-neutral-400 print:text-neutral-600">
                    Jun 2026 – Present
                  </span>
                </div>
                <ul className="space-y-1 text-xs text-neutral-300 print:text-neutral-800">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 print:text-black">•</span>
                    <span>Designing a production-grade BFT consensus library for Hyperledger Fabric, resolving transaction censorship, malicious-leader vulnerabilities, and scalability bottlenecks in the existing Raft-based consensus mechanism.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 print:text-black">•</span>
                    <span>Evaluated and benchmarked BFT consensus protocols (Raft, BFT-SMaRt, Mir-BFT) across throughput, latency, and fault-tolerance dimensions to inform protocol selection.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 print:text-black">•</span>
                    <span>Architected the library to plug into Fabric’s consensus abstraction layer, ensuring backward compatibility with existing orderer services and minimal configuration overhead.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 print:text-black">•</span>
                    <span>Authored technical documentation and integration guides to facilitate smooth adoption of BiniBFT within the Hyperledger Fabric ecosystem.</span>
                  </li>
                </ul>
                <div className="text-[11px] text-neutral-400 print:text-neutral-600">
                  <span className="font-semibold">Tech Stack: </span>Go, Hyperledger Fabric, BFT Consensus Protocols, Distributed Systems
                </div>
              </div>

              {/* Toyota Kirloskar Auto Parts */}
              <div className="space-y-1.5">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                  <span className="text-xs font-bold text-white print:text-black">
                    Software Developer Intern ― Toyota Kirloskar Auto Parts
                  </span>
                  <span className="text-xs font-mono text-neutral-400 print:text-neutral-600">
                    Nov 2025 – Jan 2026
                  </span>
                </div>
                <ul className="space-y-1 text-xs text-neutral-300 print:text-neutral-800">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 print:text-black">•</span>
                    <span>Contributed in development of backend modules for internal manufacturing automation systems, reducing manual data-entry effort by streamlining workflows.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 print:text-black">•</span>
                    <span>Developed and exposed REST APIs to manage manufacturing asset data, integrating with Oracle Database for reliable data persistence and audit trails.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 print:text-black">•</span>
                    <span>Collaborated with cross-functional teams to gather requirements, translate business logic into technical specifications, and deliver modules on schedule.</span>
                  </li>
                </ul>
                <div className="text-[11px] text-neutral-400 print:text-neutral-600">
                  <span className="font-semibold">Tech Stack: </span>C#, .NET, Oracle Database, SQL Server, REST API
                </div>
              </div>
            </div>
          </div>

          {/* Academic Projects */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-blue-400 print:text-blue-800 mb-3 border-b border-[#1E202F] pb-1 print:border-neutral-200">
              Academic Projects
            </h2>
            <div className="space-y-4">
              {/* Edu Portal */}
              <div className="space-y-1">
                <div className="flex items-baseline justify-between">
                  <span className="text-xs font-bold text-white print:text-black">
                    Edu Portal – Student Management Portal
                  </span>
                  <a
                    href="https://github.com/RaginiSharma01/Edu-Portal"
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs text-blue-400 print:text-blue-600 hover:underline"
                  >
                    Project-link
                  </a>
                </div>
                <ul className="space-y-1 text-xs text-neutral-300 print:text-neutral-800">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 print:text-black">•</span>
                    <span>Developed a full-stack student management portal to manage students, teachers, classrooms, departments, timetables, and academic records.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 print:text-black">•</span>
                    <span>Implemented secure onboarding with Redis-backed OTP verification, JWT authentication, forgot-password, and reset-password workflows.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 print:text-black">•</span>
                    <span>Designed RESTful APIs with role-based access control for administrators, teachers, and students.</span>
                  </li>
                </ul>
                <div className="text-[11px] text-neutral-400 print:text-neutral-600">
                  <span className="font-semibold">Tech Stack: </span>Go, Fiber, React, PostgreSQL, Redis, SendGrid, JWT
                </div>
              </div>

              {/* GoPay-Lite */}
              <div className="space-y-1">
                <div className="flex items-baseline justify-between">
                  <span className="text-xs font-bold text-white print:text-black">
                    GoPay-Lite – Payment Processing Backend
                  </span>
                  <a
                    href="https://github.com/RaginiSharma01/GoPay-Lite"
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs text-blue-400 print:text-blue-600 hover:underline"
                  >
                    Project-link
                  </a>
                </div>
                <ul className="space-y-1 text-xs text-neutral-300 print:text-neutral-800">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 print:text-black">•</span>
                    <span>Developed a backend payment processing system implementing RESTful APIs for payment workflows and transaction management.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 print:text-black">•</span>
                    <span>Applied backend engineering principles including structured service architecture, database integration, and secure API design.</span>
                  </li>
                </ul>
                <div className="text-[11px] text-neutral-400 print:text-neutral-600">
                  <span className="font-semibold">Tech Stack: </span>Go, REST APIs, PostgreSQL, Docker
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
