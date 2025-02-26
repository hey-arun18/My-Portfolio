import React from 'react';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 pt-16">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <img
          src="https://i.imgur.com/abTcO6A.jpg"
          alt="Profile"
          className="w-40 h-40 rounded-full mx-auto mb-8 object-cover border-4 border-white shadow-lg"
        />
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Hi, I'm Arun Kumar Kanakanti
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          A passionate Full Stack Developer | Problem Solver
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="#projects"
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            View My Work
          </a>
          <a
            href="https://drive.google.com/file/d/14bem60stD1JMDBISUuJNiyyudbsqGbZR/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-indigo-600 text-indigo-600 px-6 py-3 rounded-lg hover:bg-indigo-50 transition-colors"
          >
            Download Resume
          </a>
        </div>
        <div className="mt-16 animate-bounce">
          <ArrowDown className="mx-auto text-gray-400" size={24} />
        </div>
      </div>
    </section>
  );
}