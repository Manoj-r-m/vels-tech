'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Courses', href: '#courses' },
        { name: 'Why Us', href: '#why-us' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 dark:bg-bg-dark/95 backdrop-blur-md py-3 shadow-xl border-b border-gray-100 dark:border-gray-800' : 'bg-transparent py-5'
                }`}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                <div className="flex items-center gap-3 group cursor-pointer">
                    <div className="bg-slate-900 dark:bg-primary/20 p-1.5 rounded-xl shadow-lg shadow-primary/30 group-hover:scale-110 transition-transform duration-300 border border-slate-800 dark:border-primary/30 flex items-center justify-center w-12 h-12 overflow-hidden">
                        <Image
                            src="/vel-logo.png"
                            alt="Vel's Tech Logo"
                            width={40}
                            height={40}
                            className="object-contain w-full h-full"
                            priority
                        />
                    </div>
                    <span className="text-3xl font-black tracking-tighter text-slate-900 dark:text-white group-hover:text-primary transition-colors duration-300">
                        Vel's<span className="text-primary group-hover:text-slate-900 dark:group-hover:text-white transition-colors duration-300">Tech</span>
                    </span>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-10">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-black text-slate-950 dark:text-white hover:text-primary dark:hover:text-primary transition-all duration-200 uppercase tracking-widest"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="#register"
                        className="bg-primary text-white px-7 py-3 rounded-xl font-bold hover:bg-primary-dark transition-all duration-300 shadow-xl shadow-primary/25 hover-lift"
                    >
                        Enroll Now
                    </a>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden p-2 text-slate-900 dark:text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-[#0b1120] animate-fade-in shadow-2xl border-b border-gray-800 z-50">
                    <nav className="flex flex-col p-8 gap-6">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-xl font-bold text-slate-800 dark:text-white py-2 border-b border-gray-100 dark:border-gray-800"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href="#register"
                            className="bg-primary text-white px-6 py-4 rounded-2xl font-bold text-center mt-4 text-lg shadow-lg"
                            onClick={() => setIsOpen(false)}
                        >
                            Enroll Now
                        </a>
                    </nav>
                </div>
            )}
        </header>
    );
}
