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
} from 'lucide-react';

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
      <div className="absolute inset-0 opacity-[0.02]">
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
    <section id="services" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mb-20">
          <span className="text-sm font-semibold text-red-600 mb-4 block">OUR SERVICES</span>
          <h2 className="text-5xl font-bold text-neutral-900 mb-6">
            Everything you need<br />to succeed online
          </h2>
          <p className="text-lg text-neutral-600">
            From concept to launch, we provide end-to-end solutions that 
            transform businesses and accelerate growth.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <div 
              key={i} 
              className="group p-10 bg-neutral-50 hover:bg-white border border-neutral-200 hover:border-neutral-300 rounded-3xl transition-all hover:shadow-xl"
            >
              <div className="w-14 h-14 bg-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <service.icon size={28} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-3">
                {service.title}
              </h3>
              <p className="text-neutral-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-neutral-600">
                    <CheckCircle size={16} className="text-red-600 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
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

const AboutSection = () => {
  return (
    <section id="about" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-sm font-semibold text-red-600 mb-4 block">ABOUT US</span>
            <h2 className="text-5xl font-bold text-neutral-900 mb-6">
              Your dedicated<br />growth partners
            </h2>
            <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
              Founded to bridge the gap between technology and revenue, 
              we've delivered 70+ high-impact projects for global brands.
            </p>
            <div className="space-y-4">
              {[
                { icon: Shield, text: 'Enterprise-grade security' },
                { icon: Zap, text: 'Lightning-fast delivery' },
                { icon: Users, text: 'Dedicated support team' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <item.icon size={20} className="text-red-600" />
                  </div>
                  <span className="text-neutral-700 font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8">
            {[
              { name: "Nizam", role: "CEO", image: "./Nizam.png" },
              { name: "Ishwar", role: "CFO", image: "./Ishwar.png" },
            ].map((member, i) => (
              <div key={i} className="text-center">
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-neutral-100 mb-4">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-neutral-900">{member.name}</h3>
                <p className="text-sm text-neutral-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  const [status, setStatus] = useState("");
  const [data, setData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = () => {
    if (!data.name || !data.email || !data.message) return;
    setStatus("sending");
    setTimeout(() => {
      alert("Message sent successfully!");
      setData({ name: "", email: "", message: "" });
      setStatus("");
    }, 1500);
  };

  return (
    <section id="contact" className="py-32 bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <span className="text-sm font-semibold text-red-400 mb-4 block">GET IN TOUCH</span>
            <h2 className="text-5xl font-bold mb-6">
              Let's build<br />something great
            </h2>
            <p className="text-xl text-neutral-400 mb-12">
              Ready to transform your business? Book a free consultation 
              and get a response within 24 hours.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="font-medium mb-1">Email us</div>
                  <a href="mailto:hello@developerstudios.in" className="text-neutral-400 hover:text-white transition-colors">
                    hello@developerstudios.in
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="font-medium mb-1">Call us</div>
                  <a href="tel:+918889797895" className="text-neutral-400 hover:text-white transition-colors">
                    +91 88897 97895
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="font-medium mb-1">Visit us</div>
                  <p className="text-neutral-400">
                    Twin Plaza, Bilaspur<br />Chhattisgarh, India
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-10 text-neutral-900">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  value={data.name}
                  onChange={(e) => setData({...data, name: e.target.value})}
                  className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-600"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  value={data.email}
                  onChange={(e) => setData({...data, email: e.target.value})}
                  className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-600"
                  placeholder="you@company.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  rows={5}
                  value={data.message}
                  onChange={(e) => setData({...data, message: e.target.value})}
                  className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-600 resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                onClick={handleSubmit}
                disabled={status === "sending"}
                className="w-full px-8 py-4 bg-red-600 text-white font-medium rounded-xl hover:bg-red-700 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {status === "sending" ? "Sending..." : "Send Message"}
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-neutral-900 border-t border-neutral-800 text-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-red-600 flex items-center justify-center">
                <img src="./logo.png" alt="DS" className="w-7 h-7" />
              </div>
              <span className="text-xl font-bold">
                Developer<span className="text-red-600">Studios</span>
              </span>
            </div>
            <p className="text-neutral-400 mb-6 max-w-md">
              Empowering businesses with custom software, AI automation, 
              and strategic lead generation.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Linkedin, href: "https://www.linkedin.com/company/developer-studios" },
                { icon: Github, href: "https://github.com/Developerstudios" },
                { icon: Instagram, href: "https://www.instagram.com/developerstudios.in" },
                { icon: Facebook, href: "https://www.facebook.com/profile.php?id=100094521793367" },
              ].map((social, i) => (
                <a 
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-neutral-800 hover:bg-red-600 rounded-lg flex items-center justify-center transition-colors"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li><a href="#services" className="hover:text-white transition-colors">Web Development</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">AI Automation</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Lead Generation</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Brand Strategy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#work" className="hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-400">
          <p>© 2025 DeveloperStudios. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
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