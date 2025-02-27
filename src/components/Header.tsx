import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Arun Kumar Kanakanti</h1>
        <div className="flex items-center gap-6">
          <a href="#about" className="text-gray-600 hover:text-gray-900">About</a>
          <a href="#skills" className="text-gray-600 hover:text-gray-900">Skills</a>
          <a href="#projects" className="text-gray-600 hover:text-gray-900">Projects</a>
          <div className="flex items-center gap-4">
            <a href="https://github.com/hey-arun18" target="_blank" rel="noopener noreferrer" 
               className="text-gray-600 hover:text-gray-900">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/arun-kumar-kanakanti" target="_blank" rel="noopener noreferrer"
               className="text-gray-600 hover:text-gray-900">
              <Linkedin size={20} />
            </a>
            <a href="mailto:akk23306@gmail.com"
               className="text-gray-600 hover:text-[#9333ea]">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
