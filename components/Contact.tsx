import React, { useState, FormEvent } from 'react';
import { Send, Mail, Linkedin, CheckCircle, Instagram } from 'lucide-react';
import { PROFILE } from '../constants';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        const phoneNumber = "6281221053790";
        const subject = formData.subject.trim() || "General Inquiry";

        // Template requested order:
        // Subject: <Subject>
        // Halo Chika, Perkenalkan saya <name>
        // <Message>
        const text = `Subject: ${subject}\n\nHalo Chika, Perkenalkan saya ${formData.name}\n\n${formData.message}`;
        const encodedText = encodeURIComponent(text);
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedText}`;

        // Simulate a brief delay for animation/feedback before opening
        setTimeout(() => {
            window.open(whatsappUrl, '_blank');
            setIsSubmitting(false);
            setShowSuccess(true);
            setFormData({ name: '', subject: '', message: '' });

            // Hide success message after a few seconds
            setTimeout(() => setShowSuccess(false), 5000);
        }, 1000);
    };

    return (
        <section id="contact" className="py-12 md:py-20 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-serif font-bold text-pastel-text mb-8 text-center">
                    Get In Touch
                </h2>
                <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
                    Have a project in mind or want to collaborate? Feel free to send me a message via WhatsApp or connect with me through other channels.
                </p>

                {/* Contact Links */}
                <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-10">
                    <a
                        href={`mailto:${PROFILE.email}`}
                        className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded-full shadow-sm hover:shadow-md hover:border-pastel-dark transition-all text-gray-700 hover:text-pastel-dark group w-full sm:w-auto justify-center"
                    >
                        <div className="p-2 bg-pastel-light/30 rounded-full group-hover:bg-pastel-light transition-colors">
                            <Mail size={18} />
                        </div>
                        <span className="truncate">{PROFILE.email}</span>
                    </a>
                    <a
                        href={`https://${PROFILE.linkedin}`}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded-full shadow-sm hover:shadow-md hover:border-pastel-dark transition-all text-gray-700 hover:text-pastel-dark group w-full sm:w-auto justify-center"
                    >
                        <div className="p-2 bg-pastel-light/30 rounded-full group-hover:bg-pastel-light transition-colors">
                            <Linkedin size={18} />
                        </div>
                        <span>LinkedIn Profile</span>
                    </a>
                    <a
                        href={PROFILE.instagram}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded-full shadow-sm hover:shadow-md hover:border-pastel-dark transition-all text-gray-700 hover:text-pastel-dark group w-full sm:w-auto justify-center"
                    >
                        <div className="p-2 bg-pastel-light/30 rounded-full group-hover:bg-pastel-light transition-colors">
                            <Instagram size={18} />
                        </div>
                        <span>Instagram</span>
                    </a>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-lg border border-pastel-light max-w-2xl mx-auto relative overflow-hidden">

                    {showSuccess ? (
                        <div className="flex flex-col items-center justify-center py-10 text-center animate-fade-in-up">
                            <div className="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-4">
                                <CheckCircle size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">Message Ready!</h3>
                            <p className="text-gray-600">WhatsApp has been opened with your message.</p>
                            <button
                                onClick={() => setShowSuccess(false)}
                                className="mt-6 text-pastel-dark hover:underline font-medium"
                            >
                                Send another message
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:border-pastel-dark focus:ring-2 focus:ring-pastel-light outline-none transition-all placeholder-gray-400"
                                        placeholder="Your Name"
                                        style={{
                                            backgroundColor: 'white',
                                            color: '#111827',
                                            WebkitBoxShadow: '0 0 0 1000px white inset',
                                            WebkitTextFillColor: '#111827'
                                        }}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                                        Subject <span className="text-gray-400 font-normal">(Optional)</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:border-pastel-dark focus:ring-2 focus:ring-pastel-light outline-none transition-all placeholder-gray-400"
                                        placeholder="General Inquiry"
                                        style={{
                                            backgroundColor: 'white',
                                            color: '#111827',
                                            WebkitBoxShadow: '0 0 0 1000px white inset',
                                            WebkitTextFillColor: '#111827'
                                        }}
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={5}
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:border-pastel-dark focus:ring-2 focus:ring-pastel-light outline-none transition-all resize-none placeholder-gray-400"
                                    placeholder="How can I help you?"
                                    style={{ backgroundColor: 'white', color: '#111827' }}
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-pastel-dark text-white font-bold py-3 px-6 rounded-lg hover:bg-pastel-text transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed transform active:scale-[0.98]"
                            >
                                {isSubmitting ? (
                                    <span className="flex items-center gap-2">
                                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                        Opening WhatsApp...
                                    </span>
                                ) : (
                                    <>
                                        <Send size={18} />
                                        Send Message via WhatsApp
                                    </>
                                )}
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Contact;