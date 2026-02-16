import React from 'react';

const About = () => {
    return (
        <section id="about" className="py-20 bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
                    About <span className="text-cyan-400">Me</span>
                </h2>
                <div className="flex flex-col md:flex-row items-center justify-center gap-10">
                    <div className="w-full md:w-1/2 p-6 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-700 shadow-xl">
                        <p className="text-gray-300 leading-relaxed mb-4">
                            I am a Software Development Engineer with experience in building scalable backend systems. My expertise lies in <span className="text-cyan-400">Go</span> and <span className="text-cyan-400">Python</span>, and I specialize in Microservices, REST APIs, and gRPC.
                        </p>
                        <p className="text-gray-300 leading-relaxed">
                            I have a strong background in distributed systems and cloud infrastructure (Docker, Kubernetes). I graduated from <span className="text-white font-bold">IIT(ISM), Dhanbad</span> with a Computer Science degree in 2023.
                        </p>
                    </div>
                    <div className="w-full md:w-1/3">
                        <div className="relative w-64 h-64 mx-auto rounded-full overflow-hidden border-4 border-cyan-500 shadow-[0_0_20px_rgba(6,182,212,0.5)]">
                            <img src="https://via.placeholder.com/300" alt="Profile" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
