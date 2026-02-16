import React from 'react';

const Skills = () => {
    const skills = {
        "Languages": ["Go", "Python"],
        "Backend": ["REST APIs", "gRPC", "Microservices", "Protocol Buffers", "System Design"],
        "Databases": ["PostgreSQL", "MySQL", "Redis"],
        "Frameworks": ["Gin", "Fiber", "FastAPI"],
        "Infra": ["Docker", "Kubernetes"],
        "Observability": ["Prometheus", "Grafana"]
    };

    return (
        <section id="skills" className="py-20 bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
                    Technical <span className="text-cyan-400">Skills</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {Object.entries(skills).map(([category, items], index) => (
                        <div key={index} className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-cyan-500/50 transition-colors shadow-lg">
                            <h3 className="text-xl font-bold text-cyan-400 mb-4">{category}</h3>
                            <div className="flex flex-wrap gap-2">
                                {items.map((skill, idx) => (
                                    <span key={idx} className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm hover:bg-cyan-500/20 hover:text-cyan-300 transition-colors cursor-default">
                                        {skill}
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
