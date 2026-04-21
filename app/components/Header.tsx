'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { Logo } from './Logo';

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
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${isScrolled 
                ? 'bg-white/95 dark:bg-bg-dark/95 backdrop-blur-md py-3 shadow-lg border-slate-100 dark:border-slate-800' 
                : 'bg-white/50 dark:bg-bg-dark/50 backdrop-blur-sm py-4 border-slate-200/50 dark:border-slate-800/50 shadow-sm'
            }`}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                <Logo />

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-6 xl:gap-10">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-[10px] xl:text-xs font-black text-slate-950 dark:text-white hover:text-primary dark:hover:text-primary transition-all duration-200 uppercase tracking-widest whitespace-nowrap"
                        >
                            {link.name}
                        </a>
                    ))}
                    <div className="flex items-center gap-4 border-l border-gray-100 dark:border-gray-800 pl-6 xl:pl-10">
                        <a
                            href="#register"
                            className="bg-primary text-white px-5 xl:px-7 py-2.5 xl:py-3 rounded-xl font-bold hover:bg-primary-dark transition-all duration-300 shadow-xl shadow-primary/25 hover-lift text-xs"
                            suppressHydrationWarning
                        >
                            Enroll Now
                        </a>
                        <ThemeToggle />
                    </div>
                </nav>

                {/* Mobile Menu Toggle & Theme Toggle */}
                <div className="flex items-center gap-2 lg:hidden">
                    <ThemeToggle />
                    <button
                        className="p-2 text-slate-900 dark:text-white"
                        onClick={() => setIsOpen(!isOpen)}
                        suppressHydrationWarning
                    >
                        {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="lg:hidden absolute top-full left-0 right-0 bg-white dark:bg-[#0b1120] animate-fade-in shadow-2xl border-b border-gray-100 dark:border-gray-800 z-50 max-h-[80vh] overflow-y-auto">
                    <nav className="flex flex-col p-6 gap-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-lg font-bold text-slate-800 dark:text-white py-3 border-b border-gray-100 dark:border-gray-800/50 hover:text-primary dark:hover:text-primary transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href="#register"
                            className="bg-primary text-white px-6 py-4 rounded-xl font-bold text-center mt-2 text-lg shadow-lg hover:bg-primary-dark transition-colors"
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
