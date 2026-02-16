import React from 'react';

const projects = [
    {
        title: 'Distributed Rate Limiting Service',
        description: 'A scalable distributed rate limiting service built with Go and Redis, implementing the Sliding Window Log and Token Bucket algorithms. Designed to handle high-concurrency traffic with minimal latency using gRPC.',
        tags: ['Go', 'Redis', 'gRPC', 'REST', 'Docker'],
        link: '#',
        github: '#'
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
                    My <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Projects</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-gray-800 rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 transform hover:-translate-y-2 group">
                            <div className="h-48 bg-gray-700 relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
                                {/* Placeholder for project image */}
                                <div className="w-full h-full flex items-center justify-center text-gray-500 text-lg font-bold group-hover:scale-110 transition-transform duration-500">
                                    {project.title} Image
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                                <p className="text-gray-400 mb-4 text-sm line-clamp-3">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="px-3 py-1 bg-gray-900 text-cyan-400 text-xs rounded-full border border-gray-700">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex justify-between">
                                    <a href={project.link} className="text-white hover:text-cyan-400 font-medium text-sm transition-colors">View Live</a>
                                    <a href={project.github} className="text-gray-400 hover:text-white font-medium text-sm transition-colors">GitHub</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
