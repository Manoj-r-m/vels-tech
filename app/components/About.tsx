import React from 'react';
import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';

export default function About() {
    const highlights = [
        "Modern Tech Stack Focus",
        "Small Intake Batches",
        "Personalized Coaching",
        "Agile Learning Approach",
        "Real Startup Projects",
        "Direct Founder Mentorship"
    ];

    return (
    <section id="about" className="py-16 bg-white dark:bg-card-dark/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 md:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-800">
              <Image 
                src="/about.png" 
                alt="Academy" 
                width={500} 
                height={350}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
 
          <div className="order-1 md:order-2">
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">About Our Academy</span>
            <h2 className="text-3xl md:text-4xl font-black mb-6 leading-tight text-slate-900 dark:text-white">
              Leading the Way in <span className="text-gradient">Tech Education</span>
            </h2>
            <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              At Vel's Tech Learning Hub, we believe that education should be practical, accessible, and life-changing. 
              Our new academy bridges the gap between traditional learning and modern industry requirements.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="bg-primary/10 p-1.5 rounded-full">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm font-bold text-slate-800 dark:text-gray-200">{item}</span>
                </div>
              ))}
            </div>

            <button className="bg-primary hover:bg-primary-dark text-white px-8 py-3.5 rounded-lg font-bold text-sm uppercase tracking-wider transition-all shadow-md">
              Discover Our Story
            </button>
          </div>
        </div>
      </div>
    </section>
    );
}
