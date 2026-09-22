import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import {
  Mail,
  Send,
  CheckCircle2,
  Copy,
  Check,
  Github,
  Linkedin,
  MapPin,
  ExternalLink,
  Code2,
  AlertCircle,
} from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Job Opportunity / Technical Inquiry',
    message: '',
  });

  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const validate = () => {
    const errors: { [key: string]: string } = {};
    if (!formData.name.trim()) {
      errors.name = 'Please enter your name';
    }
    if (!formData.email.trim()) {
      errors.email = 'Please enter your email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) {
      errors.message = 'Please enter a message';
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters';
    }
    return errors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});
    setIsSubmitted(true);

    // Also construct mailto fallback so recruiter's message is immediately sent
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
      formData.subject || 'Portfolio Inquiry'
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    // Open user's mail client
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="py-20 bg-[#0B0F17] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#141C30] border border-[#25314F] text-xs font-mono text-[#3FE3C4] mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Let's Build Something Useful
          </h2>
          <p className="mt-2 text-base text-[#8D96AE]">
            I'm currently open to entry-level opportunities in Software Development, Python Development, Web Development and AI/ML.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Contact & Profiles */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-[#0E1524] border border-[#25314F] space-y-5 shadow-lg">
              <h3 className="font-heading text-xl font-bold text-white">
                Contact Information
              </h3>
              <p className="text-sm text-[#8D96AE] leading-relaxed">
                Whether you're a recruiter with an open engineering position or an engineer looking to discuss project architecture, feel free to reach out.
              </p>

              {/* Email Card with 1-Click Copy */}
              <div className="p-4 rounded-xl bg-[#141C30] border border-[#25314F] space-y-2">
                <div className="text-xs font-mono text-[#8D96AE]">DIRECT EMAIL</div>
                <div className="flex items-center justify-between gap-2">
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="font-mono text-sm text-white hover:text-[#3FE3C4] transition-colors break-all"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                  <button
                    type="button"
                    id="contact-copy-email-btn"
                    onClick={handleCopyEmail}
                    className="p-1.5 rounded-lg bg-[#0E1524] text-[#8D96AE] hover:text-[#3FE3C4] border border-[#25314F] transition-colors flex-shrink-0"
                    title="Copy Email Address"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-[#3FE3C4]" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
                {copiedEmail && (
                  <div className="text-[11px] font-mono text-[#3FE3C4]">
                    Copied to clipboard!
                  </div>
                )}
              </div>

              {/* Location */}
              <div className="p-4 rounded-xl bg-[#141C30] border border-[#25314F] space-y-1">
                <div className="text-xs font-mono text-[#8D96AE] flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#3FE3C4]" />
                  <span>LOCATION & MOBILITY</span>
                </div>
                <div className="text-sm font-semibold text-white">
                  {PERSONAL_INFO.location}
                </div>
                <div className="text-xs text-[#8D96AE]">
                  Target Locations: {PERSONAL_INFO.targetLocations}
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-2 space-y-2">
                <div className="text-xs font-mono text-[#8D96AE] uppercase">Professional Profiles</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <a
                    id="contact-linkedin-link"
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-[#141C30] border border-[#25314F] hover:border-[#3FE3C4] hover:text-[#3FE3C4] transition-colors flex items-center justify-between text-xs font-mono text-[#EDEFF5]"
                  >
                    <span className="flex items-center gap-2">
                      <Linkedin className="w-4 h-4 text-[#3FE3C4]" />
                      <span>LinkedIn</span>
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#8D96AE]" />
                  </a>

                  <a
                    id="contact-github-link"
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-[#141C30] border border-[#25314F] hover:border-[#3FE3C4] hover:text-[#3FE3C4] transition-colors flex items-center justify-between text-xs font-mono text-[#EDEFF5]"
                  >
                    <span className="flex items-center gap-2">
                      <Github className="w-4 h-4" />
                      <span>GitHub</span>
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#8D96AE]" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form with Validation */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0E1524] border border-[#25314F] shadow-xl space-y-6">
              <div>
                <h3 className="font-heading text-xl font-bold text-white">
                  Send a Message
                </h3>
                <p className="text-xs text-[#8D96AE] font-mono mt-1">
                  Fill in the details below to initiate direct email contact.
                </p>
              </div>

              {isSubmitted ? (
                <div className="p-6 rounded-2xl bg-[#141C30] border border-[#3FE3C4]/40 text-center space-y-3 animate-in fade-in duration-200">
                  <div className="w-12 h-12 rounded-full bg-[#3FE3C4]/20 text-[#3FE3C4] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-heading font-bold text-lg text-white">
                    Thank You for Reaching Out!
                  </h4>
                  <p className="text-sm text-[#8D96AE] max-w-md mx-auto">
                    Your email client has been prepared with your message. You can also write directly to{' '}
                    <strong className="text-white">{PERSONAL_INFO.email}</strong>.
                  </p>
                  <button
                    type="button"
                    onClick={() => setIsSubmitted(false)}
                    className="mt-4 px-4 py-2 rounded-xl text-xs font-mono bg-[#0E1524] text-[#3FE3C4] border border-[#25314F] hover:border-[#3FE3C4]"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form id="contact-form" onSubmit={handleSubmit} className="space-y-4" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label htmlFor="contact-name" className="block text-xs font-mono text-[#EDEFF5]">
                        Your Name <span className="text-[#3FE3C4]">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Sarah Jenkins"
                        className={`w-full px-3.5 py-2.5 rounded-xl bg-[#141C30] border text-sm text-white placeholder-[#8D96AE]/60 focus:outline-none transition-colors ${
                          formErrors.name
                            ? 'border-rose-500 focus:border-rose-500'
                            : 'border-[#25314F] focus:border-[#3FE3C4]'
                        }`}
                      />
                      {formErrors.name && (
                        <span className="text-[11px] font-mono text-rose-400 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {formErrors.name}
                        </span>
                      )}
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label htmlFor="contact-email" className="block text-xs font-mono text-[#EDEFF5]">
                        Your Email <span className="text-[#3FE3C4]">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. sarah@company.com"
                        className={`w-full px-3.5 py-2.5 rounded-xl bg-[#141C30] border text-sm text-white placeholder-[#8D96AE]/60 focus:outline-none transition-colors ${
                          formErrors.email
                            ? 'border-rose-500 focus:border-rose-500'
                            : 'border-[#25314F] focus:border-[#3FE3C4]'
                        }`}
                      />
                      {formErrors.email && (
                        <span className="text-[11px] font-mono text-rose-400 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {formErrors.email}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-subject" className="block text-xs font-mono text-[#EDEFF5]">
                      Subject / Role Title
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Software Developer Opening at [Company]"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#141C30] border border-[#25314F] text-sm text-white placeholder-[#8D96AE]/60 focus:border-[#3FE3C4] focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-message" className="block text-xs font-mono text-[#EDEFF5]">
                      Message <span className="text-[#3FE3C4]">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share details about the role, technical requirements, or project..."
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-[#141C30] border text-sm text-white placeholder-[#8D96AE]/60 focus:outline-none transition-colors resize-y ${
                        formErrors.message
                          ? 'border-rose-500 focus:border-rose-500'
                          : 'border-[#25314F] focus:border-[#3FE3C4]'
                      }`}
                    ></textarea>
                    {formErrors.message && (
                      <span className="text-[11px] font-mono text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {formErrors.message}
                      </span>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    id="contact-submit-btn"
                    className="w-full py-3.5 px-6 rounded-xl font-heading font-semibold text-sm sm:text-base bg-[#3FE3C4] text-[#062420] hover:bg-[#5CEBD1] transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>

                  {/* Transparent Configuration Note */}
                  <div className="p-3 rounded-lg bg-[#141C30]/50 border border-[#25314F] text-[11px] font-mono text-[#8D96AE] leading-relaxed">
                    <strong>Service Architecture Note:</strong> As a client-side static portfolio, submitting will launch your native email client pre-filled with this message. Formspree or EmailJS can be integrated seamlessly via environment variables if desired.
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
