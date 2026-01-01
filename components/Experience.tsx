import React, { useState, useMemo } from 'react';
import { EXPERIENCES } from '../constants';
import { Calendar, MapPin } from 'lucide-react';

const Experience: React.FC = () => {
    const [selectedType, setSelectedType] = useState<string>('All');

    // Extract unique types from experiences
    const experienceTypes = useMemo(() => {
        const types = new Set<string>();
        EXPERIENCES.forEach(exp => types.add(exp.type));
        return ['All', ...Array.from(types).sort()];
    }, []);

    // Filter experiences
    const filteredExperiences = selectedType === 'All'
        ? EXPERIENCES
        : EXPERIENCES.filter(exp => exp.type === selectedType);

    return (
        <section id="experience" className="py-20 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-serif font-bold text-pastel-text mb-8 text-center">
                    Experience & Organization
                </h2>

                {/* Filter Controls */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {experienceTypes.map((type) => (
                        <button
                            key={type}
                            onClick={() => setSelectedType(type)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${selectedType === type
                                    ? 'bg-pastel-dark text-white shadow-md'
                                    : 'bg-white text-gray-600 border border-pastel-light hover:border-pastel-dark hover:text-pastel-dark'
                                }`}
                        >
                            {type}
                        </button>
                    ))}
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                    {filteredExperiences.map((exp) => (
                        <div key={exp.id} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border-l-4 border-pastel-dark animate-fade-in-up transform hover:-translate-y-2">
                            <div className="flex justify-between items-start mb-2">
                                <div>
                                    <h3 className="text-lg font-bold text-gray-800">{exp.role}</h3>
                                    <p className="text-pastel-dark font-medium">{exp.company}</p>
                                </div>
                                <span className={`text-xs px-2 py-1 rounded text-white ${exp.type === 'Work' ? 'bg-blue-400' :
                                        exp.type === 'Event' ? 'bg-purple-400' :
                                            exp.type === 'Volunteering' ? 'bg-green-400' : 'bg-pastel-dark'
                                    }`}>
                                    {exp.type}
                                </span>
                            </div>

                            <div className="flex items-center text-sm text-gray-500 mb-4 space-x-4">
                                <span className="flex items-center gap-1">
                                    <Calendar size={14} />
                                    {exp.period}
                                </span>
                                {exp.location && (
                                    <span className="flex items-center gap-1">
                                        <MapPin size={14} />
                                        {exp.location}
                                    </span>
                                )}
                            </div>

                            {exp.description && (
                                <p className="text-gray-600 text-sm mb-3 leading-relaxed border-t border-gray-100 pt-3">
                                    {exp.description}
                                </p>
                            )}

                            {exp.skills && (
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {exp.skills.map((skill, idx) => (
                                        <span key={idx} className="text-xs bg-pastel-light text-pastel-text px-2 py-1 rounded-full">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {filteredExperiences.length === 0 && (
                    <div className="text-center text-gray-500 mt-8">
                        No experiences found for this category.
                    </div>
                )}
            </div>
        </section>
    );
};

export default Experience;