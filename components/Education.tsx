import React from 'react';
import { EDUCATIONS } from '../constants';
import { GraduationCap, Award } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-serif font-bold text-pastel-text mb-12 text-center">
          Education History
        </h2>

        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-pastel-light before:z-0">
          {EDUCATIONS.map((edu) => (
            <div key={edu.id} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">

              {/* Icon */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-pastel-light bg-white z-10 shadow-sm shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <GraduationCap size={20} className="text-pastel-dark" />
              </div>

              {/* Content */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-xl shadow-sm border border-pastel-light hover:border-pastel-dark hover:shadow-lg transition-all duration-300 z-10 transform hover:-translate-y-1">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
                  <h3 className="font-bold text-lg text-gray-800">{edu.school}</h3>
                  <span className="text-sm text-pastel-dark font-semibold bg-pastel-light px-2 py-1 rounded">
                    {edu.period}
                  </span>
                </div>
                {edu.degree && <p className="text-pastel-text font-medium mb-1">{edu.degree}</p>}

                {edu.gpa && (
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                    <Award size={14} className="text-yellow-500" />
                    <span className="font-semibold">GPA/Score: {edu.gpa}</span>
                  </div>
                )}

                {edu.details && (
                  <ul className="list-disc list-inside text-sm text-gray-500 space-y-1 mt-2">
                    {edu.details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;