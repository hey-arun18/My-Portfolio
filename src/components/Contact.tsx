import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <Mail className="w-8 h-8 mx-auto mb-4 text-indigo-600" />
            <h3 className="text-lg font-semibold mb-2">Email</h3>
            <p className="text-gray-600">akk23306@gmail.com.com</p>
          </div>
          <div className="text-center">
            <Phone className="w-8 h-8 mx-auto mb-4 text-indigo-600" />
            <h3 className="text-lg font-semibold mb-2">Phone</h3>
            <p className="text-gray-600">+91 9121421446</p>
          </div>
          <div className="text-center">
            <MapPin className="w-8 h-8 mx-auto mb-4 text-indigo-600" />
            <h3 className="text-lg font-semibold mb-2">Location</h3>
            <p className="text-gray-600">Madanapalle, AP</p>
          </div>
        </div>
      </div>
    </section>
  );
}