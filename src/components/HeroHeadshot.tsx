import React, { useState, useRef } from 'react';
import { GraduationCap, Code2, Upload, Camera, Check } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useProfilePhoto } from '../utils/photoStore';

/**
 * =======================================================================
 * INSTRUCTIONS TO USE YOUR ORIGINAL PHOTO (22TH0023.jpg):
 * =======================================================================
 * Method 1 (Direct Web UI):
 *   - Click the camera / "Upload Photo" button right on the circular avatar.
 *   - Select your original file `22TH0023.jpg` from your computer.
 *   - It will immediately load and display across the Hero, About,
 *     and Resume sections without any AI generation.
 *
 * Method 2 (Project Folder):
 *   - In the AI Studio file explorer on the left, place or drag your
 *     `22TH0023.jpg` file into the `/public` folder: `/public/22TH0023.jpg`.
 *   - The component will load it directly via `<img src="/22TH0023.jpg" />`.
 * =======================================================================
 */

interface HeroHeadshotProps {
  imageSrc?: string;
  className?: string;
}

export const HeroHeadshot: React.FC<HeroHeadshotProps> = ({
  imageSrc,
  className = '',
}) => {
  const [storedPhoto, setPhotoUrl] = useProfilePhoto();
  const photoUrl = imageSrc || storedPhoto;
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        setPhotoUrl(reader.result);
        setImageError(false);
        setImageLoaded(true);
        setUploadSuccess(true);
        setTimeout(() => setUploadSuccess(false), 3000);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleContainerClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div
      id="hero-headshot-container"
      className={`relative flex items-center justify-center py-6 lg:py-0 ${className}`}
    >
      {/* Hidden file input for authentic user photo upload */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/jpeg,image/png,image/webp,image/jpg"
        className="hidden"
        aria-label="Upload your original photo"
      />

      {/* Ambient background glow matching portfolio accent */}
      <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-[#3FE3C4]/15 blur-3xl pointer-events-none -z-10 animate-pulse"></div>
      <div className="absolute w-60 h-60 rounded-full bg-blue-500/10 blur-2xl pointer-events-none -z-10"></div>

      {/* Main Circular Headshot Wrapper */}
      <div
        className="relative group cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleContainerClick}
        title="Click to select or change your original photo (22TH0023.jpg)"
      >
        {/* Subtle decorative concentric rings */}
        <div className="absolute -inset-3 rounded-full border border-[#3FE3C4]/20 border-dashed pointer-events-none"></div>
        <div className="absolute -inset-1.5 rounded-full bg-gradient-to-tr from-[#3FE3C4]/30 via-transparent to-[#25314F]/40 pointer-events-none"></div>

        {/* Circular cropped image container */}
        <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-3 border-[#3FE3C4] shadow-2xl shadow-[#3FE3C4]/20 bg-[#141C30] flex items-center justify-center transition-all duration-300 group-hover:border-[#5CEBD1] group-hover:shadow-[#3FE3C4]/30">
          {!imageError ? (
            <img
              src={photoUrl}
              alt={`${PERSONAL_INFO.name} - Software Developer`}
              onError={() => setImageError(true)}
              onLoad={() => setImageLoaded(true)}
              className={`w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105 ${
                imageLoaded ? 'opacity-100' : 'opacity-90'
              }`}
              referrerPolicy="no-referrer"
            />
          ) : (
            /* Elegant developer placeholder avatar */
            <div
              id="headshot-placeholder-fallback"
              className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-b from-[#141C30] to-[#0B0F17] text-center p-6 select-none"
            >
              <div className="w-24 h-24 rounded-full bg-[#3FE3C4]/10 border-2 border-[#3FE3C4]/40 flex items-center justify-center mb-3 shadow-inner">
                <span className="font-heading font-bold text-3xl sm:text-4xl text-[#3FE3C4] tracking-tight">
                  JM
                </span>
              </div>
              <div className="font-heading font-bold text-white text-base sm:text-lg">
                {PERSONAL_INFO.name}
              </div>
              <div className="text-xs font-mono text-[#3FE3C4] mt-0.5">
                Software Developer
              </div>
              <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#3FE3C4]/15 border border-[#3FE3C4]/40 text-xs font-mono text-[#3FE3C4] hover:bg-[#3FE3C4]/25 transition-colors">
                <Upload className="w-3 h-3" />
                <span>Select 22TH0023.jpg</span>
              </div>
            </div>
          )}

          {/* Hover Overlay: Instant Photo Swap Action */}
          <div
            className={`absolute inset-0 bg-[#0B0F17]/75 backdrop-blur-xs flex flex-col items-center justify-center text-center p-4 transition-opacity duration-200 ${
              isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            <div className="w-12 h-12 rounded-full bg-[#3FE3C4]/20 border border-[#3FE3C4] flex items-center justify-center text-[#3FE3C4] mb-2">
              <Camera className="w-6 h-6" />
            </div>
            <div className="font-heading font-bold text-white text-sm">
              Upload Original Photo
            </div>
            <div className="text-[11px] font-mono text-[#3FE3C4] mt-1">
              Select 22TH0023.jpg
            </div>
          </div>
        </div>

        {/* Floating Badge 1: Availability Status (Top Right) */}
        <div
          id="headshot-badge-availability"
          className="absolute -top-2 -right-2 sm:top-2 sm:right-0 px-3.5 py-1.5 rounded-full bg-[#141C30]/95 border border-[#3FE3C4]/40 shadow-lg backdrop-blur-md flex items-center gap-2 text-xs font-mono text-[#3FE3C4]"
        >
          <span className="w-2 h-2 rounded-full bg-[#3FE3C4] animate-pulse"></span>
          <span className="font-semibold text-white">Open to Work</span>
        </div>

        {/* Floating Badge 2: Academic Distinction (Bottom Left) */}
        <div
          id="headshot-badge-academics"
          className="absolute -bottom-3 -left-3 sm:bottom-4 sm:-left-4 px-3.5 py-2 rounded-xl bg-[#141C30]/95 border border-[#25314F] shadow-lg backdrop-blur-md flex items-center gap-2 text-xs"
        >
          <div className="w-7 h-7 rounded-lg bg-[#3FE3C4]/10 border border-[#3FE3C4]/20 flex items-center justify-center text-[#3FE3C4] flex-shrink-0">
            <GraduationCap className="w-4 h-4" />
          </div>
          <div>
            <div className="font-bold text-white text-xs">8.98 CGPA</div>
            <div className="text-[10px] font-mono text-[#8D96AE]">B.Tech IT • 2026 Batch</div>
          </div>
        </div>

        {/* Floating Badge 3: Tech Stack Badge (Bottom Right) */}
        <div
          id="headshot-badge-skills"
          className="absolute -bottom-3 -right-2 sm:bottom-3 sm:-right-4 px-3.5 py-2 rounded-xl bg-[#141C30]/95 border border-[#25314F] shadow-lg backdrop-blur-md flex items-center gap-2 text-xs"
        >
          <div className="w-7 h-7 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 flex-shrink-0">
            <Code2 className="w-4 h-4" />
          </div>
          <div>
            <div className="font-bold text-white text-xs">Full-Stack & AI</div>
            <div className="text-[10px] font-mono text-[#3FE3C4]">Python • ML • Web</div>
          </div>
        </div>
      </div>

      {/* Floating Success Toast when user uploads photo */}
      {uploadSuccess && (
        <div className="absolute -bottom-8 px-3 py-1 rounded-lg bg-emerald-950 border border-emerald-500 text-emerald-300 text-xs font-mono flex items-center gap-1.5 shadow-lg animate-fade-in">
          <Check className="w-3.5 h-3.5" />
          <span>Original photo loaded successfully!</span>
        </div>
      )}
    </div>
  );
};
