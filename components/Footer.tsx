import React from 'react';
import { Linkedin, Mail, Instagram } from 'lucide-react';
import { PROFILE } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-pastel-text text-white py-12 no-print">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center text-center">
        <h2 className="font-serif text-3xl font-bold mb-3">{PROFILE.name}</h2>
        <p className="opacity-90 text-sm mb-6 max-w-md">{PROFILE.title}</p>
        
        <div className="flex gap-6 mb-8">
            <a 
                href={`mailto:${PROFILE.email}`}
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all hover:scale-110 group relative"
                aria-label="Email"
            >
                <Mail size={20} />
                <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    Email
                </span>
            </a>
            <a 
                href={`https://${PROFILE.linkedin}`}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all hover:scale-110 group relative"
                aria-label="LinkedIn"
            >
                <Linkedin size={20} />
                <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    LinkedIn
                </span>
            </a>
            <a 
                href={PROFILE.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all hover:scale-110 group relative"
                aria-label="Instagram"
            >
                <Instagram size={20} />
                <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    Instagram
                </span>
            </a>
        </div>

        <div className="w-12 h-0.5 bg-pastel-light mx-auto mb-6 opacity-30"></div>
        <p className="text-xs opacity-60">
          &copy; {new Date().getFullYear()} All Rights Reserved. Designed with pastel elegance.
        </p>
      </div>
    </footer>
  );
};

export default Footer;