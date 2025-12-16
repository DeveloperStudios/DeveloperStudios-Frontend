"use client"

import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ArrowRight, 
  CheckCircle, 
  Users, 
  Code, 
  Bot, 
  Aperture,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Instagram,
  Facebook,
  ChevronRight,
  Shield,
  Zap,
  Target,
  Sparkles,
  Video ,
  MessageCircle,
  LinkedIn,
  ArrowUpRight ,
  Cpu, 
  Palette, 
  TrendingUp, 
  Check, 
  Terminal, 
  MessageSquare, 
  BarChart, 
  Layers
} from 'lucide-react';
import { Toaster, toast } from 'react-hot-toast';
const portfolioItems = [
  { title: 'Rogers Telecom', href: 'https://www.rogers.com/', image: './rogers.png', category: 'Telecommunications' },
  { title: 'Telus Digital', href: 'https://www.telus.com/en/', image: './telus.png', category: 'Telecommunications' },
  { title: 'Distributel ISP', href: 'https://www.distributel.ca', image: './ISP.png', category: 'Internet Services' },
  { title: 'Holibrands', href: 'https://holibrands.com', image: './Holibrands.png', category: 'E-commerce' },
  { title: 'Overseas Education', href: 'https://www.overseeducation.com', image: './overseas.png', category: 'Education' },
  { title: 'Amazon Affiliates', href: 'https://sell.amazon.in', image: './amazon.png', category: 'E-commerce' },
];

const stats = [
  { value: '70+', label: 'Projects Delivered' },
  { value: '95%', label: 'Client Satisfaction' },
  { value: '10X', label: 'Growth Rate' },
  { value: '5+', label: 'Years Experience' },
];

const services = [
  { 
    icon: Code, 
    title: 'Custom Development', 
    description: 'Full-stack solutions engineered for scalability and performance.',
    features: ['Web Applications', 'Mobile Apps', 'Cloud Solutions']
  },
  { 
    icon: Bot, 
    title: 'AI & Automation', 
    description: 'Intelligent systems that transform operations and reduce costs.',
    features: ['Chatbots', 'Workflow Automation', 'Machine Learning']
  },
  { 
    icon: Target, 
    title: 'Lead Generation', 
    description: 'Data-driven strategies that fill your pipeline with qualified prospects.',
    features: ['B2B Outreach', 'Marketing Automation', 'Analytics']
  },
  { 
    icon: Aperture, 
    title: 'Brand & Content', 
    description: 'Strategic storytelling across all digital channels.',
    features: ['Social Media', 'Content Strategy', 'Brand Identity']
  },
];

const logos = [
  { name: 'Rogers', src: './rogers.svg' },
  { name: 'Telus', src: './TELUS_Logo.svg' },
  { name: 'Distributel', src: './logo.svg' },
  { name: 'Holibrands', src: './logo-holibrands.svg' },
  { name: 'Amazon', src: './amazon.svg' },
  { name: 'Salesforce', src: './salesforce-with-type-logo.svg' },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-xl shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl  flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
              <img src="./logo.png" alt="DS" className="w-7 h-7" />
            </div>
            <span className="text-xl font-bold tracking-tight">
              Developer<span className="text-red-600">Studios</span>
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-12">
            {['Services', 'Work', 'About', 'Contact'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a 
              href="https://calendly.com/raoishwar9/30min" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-2.5 bg-red-600 text-white text-sm font-medium rounded-full hover:bg-red-700 transition-all hover:shadow-lg hover:shadow-red-600/20 flex items-center gap-2"
            >
              Start Project <ArrowRight size={16} />
            </a>
          </div>

          <button 
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 hover:bg-neutral-100 rounded-lg transition-colors"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-neutral-200">
          <div className="px-6 py-6 space-y-4">
            {['Services', 'Work', 'About', 'Contact'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMobileOpen(false)}
                className="block text-neutral-600 hover:text-neutral-900 font-medium"
              >
                {item}
              </a>
            ))}
            <a 
              href="https://calendly.com/raoishwar9/30min" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block px-6 py-3 bg-red-600 text-white text-center rounded-full font-medium"
            >
              Start Project
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center bg-neutral-50 pt-20 overflow-hidden">
      <div className="absolute inset-0 opacity-[1]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(0 0 0) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 border border-red-100 rounded-full mb-8">
            <Sparkles size={16} className="text-red-600" />
            <span className="text-sm font-medium text-red-600">Trusted by Global Brands</span>
          </div>

          <h1 className="text-6xl lg:text-7xl font-bold tracking-tight text-neutral-900 mb-8 leading-[1.1]">
            We build digital<br />
            experiences that<br />
            <span className="text-red-600">drive growth</span>
          </h1>

          <p className="text-xl text-neutral-600 mb-12 max-w-2xl leading-relaxed">
            Custom software, AI automation, and lead generation strategies 
            engineered to scale your business and maximize ROI.
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-16">
            <a 
              href="https://calendly.com/raoishwar9/30min" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-4 bg-red-600 text-white font-medium rounded-full hover:bg-red-700 transition-all hover:shadow-xl hover:shadow-red-600/20 flex items-center gap-2"
            >
              Book a Call <ArrowRight size={18} />
            </a>
            <a 
              href="#work"
              className="px-8 py-4 bg-white border border-neutral-300 text-neutral-900 font-medium rounded-full hover:border-neutral-400 transition-all flex items-center gap-2"
            >
              View Projects <ChevronRight size={18} />
            </a>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i}>
                <div className="text-4xl font-bold text-neutral-900 mb-1">{stat.value}</div>
                <div className="text-sm text-neutral-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-tl from-red-600/5 to-transparent rounded-tl-[100px] pointer-events-none" />
    </section>
  );
};

const LogoCloud = () => {
  return (
    <section className="py-16 border-y border-neutral-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-center text-sm text-neutral-600 mb-12 uppercase tracking-wider">
          Trusted by Industry Leaders
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-16 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
          {logos.map((logo, i) => (
            <div key={i} className="h-10">
              <img src={logo.src} alt={logo.name} className="h-full w-auto object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


const ServicesSection = () => {
  return (
    <section id="services" className="py-32 bg-[#050505] text-white relative overflow-hidden">
      
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-red-900/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-20 max-w-2xl">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></div>
            <span className="text-red-500 font-bold tracking-widest text-xs uppercase">Our Expertise</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Digital solutions geared for <span className="text-red-600">velocity.</span>
          </h2>
          <p className="text-neutral-400 text-lg leading-relaxed">
            We don't just write code; we architect systems that drive revenue, automate drudgery, and scale effortlessly.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Web Engineering (Large Span) */}
          <div className="col-span-1 md:col-span-2 group relative bg-neutral-900/50 border border-neutral-800 rounded-3xl p-8 hover:border-red-600/30 transition-all duration-300 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/5 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row gap-8 h-full">
              <div className="flex-1">
                <div className="w-12 h-12 bg-neutral-800 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-600 transition-colors duration-300">
                  <Code size={24} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Web Engineering</h3>
                <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                  High-performance frontends and bulletproof backends. We use Next.js and Cloud-native architecture to ensure your platform handles scale without blinking.
                </p>
                <ul className="space-y-2">
                  {["Next.js / React", "Cloud Infrastructure", "Headless CMS"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-neutral-300">
                      <Check size={14} className="text-red-500" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Abstract Visual: Code Window */}
              <div className="flex-1 flex items-end justify-end">
                <div className="w-full bg-black/50 border border-neutral-800 rounded-xl p-4 font-mono text-xs text-neutral-400 shadow-2xl transform group-hover:-translate-y-2 transition-transform duration-500">
                  <div className="flex gap-1.5 mb-3 border-b border-neutral-800 pb-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-neutral-700"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-neutral-700"></div>
                  </div>
                  <div className="space-y-1">
                    <p><span className="text-red-500">const</span> <span className="text-white">scale</span> = <span className="text-blue-400">async</span> () ={'>'} {'{'}</p>
                    <p className="pl-4"><span className="text-red-500">await</span> infrastructure.<span className="text-yellow-400">deploy</span>({'{'}</p>
                    <p className="pl-8">mode: <span className="text-green-400">'turbo'</span>,</p>
                    <p className="pl-8">uptime: <span className="text-green-400">'99.99%'</span></p>
                    <p className="pl-4">{'}'});</p>
                    <p>{'}'};</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: AI Automation (Tall) */}
          <div className="col-span-1 group relative bg-neutral-900/50 border border-neutral-800 rounded-3xl p-8 hover:border-red-600/30 transition-all duration-300 overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-transparent to-red-900/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            
            <div className="relative z-10">
              <div className="w-12 h-12 bg-neutral-800 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-600 transition-colors duration-300">
                <Cpu size={24} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">AI Agents</h3>
              <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                Automate customer support and workflows with intelligent agents that run 24/7.
              </p>
            </div>

            {/* Abstract Visual: Chat Interface */}
            <div className="relative z-10 mt-6 space-y-3">
              <div className="bg-neutral-800/50 rounded-lg p-3 rounded-bl-none max-w-[80%] text-xs text-neutral-300 border border-neutral-700">
                How can I optimize leads?
              </div>
              <div className="bg-red-900/20 rounded-lg p-3 rounded-br-none ml-auto max-w-[80%] text-xs text-red-200 border border-red-900/30">
                Analyzing data... I found 3 strategies.
              </div>
              <div className="flex gap-2 justify-center pt-2">
                 <div className="w-2 h-2 bg-neutral-700 rounded-full animate-bounce"></div>
                 <div className="w-2 h-2 bg-neutral-700 rounded-full animate-bounce delay-100"></div>
                 <div className="w-2 h-2 bg-neutral-700 rounded-full animate-bounce delay-200"></div>
              </div>
            </div>
          </div>

          {/* Card 3: Product Design */}
          <div className="col-span-1 group relative bg-neutral-900/50 border border-neutral-800 rounded-3xl p-8 hover:border-red-600/30 transition-all duration-300 overflow-hidden">
            <div className="relative z-10">
              <div className="w-12 h-12 bg-neutral-800 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-600 transition-colors duration-300">
                <Palette size={24} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">UI/UX Design</h3>
              <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                Interfaces that convert. We map user journeys to create addiction-forming experiences.
              </p>
              
              {/* Abstract Visual: Color Palette / Wireframe */}
              <div className="flex gap-2 mt-4">
                 <div className="h-8 w-8 rounded-full bg-white border-2 border-neutral-700 group-hover:-translate-y-1 transition-transform"></div>
                 <div className="h-8 w-8 rounded-full bg-red-600 border-2 border-neutral-700 group-hover:-translate-y-2 transition-transform delay-75"></div>
                 <div className="h-8 w-8 rounded-full bg-black border-2 border-neutral-700 group-hover:-translate-y-1 transition-transform delay-150"></div>
              </div>
            </div>
          </div>

          {/* Card 4: Growth Systems (Large Span) */}
          <div className="col-span-1 md:col-span-2 group relative bg-neutral-900/50 border border-neutral-800 rounded-3xl p-8 hover:border-red-600/30 transition-all duration-300 overflow-hidden">
             <div className="absolute top-0 left-0 w-64 h-64 bg-red-600/5 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity"></div>
             
             <div className="relative z-10 flex flex-col md:flex-row-reverse gap-8 h-full">
              <div className="flex-1">
                <div className="w-12 h-12 bg-neutral-800 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-600 transition-colors duration-300">
                  <TrendingUp size={24} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Growth Systems</h3>
                <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                   Data-driven lead generation engines. We build the funnels that fill your sales pipeline automatically using precision targeting and analytics.
                </p>
                 <button className="flex items-center gap-2 text-sm font-bold text-white group-hover:text-red-500 transition-colors">
                  Explore Strategies <ArrowRight size={16} />
                </button>
              </div>

              {/* Abstract Visual: Bar Chart */}
              <div className="flex-1 flex items-end justify-center md:justify-start gap-3 h-32 pb-4 border-b border-neutral-800">
                 <div className="w-8 bg-neutral-800 rounded-t-lg h-[40%] group-hover:h-[50%] transition-all duration-500"></div>
                 <div className="w-8 bg-neutral-800 rounded-t-lg h-[60%] group-hover:h-[70%] transition-all duration-500 delay-100"></div>
                 <div className="w-8 bg-neutral-800 rounded-t-lg h-[30%] group-hover:h-[40%] transition-all duration-500 delay-200"></div>
                 <div className="w-8 bg-gradient-to-t from-red-900 to-red-600 rounded-t-lg h-[70%] group-hover:h-[90%] transition-all duration-500 delay-300 shadow-[0_0_15px_rgba(220,38,38,0.5)]"></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const PortfolioSection = () => {
  return (
    <section id="work" className="py-32 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mb-20">
          <span className="text-sm font-semibold text-red-600 mb-4 block">RECENT WORK</span>
          <h2 className="text-5xl font-bold text-neutral-900 mb-6">
            Projects that<br />drive results
          </h2>
          <p className="text-lg text-neutral-600">
            We partner with ambitious brands to create digital experiences 
            that convert visitors into customers.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, i) => (
            <a 
              key={i}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-neutral-900 mb-4">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                  <ArrowRight size={20} className="text-neutral-900" />
                </div>
              </div>
              <div className="space-y-1">
                <div className="text-xs text-neutral-500 uppercase tracking-wider">{item.category}</div>
                <h3 className="text-xl font-bold text-neutral-900 group-hover:text-red-600 transition-colors">
                  {item.title}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

// The hand-drawn circle SVG to match the image style
const HandDrawnCircle = () => (
  <svg 
    className="absolute -top-3 -left-2 w-[110%] h-[130%] pointer-events-none text-red-600/30" 
    viewBox="0 0 200 60" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
  >
    <path 
      d="M10.5 25.5C10.5 25.5 35.5 10.5 100.5 10.5C165.5 10.5 190.5 25.5 190.5 25.5C190.5 25.5 205.5 40.5 160.5 50.5C115.5 60.5 40.5 55.5 20.5 45.5C0.5 35.5 10.5 25.5 10.5 25.5Z" 
      stroke="currentColor" 
      strokeWidth="3" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

// --- Sections ---

const AboutSection = () => {
  const features = [
    { icon: Shield, text: 'Enterprise-grade security' },
    { icon: Zap, text: 'Lightning-fast delivery' },
    { icon: Users, text: 'Dedicated support team' },
  ];

  const team = [
    { name: "Nizam", role: "CEO", image: "./Nizam.png" },
    { name: "Ishwar", role: "CFO", image: "./Ishwar.png" },
    // Added placeholders to visualize the grid effect from the image better
    // { name: "Sarah", role: "Head of Product", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400" }, 
  ];

  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header Section - Centered & Styled like Image */}
        <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-sm font-semibold text-red-600 bg-red-50 px-3 py-1 rounded-full mb-6 inline-block">
                ABOUT US
            </span>
            
            <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
                We've got a 
                <span className="relative inline-block mx-3">
                    <span className="relative z-10">dedicated</span>
                    <HandDrawnCircle />
                </span> 
                team <br className="hidden md:block"/>
                to support your growth.
            </h2>
            
            <p className="text-xl text-slate-500 mb-10 leading-relaxed">
                Get help 24/7. Founded to bridge the gap between technology and revenue, we've delivered 70+ high-impact projects for global brands.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className="px-6 py-3 rounded-lg border border-slate-200 text-slate-700 font-semibold hover:bg-slate-50 transition flex items-center gap-2">
                    <Video size={20} /> Book a demo
                </button>
                <button className="px-6 py-3 rounded-lg bg-slate-900 text-white font-semibold hover:bg-slate-800 transition shadow-lg shadow-slate-900/20">
                    Get in touch
                </button>
            </div>
        </div>

        {/* Team Grid - Clean, Grayscale-ish look */}
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
             {/* Left Column: Features/Text */}
            <div className="flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Why top brands choose us</h3>
                <div className="space-y-6">
                    {features.map((item, i) => (
                    <div key={i} className="flex items-center gap-4 group">
                        <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                            <item.icon size={22} className="text-red-600" />
                        </div>
                        <span className="text-slate-700 font-medium text-lg">{item.text}</span>
                    </div>
                    ))}
                </div>
            </div>

            {/* Right Column: Team Members */}
            <div className="grid grid-cols-2 gap-6">
                {team.map((member, i) => (
                <div key={i} className="group cursor-pointer">
                    <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-slate-100 mb-4 transition-all duration-300 group-hover:shadow-xl">
                        {/* Image with grayscale filter that lifts on hover (common in modern UI) */}
                        <img 
                            src={member.image} 
                            alt={member.name}
                            className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                        />
                         {/* Overlay Name Tag */}
                         <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-sm border border-white/20">
                            <h3 className="text-sm font-bold text-slate-900">{member.name}</h3>
                            <p className="text-xs text-slate-500">{member.role}</p>
                         </div>
                    </div>
                </div>
                ))}
            </div>
        </div>

      </div>
    </section>
  );
};

const ContactSection = () => {
  // 1. State for form data and loading status
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // 2. Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 3. Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Combine first and last name for the backend
    const payload = {
      name: `${formData.firstName} ${formData.lastName}`.trim(),
      email: formData.email,
      // We append the phone number to the message since the backend only expects 'message'
      message: `Phone: ${formData.phone}\n\n${formData.message}`
    };

    try {
      // 4. Send request to your backend running on port 5000
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Message sent successfully!");
        // Reset form
        setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" });
      } else {
        toast.error(data.message || "Something went wrong.");
      }
    } catch (error) {
      console.error("Submission Error:", error);
      toast.error("Failed to connect to server.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            
            {/* Left Side: Contact Info */}
            <div className="flex flex-col gap-12">
                <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Call us</h3>
                    <p className="text-slate-500 mb-4">Call our team Mon-Fri from 8am to 5pm.</p>
                    <a href="tel:+918889797895" className="flex items-center gap-2 text-slate-900 font-semibold hover:text-red-600 transition">
                        <Phone size={20} /> +91 88897 97895
                    </a>
                </div>

                <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Chat with us</h3>
                    <p className="text-slate-500 mb-4">Speak to our friendly team via live chat.</p>
                    <div className="flex flex-col gap-3">
                        <a href="#" className="flex items-center gap-2 text-slate-900 font-semibold hover:text-red-600 transition">
                            <MessageCircle size={20} /> Start a live chat
                        </a>
                        <a href="mailto:hello@developerstudios.in" className="flex items-center gap-2 text-slate-900 font-semibold hover:text-red-600 transition">
                            <Mail size={20} /> Shoot us an email
                        </a>
                        <a href="https://www.linkedin.com/company/developer-studios/" className="flex items-center gap-2 text-slate-900 font-semibold hover:text-red-600 transition">
                            <Linkedin size={20} /> Message us on LinkedIn
                        </a>
                    </div>
                </div>

                <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Visit us</h3>
                    <p className="text-slate-500 mb-4">Chat to us in person at our Location.</p>
                    <a href="#" className="flex items-center gap-2 text-slate-900 font-semibold hover:text-red-600 transition">
                        <MapPin size={20} /> Twin Plaza, Bilaspur, Chhattisgarh, India
                    </a>
                </div>
            </div>

            {/* Right Side: Form */}
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 lg:bg-transparent lg:p-0 lg:border-0">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-1.5">First name</label>
                            <input
                                required
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                className="w-full px-4 py-2.5 bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all placeholder-slate-400"
                                placeholder="First name"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-1.5">Last name</label>
                            <input
                                required
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                className="w-full px-4 py-2.5 bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all placeholder-slate-400"
                                placeholder="Last name"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-1.5">Email</label>
                        <input
                            required
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2.5 bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all placeholder-slate-400"
                            placeholder="you@company.com"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-1.5">Phone number</label>
                        <div className="relative flex rounded-lg shadow-sm">
                            <select className="px-4 py-2.5 border border-r-0 border-slate-300 bg-slate-50 text-slate-500 text-sm rounded-l-lg focus:ring-2 focus:ring-red-600 focus:outline-none">
                                <option>IN</option>
                                <option>US</option>
                                <option>CA</option>
                            </select>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full px-4 py-2.5 bg-white border border-slate-300 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all placeholder-slate-400"
                                placeholder="+91 00000 00000"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-1.5">Message</label>
                        <textarea
                            required
                            rows={4}
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full px-4 py-2.5 bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all resize-none placeholder-slate-400"
                            placeholder="Leave us a message..."
                        />
                    </div>

                    <div className="pt-2">
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`w-full px-6 py-3 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/10 flex items-center justify-center gap-2 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                        >
                            {isSubmitting ? (
                                <>
                                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                    Sending...
                                </>
                            ) : (
                                'Send message'
                            )}
                        </button>
                    </div>
                </form>
            </div>

        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-black text-white relative overflow-hidden border-t border-white/5 pt-20 pb-10">
      
      {/* 1. Large CTA Section */}
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-10 pb-20 border-b border-white/10">
          <div>
            <h2 className="text-5xl md:text-8xl font-bold tracking-tighter mb-6">
              Let's build <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">
                the future.
              </span>
            </h2>
            <a href="#contact" className="group inline-flex items-center gap-4 text-xl font-medium hover:text-red-500 transition-colors">
              <span className="border-b border-white/30 pb-1 group-hover:border-red-500 transition-colors">Start a project</span>
              <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </a>
          </div>

          <div className="w-full max-w-sm">
            <p className="text-gray-400 mb-4 text-sm">Subscribe to our newsletter for tech insights.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-red-500 transition-colors"
              />
              <button className="bg-white text-black px-4 py-3 rounded-lg font-bold hover:bg-red-600 hover:text-white transition-colors">
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* 2. Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mt-16">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
             <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                     <img src='./logo.png'/>
                </div>
                <span className="text-xl font-bold tracking-tight">Developer<span className="text-red-600">Studios</span></span>
             </div>
             <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
               We are a digital product agency that builds scalable, high-performance software for forward-thinking companies.
             </p>
          </div>

          {/* Links Column 1 */}
          <div>
            <h4 className="font-bold text-white mb-6">Sitemap</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#work" className="hover:text-red-500 transition-colors">Case Studies</a></li>
              <li><a href="#services" className="hover:text-red-500 transition-colors">Services</a></li>
              <li><a href="#process" className="hover:text-red-500 transition-colors">Process</a></li>
              <li><a href="#about" className="hover:text-red-500 transition-colors">About</a></li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div>
            <h4 className="font-bold text-white mb-6">Socials</h4>
            <ul className="space-y-4 text-sm text-gray-500">
               <li><a href="#" className="hover:text-red-500 transition-colors">LinkedIn</a></li>
               <li><a href="#" className="hover:text-red-500 transition-colors">Instagram</a></li>
               <li><a href="#" className="hover:text-red-500 transition-colors">GitHub</a></li>
               <li><a href="#" className="hover:text-red-500 transition-colors">LinkedIn / X</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-bold text-white mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li>hello@developerstudios.in</li>
              <li>+91 88897 97895</li>
              <li>Bilaspur, Chhattisgarh, India</li>
            </ul>
          </div>
        </div>
      </div>

      {/* 3. Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
         <p className="text-xs text-gray-600">© 2025 Developer Studios. All rights reserved.</p>
         <div className="flex gap-8">
            <a href="#" className="text-xs text-gray-600 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-gray-600 hover:text-white transition-colors">Terms & Conditions</a>
         </div>
      </div>

      {/* Decorative 'Big Text' Background (Optional Style) */}
      <div className="absolute -bottom-10 left-0 w-full overflow-hidden pointer-events-none opacity-[0.03]">
         <h1 className="text-[12rem] md:text-[20rem] font-bold text-white whitespace-nowrap text-center tracking-tighter select-none">
            STUDIOS
         </h1>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <LogoCloud />
        <ServicesSection />
        <PortfolioSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}