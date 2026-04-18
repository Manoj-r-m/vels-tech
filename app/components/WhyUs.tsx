import React from 'react';
import { Award, Shield, Zap, Globe, Cpu, Headphones } from 'lucide-react';

const features = [
    {
        icon: Award,
        title: "Modern Curriculum",
        description: "Course materials built from the ground up using the latest industry standards."
    },
    {
        icon: Zap,
        title: "Fast-Track Learning",
        description: "Intensive, focused courses designed to get you job-ready efficiently."
    },
    {
        icon: Globe,
        title: "Community Driven",
        description: "Join a tight-knit, growing network of passionate developers and founders."
    },
    {
        icon: Cpu,
        title: "Hands-on projects",
        description: "Build a professional, real-world portfolio you can show to employers."
    },
    {
        icon: Shield,
        title: "Career Coaching",
        description: "Dedicated resume building, interview prep, and placement assistance."
    },
    {
        icon: Headphones,
        title: "Direct Access",
        description: "Get direct 1-on-1 access to instructors and mentors when you need help."
    }
];

export default function WhyUs() {
    return (
    <section id="why-us" className="py-12 md:py-20 bg-white dark:bg-card-dark/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Why Choose Us</span>
          <h2 className="text-3xl md:text-4xl font-black mb-6 text-slate-900 dark:text-white">Revolutionizing <span className="text-gradient">How You Learn</span></h2>
          <p className="text-sm md:text-base text-slate-600 dark:text-slate-400">
            We provide a unique learning experience through curated curriculum and personalized attention.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white dark:bg-card-dark p-8 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl transition-all duration-300 group">
              <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary transition-all duration-300">
                <feature.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg font-black text-slate-900 dark:text-white mb-3">{feature.title}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    );
}
