import React from 'react';
import { Send, Rocket, Users, ArrowRight } from 'lucide-react';

export default function Register() {
    return (
        <section id="register" className="py-12 md:py-24 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-full bg-primary/5 -z-10" />

            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="bg-white/80 dark:bg-card-dark/80 backdrop-blur-md p-6 sm:p-10 md:p-14 rounded-3xl shadow-xl relative border border-gray-100 dark:border-gray-800">
                    <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
                        <div>
                            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Join Our Community</span>
                            <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 leading-tight">
                                Ready to Accelerate Your <span className="text-primary italic">Career?</span>
                            </h2>
                            <p className="text-base text-slate-600 dark:text-slate-400 mb-10 leading-relaxed max-w-md">
                                Take the first step toward your dream job. Our expert career counselors are waiting to guide you.
                            </p>

                            <div className="flex flex-col gap-6">
                                {[
                                    { id: '01', text: 'Fill out the enrollment form' },
                                    { id: '02', text: 'Schedule your free consultation' },
                                    { id: '03', text: 'Start your learning journey' }
                                ].map((step, idx) => (
                                    <div key={idx} className="flex items-center gap-4 group">
                                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 border border-primary/20 group-hover:bg-primary transition-all">
                                            <span className="font-black text-lg text-primary group-hover:text-white">{step.id}</span>
                                        </div>
                                        <p className="font-bold text-base text-slate-800 dark:text-white">{step.text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-[#0f172a] rounded-2xl p-6 sm:p-8 md:p-10 shadow-2xl border border-white/10 relative overflow-hidden group w-full">
                            <div className="mb-6 md:mb-8 relative z-10 text-center md:text-left">
                                <h3 className="text-xl md:text-2xl font-black text-white mb-2">Student Enrollment</h3>
                                <p className="text-slate-400 text-[10px] md:text-xs font-bold uppercase tracking-widest">Limited spots available</p>
                            </div>

                            <form className="space-y-5 relative z-10">
                                <div className="space-y-2">
                                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1 block">Full Name</label>
                                    <div className="relative">
                                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-primary">
                                            <Users className="w-5 h-5" />
                                        </div>
                                        <input
                                            type="text"
                                            placeholder="Enter your full name"
                                            className="w-full pl-12 pr-4 py-3.5 rounded-lg bg-slate-900 border border-slate-700/50 focus:border-primary focus:outline-none transition-all text-white placeholder:text-slate-600 font-bold text-sm"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1 block">Email Address</label>
                                    <div className="relative">
                                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-primary">
                                            <Send className="w-5 h-5" />
                                        </div>
                                        <input
                                            type="email"
                                            placeholder="Enter your email address"
                                            className="w-full pl-12 pr-4 py-3.5 rounded-lg bg-slate-900 border border-slate-700/50 focus:border-primary focus:outline-none transition-all text-white placeholder:text-slate-600 font-bold text-sm"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1 block">Program of Interest</label>
                                    <div className="relative">
                                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-primary">
                                            <Rocket className="w-5 h-5" />
                                        </div>
                                        <select defaultValue="" className="w-full pl-12 pr-4 py-3.5 rounded-lg bg-slate-900 border border-slate-700/50 focus:border-primary focus:outline-none transition-all text-white font-bold appearance-none cursor-pointer text-sm">
                                            <option value="" disabled className="text-slate-500">Select a course</option>
                                            <option value="azure" className="bg-slate-900">Azure Fundamentals</option>
                                            <option value="web" className="bg-slate-900">Full Stack Web Dev</option>
                                            <option value="data" className="bg-slate-900">Data Science & AI</option>
                                            <option value="uiux" className="bg-slate-900">UI/UX Masterclass</option>
                                        </select>
                                    </div>
                                </div>

                                <button className="w-full bg-primary hover:bg-white text-white hover:text-slate-900 font-black py-4 mt-4 rounded-lg flex items-center justify-center gap-3 transition-all shadow-lg shadow-primary/20 text-sm uppercase tracking-widest group/btn border border-transparent">
                                    Secure My Spot <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
