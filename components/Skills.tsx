import React from 'react';
import { SKILLS } from '../constants';
import { Palette, Users, Globe } from 'lucide-react';

const Skills: React.FC = () => {
  const getIcon = (category: string) => {
    switch(category) {
        case "Creative & Design": return <Palette className="w-6 h-6 text-white" />;
        case "Professional": return <Users className="w-6 h-6 text-white" />;
        case "Languages": return <Globe className="w-6 h-6 text-white" />;
        default: return null;
    }
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-t from-pastel-light/30 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-serif font-bold text-pastel-text mb-12 text-center">
          Skills & Expertise
        </h2>
        
        <div className="grid gap-8 md:grid-cols-3">
            {SKILLS.map((skillGroup, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-sm hover:shadow-xl p-6 flex flex-col items-center text-center border-t-4 border-pastel-dark transition-all duration-300 transform hover:-translate-y-2">
                    <div className="w-12 h-12 bg-pastel-dark rounded-full flex items-center justify-center mb-4 shadow-lg shadow-pastel-dark/30">
                        {getIcon(skillGroup.category)}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-6">{skillGroup.category}</h3>
                    <div className="flex flex-wrap justify-center gap-2">
                        {skillGroup.items.map((item, idx) => (
                            <span 
                                key={idx}
                                className="px-3 py-1 bg-pastel-light text-pastel-text text-sm rounded-full font-medium"
                            >
                                {item}
                            </span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;