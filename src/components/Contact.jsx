import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-gray-800">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                    Let's <span className="text-cyan-400">Connect</span>
                </h2>
                <div className="text-xl text-gray-300 mb-8 space-y-2">
                    <p>Have a project in mind or just want to discuss tech?</p>
                    <p>
                        <span className="text-cyan-400">Email:</span> charanavvaru11@gmail.com
                    </p>
                    <p>
                        <span className="text-cyan-400">Phone:</span> +91 90149 20057
                    </p>
                    <div className="flex justify-center space-x-6 mt-4">
                        <a href="https://linkedin.com/in/leelagurucharan" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-white transition-colors">
                            LinkedIn
                        </a>
                        {/* Add other social links if available */}
                    </div>
                </div>

                <form className="max-w-lg mx-auto space-y-4 text-left">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
                        <input
                            type="text"
                            id="name"
                            className="mt-1 block w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all"
                            placeholder="Your Name"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="mt-1 block w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all"
                            placeholder="your@email.com"
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
                        <textarea
                            id="message"
                            rows="4"
                            className="mt-1 block w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all resize-none"
                            placeholder="How can I help you?"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-all transform hover:scale-105 shadow-lg shadow-cyan-500/50"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
