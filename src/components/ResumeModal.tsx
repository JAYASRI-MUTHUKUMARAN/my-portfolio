import React, { useState } from 'react';
import { X, Download, Printer, ExternalLink, Mail, Phone, MapPin, Github, Linkedin, Code2 } from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCE_ITEMS, EDUCATION_ITEMS, CERTIFICATIONS } from '../data/portfolioData';
import { useProfilePhoto } from '../utils/photoStore';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [photoUrl] = useProfilePhoto();
  const [imageError, setImageError] = useState(false);
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      id="resume-modal-backdrop"
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="resume-modal-container"
        className="relative w-full max-w-4xl bg-[#0B0F17] border border-[#25314F] rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Modal Controls */}
        <div className="bg-[#141C30] px-5 py-3.5 border-b border-[#25314F] flex items-center justify-between text-xs font-mono">
          <div className="flex items-center gap-2 text-[#EDEFF5]">
            <span className="font-semibold text-[#3FE3C4]">Digital Resume Document</span>
            <span className="text-[#8D96AE]">| Verified Recruiter Version (2026 Batch)</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              id="resume-print-btn"
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0E1524] text-[#EDEFF5] border border-[#25314F] hover:border-[#3FE3C4] hover:text-[#3FE3C4] transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save as PDF</span>
            </button>

            <a
              id="resume-direct-pdf-link"
              href={PERSONAL_INFO.resumeFileName}
              download="Jayasri_Muthukumaran_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#3FE3C4] text-[#062420] font-semibold hover:bg-[#5CEBD1] transition-colors cursor-pointer"
              title="Download PDF"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download File</span>
            </a>

            <button
              type="button"
              id="close-resume-modal-btn"
              onClick={onClose}
              className="p-1.5 rounded-lg text-[#8D96AE] hover:text-white hover:bg-[#0E1524] transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Body: Clean Printable Layout */}
        <div className="p-6 sm:p-10 overflow-y-auto bg-white text-[#111827] print:p-0 print:m-0 selection:bg-slate-200">
          {/* Header */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6 pb-6 border-b border-gray-300">
            <div className="flex-1 text-center sm:text-left">
              <h1 className="text-2xl sm:text-3xl font-bold font-heading tracking-tight text-gray-900 uppercase">
                {PERSONAL_INFO.name}
              </h1>
              <div className="text-sm font-semibold text-gray-700 mt-1">
                Software Engineer | Python Developer | AI/ML
              </div>
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 sm:gap-4 text-xs text-gray-600 mt-2 font-mono">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-gray-500" />
                  {PERSONAL_INFO.location}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Phone className="w-3 h-3 text-gray-500" />
                  {PERSONAL_INFO.phone}
                </span>
                <span>•</span>
                <a href={`mailto:${PERSONAL_INFO.email}`} className="text-blue-600 hover:underline flex items-center gap-1">
                  <Mail className="w-3 h-3 text-gray-500" />
                  {PERSONAL_INFO.email}
                </a>
              </div>
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 text-xs text-blue-700 mt-1.5 font-mono">
                <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  LinkedIn
                </a>
                <span>•</span>
                <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  GitHub
                </a>
                <span>•</span>
                <a href={PERSONAL_INFO.leetcode} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  LeetCode
                </a>
              </div>
            </div>

            <div className="w-20 h-24 sm:w-24 sm:h-28 rounded-lg overflow-hidden border border-gray-300 shadow-sm bg-gray-100 flex items-center justify-center flex-shrink-0">
              {!imageError ? (
                <img
                  src={photoUrl}
                  alt="Jayasri Muthukumaran"
                  onError={() => setImageError(true)}
                  className="w-full h-full object-cover object-top"
                  referrerPolicy="no-referrer"
                />
              ) : (
                <div className="font-heading font-bold text-xl text-gray-500">
                  JM
                </div>
              )}
            </div>
          </div>

          {/* Professional Summary */}
          <div className="py-4 border-b border-gray-200">
            <h2 className="text-xs font-bold font-mono tracking-wider text-gray-900 uppercase mb-1.5">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
              Software Engineer and B.Tech Information Technology graduate (July 2026) with First Class with Distinction, CGPA 8.98/10.0. Experienced in building full-stack applications with React.js and FastAPI, and integrating machine learning models (CNN-LSTM, computer vision) into production-style systems. Strong foundation in Data Structures & Algorithms, Object-Oriented Programming, and RESTful API design. Seeking an entry-level Software Engineer role to design, build, and ship reliable, scalable software.
            </p>
          </div>

          {/* Technical Skills */}
          <div className="py-4 border-b border-gray-200 text-xs sm:text-sm space-y-1.5">
            <h2 className="text-xs font-bold font-mono tracking-wider text-gray-900 uppercase mb-2">
              Technical Skills
            </h2>
            <div>
              <strong className="text-gray-900">Languages:</strong>{' '}
              <span className="text-gray-700">Python, C, JavaScript (ES6+), SQL, HTML5, CSS3</span>
            </div>
            <div>
              <strong className="text-gray-900">Web Development:</strong>{' '}
              <span className="text-gray-700">React.js, FastAPI, Flask, Tailwind CSS, RESTful APIs</span>
            </div>
            <div>
              <strong className="text-gray-900">AI & Machine Learning:</strong>{' '}
              <span className="text-gray-700">OpenCV, MediaPipe, TensorFlow, Keras, Gemini API, Prompt Engineering, NLP Basics</span>
            </div>
            <div>
              <strong className="text-gray-900">Tools & Databases:</strong>{' '}
              <span className="text-gray-700">Git, GitHub, Docker, Linux, SQLite, VS Code, DBMS</span>
            </div>
            <div>
              <strong className="text-gray-900">Core Concepts:</strong>{' '}
              <span className="text-gray-700">Data Structures & Algorithms (DSA), OOP, DBMS, Computer Networks</span>
            </div>
          </div>

          {/* Professional Experience */}
          <div className="py-4 border-b border-gray-200 space-y-3">
            <h2 className="text-xs font-bold font-mono tracking-wider text-gray-900 uppercase">
              Professional Experience
            </h2>
            <div>
              <div className="flex justify-between items-baseline text-xs sm:text-sm">
                <div>
                  <strong className="text-gray-900">Software Intern</strong> —{' '}
                  <span className="text-gray-700">Global Remote Virtual Software Internship (Launched Global)</span>
                </div>
                <div className="font-mono text-xs text-gray-600">Feb 2025 – May 2025</div>
              </div>
              <ul className="list-disc list-outside ml-4 mt-2 space-y-1 text-xs sm:text-sm text-gray-700 leading-relaxed">
                <li>Developed and debugged core application modules using Python and React, resolving 20+ high-priority defects during production testing cycles.</li>
                <li>Optimized backend API endpoint response times, reducing latency by 28% and improving overall local execution efficiency across testing workflows.</li>
                <li>Utilized Git and GitHub for version control, collaborative code reviews, and issue tracking across Agile development sprints.</li>
              </ul>
            </div>
          </div>

          {/* Technical Projects */}
          <div className="py-4 border-b border-gray-200 space-y-4">
            <h2 className="text-xs font-bold font-mono tracking-wider text-gray-900 uppercase">
              Technical Projects
            </h2>

            {/* Project 1 */}
            <div>
              <div className="flex justify-between items-baseline text-xs sm:text-sm">
                <strong className="text-gray-900">AI Sign Language Translator (SignSense Pro)</strong>
                <span className="text-xs font-mono text-gray-600">Python, OpenCV, MediaPipe, TensorFlow/Keras</span>
              </div>
              <ul className="list-disc list-outside ml-4 mt-1.5 space-y-1 text-xs text-gray-700 leading-relaxed">
                <li>Engineered a real-time gesture recognition system combining MediaPipe hand/pose/facial tracking and a CNN-LSTM sequence model on the 700-word WLASL dataset, achieving ~95% validation accuracy.</li>
                <li>Implemented multi-threaded frame processing pipelines to reduce execution latency by 40% on standard edge devices.</li>
                <li>Integrated text-to-speech audio synthesis to convert recognized gestures into spoken language across 40+ locales.</li>
              </ul>
            </div>

            {/* Project 2 */}
            <div>
              <div className="flex justify-between items-baseline text-xs sm:text-sm">
                <strong className="text-gray-900">Smart Email Classifier & Auto-Reply</strong>
                <span className="text-xs font-mono text-gray-600">FastAPI, React.js, Tailwind CSS, Gemini API, Gmail API</span>
              </div>
              <ul className="list-disc list-outside ml-4 mt-1.5 space-y-1 text-xs text-gray-700 leading-relaxed">
                <li>Developed an end-to-end web application that fetches incoming messages via Gmail API and automatically categorizes them using LLM integration.</li>
                <li>Built a FastAPI backend paired with SQLite persistence to maintain classification history and store context-aware reply drafts.</li>
              </ul>
            </div>

            {/* Project 3 */}
            <div>
              <div className="flex justify-between items-baseline text-xs sm:text-sm">
                <strong className="text-gray-900">Geospatial Weather Analytics Dashboard</strong>
                <span className="text-xs font-mono text-gray-600">JavaScript, React.js, Google Maps API, OpenWeather API</span>
              </div>
              <ul className="list-disc list-outside ml-4 mt-1.5 space-y-1 text-xs text-gray-700 leading-relaxed">
                <li>Built a single-page interactive dashboard leveraging Google Maps API and OpenWeather API to display real-time weather analytics.</li>
                <li>Implemented client-side caching via LocalStorage, reducing redundant external API requests by 30%.</li>
              </ul>
            </div>
          </div>

          {/* Education */}
          <div className="py-4 border-b border-gray-200 space-y-2">
            <h2 className="text-xs font-bold font-mono tracking-wider text-gray-900 uppercase">
              Education
            </h2>
            <div className="flex justify-between items-baseline text-xs sm:text-sm">
              <div>
                <strong className="text-gray-900">Rajiv Gandhi College of Engineering and Technology</strong> — Puducherry, India
                <div className="text-xs text-gray-700">Bachelor of Technology in Information Technology | <strong className="text-gray-900">CGPA: 8.98/10.0 — First Class with Distinction</strong></div>
              </div>
              <div className="text-xs font-mono text-gray-600 whitespace-nowrap">Graduation: July 2026</div>
            </div>
            <div className="text-xs text-gray-600 pt-1">
              Thiruvalluvar Girls Higher Secondary School — HSC (12th), 73% (2022) • St. Anne's English High School — SSLC (10th), 77% (2020)
            </div>
          </div>

          {/* Certifications & Research */}
          <div className="pt-4 space-y-2">
            <h2 className="text-xs font-bold font-mono tracking-wider text-gray-900 uppercase">
              Certifications & Highlights
            </h2>
            <ul className="list-disc list-outside ml-4 space-y-1 text-xs text-gray-700">
              <li><strong className="text-gray-900">AI: Concepts & Techniques (Elite, 75%)</strong> — NPTEL, IISc Bangalore (2025)</li>
              <li><strong className="text-gray-900">Published Research Paper & International Conference Presentation</strong> on AI Sign Language Translation</li>
              <li><strong className="text-gray-900">Solutions Architecture Job Simulation</strong> — AWS / Forage (2025)</li>
              <li><strong className="text-gray-900">The Full Stack Web Development</strong> — Meta, Coursera (2025)</li>
              <li><strong className="text-gray-900">AI Fluency for Students</strong> — Anthropic (2024)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
