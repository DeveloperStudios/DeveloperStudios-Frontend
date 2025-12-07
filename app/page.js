"use client"

import React, { useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import { 
  Rocket, 
  TrendingUp, 
  Sparkles, 
  Award, 
  Layers, 
  Menu, 
  X, 
  ArrowRight, 
  CheckCircle, 
  Users, 
  Code, 
  Zap, 
  BarChart3, 
  Bell, 
  Box, 
  Globe, 
  Bot, 
  Aperture,
  Star,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Instagram,
  Facebook,
  SquareCheckBig,
  LayoutDashboard,
  MessageSquareText,
  ClipboardList,
  Target,
} from 'lucide-react';

// --- Branding Constants ---
const BRAND_COLOR = 'text-brand-red';
const BRAND_BG = 'bg-red-700';
const BRAND_BORDER = 'border-brand-red';
const DARK_BG = 'bg-brand-dark'; // #141414 (from previous config)
const LIGHT_BG = 'bg-brand-light'; // #F8F8F8 (from previous config)
const ACCENT_RED = '#E91E63';




// --- Data Structures ---

const portfolioItems = [
  { title: 'Rogers Telecom', href: 'https://www.rogers.com/', image: './rogers.png' },
  { title: 'Telus Digital', href: 'https://www.telus.com/en/', image: './telus.png' },
  { title: 'Distributel ISP', href: 'https://www.distributel.ca', image: './ISP.png' },
  { title: 'Holibrands', href: 'https://holibrands.com', image: './Holibrands.png' },
  { title: 'Overseas Education', href: 'https://www.overseeducation.com', image: './overseas.png' },
  { title: 'Amazon Seller Affiliates', href: 'https://sell.amazon.in/landing/join-ates-selleraffiliates-ecommerce-partner', image: './amazon.png' },
  { title: 'Salesforce Agentforce', href: 'https://www.salesforce.com/in/agentforce/', image: './agentforce.png' },
];
const teamMembers = [
    { name: "Nizam", role: "CEO", image: "./Nizam.png" },
    { name: "Ishwar", role: "CFO", image: "./Ishwar.png" },
];
const stats = [
    { value: '70+', label: 'Projects Delivered', unit: '' },
    { value: '95%', label: 'Client Satisfaction', unit: '' },
    { value: '10X', label: 'Average Growth Rate', unit: '' },
];

const coreFeatures = [
    { icon: Layers, title: 'Layered Security', description: 'Advanced protocols ensuring data integrity and customer trust.' },
    { icon: CheckCircle, title: 'Quality Control', description: 'Rigorous checks on every piece of software and strategy delivered.' },
    { icon: Users, title: 'Customer Service', description: 'Dedicated support channel for immediate resolution of any issue.' },
    { icon: Bot, title: 'AI Automation', description: 'Smart agents deployed to maintain workflows and handle high-volume tasks.' },
];

const serviceFeatures = [
  { icon: Code, title: 'Web & Software Development', description: 'Full-stack applications, custom software, and mobile development engineered for performance.' },
  { icon: Users, title: 'Lead Generation (B2B & B2C)', description: 'Targeted prospecting and data-driven lead generation to fill your pipeline with qualified buyers.' },
  { icon: Bot, title: 'AI Automation & Agents', description: 'Deploy intelligent AI chatbots and autonomous agents to automate support and workflows 24/7.' },
  { icon: Aperture, title: 'Social Media Management', description: 'Content creation, scheduling, growth, and end-to-end social presence building for your brand.' },
  { icon: Box, title: 'API Integrations', description: 'Seamlessly integrating third-party tools to streamline and unify your business operations.' },
];

const scrollingLogos = [
  { name: 'Rogers', src: './rogers.svg', showText: true },
  { name: 'Telus', src: './TELUS_Logo.svg', showText: false },
  { name: 'Distributel', src: './logo.svg', showText: false },
  { name: 'Holibrands', src: './logo-holibrands.svg', showText: false },
  { name: 'OverseasEdu', src: './overseas.svg', showText: false },
  { name: 'Amazon', src: './amazon.svg', showText: false },
  { name: 'Salesforce', src: './salesforce-with-type-logo.svg', showText: false },
];


// Reusable Social Media Icons Component
const SocialIcons = ({ color = 'text-gray-600' }) => (
  <div className={`flex items-center gap-4 ${color}`}>
      <a href="https://www.linkedin.com/company/developer-studios?trk=blended-typeahead" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={`hover:${BRAND_COLOR} transition`}>
        <Linkedin size={20} />
      </a>
      <a href="https://github.com/Developerstudios" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className={`hover:${BRAND_COLOR} transition`}>
        <Github size={20} />
      </a>
      <a href="https://www.instagram.com/developerstudios.in?igsh=NjhhcXp6aG5ld2ow" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className={`hover:${BRAND_COLOR} transition`}>
        <Instagram size={20} />
      </a>
      <a href="https://www.facebook.com/profile.php?id=100094521793367" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className={`hover:${BRAND_COLOR} transition`}>
        <Facebook size={20} />
      </a>
  </div>
);


// --- Components ---

const ContactForm = () => {
    const [status, setStatus] = useState(""); // sending | disabled | success | error | ""
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Placeholder for form submission logic
        setStatus("sending");
        await new Promise(resolve => setTimeout(resolve, 1500)); 
        toast.success("Message sent successfully! (Demo)");
        setFormData({ name: "", email: "", message: "" });
        setStatus("disabled");
        setTimeout(() => setStatus(""), 120000);
    };

    return (
        <form onSubmit={handleSubmit} className=" p-6 sm:p-10 border border-gray-200 rounded-xl bg-white shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-black">Start the 10x Growth Conversation</h3>
            <div className="space-y-4">
                <input
                    type="text" name="name" placeholder="Your Name" required
                    value={formData.name} onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg text-black placeholder-gray-500 focus:ring-2 focus:ring-brand-red transition-colors"
                />
                <input
                    type="email" name="email" placeholder="Your Business Email" required
                    value={formData.email} onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg text-black placeholder-gray-500 focus:ring-2 focus:ring-brand-red transition-colors"
                />
                <textarea
                    name="message" placeholder="Tell us about your project/goal..." rows="4" required
                    value={formData.message} onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg text-black placeholder-gray-500 focus:ring-2 focus:ring-brand-red transition-colors"
                ></textarea>

                <button
                    type="submit"
                    disabled={status === "sending" || status === "disabled"}
                    className={`cursor-pointer w-full text-white py-3 rounded-xl flex items-center justify-center gap-2 font-semibold transition-all ${
                        status === "sending" || status === "disabled"
                            ? "bg-gray-500 cursor-not-allowed"
                            : `${BRAND_BG} hover:shadow-xl`
                    }`}
                >
                    {status === "sending" ? "Sending..." : status === "disabled" ? "Please wait..." : "Send Message"}
                    <ArrowRight size={18} />
                </button>
            </div>
            {status === "success" && (<p className="mt-4 text-green-600 font-semibold flex items-center gap-2"> <CheckCircle size={18} /> Thank you!</p>)}
            {status === "error" && (<p className="mt-4 text-red-600 font-semibold">Error sending message.</p>)}
        </form>
    );
};

const Header = ({ mobileMenuOpen, setMobileMenuOpen }) => (
    <header className="px-6 py-4 bg-white/95 backdrop-blur-md sticky top-0 z-40 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
            {/* Logo + Brand */}
            <div className="flex items-center gap-3">
                {/* Placeholder for the new logo - RED, BLACK, WHITE */}
                <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-brand-red shadow-sm  flex items-center justify-center">
                   <img src="./logo.png"/>
                </div>
                <span className="text-2xl font-extrabold tracking-tight text-black">
                    Developer<span className={BRAND_COLOR}>Studios</span>
                </span>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-10">
                <a href="#hero" className="text-gray-700 text-sm hover:text-black transition">Home</a>
                <a href="#features" className="text-gray-700 text-sm hover:text-black transition">Features</a>
                <a href="#services" className="text-gray-700 text-sm hover:text-black transition">Services</a>
                <a href="#projects" className="text-gray-700 text-sm hover:text-black transition">Projects</a>
                <a href="#contact" className="text-gray-700 text-sm hover:text-black transition">Contact</a>
            </nav>

            {/* CTA button */}
            <a href="https://calendly.com/raoishwar9/30min" target="_blank" rel="noopener noreferrer" className="hidden md:flex items-center no-underline">
                <button className={`cursor-pointer px-6 text-sm py-2.5 rounded-full font-medium text-white bg-black shadow-md hover:opacity-90 transition ${BRAND_BG} flex items-center gap-2`}>
                    Get Started <ArrowRight size={17} />
                </button>
            </a>

            {/* Mobile Menu Button */}
            <button 
                className="md:hidden p-2 rounded-lg text-black"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
                {mobileMenuOpen ? <X /> : <Menu />}
            </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
            <div className="md:hidden mt-4 bg-white/95 backdrop-blur-xl p-5 shadow-xl rounded-xl space-y-3">
                <a href="#hero" className="block py-2 text-gray-700 hover:text-black">Home</a>
                <a href="#features" className="block py-2 text-gray-700 hover:text-black">Features</a>
                <a href="#services" className="block py-2 text-gray-700 hover:text-black">Services</a>
                <a href="#projects" className="block py-2 text-gray-700 hover:text-black">Projects</a>
                <a href="#contact" className="block py-2 text-gray-700 hover:text-black">Contact</a>
                <a href="https://calendly.com/raoishwar9/30min" target="_blank" rel="noopener noreferrer" className="no-underline block">
                    <button className={`cursor-pointer w-full mt-3 px-5 py-2.5 rounded-full text-white font-medium shadow-md hover:opacity-90 ${BRAND_BG} flex items-center justify-center gap-2`}>
                        Get Started <ArrowRight size={17} />
                    </button>
                </a>
            </div>
        )}
    </header>
);

const HeroSection = () => (
    <section id="hero" className={`relative ${LIGHT_BG} overflow-hidden pt-0`}>
        {/* Full-width Hero Container with Background Image */}
        <div className="relative w-full h-[600px] md:h-[700px] overflow-hidden rounded-b-3xl">
            <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ 
                    backgroundImage: `url('./bg.jpg')`,
                }}
            >
                <div className="absolute inset-0 bg-black/50 backdrop-brightness-50"></div>
            </div>

            {/* Hero Content */}
            <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center px-6">
                <div className="text-white ">
                    <p className="text-sm tracking-widest uppercase text-gray-300 mb-2">
                        Your Trusted Partner in Digital Innovation
                    </p>

                    <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
                        From Concept to Creation <br /> Your Vision, Our Code
                    </h1>

                    {/* Buttons */}
                    <div className="flex gap-4 mb-8">
                        <a href="https://calendly.com/raoishwar9/30min" target="_blank" rel="noopener noreferrer" className="no-underline">
                            <button className={`cursor-pointer px-6 py-3 rounded-full text-white font-medium ${BRAND_BG} hover:opacity-90 transition flex items-center gap-2`}>
                                Get a Quote
                            </button>
                        </a>
                        <button className="cursor-pointer px-6 py-3 rounded-full border border-white text-white font-medium hover:bg-white/10 transition">
                            Book a Demo
                        </button>
                    </div>

                    {/* Small Links */}
                    <div className="flex gap-4 text-sm text-gray-300">
                        <a href="#services" className="hover:text-brand-red transition">Our Services</a>
                        <span className="opacity-50">|</span>
                        <a href="#projects" className="hover:text-brand-red transition">Our Projects</a>
                    </div>

                </div>
            </div>
        </div>

        {/* Stats */}
        <div className="max-w-7xl mx-auto -mt-20 relative z-20 grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
            {stats.map((stat, index) => (
                <div key={index} className="p-8 rounded-xl bg-white shadow-2xl border border-gray-100 text-center">
                    <p className={`text-4xl font-extrabold text-black mb-1`}>
                        {stat.value}{stat.unit}
                    </p>
                    <p className="text-md text-gray-600 uppercase tracking-wider">{stat.label}</p>
                </div>
            ))}
        </div>
    </section>
);


const AboutSection = () => (
    <section id="about" className={`px-6 py-24 ${LIGHT_BG}`}>
        <div className="max-w-7xl mx-auto text-center">
            <span className={`text-sm tracking-wide uppercase ${BRAND_COLOR} block mb-4`}>
                About Us
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-6">
                Meet the Leadership
            </h2>
            <p className="text-gray-700 max-w-3xl mx-auto text-lg leading-relaxed mb-16">
                Founded to bridge the gap between technology and revenue, we are committed to 
                being your dedicated **growth partners**. With a global footprint and 70+ high-impact 
                projects delivered, our leadership drives a culture of excellence and innovation.
            </p>

            <div className="grid sm:grid-cols-2 gap-12 max-w-xl mx-auto">
                {teamMembers.map((member, index) => (
                    <div key={index} className="flex flex-col items-center p-8 bg-white rounded-xl shadow-lg border border-gray-200">
                        <div className="rounded-full overflow-hidden w-40 h-40 ring-4 ring-brand-red/50 shadow-xl mb-4">
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <h3 className="text-2xl font-bold text-black">{member.name}</h3>
                        <p className="text-brand-red text-md font-semibold">{member.role}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);
const CoreFeaturesSection = () => (
    <section id="features" className={`px-6 py-24 ${LIGHT_BG} pt-40`}>
        <div className="max-w-7xl mx-auto">
            {/* Split Content Section */}
            <div className="grid md:grid-cols-2 gap-12 mb-20 items-start">
                <div>
                    <h2 className="text-4xl font-extrabold text-black mb-4 max-w-sm">
                        Quality you can trust. Results you can rely on.
                    </h2>
                </div>
                <div className="text-gray-700 text-lg leading-relaxed pt-2">
                    <p>
                        Every product we build goes through strict quality checks, seamless performance testing, 
                        and unmatched attention to detail — ensuring long-lasting, high-performing digital solutions 
                        that elevate your business.
                    </p>
                </div>
            </div>

            {/* Logo Row */}
            <div className="flex flex-wrap justify-center gap-6 py-12 border-t border-b border-gray-300 bg-white/70 rounded-xl ">
                <div className="p-4 bg-gray-100 rounded-full w-24 h-24 flex items-center justify-center shadow-inner">
                    <img src="./rogers.svg" alt="Rogers" className="h-20 w-auto opacity-70" />
                </div>
                <div className="p-4 bg-gray-100 rounded-full w-24 h-24 flex items-center justify-center shadow-inner">
                    <img src="./TELUS_Logo.svg" alt="Telus" className="h-28 w-auto opacity-70" />
                </div>
                <div className="p-4 bg-gray-100 rounded-full w-24 h-24 flex items-center justify-center shadow-inner">
                    <img src="./logo.svg" alt="Distributel" className="h-28 w-auto opacity-70" />
                </div>
                <div className="p-4 bg-gray-100 rounded-full w-24 h-24 flex items-center justify-center shadow-inner">
                    <img src="./amazon.svg" alt="Amazon" className="h-28 w-auto opacity-70" />
                </div>
                <div className="p-4 bg-gray-100 rounded-full w-24 h-24 flex items-center justify-center shadow-inner">
                    <img src="./salesforce-with-type-logo.svg" alt="Salesforce" className="h-20 w-auto opacity-70" />
                </div>

                <div className="p-4 bg-gray-100 rounded-full w-24 h-24 flex items-center justify-center shadow-inner">
                    <img src="./logo-holibrands.svg" alt="Holibrands" className="h-20 w-auto opacity-70" />
                </div>

                <div className="p-4 bg-gray-100 rounded-full w-24 h-24 flex items-center justify-center shadow-inner">
                    <img src="./overseas.svg" alt="Overseas" className="h-20 w-auto opacity-70" />
                </div>
            </div>
            
            {/* Secondary Feature Grid */}
            <div className="text-center mt-20 mb-16">
                <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-4">
                    Premium digital solutions, built with precision.
                </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {coreFeatures.map((feature, index) => (
                    <div key={index} className="p-6 bg-white rounded-xl shadow-lg border border-gray-200">
                        <div className="flex items-center mb-4">
                            <feature.icon size={24} className={`${BRAND_COLOR} mr-3`} />
                            <h3 className="text-lg font-bold text-black">{feature.title}</h3>
                        </div>
                        <p className="text-gray-600 text-sm">{feature.description}</p>
                    </div>
                ))}
            </div>

        </div>
    </section>
);
const ServicesSection = () => (
    <section id="services" className={`px-6 py-24 ${LIGHT_BG}`}>
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <span className={`text-sm uppercase tracking-wide ${BRAND_COLOR} block mb-4`}>
                    Our Services
                </span>
                <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-4 leading-tight">
                    Scalable Solutions for Every <br /> Stage of Your Business
                </h2>
                <p className="text-gray-700 text-lg max-w-2xl mx-auto">
                    From design to development, we build robust systems that boost revenue, streamline 
                    operations, and accelerate business growth.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                {serviceFeatures.map((feature, index) => (
                    <div key={index} className="bg-white rounded-xl p-8 shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                        <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-6 ${BRAND_BG} shadow-lg`}>
                            <feature.icon className="text-white" size={28} />
                        </div>
                        <h3 className="text-2xl font-bold text-black mb-3">{feature.title}</h3>
                        <p className="text-gray-700 leading-relaxed text-[15.5px]">
                            {feature.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);


const PortfolioSection = () => (
    <section id="projects" className={`py-20 px-6 ${DARK_BG} text-white`}>
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <span className={`text-sm font-semibold text-black ${BRAND_COLOR} mb-3 block`}>
                    Our Portfolio
                </span>
                <h2 className="text-4xl  text-black md:text-5xl font-extrabold mb-4">
                    Featured Client Successes
                </h2>
                <p className="text-gray-400 max-w-xl mx-auto">
                    Click to explore the live sites and results of our high-impact projects.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {portfolioItems.map((item, index) => (
                    <a 
                        key={index}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative h-64 rounded-xl overflow-hidden group cursor-pointer transition-transform hover:scale-[1.02] shadow-xl"
                    >
                        {/* Background Image */}
                        <div 
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                            style={{ backgroundImage: `url(${item.image})` }}
                        ></div>

                        {/* Dark Hover Overlay */}
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/70 transition-all duration-500"></div>

                        {/* Content */}
                        <div className="absolute bottom-0 left-0 w-full px-6 py-6 transition-all duration-500 ease-out">
                            <h3 className="text-white text-2xl font-bold mb-1">{item.title}</h3>
                            <p className="text-white text-sm opacity-80">
                                {item.href.replace(/^https?:\/\//, '').replace(/\/$/, '')}
                            </p>
                        </div>

                        {/* Button Top-Right */}
                        <div className="absolute top-4 right-4 w-10 h-10 bg-white/30 rounded-lg backdrop-blur-sm flex items-center justify-center border border-white/20">
                            <ArrowRight size={20} className="stroke-white" />
                        </div>
                    </a>
                ))}
            </div>
        </div>
    </section>
);

const TrustedBySection = () => (
    <section className="py-12 overflow-hidden bg-gray-50">
        <p className="text-center text-gray-600 mb-8 font-medium">
            Trusted By Global Brands
        </p>

        <div className="relative w-full overflow-hidden whitespace-nowrap">
            <div className="inline-block animate-scroll-logos">
                {scrollingLogos.map((client, index) => (
                    <div key={index} className="inline-flex items-center mx-8 p-2">
                        {/* Note: The original Next.js setup used .svg files. We rely on those paths being valid. */}
                        <img src={client.src} alt={client.name} className="h-12 w-auto object-contain" />
                        {client.showText && (
                            <span className="text-2xl font-semibold text-gray-800 ml-3">
                                {client.name}
                            </span>
                        )}
                    </div>
                ))}

                {/* Duplicate for infinite loop */}
                {scrollingLogos.map((client, index) => (
                    <div key={`dup-${index}`} className="inline-flex items-center mx-8 p-2">
                        <img src={client.src} alt={client.name} className="h-12 w-auto object-contain" />
                        {client.showText && (
                            <span className="text-2xl font-semibold text-gray-800 ml-3">
                                {client.name}
                            </span>
                        )}
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const ContactSection = () => (
    <section id="contact" className={`px-4 sm:px-6 py-20 ${DARK_BG}`}>
        <div className="max-w-7xl mx-auto">
            {/* Heading */}
            <div className="text-center mb-16">
                <span className={`text-sm font-semibold ${BRAND_COLOR} mb-3 block`}>
                    Start Your Project
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-black">
                    Let's Build Something Exceptional
                </h2>
                <p className="text-gray-400 max-w-xl mx-auto text-base sm:text-lg">
                    Connect with our experts. We guarantee a reply within <span className="font-semibold text-red-700">24 hours</span>.
                </p>
            </div>

            {/* Responsive Grid - Adjusted for a cleaner info card on the left */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-14 md:gap-16">

                {/* Left Pane – Contact Info Card (Dark Background) */}
                <div className="relative p-8 sm:p-10 md:p-12 rounded-3xl shadow-xl bg-black border border-gray-700 text-white">

                    <h3 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-10">
                        Get In Touch
                    </h3>

                    <div className="space-y-8">
                        {/* Email Section */}
                        <div className="flex gap-4 items-start">
                            <div className={`w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-xl ${BRAND_BG} shadow-md`}>
                                <Mail size={22} className="text-white" />
                            </div>
                            <div>
                                <p className="text-lg font-semibold">Service & Project Queries</p>
                                <a href="mailto:hello@developerstudios.in" className="text-gray-400 text-sm sm:text-base hover:text-brand-red transition">hello@developerstudios.in</a>
                            </div>
                        </div>

                        {/* Phone Section */}
                        <div className="flex gap-4 items-start">
                            <div className={`w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-xl ${BRAND_BG} shadow-md`}>
                                <Phone size={22} className="text-white" />
                            </div>
                            <div>
                                <p className="text-lg font-semibold">Project & Service Call</p>
                                <a href="tel:+918889797895" className="text-gray-400 text-sm sm:text-base hover:text-brand-red transition">+91 88897 97895</a>
                            </div>
                        </div>

                        {/* Location */}
                        <div className="flex gap-4 items-start">
                            <div className={`w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-xl ${BRAND_BG} shadow-md`}>
                                <MapPin size={22} className="text-white" />
                            </div>
                            <div>
                                <p className="text-lg font-semibold">Office Location</p>
                                <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                                    2nd Floor, Twin Plaza, Telephone Exchange Road, Bilaspur, Chhattisgarh, India.
                                </p>
                            </div>
                        </div>

                        {/* Social icons */}
                        <div className="pt-4 border-t border-gray-700">
                            <h4 className="font-semibold text-lg mb-3">Connect with us</h4>
                            <SocialIcons color="text-white" />
                        </div>
                    </div>
                </div>

                {/* Right Pane – Contact Form (White Background) */}
                <div className="rounded-3xl">
                    <ContactForm />
                </div>

            </div>
        </div>
    </section>
);

const Footer = ({ showPrivacy, setShowPrivacy, showTerms, setShowTerms }) => (
    <footer className="px-6 py-12 max-w-7xl mx-auto border-t border-gray-300">
        <div className="grid md:grid-cols-5 gap-8 mb-8">

            {/* Logo + About */}
            <div className="md:col-span-2">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full overflow-hidden ring-2 ring-brand-red shadow-sm flex items-center justify-center">
                   <img src="./logo.png"/>
                    </div>
                    <span className="text-xl font-semibold text-black">Developer<span className={BRAND_COLOR}>Studios</span></span>
                </div>

                <p className="text-gray-600 text-sm mt-2">
                    Empowering global businesses with Custom IT Solutions, AI Automation, and high-impact Lead Generation strategies.
                </p>

                <div className="mt-4">
                    <SocialIcons />
                </div>
            </div>

            {/* Links */}
            <div>
                <h4 className="font-semibold mb-4 text-black">Product</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                    <li><a href="#services" className="hover:text-brand-red">Services</a></li>
                    <li><a href="#projects" className="hover:text-brand-red">Case Studies</a></li>
                    <li><a href="#features" className="hover:text-brand-red">Features</a></li>
                    <li><a href="#contact" className="hover:text-brand-red">Contact Sales</a></li>
                </ul>
            </div>

           <div>
    <h4 className="font-semibold mb-4 text-black">Resources</h4>
    <ul className="space-y-2 text-sm text-gray-700">
        <li>Documentation & Guides</li>
        <li>Developer Tutorials</li>
        <li>Marketing & SEO Insights</li>
        <li>Product Updates</li>
    </ul>
</div>

<div>
    <h4 className="font-semibold mb-4 text-black">Company</h4>
    <ul className="space-y-2 text-sm text-gray-700">
        <li>About Developer Studios</li>
        <li>Leadership Team</li>
        <li>Careers</li>
        <li>Partners & Collaborations</li>
    </ul>
</div>

        </div>

      {/* Footer Bottom */}
<div className="pt-8 border-t border-gray-300 flex flex-col md:flex-row items-center justify-between gap-4">
    <p className="text-sm text-gray-600">© 2025 DeveloperStudios. All rights reserved.</p>

    {/* Modal Triggers */}
    <div className="flex items-center gap-6 text-sm text-gray-600">
        <button 
            onClick={() => setShowPrivacy(true)} 
            className="hover:text-brand-red"
        >
            Privacy Policy
        </button>
        <button 
            onClick={() => setShowTerms(true)} 
            className="hover:text-brand-red"
        >
            Terms & Conditions
        </button>
    </div>
</div>
    </footer>
);


const Modal = ({ open, onClose, title, children }) => {
    if (!open) return null;

    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-xl max-w-lg w-full shadow-xl">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-bold text-black">{title}</h2>
                    <button
                        className="text-gray-600 hover:text-black text-2xl"
                        onClick={onClose}
                    >
                        ×
                    </button>
                </div>

                <div className="text-gray-700 leading-relaxed">
                    {children}
                </div>
            </div>
        </div>
    );
};



// --- Main Application Component ---
export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);
const [showTerms, setShowTerms] = useState(false);

  return (
    <div className={`min-h-screen ${LIGHT_BG} antialiased`}>
      <Toaster position="top-right" reverseOrder={false} />
      
      <Header 
        mobileMenuOpen={mobileMenuOpen} 
        setMobileMenuOpen={setMobileMenuOpen} 
      />
      
      <main>
        <HeroSection />
        <CoreFeaturesSection />
        <AboutSection/>
        <ServicesSection />
        <PortfolioSection />
        <ContactSection />
      </main>

     <Footer 
    showPrivacy={showPrivacy}
    setShowPrivacy={setShowPrivacy}
    showTerms={showTerms}
    setShowTerms={setShowTerms}
/>


      <Modal 
    open={showPrivacy} 
    onClose={() => setShowPrivacy(false)} 
    title="Privacy Policy"
>
    We value your privacy. Developer Studios does not share or sell user data...
</Modal>

<Modal 
    open={showTerms} 
    onClose={() => setShowTerms(false)} 
    title="Terms & Conditions"
>
    By accessing our services, you agree to follow all standard usage policies...
</Modal>

    </div>


  );
}