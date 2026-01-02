export default {
    content: {
        relative: true,
        transform: (content) => content.replace(/taos:/g, ''),
        files: ["./*.{html,js,ts,jsx,tsx}", "./components/**/*.{html,js,ts,jsx,tsx}"],
    },
    theme: {
        extend: {
            colors: {
                pastel: {
                    DEFAULT: '#FFD1DC',
                    light: '#FFE3EA',
                    dark: '#997D84',
                    text: '#5D4047'
                }
            },
            fontFamily: {
                serif: ['"Playfair Display"', 'serif'],
                sans: ['"Lato"', 'sans-serif'],
            },
            animation: {
                'blob': 'blob 7s infinite',
                'fade-in-up': 'fadeInUp 1s ease-out forwards',
                'zoom-in': 'zoomIn 1s ease-out forwards',
                'gradient-slow': 'gradient 15s ease infinite',
                'fade-in': 'fadeIn 0.3s ease-out forwards',
                'fade-out': 'fadeOut 0.3s ease-in forwards',
                'scale-in': 'scaleIn 0.3s ease-out forwards',
                'scale-out': 'scaleOut 0.3s ease-in forwards',
            },
            keyframes: {
                blob: {
                    '0%': { transform: 'translate(0px, 0px) scale(1)' },
                    '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
                    '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
                    '100%': { transform: 'translate(0px, 0px) scale(1)' },
                },
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                zoomIn: {
                    '0%': { opacity: '0', transform: 'scale(0.95)' },
                    '100%': { opacity: '1', transform: 'scale(1)' },
                },
                gradient: {
                    '0%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                    '100%': { backgroundPosition: '0% 50%' },
                },
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                fadeOut: {
                    '0%': { opacity: '1' },
                    '100%': { opacity: '0' },
                },
                scaleIn: {
                    '0%': { transform: 'scale(0.95)', opacity: '0' },
                    '100%': { transform: 'scale(1)', opacity: '1' },
                },
                scaleOut: {
                    '0%': { transform: 'scale(1)', opacity: '1' },
                    '100%': { transform: 'scale(0.95)', opacity: '0' },
                }
            }
        }
    },
    plugins: [],
}
