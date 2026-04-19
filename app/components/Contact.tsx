import { Mail, Phone, MapPin, BookOpen } from 'lucide-react';

const FacebookIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
);

const TwitterIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-1 2.17-2.09 3.42a8.18 8.18 0 0 1-7.83 3.36c-2.71-.1-4.14-1.25-4.14-1.25s1.43 8.84 10.12 9.07c-3.15 1.54-6.85 2.11-10.12 1.54C6.27 21.3 10.3 22 14.12 22 19.8 22 24 17.8 24 12.12c0-.3-.02-.6-.05-.9 1.54-1.14 2.05-2.22 2.05-2.22z"></path></svg>
);

const InstagramIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);

const LinkedinIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

export default function Contact() {
    const currentYear = new Date().getFullYear();

    return (
        <footer id="contact" className="bg-bg-dark text-white pt-16 pb-8 overflow-hidden relative">
            <div className="max-w-6xl mx-auto px-6 z-10 relative">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 mb-10 md:mb-12">
                    <div className="col-span-1 lg:col-span-1">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="bg-primary p-1.5 rounded-lg text-white">
                                <BookOpen className="w-5 h-5" />
                            </div>
                            <span className="text-xl font-black tracking-tight">Vel's<span className="text-primary">Tech</span></span>
                        </div>
                        <p className="text-gray-400 mb-6 max-w-xs text-sm leading-relaxed">
                            Empowering the next generation of tech leaders through quality education and mentorship.
                        </p>
                        <div className="flex gap-3">
                            {[FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon].map((Icon, idx) => (
                                <a key={idx} href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-all">
                                    <Icon />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-base font-black mb-6 uppercase tracking-widest text-primary">Quick Links</h4>
                        <ul className="space-y-3 text-gray-400 text-sm">
                            <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
                            <li><a href="#courses" className="hover:text-primary transition-colors">Our Courses</a></li>
                            <li><a href="#why-us" className="hover:text-primary transition-colors">Why Choose Us</a></li>
                            <li><a href="#register" className="hover:text-primary transition-colors">Enroll Today</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-base font-black mb-6 uppercase tracking-widest text-primary">Legal</h4>
                        <ul className="space-y-3 text-gray-400 text-sm">
                            <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Cookie Policy</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-base font-black mb-6 uppercase tracking-widest text-primary">Contact</h4>
                        <ul className="space-y-4">
                            <li className="flex gap-3 items-start">
                                <Mail className="w-4 h-4 text-primary mt-1" />
                                <div>
                                    <span className="block text-[10px] text-gray-500 font-bold uppercase tracking-widest">Email</span>
                                    <span className="text-sm font-bold">abc@gmai.com</span>
                                </div>
                            </li>
                            <li className="flex gap-3 items-start">
                                <Phone className="w-4 h-4 text-primary mt-1" />
                                <div>
                                    <span className="block text-[10px] text-gray-500 font-bold uppercase tracking-widest">Call</span>
                                    <span className="text-sm font-bold">+91 9952253000</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-center md:text-left text-xs">
                    <p>© {currentYear} Vel's Tech Learning Hub. All rights reserved.</p>
                    <div className="flex gap-6 justify-center md:justify-end w-full md:w-auto">
                        <span className="hover:text-white transition-colors cursor-pointer">Security</span>
                        <span className="hover:text-white transition-colors cursor-pointer">Status</span>
                    </div>
                </div>
            </div>

            {/* Decorative Blur */}
            <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[80%] h-[40%] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
        </footer>
    );
}
