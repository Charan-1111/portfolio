import React from 'react';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center bg-gray-900 pt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
                <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 animate-fade-in-up">
                    Hi, I'm <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Leela Guru Charan Avvaru</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl animate-fade-in-up delay-100">
                    Software Development Engineer | Go & Python Developer
                </p>
                <div className="flex space-x-4 animate-fade-in-up delay-200">
                    <a
                        href="#projects"
                        className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg shadow-cyan-500/50"
                    >
                        View Work
                    </a>
                    <a
                        href="#contact"
                        className="bg-transparent border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105"
                    >
                        Contact Me
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
