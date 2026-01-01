import React from 'react';
import { PROFILE } from '../constants';
import { Quote } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center mb-6">
            <Quote className="text-pastel-dark w-12 h-12 opacity-50" />
        </div>
        <h2 className="text-3xl font-serif font-bold text-pastel-text mb-8">About Me</h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          {PROFILE.about}
        </p>
      </div>
    </section>
  );
};

export default About;