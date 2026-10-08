import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Mail, Github, Linkedin, Copy, Check, Send, ArrowUpRight, MessageSquare, Phone, MapPin, Twitter } from 'lucide-react';

interface ContactSectionProps {
  onShowToast: (text: string, type?: 'success' | 'info' | 'error') => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onShowToast }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PORTFOLIO_DATA.profile.email);
      setCopiedEmail(true);
      onShowToast('Email address copied to clipboard!', 'success');
      setTimeout(() => setCopiedEmail(false), 2200);
    } catch {
      onShowToast(`Email: ${PORTFOLIO_DATA.profile.email}`, 'info');
    }
  };

  const handleCopyPhone = async () => {
    try {
      await navigator.clipboard.writeText(PORTFOLIO_DATA.profile.phone);
      setCopiedPhone(true);
      onShowToast('Phone number copied to clipboard!', 'success');
      setTimeout(() => setCopiedPhone(false), 2200);
    } catch {
      onShowToast(`Phone: ${PORTFOLIO_DATA.profile.phone}`, 'info');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      onShowToast('Please complete all required fields.', 'error');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      onShowToast('Thank you! Your dispatch has been received.', 'success');
    }, 600);
  };

  return (
    <section id="contact" className="py-24 border-b border-[#1E202B]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="max-w-2xl mb-16">
          <div className="text-xs font-semibold tracking-wider uppercase text-blue-400 mb-2">
            Get in Touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white [text-wrap:balance]">
            Let&rsquo;s connect on distributed systems, backend engineering, or opportunities.
          </h2>
          <p className="text-sm text-neutral-400 mt-3 leading-relaxed">
            I am currently based in Bengaluru, India, and open to software engineering roles, distributed systems projects, and open-source collaboration.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Direct Profiles & Connectivity (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              {/* Direct Contact Card (Email, Phone, Location) */}
              <div className="p-6 bg-[#10111A] border border-[#202230] rounded-2xl space-y-4">
                <div className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                  Direct Contact Information
                </div>

                {/* Email row */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-[#141522] border border-[#222436]">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-[#0C0D15] rounded-lg text-blue-400">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] text-neutral-400">Email</div>
                      <div className="text-xs font-mono text-white select-all">
                        {PORTFOLIO_DATA.profile.email}
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1.5 text-neutral-400 hover:text-white rounded hover:bg-[#1C1E2E] transition-colors"
                    title="Copy Email"
                  >
                    {copiedEmail ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Phone row */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-[#141522] border border-[#222436]">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-[#0C0D15] rounded-lg text-emerald-400">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] text-neutral-400">Phone</div>
                      <div className="text-xs font-mono text-white select-all">
                        {PORTFOLIO_DATA.profile.phone}
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyPhone}
                    className="p-1.5 text-neutral-400 hover:text-white rounded hover:bg-[#1C1E2E] transition-colors"
                    title="Copy Phone"
                  >
                    {copiedPhone ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Location row */}
                <div className="flex items-center gap-3 p-3 rounded-xl bg-[#141522] border border-[#222436]">
                  <div className="p-2 bg-[#0C0D15] rounded-lg text-amber-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-neutral-400">Location</div>
                    <div className="text-xs font-medium text-white">
                      Bengaluru, Karnataka, India
                    </div>
                  </div>
                </div>
              </div>

              {/* Verified Profiles Card */}
              <div className="p-6 bg-[#10111A] border border-[#202230] rounded-2xl space-y-3">
                <div className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2">
                  Professional &amp; Social Profiles
                </div>

                {/* LinkedIn Profile */}
                <a
                  href={PORTFOLIO_DATA.profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-[#141522] border border-[#222436] hover:border-blue-500/50 hover:bg-[#171928] transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-[#0C0D15] rounded-lg text-blue-400">
                      <Linkedin className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white group-hover:text-blue-400 transition-colors">
                        LinkedIn
                      </div>
                      <div className="text-[11px] text-neutral-400 font-mono">
                        linkedin.com/in/ragini-sharma01
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-white transition-colors" />
                </a>

                {/* GitHub Profile */}
                <a
                  href={PORTFOLIO_DATA.profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-[#141522] border border-[#222436] hover:border-blue-500/50 hover:bg-[#171928] transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-[#0C0D15] rounded-lg text-neutral-300">
                      <Github className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white group-hover:text-blue-400 transition-colors">
                        GitHub
                      </div>
                      <div className="text-[11px] text-neutral-400 font-mono">
                        github.com/RaginiSharma01
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-white transition-colors" />
                </a>

                {/* X Profile */}
                {PORTFOLIO_DATA.profile.twitter && (
                  <a
                    href={PORTFOLIO_DATA.profile.twitter}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-[#141522] border border-[#222436] hover:border-blue-500/50 hover:bg-[#171928] transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-[#0C0D15] rounded-lg text-sky-400">
                        <Twitter className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white group-hover:text-blue-400 transition-colors">
                          X (Twitter)
                        </div>
                        <div className="text-[11px] text-neutral-400 font-mono">
                          x.com/raginis_kafila
                        </div>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-white transition-colors" />
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Right: Interactive Message Form (7 cols) */}
          <div className="lg:col-span-7 bg-[#10111A] border border-[#202230] rounded-2xl p-7 sm:p-8">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-6">
              <MessageSquare className="w-4 h-4 text-blue-400" />
              <span>Send a Message</span>
            </div>

            {submitted ? (
              <div className="py-12 text-center space-y-4 animate-in fade-in duration-200">
                <div className="w-12 h-12 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white">Message Dispatched</h3>
                <p className="text-xs text-neutral-300 max-w-sm mx-auto leading-relaxed">
                  Thank you for reaching out! Your note has been received and I will reply to{' '}
                  <span className="text-blue-400 font-mono">{formData.email}</span> as soon as possible.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', subject: '', message: '' });
                  }}
                  className="mt-4 px-4 py-2 text-xs font-medium text-neutral-300 bg-[#161724] border border-[#27293B] rounded-lg hover:text-white transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                      Your Name <span className="text-blue-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Priyesh Patel"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#13141F] border border-[#242636] focus:border-blue-500 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-neutral-500 outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                      Your Email <span className="text-blue-400">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. priyesh@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#13141F] border border-[#242636] focus:border-blue-500 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-neutral-500 outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                    Subject / Discussion Topic
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Software Engineering Opportunity / Collaboration"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-[#13141F] border border-[#242636] focus:border-blue-500 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-neutral-500 outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                    Message <span className="text-blue-400">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Share details about your team, role, or project..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#13141F] border border-[#242636] focus:border-blue-500 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-neutral-500 outline-none transition-colors resize-none"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <span className="text-[11px] text-neutral-400">
                    Direct communication with Ragini.
                  </span>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 disabled:opacity-50 rounded-lg transition-colors flex items-center gap-2 shadow-sm"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="inline-block w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
