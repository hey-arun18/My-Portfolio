import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';

const educationData = [
  {
    degree: "Bachelor of Technology in Artificial intelligence & Data Science",
    institution: "ANNAMACHARYA INSTITUTE OF TECHNOLOGY & SCIENCES",
    duration: "2021 - 2025",
    percentage: "75%"
  },
  {
    degree: "Intermediate Education (MPC)",
    institution: "SRI CHAITANYA JUNIOR COLLEGE",
    duration: "2019 - 2021",
    percentage: "96%"
  },
  {
    degree: "Secondary School Education",
    institution: "SIDDARTHA (EM/TM) SCHOOL",
    duration: "2018 - 2019",
    CGPA: "9.8"
  }
];

export default function Education() {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Education</h2>
        <div className="space-y-8">
          {educationData.map((item, index) => (
            <div key={index} className="bg-[#9333ea]/10 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-[#9333ea] rounded-full p-3 text-white">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{item.degree}</h3>
                  <div className="flex items-center gap-2 text-[#9333ea] mt-1">
                    <span className="font-medium">{item.institution}</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-500 mt-1">
                    <Calendar size={16} />
                    <span>{item.duration}</span>
                  </div>
                  <div className="mt-3 text-gray-700">
                    {item.CGPA && (
                      <div className="font-medium">
                        CGPA: <span className="text-[#9333ea]">{item.CGPA}</span>
                      </div>
                    )}
                    {item.percentage && (
                      <div className="font-medium">
                        Percentage: <span className="text-[#9333ea]">{item.percentage}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
