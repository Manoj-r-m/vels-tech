import React from 'react';
import Image from 'next/image';
import { ArrowRight, Star, Users, Briefcase } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative min-h-[80vh] flex items-center pt-28 md:pt-36 pb-12 md:pb-20 overflow-hidden">
            {/* Background blobs */}
            <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[30%] h-[30%] bg-accent/5 rounded-full blur-3xl -z-10" />

            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                <div className="animate-fade-in z-10 relative">
                    <div className="inline-flex items-center gap-2 bg-white dark:bg-card-dark px-3 py-1.5 rounded-full shadow-sm border border-gray-100 dark:border-gray-800 mb-6 font-semibold text-xs uppercase tracking-wider text-primary">
                        <Star className="w-3.5 h-3.5 text-accent fill-accent" />
                        <span>Transforming Careers Since 2026</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-black leading-tight mb-6 text-slate-900 dark:text-white tracking-tight">
                        Empower Your Future with <span className="text-gradient">Vel's Tech</span>
                    </h1>

                    <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 mb-8 max-w-lg leading-relaxed">
                        Unlock your potential with industry-leading courses in technology and innovation.
                        Join thousands of students and start your journey today.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 mb-10 w-full">
                        <a
                            href="#courses"
                            className="w-full sm:w-auto px-6 py-3.5 bg-primary text-white rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-primary-dark transition-all shadow-md shadow-primary/20 text-sm"
                        >
                            Explore Courses <ArrowRight className="w-4 h-4" />
                        </a>
                        <a
                            href="#about"
                            className="w-full sm:w-auto px-6 py-3.5 border border-slate-200 dark:border-slate-800 hover:border-primary/40 rounded-lg font-bold flex items-center justify-center transition-all text-sm text-slate-700 dark:text-slate-300"
                        >
                            Learn More
                        </a>
                    </div>

                </div>

                <div className="relative animate-fade-in hidden md:block">
                    <div className="relative rounded-2xl overflow-hidden shadow-xl z-10 border border-gray-100 dark:border-gray-800">
                        <Image
                            src="/hero.png"
                            alt="Vel's Tech Learning Hub"
                            width={600}
                            height={450}
                            className="w-full h-auto object-cover"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
