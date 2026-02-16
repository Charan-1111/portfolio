import React from 'react';

const Experience = () => {
    const experiences = [
        {
            company: "Jio Platforms Ltd",
            location: "Navi Mumbai, Maharastra",
            role: "Software Development Engineer",
            period: "Aug 2023 – Present",
            achievements: [
                "Designed and launched AirSync, a production service enabling over-the-air React Native bundle updates via GCP, eliminating app-store redeployments and reducing release cycles from 2–3 days to under 10 minutes for MyJio, JFS, and 5+ other apps.",
                "Led migration of internal services from REST to gRPC in Go, reducing payload sizes and cutting inter-service latency by ~25–35%, while improving schema enforcement and backward compatibility via Protobuf versioning.",
                "Designed and developed a scalable notification dashboard backend in Go, applying microservice and system design best practices to support notification ingestion and retrieval for 2M+ users per day.",
                "Architected a modular rule engine in Go to offload data-heavy logic from edge services, reducing request processing time by ~60%+ and improving system scalability under peak load.",
                "Built and optimized Go-based backend services across multiple products, including secure authentication and payment-related modules for JioWallet (pre-production) and rule engine, auth, and booking systems for Littlenest (live), reducing API latency by ~30% and supporting thousands of monthly transactions in production.",
                "Integrated structured logging, metrics, and alerts for notification workflows, enabling p95 latency tracking and faster detection of production issues."
            ]
        },
        {
            company: "Truminds Software Systems",
            location: "Bengaluru, Karnataka",
            role: "Internship",
            period: "May 2022 – Jul 2022",
            achievements: [
                "Built PySpark-based regression and recommendation models (collaborative filtering) on large datasets, achieving 85%+ prediction accuracy through effective preprocessing and SparkSQL-based analysis."
            ]
        }
    ];

    return (
        <section id="experience" className="py-20 bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
                    Professional <span className="text-cyan-400">Experience</span>
                </h2>
                <div className="space-y-12">
                    {experiences.map((exp, index) => (
                        <div key={index} className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700 hover:border-cyan-500/30 transition-all shadow-xl">
                            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                                <div>
                                    <h3 className="text-2xl font-bold text-white">{exp.company}</h3>
                                    <p className="text-cyan-400">{exp.role}</p>
                                </div>
                                <div className="text-gray-400 mt-2 md:mt-0 text-right">
                                    <p>{exp.period}</p>
                                    <p className="text-sm">{exp.location}</p>
                                </div>
                            </div>
                            <ul className="space-y-3">
                                {exp.achievements.map((item, idx) => (
                                    <li key={idx} className="flex items-start text-gray-300">
                                        <span className="text-cyan-500 mr-2 mt-1">▹</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
