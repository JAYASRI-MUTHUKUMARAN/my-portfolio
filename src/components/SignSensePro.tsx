import React, { useState } from 'react';
import { FEATURED_PROJECT } from '../data/portfolioData';
import {
  Brain,
  Video,
  Eye,
  Cpu,
  Type,
  Volume2,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Github,
  Play,
  CheckCircle2,
  Layers,
  Sparkles,
  ArrowRight,
  Activity,
} from 'lucide-react';

export const SignSensePro: React.FC = () => {
  const [detailsExpanded, setDetailsExpanded] = useState(false);
  const [simulatorActiveWord, setSimulatorActiveWord] = useState('THANK YOU');
  const [simulatorPlaying, setSimulatorPlaying] = useState(false);
  const [spokenFeedback, setSpokenFeedback] = useState(false);

  const sampleVocab = [
    { word: 'HELLO', confidence: '96.4%', category: 'Greeting' },
    { word: 'THANK YOU', confidence: '97.8%', category: 'Courtesy' },
    { word: 'HELP', confidence: '95.1%', category: 'Emergency' },
    { word: 'WELCOME', confidence: '94.6%', category: 'Social' },
    { word: 'LEARN', confidence: '93.9%', category: 'Action' },
  ];

  const handleSimulateGesture = (word: string) => {
    setSimulatorActiveWord(word);
    setSimulatorPlaying(true);
    setSpokenFeedback(false);

    // Audio text to speech simulation
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(word.toLowerCase());
      utterance.rate = 0.95;
      utterance.onend = () => {
        setSpokenFeedback(true);
      };
      setTimeout(() => {
        window.speechSynthesis.speak(utterance);
      }, 400);
    } else {
      setTimeout(() => setSpokenFeedback(true), 600);
    }

    setTimeout(() => {
      setSimulatorPlaying(false);
    }, 800);
  };

  const architectureSteps = [
    { title: 'Video / Webcam', desc: 'Raw 30 FPS Stream', icon: Video, color: 'text-[#60A5FA]' },
    { title: 'Landmark Extraction', desc: 'MediaPipe (Hand + Pose + Face)', icon: Eye, color: 'text-[#3FE3C4]' },
    { title: 'Feature Processing', desc: '30-Frame Temporal Tensor', icon: Layers, color: 'text-[#A78BFA]' },
    { title: 'Deep Learning Model', desc: 'CNN-LSTM Architecture', icon: Cpu, color: 'text-[#F2A868]' },
    { title: 'Word Prediction', desc: '700 ASL Vocabulary', icon: Type, color: 'text-[#34D399]' },
    { title: 'Text & Speech Output', desc: 'TTS Audio Synthesis', icon: Volume2, color: 'text-[#F472B6]' },
  ];

  return (
    <section id="projects" className="py-20 bg-[#0E1524]/80 border-t border-[#1F293D] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#141C30] border border-[#25314F] text-xs font-mono text-[#3FE3C4] mb-3">
            <Brain className="w-3.5 h-3.5" />
            <span>Featured Capstone Project</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            SignSense Pro
          </h2>
          <p className="mt-2 text-base sm:text-lg text-[#3FE3C4] font-medium">
            AI Sign Language Translator (WLASL 700-Word Vocabulary)
          </p>
          <p className="mt-2 text-sm sm:text-base text-[#8D96AE]">
            End-to-end computer vision and sequence deep-learning system designed to translate dynamic American Sign Language gestures into text and audible speech in real time.
          </p>
        </div>

        {/* Large Premium Project Container */}
        <div className="rounded-3xl bg-[#0B0F17] border border-[#25314F] p-6 sm:p-8 lg:p-10 shadow-2xl space-y-10">
          {/* Header Strip & Meta */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-[#1F293D]">
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-[#3FE3C4]/15 text-[#3FE3C4] border border-[#3FE3C4]/30">
                  Flagship Project
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-[#141C30] text-[#EDEFF5] border border-[#25314F]">
                  Published Paper & Conference Presented
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  ~95% Validation Accuracy
                </span>
              </div>
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white">
                {FEATURED_PROJECT.title}
              </h3>
              <p className="text-sm font-mono text-[#8D96AE]">
                Category: {FEATURED_PROJECT.category}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                id="sign-sense-view-code-btn"
                href={FEATURED_PROJECT.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-mono text-sm font-semibold bg-[#141C30] text-white border border-[#25314F] hover:border-[#3FE3C4] hover:text-[#3FE3C4] transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>View Code</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#8D96AE]" />
              </a>

              <button
                type="button"
                id="sign-sense-interactive-demo-btn"
                onClick={() => {
                  const demoElement = document.getElementById('signs-demo-simulator');
                  demoElement?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-mono text-sm font-semibold bg-[#3FE3C4] text-[#062420] hover:bg-[#5CEBD1] transition-colors shadow-sm"
              >
                <Play className="w-4 h-4 fill-current" />
                <span>Interactive Simulator</span>
              </button>
            </div>
          </div>

          {/* Important Clarification Banner */}
          <div className="p-4 rounded-xl bg-[#141C30]/80 border border-[#3FE3C4]/30 flex items-start gap-3 text-sm">
            <Sparkles className="w-5 h-5 text-[#3FE3C4] flex-shrink-0 mt-0.5" />
            <div className="space-y-1">
              <div className="font-semibold text-white">
                Word-Level ASL Recognition (Not Basic A–Z Alphabet Mapping)
              </div>
              <p className="text-[#8D96AE] leading-relaxed">
                Unlike static finger-spelling projects that only recognize static alphabet poses (A–Z), SignSense Pro recognizes full dynamic words across a <strong className="text-[#EDEFF5]">700-word vocabulary from the benchmark WLASL dataset</strong> using 30-frame temporal motion analysis.
              </p>
            </div>
          </div>

          {/* Visual Architecture Diagram */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="font-heading font-semibold text-base sm:text-lg text-white flex items-center gap-2">
                <Activity className="w-4 h-4 text-[#3FE3C4]" />
                Technical Architecture Flow
              </h4>
              <span className="text-xs font-mono text-[#8D96AE]">
                Continuous Edge Inference Pipeline
              </span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
              {architectureSteps.map((step, idx) => {
                const IconComponent = step.icon;
                return (
                  <div
                    key={step.title}
                    className="p-3.5 rounded-xl bg-[#0E1524] border border-[#25314F] relative group hover:border-[#3FE3C4]/40 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono text-[#8D96AE]">0{idx + 1}</span>
                      <IconComponent className={`w-4 h-4 ${step.color}`} />
                    </div>
                    <div className="font-semibold text-xs text-white leading-snug">
                      {step.title}
                    </div>
                    <div className="text-[11px] text-[#8D96AE] font-mono mt-1">
                      {step.desc}
                    </div>
                    {idx < architectureSteps.length - 1 && (
                      <div className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 z-10 text-[#25314F]">
                        <ArrowRight className="w-3.5 h-3.5 text-[#3FE3C4]/40" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Interactive Live Gesture Simulator for Recruiters */}
          <div id="signs-demo-simulator" className="p-6 rounded-2xl bg-[#0E1524] border border-[#25314F] space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h4 className="font-heading font-semibold text-base sm:text-lg text-white flex items-center gap-2">
                  <Play className="w-4 h-4 text-[#3FE3C4] fill-current" />
                  Interactive Sequence Recognition Simulator
                </h4>
                <p className="text-xs text-[#8D96AE] font-mono mt-0.5">
                  Click a gesture word to simulate the 30-frame sequence inference and trigger text-to-speech
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-[#3FE3C4] bg-[#3FE3C4]/10 px-3 py-1 rounded-lg border border-[#3FE3C4]/20 self-start sm:self-auto">
                <Volume2 className="w-3.5 h-3.5" />
                <span>Audio Engine Ready</span>
              </div>
            </div>

            {/* Gesture Selection Chips */}
            <div className="flex flex-wrap gap-2">
              {sampleVocab.map((item) => (
                <button
                  key={item.word}
                  type="button"
                  id={`gesture-btn-${item.word.toLowerCase().replace(' ', '-')}`}
                  onClick={() => handleSimulateGesture(item.word)}
                  className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all flex items-center gap-2 cursor-pointer ${
                    simulatorActiveWord === item.word
                      ? 'bg-[#3FE3C4] text-[#062420] font-semibold shadow-md'
                      : 'bg-[#141C30] text-[#EDEFF5] border border-[#25314F] hover:border-[#3FE3C4]'
                  }`}
                >
                  <span>{item.word}</span>
                  <span className="text-[10px] opacity-80">({item.confidence})</span>
                </button>
              ))}
            </div>

            {/* Simulated Live Viewport Display */}
            <div className="p-5 rounded-xl bg-[#0B0F17] border border-[#25314F] grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
              {/* Landmark Canvas Mockup */}
              <div className="md:col-span-6 relative aspect-video bg-[#111827] rounded-lg border border-[#1F293D] flex flex-col justify-between p-3 overflow-hidden">
                <div className="flex items-center justify-between text-[10px] font-mono text-[#8D96AE] z-10">
                  <span className="flex items-center gap-1.5 text-emerald-400">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    MEDIASOFT TRACKING: 468 FACE + 42 HAND + 33 POSE PTS
                  </span>
                  <span>30 FPS</span>
                </div>

                {/* SVG Skeleton Simulation */}
                <div className="absolute inset-0 flex items-center justify-center opacity-60">
                  <svg className="w-48 h-48" viewBox="0 0 100 100">
                    {/* Head / Face */}
                    <circle cx="50" cy="25" r="10" fill="none" stroke="#3FE3C4" strokeWidth="1.2" strokeDasharray="2,2" />
                    {/* Torso */}
                    <line x1="50" y1="35" x2="50" y2="70" stroke="#3FE3C4" strokeWidth="1.5" />
                    {/* Shoulders & Arms */}
                    <line x1="30" y1="45" x2="70" y2="45" stroke="#3FE3C4" strokeWidth="1.5" />
                    <line x1="30" y1="45" x2="20" y2="60" stroke="#3FE3C4" strokeWidth="1.5" />
                    <line x1="20" y1="60" x2="35" y2="40" stroke="#3FE3C4" strokeWidth="1.5" />
                    <line x1="70" y1="45" x2="80" y2="60" stroke="#3FE3C4" strokeWidth="1.5" />
                    <line x1="80" y1="60" x2="65" y2="40" stroke="#3FE3C4" strokeWidth="1.5" />
                    {/* Hands Points */}
                    <circle cx="35" cy="40" r="3" fill="#F2A868" />
                    <circle cx="65" cy="40" r="3" fill="#F2A868" />
                    {/* Landmark Nodes */}
                    <circle cx="50" cy="20" r="1.5" fill="#3FE3C4" />
                    <circle cx="47" cy="23" r="1.5" fill="#3FE3C4" />
                    <circle cx="53" cy="23" r="1.5" fill="#3FE3C4" />
                  </svg>
                </div>

                <div className="z-10 flex items-center justify-between text-[11px] font-mono text-[#EDEFF5] bg-black/60 px-2.5 py-1 rounded backdrop-blur-sm">
                  <span>Sequence Buffer: [30, 258]</span>
                  <span className="text-[#3FE3C4]">{simulatorPlaying ? 'Processing Tensor...' : 'Active Gesture Stream'}</span>
                </div>
              </div>

              {/* Output Panel */}
              <div className="md:col-span-6 space-y-4">
                <div className="p-4 rounded-xl bg-[#141C30] border border-[#25314F] space-y-2">
                  <div className="text-xs font-mono text-[#8D96AE] flex items-center justify-between">
                    <span>RECOGNIZED WORD OUTPUT</span>
                    <span className="text-emerald-400">CNN-LSTM SOFTMAX</span>
                  </div>
                  <div className="text-2xl sm:text-3xl font-heading font-bold text-white tracking-wider">
                    "{simulatorActiveWord}"
                  </div>
                  <div className="text-xs font-mono text-[#3FE3C4] flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Inference Latency: 18.4ms (Confidence: 96.8%)</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#141C30]/50 border border-[#25314F] flex items-center justify-between text-xs font-mono">
                  <span className="text-[#8D96AE] flex items-center gap-2">
                    <Volume2 className="w-4 h-4 text-[#F472B6]" />
                    Speech Audio Output:
                  </span>
                  <span className="text-[#EDEFF5] font-semibold">
                    {spokenFeedback ? 'Spoken via Browser TTS' : 'Synthesizing voice...'}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Section 11: 6 Feature Cards */}
          <div className="space-y-4">
            <h4 className="font-heading font-semibold text-lg text-white">
              Key Technical Features
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {FEATURED_PROJECT.features?.map((feat, idx) => (
                <div
                  key={feat.title}
                  id={`signs-feature-${idx}`}
                  className="p-5 rounded-2xl bg-[#0E1524] border border-[#25314F] hover:border-[#3FE3C4]/40 transition-colors space-y-2"
                >
                  <div className="flex items-center gap-2 text-[#3FE3C4]">
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                    <h5 className="font-heading font-semibold text-base text-white">
                      {feat.title}
                    </h5>
                  </div>
                  <p className="text-xs sm:text-sm text-[#8D96AE] leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 10: Technical Details Expandable Drawer */}
          <div className="pt-2 border-t border-[#1F293D]">
            <button
              type="button"
              id="toggle-technical-specs-btn"
              onClick={() => setDetailsExpanded(!detailsExpanded)}
              className="w-full py-4 flex items-center justify-between text-left text-sm font-mono font-medium text-[#EDEFF5] hover:text-[#3FE3C4] transition-colors cursor-pointer"
              aria-expanded={detailsExpanded}
            >
              <span className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-[#3FE3C4]" />
                <span>SignSense Pro — Detailed Technical Specifications</span>
              </span>
              <div className="flex items-center gap-1.5 text-xs text-[#8D96AE]">
                <span>{detailsExpanded ? 'Collapse Specs' : 'Expand Specifications'}</span>
                {detailsExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </div>
            </button>

            {detailsExpanded && (
              <div
                id="technical-specs-panel"
                className="mt-2 p-6 rounded-2xl bg-[#0E1524] border border-[#25314F] space-y-4 text-xs font-mono animate-in fade-in duration-200"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="p-3.5 rounded-xl bg-[#141C30] border border-[#25314F]">
                    <span className="text-[#8D96AE] block mb-1">Dataset</span>
                    <strong className="text-white text-sm">WLASL (Word-Level American Sign Language)</strong>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#141C30] border border-[#25314F]">
                    <span className="text-[#8D96AE] block mb-1">Vocabulary</span>
                    <strong className="text-white text-sm">700 ASL Words</strong>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#141C30] border border-[#25314F]">
                    <span className="text-[#8D96AE] block mb-1">Feature Extraction</span>
                    <strong className="text-white text-sm">MediaPipe Holistic (Hand, Pose, Face)</strong>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#141C30] border border-[#25314F]">
                    <span className="text-[#8D96AE] block mb-1">Feature Representation</span>
                    <strong className="text-white text-sm">Normalized Multi-Point Coordinate Vectors</strong>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#141C30] border border-[#25314F]">
                    <span className="text-[#8D96AE] block mb-1">Sequence Length</span>
                    <strong className="text-white text-sm">30 Consecutive Frames</strong>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#141C30] border border-[#25314F]">
                    <span className="text-[#8D96AE] block mb-1">Machine Learning Framework</span>
                    <strong className="text-white text-sm">TensorFlow / Keras (CNN-LSTM Model)</strong>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#141C30] border border-[#25314F]">
                    <span className="text-[#8D96AE] block mb-1">Backend Runtime</span>
                    <strong className="text-white text-sm">Python 3.10 / OpenCV / Multi-threaded Worker</strong>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#141C30] border border-[#25314F]">
                    <span className="text-[#8D96AE] block mb-1">Application Type</span>
                    <strong className="text-white text-sm">Web-based AI Application</strong>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#141C30] border border-[#25314F]">
                    <span className="text-[#8D96AE] block mb-1">Speech Engine</span>
                    <strong className="text-white text-sm">Text-to-Speech (40+ Supported Locales)</strong>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-[#141C30]/50 border border-[#25314F] text-[#8D96AE] text-[11px] leading-relaxed">
                  Note: Built and evaluated across academic benchmark datasets with multi-threading optimizations; verified on edge CPU without requiring dedicated tensor server instances.
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
