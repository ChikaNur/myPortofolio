import React, { useState } from 'react';
import { Instagram, X, ExternalLink } from 'lucide-react';

interface InstagramEmbedProps {
    url: string;
}

const InstagramEmbed: React.FC<InstagramEmbedProps> = ({ url }) => {
    // Clean URL and ensure it ends with /embed
    // Handle cases where URL might already have query params or /embed
    const cleanUrl = url.split('?')[0].replace(/\/embed\/?$/, "").replace(/\/$/, "");
    const embedUrl = `${cleanUrl}/embed`;

    return (
        <div className="w-full relative pt-[125%] bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 group hover:shadow-md transition-all duration-300">
            {/* Wrapper to handle the crop */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                <iframe
                    src={embedUrl}
                    className="absolute -top-[58px] left-0 w-[100%] h-[calc(100%+60px)]"
                    frameBorder="0"
                    scrolling="no"
                    allowTransparency={true}
                    title="Instagram Post"
                />
            </div>

            {/* Overlay to prevent interaction if needed, or just let it be. 
          Standard embeds might have their own click handlers. 
          We add a subtle overlay on hover to make it feel like a card. */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors pointer-events-none" />
        </div>
    );
};

interface InstagramGalleryProps {
    posts: string[];
}

const InstagramGallery: React.FC<InstagramGalleryProps> = ({ posts }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    const handleOpen = () => {
        setIsModalOpen(true);
    };

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            setIsModalOpen(false);
            setIsClosing(false);
        }, 300); // Duration matches tailwind config
    };

    return (
        <section id="instagram-gallery" className="py-12 md:py-20 bg-gray-50/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-serif font-bold text-pastel-text mb-4 flex items-center justify-center gap-3">
                        <Instagram className="text-pastel-dark" />
                        Socials Update
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Check out my latest activities and updates on Instagram.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {posts.map((post, index) => (
                        <InstagramEmbed key={index} url={post} />
                    ))}
                </div>

                <div className="mt-10 text-center">
                    <button
                        onClick={handleOpen}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded-full shadow-sm hover:shadow-md hover:border-pastel-dark transition-all text-gray-700 hover:text-pastel-dark"
                    >
                        <Instagram size={18} />
                        <span>View More on Instagram</span>
                    </button>
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div
                    className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm ${isClosing ? 'animate-fade-out' : 'animate-fade-in'}`}
                    onClick={handleClose}
                >
                    <div
                        className={`bg-white rounded-2xl shadow-xl max-w-sm w-full relative overflow-hidden ${isClosing ? 'animate-scale-out' : 'animate-scale-in'}`}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={handleClose}
                            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                        >
                            <X size={20} />
                        </button>

                        <div className="p-8 text-center">
                            <div className="w-12 h-12 bg-pastel-light/30 rounded-full flex items-center justify-center mx-auto mb-4 text-pastel-dark">
                                <Instagram size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">Visit Profile</h3>
                            <p className="text-gray-600 mb-6 text-sm">Select which account you'd like to visit:</p>

                            <div className="space-y-3">
                                <a
                                    href="https://www.instagram.com/fia.cendekia/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center justify-between p-4 rounded-xl border border-gray-100 hover:border-pastel-dark hover:bg-pastel-light/10 transition-all group"
                                >
                                    <span className="font-medium text-gray-700 group-hover:text-pastel-dark">@fia.cendekia</span>
                                    <ExternalLink size={16} className="text-gray-400 group-hover:text-pastel-dark" />
                                </a>
                                <a
                                    href="https://www.instagram.com/pesporanegara/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center justify-between p-4 rounded-xl border border-gray-100 hover:border-pastel-dark hover:bg-pastel-light/10 transition-all group"
                                >
                                    <span className="font-medium text-gray-700 group-hover:text-pastel-dark">@pesporanegara</span>
                                    <ExternalLink size={16} className="text-gray-400 group-hover:text-pastel-dark" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default InstagramGallery;
