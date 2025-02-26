import React from 'react';
import { Code2, Database, Layout, Server } from 'lucide-react';

const skills = [
  {
    category: "Frontend",
    icon: <Layout className="w-6 h-6" />,
    items: ["React", "Tailwind CSS", "HTML5/CSS3"]
  },
  {
    category: "Backend",
    icon: <Server className="w-6 h-6" />,
    items: ["Python"]
  },
  {
    category: "Database",
    icon: <Database className="w-6 h-6" />,
    items: ["MongoDB", "SQL"]
  },
  {
    category: "Frameworks",
    icon: <Server className="w-6 h-6" />,
    items: ["Django"]
  },
  {
    category: "Tools & Others",
    icon: <Code2 className="w-6 h-6" />,
    items: ["Git", "VS Code"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Skills & Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <div key={skill.category} className="p-6 rounded-lg bg-gray-50 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                {skill.icon}
                <h3 className="text-xl font-semibold">{skill.category}</h3>
              </div>
              <ul className="space-y-2">
                {skill.items.map((item) => (
                  <li key={item} className="text-gray-600">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}