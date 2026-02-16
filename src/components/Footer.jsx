import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 border-t border-gray-800 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                    <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                        Portfolio
                    </span>
                    <p className="text-gray-400 text-sm mt-2">
                        © {new Date().getFullYear()} Leela Guru Charan Avvaru. All rights reserved.
                    </p>
                </div>
                <div className="flex space-x-6">
                    <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                        Twitter
                    </a>
                    <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                        GitHub
                    </a>
                    <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                        LinkedIn
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
