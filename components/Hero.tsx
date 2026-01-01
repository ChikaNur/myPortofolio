import React from 'react';
import { Linkedin } from 'lucide-react';
import { PROFILE } from '../constants';

const Hero: React.FC = () => {


  return (
    <section id="home" className="min-h-[100dvh] flex items-center justify-center bg-[length:400%_400%] animate-gradient-slow bg-gradient-to-br from-pastel-light via-pastel to-[#D9BCC3] pt-24 md:pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 text-center md:text-left space-y-6 animate-fade-in-up">
          <div className="inline-block px-4 py-1 rounded-full bg-white/50 border border-pastel-dark text-pastel-dark text-sm font-semibold mb-4">
            Portfolio
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-pastel-text leading-tight">
            Hello, I'm <br />
            <span className="text-pastel-dark">{PROFILE.name}</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl">
            {PROFILE.title}
          </p>
          <p className="text-gray-500 flex items-center justify-center md:justify-start gap-2">
            <span className="w-2 h-2 bg-pastel-dark rounded-full"></span>
            {PROFILE.location}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4 no-print">
            <a
              href={`https://${PROFILE.linkedin}`}
              target="_blank"
              rel="noreferrer"
              className="px-8 py-3 bg-pastel-dark text-white rounded-full font-medium hover:bg-pastel-text transition-colors shadow-lg shadow-pastel/50 flex items-center justify-center gap-2"
            >
              <Linkedin size={18} />
              Connect
            </a>

          </div>
        </div>

        <div className="flex-1 relative animate-zoom-in">
          {/* Decorative circles using the Palette Colors */}

          {/* 1. The Darker Mauve (#997D84) - Top Right */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-pastel-dark rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob"></div>

          {/* 2. The Pastel Pink (#FFD1DC) - Bottom Left */}
          <div className="absolute -bottom-10 -left-10 w-36 h-36 bg-pastel rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>

          {/* 3. The Lighter Pink (#FFE3EA) - Floating near center/top */}
          <div className="absolute top-0 left-10 w-24 h-24 bg-[#ffb7c5] rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob animation-delay-4000"></div>

          <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto rounded-full p-2 bg-white/60 backdrop-blur-sm shadow-xl border border-white">
            <div className="w-full h-full rounded-full overflow-hidden border-4 border-pastel-light">
              <img
                src="https://picsum.photos/400/400?grayscale"
                alt={PROFILE.name}
                width="400"
                height="400"
                loading="eager"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;