import React from 'react';
import Image from 'next/image';

export function Logo({ className = "" }: { className?: string }) {
    return (
        <div className={`flex items-center gap-2 group cursor-pointer ${className}`}>
            <div className="relative w-11 h-11 flex items-center justify-center">
                {/* Modern Hover Effect & Solid Blue Background */}
                <div className="absolute inset-0 bg-primary rounded-full group-hover:scale-110 transition-all duration-300 shadow-md" />
                
                <div className="relative z-10 w-8 h-8 rounded-full overflow-hidden flex items-center justify-center">
                    <Image 
                        src="/logo-v3.png" 
                        alt="BTB Logo" 
                        width={32} 
                        height={32}
                        className="object-cover w-full h-full"
                    />
                </div>
                
                {/* Premium Glow Effect */}
                <div className="absolute -inset-1 bg-primary/20 blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
            
            <span className="text-2xl font-black tracking-tighter text-slate-900 dark:text-white transition-colors duration-300">
                Byte<span className="text-primary">TheBasics</span>
            </span>
        </div>
    );
}
