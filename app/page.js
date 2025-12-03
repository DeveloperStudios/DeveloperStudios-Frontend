"use client"

import React, { useState } from 'react';
// Import necessary icons
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
  Mail, // For contact section
  Phone, // For contact section
  MapPin, // For address
  Linkedin, // Social Icons
  Github,
  Instagram,
  Facebook,
} from 'lucide-react'; 
import toast from "react-hot-toast";


const BRAND_GRADIENT = 'from-purple-600 to-pink-600';
const BRAND_TEXT_COLOR = 'text-purple-600';
const BRAND_BG_START = 'from-purple-50'; 
const BRAND_BG_VIA = 'via-pink-50';
const BRAND_BG_END = 'to-purple-100';

const portfolioItems = [
  { 
    title: 'Rogers Telecom',
    href: 'https://www.rogers.com/',
    color: 'from-blue-600 to-indigo-700',
    size: 'large',
    image: './rogers.png'
  },
  { 
    title: 'Telus Digital',
    href: 'https://www.telus.com/en/',
    color: 'from-green-600 to-teal-700',
    size: 'medium',
    image: './telus.png'
  },
  { 
    title: 'Distributel ISP',
    href: 'https://www.distributel.ca',
    color: 'from-gray-700 to-gray-900',
    size: 'medium',
    image: './ISP.png'
  },
  { 
    title: 'Holibrands',
    href: 'https://holibrands.com',
    color: 'from-orange-500 to-red-600',
    size: 'medium',
    image: './Holibrands.png'
  },
  { 
    title: 'Overseas Education',
    href: 'https://www.overseeducation.com',
    color: 'from-purple-800 to-indigo-800',
    size: 'large',
    image: './overseas.png'
  },
  { 
    title: 'Amazon Seller Affiliates',
    href: 'https://sell.amazon.in/landing/join-ates-selleraffiliates-ecommerce-partner',
    color: 'from-yellow-500 to-orange-500',
    size: 'medium',
    image: './amazon.png'
  },
  { 
    title: 'Salesforce Agentforce',
    href: 'https://www.salesforce.com/in/agentforce/',
    color: 'from-red-600 to-pink-600',
    size: 'medium',
    image: './agentforce.png'
  },
];


const testimonials = [
  {
    name: "Jessica A.",
    role: "Head of Operations",
    brand: "Rogers Telecom",
    review: "DeveloperStudios streamlined our old infrastructure, leading to a noticeable drop in support tickets and a smoother customer experience.",
    rating: 5,
    icon: Bell, // Using Bell for Telecom brand
  },
  {
    name: "David C.",
    role: "SaaS Founder",
    brand: "Telus Digital",
    review: "Their lead generation strategy was surgical. We hit our quarterly pipeline goal in the first month. Pure 10x growth.",
    rating: 5,
    icon: TrendingUp,
  },
  {
    name: "Nikhil P.",
    role: "E-commerce Manager",
    brand: "Amazon Affiliates",
    review: "We automated 90% of our manual marketing workflows using their AI agents. It felt like instantly adding three full-time employees.",
    rating: 4,
    icon: Bot,
  },
];

// Reusable Social Media Icons Component
const SocialIcons = () => (
  <div className="flex items-center gap-4 text-gray-700">
      
      {/* LinkedIn */}
      <a 
        href="https://www.linkedin.com/company/developer-studios?trk=blended-typeahead" 
        target="_blank" 
        rel="noopener noreferrer" 
        aria-label="LinkedIn" 
        className="hover:text-purple-600 transition"
      >
        <Linkedin size={20} />
      </a>

      {/* GitHub */}
      <a 
        href="https://github.com/Developerstudios" 
        target="_blank" 
        rel="noopener noreferrer" 
        aria-label="GitHub" 
        className="hover:text-purple-600 transition"
      >
        <Github size={20} />
      </a>

      {/* Instagram */}
      <a 
        href="https://www.instagram.com/developerstudios.in?igsh=NjhhcXp6aG5ld2ow" 
        target="_blank" 
        rel="noopener noreferrer" 
        aria-label="Instagram" 
        className="hover:text-purple-600 transition"
      >
        <Instagram size={20} />
      </a>

      {/* Facebook */}
      <a 
        href="https://www.facebook.com/profile.php?id=100094521793367" 
        target="_blank" 
        rel="noopener noreferrer" 
        aria-label="Facebook" 
        className="hover:text-purple-600 transition"
      >
        <Facebook size={20} />
      </a>

  </div>
);



const ContactForm = ({ brandGradient }) => {
    const [status, setStatus] = useState(""); // sending | disabled | success | error | ""
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Disable button
        setStatus("sending");

        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/contact`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (res.status === 429) {
                toast.error("Please wait a few minutes before sending again.");
                setStatus("");
                return;
            }

            if (data.success) {
                toast.success("Message sent successfully!");
                setFormData({ name: "", email: "", message: "" });

                // Disable submit button for 2 minutes
                setStatus("disabled");
                setTimeout(() => setStatus(""), 120000);
            } else {
                toast.error("Error sending message.");
                setStatus("error");
            }
        } catch (error) {
            toast.error("Something went wrong. Try again.");
            setStatus("error");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="p-8 bg-white rounded-2xl shadow-xl">

            <h3 className="text-2xl font-bold mb-6 text-black">Get in Touch (24h Response)</h3>

            <div className="space-y-4">
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg text-black placeholder-gray-500 focus:ring-2 focus:ring-purple-500 transition-colors"
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Your Business Email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg text-black placeholder-gray-500 focus:ring-2 focus:ring-purple-500 transition-colors"
                />

                <textarea
                    name="message"
                    placeholder="Tell us about your 10x growth project..."
                    rows="4"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg text-black placeholder-gray-500 focus:ring-2 focus:ring-purple-500 transition-colors"
                ></textarea>

                <button
                    type="submit"
                    disabled={status === "sending" || status === "disabled"}
                    className={`w-full text-white py-3 rounded-full flex items-center justify-center gap-2 font-semibold transition-all ${
                        status === "sending" || status === "disabled"
                            ? "bg-gray-500 cursor-not-allowed"
                            : `bg-gradient-to-r ${brandGradient} hover:shadow-lg`
                    }`}
                >
                    {status === "sending"
                        ? "Sending..."
                        : status === "disabled"
                        ? "Please wait..."
                        : "Send Message"}
                    <ArrowRight size={18} />
                </button>
            </div>

            {status === "success" && (
                <p className="mt-4 text-green-600 font-semibold flex items-center gap-2">
                    <CheckCircle size={18} /> Thank you! We've received your request.
                </p>
            )}

            {status === "error" && (
                <p className="mt-4 text-red-600 font-semibold">
                    Error sending message. Please try again or email us directly.
                </p>
            )}
        </form>
    );
};



export default function DeveloperStudiosLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

const serviceFeatures = [
  { 
    icon: Code,
    gradient: BRAND_GRADIENT,
    title: 'Web & Software Development',
    description: 'Full-stack applications, custom software, and mobile development engineered for performance.'
  },
  { 
    icon: Users,
    gradient: BRAND_GRADIENT,
    title: 'Lead Generation (B2B & B2C)',
    description: 'Targeted prospecting and data-driven lead generation to fill your pipeline with qualified buyers.'
  },
  { 
    icon: Bot,
    gradient: BRAND_GRADIENT,
    title: 'AI Automation & Agents',
    description: 'Deploy intelligent AI chatbots and autonomous agents to automate support and workflows 24/7.'
  },
  { 
    icon: Aperture,
    gradient: BRAND_GRADIENT,
    title: 'Social Media Management',
    description: 'Content creation, scheduling, growth, and end-to-end social presence building for your brand.'
  },
  { 
    icon: Box,
    gradient: BRAND_GRADIENT,
    title: 'API Integrations',
    description: 'Seamlessly integrating third-party tools to streamline and unify your business operations.'
  },
];


  // Client Logos for the scrolling section (Using generic placeholders and their names)
const scrollingLogos = [
  { name: 'Rogers', src: './rogers.svg', showText: true },
  { name: 'Telus', src: './TELUS_Logo.svg', showText: false },
  { name: 'Distributel', src: './logo.svg', showText: false },
  { name: 'Holibrands', src: './logo-holibrands.svg', showText: false },
  { name: 'OverseasEdu', src: './overseas.svg', showText: false },
  { name: 'Amazon', src: './amazon.svg', showText: false },
  { name: 'Salesforce', src: './salesforce-with-type-logo.svg', showText: false },
];

  // Helper function for generating rating stars
  const renderStars = (rating) => {
    const filledStars = Array(rating).fill(0).map((_, i) => (
      <Star key={i} size={16} className="text-yellow-500 fill-yellow-500" />
    ));
    const emptyStars = Array(5 - rating).fill(0).map((_, i) => (
      <Star key={i + rating} size={16} className="text-yellow-500" />
    ));
    return [...filledStars, ...emptyStars];
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br ${BRAND_BG_START} ${BRAND_BG_VIA} ${BRAND_BG_END}`}>
      
{/* Header */}
<header className="px-6 py-4 bg-white/70 backdrop-blur-md sticky top-0 z-40 shadow-sm">
  <div className="max-w-7xl mx-auto flex items-center justify-between">

    {/* Logo + Brand */}
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-black/10 shadow-sm">
        <img 
          src="./logo.png" 
          alt="logo" 
          className="w-full h-full object-cover" 
        />
      </div>
      <span className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent">
        DeveloperStudios
      </span>
    </div>

    {/* Desktop Nav */}
    <nav className="hidden md:flex items-center gap-10">
      <a href="#" className="text-gray-700 text-sm hover:text-black transition">Home</a>
      <a href="#services" className="text-gray-700 text-sm hover:text-black transition">Services</a>
      <a href="#projects" className="text-gray-700 text-sm hover:text-black transition">Projects</a>
      <a href="#contact" className="text-gray-700 text-sm hover:text-black transition">Contact</a>
    </nav>

    {/* CTA button */}
    <div className="hidden md:flex items-center">
      <button 
        className={`px-6 text-sm py-2.5 rounded-full font-medium text-white shadow-md hover:opacity-90 transition bg-gradient-to-r ${BRAND_GRADIENT} flex items-center gap-2`}
      >
        Get Your First Lead For Free <ArrowRight size={17} />
      </button>
    </div>

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
    <div className="md:hidden mt-4 bg-white/90 backdrop-blur-xl p-5 shadow-xl rounded-xl space-y-3">
      <a href="#" className="block py-2 text-gray-700 hover:text-black">Home</a>
      <a href="#services" className="block py-2 text-gray-700 hover:text-black">Services</a>
      <a href="#projects" className="block py-2 text-gray-700 hover:text-black">Projects</a>
      <a href="#contact" className="block py-2 text-gray-700 hover:text-black">Contact</a>

      <button 
        className={`w-full mt-3 px-5 py-2.5 rounded-full text-white font-medium shadow-md hover:opacity-90 bg-gradient-to-r ${BRAND_GRADIENT} flex items-center justify-center gap-2`}
      >
        Get Your First Lead For Free <ArrowRight size={17} />
      </button>
    </div>
  )}
</header>


   {/* Hero Section */}
<section className="px-6 py-24 max-w-7xl mx-auto">
  <div className="text-center mb-12">

    {/* Clean Minimal Tagline */}
    <p className="text-sm tracking-wide uppercase text-gray-500 mb-4">
      Empowering Global Businesses
    </p>

    {/* Premium Heading */}
    <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-gray-900 mb-6">
      Next-Gen IT Solutions For <br className="hidden md:block" />
      Modern Business Growth
    </h1>

    {/* Subtext */}
    <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
      Custom Software, AI Automation, Lead Generation & Growth Systems — built to scale your business 10x faster.
    </p>

    {/* CTA */}
    <button className={`px-10 py-4 rounded-full text-white font-medium text-lg bg-gradient-to-r ${BRAND_GRADIENT} hover:opacity-90 flex items-center gap-2 mx-auto`}>
      Get Your First Lead For Free <ArrowRight size={20} />
    </button>
  </div>

  {/* Keep your feature cards exactly as they were */}
  <div className="grid md:grid-cols-3 gap-6 mt-20">
    {/* --------- CARD 1 ---------- */}
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6">
      <div className={`bg-gradient-to-br ${BRAND_GRADIENT} w-12 h-12 rounded-xl flex items-center justify-center mb-4`}>
        <CheckCircle className="text-white" size={24} />
      </div>
      <h3 className="font-semibold text-xl mb-2 text-black">Projects Delivered</h3>
      <p className="text-gray-600 text-sm mb-4">Total Successful Projects</p>
      <div className="flex items-center justify-between text-sm">
        <span className="text-gray-500">Global Clients</span>
        <span className="font-semibold text-green-500">70+</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
        <div className={`bg-gradient-to-r ${BRAND_GRADIENT} h-2 rounded-full`} style={{ width: '95%' }}></div>
      </div>
    </div>

    {/* --------- CARD 2 ---------- */}
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6">
      <div className="h-40 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl mb-4 flex items-end justify-around p-4">
        <div className="w-8 bg-gray-300 rounded-t" style={{ height: '40%' }}></div>
        <div className="w-8 bg-gray-300 rounded-t" style={{ height: '60%' }}></div>
        <div className={`w-8 bg-gradient-to-t ${BRAND_GRADIENT} rounded-t`} style={{ height: '95%' }}></div>
        <div className="w-8 bg-gray-300 rounded-t" style={{ height: '50%' }}></div>
        <div className="w-8 bg-gray-300 rounded-t" style={{ height: '30%' }}></div>
      </div>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500">Growth Factor</p>
          <p className="text-2xl text-black font-bold">10x</p>
        </div>
        <div className="bg-black rounded-full p-2">
          <BarChart3 className="text-white" size={20} />
        </div>
      </div>
    </div>

    {/* --------- CARD 3 ---------- */}
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6">
      <div className="flex items-center gap-2 mb-4">
        <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${BRAND_GRADIENT}`}></div>
        <div>
          <p className="font-semibold text-black">Global Footprint</p>
          <p className="text-sm text-gray-500">Regions: US, UK, CA, APAC</p>
        </div>
      </div>
      <div className="bg-gray-100 rounded-xl p-4">
        <div className="flex items-center gap-2 mb-2">
          <Globe size={18} className="text-gray-600" />
          <span className="font-medium text-black">International Presence</span>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          Successfully delivered projects across the US, UK, Canada, and APAC.
        </p>
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <span>⭐ 4 Years Established</span>
          <span>🤝 Growth Partners</span>
        </div>
      </div>
    </div>
  </div>
</section>


{/* Scrolling Trusted By Section */}
<section className="py-12 overflow-hidden bg-gray-50">
  <p className="text-center text-gray-600 mb-8 font-medium">
    Trusted By Global Brands
  </p>

  <div className="relative w-full overflow-hidden whitespace-nowrap">
    <div className="inline-block animate-scroll-logos">
      {scrollingLogos.map((client, index) => (
        <div key={index} className="inline-flex items-center mx-8 p-2">
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


{/* ABOUT SECTION */}
<section id="about" className="px-6 py-24 max-w-7xl mx-auto">

  <div className="text-center mb-16">
    <span className={`text-sm tracking-wide uppercase ${BRAND_TEXT_COLOR} block mb-4`}>
      Our Mission
    </span>

    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
      4 Years. 70+ Clients. One Mission.
    </h2>

    <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
      Founded by Nizam, Developer Studios has bridged the gap between 
      <span className="font-semibold text-black"> technology and revenue</span>.  
      We are not just developers — we are <span className="font-semibold text-black">growth partners</span>.
      With a strong footprint across the US, UK, Canada, and APAC, our team has successfully delivered 
      70+ high-impact projects worldwide.
    </p>
  </div>

  {/* Team Photos */}
  <div className="grid md:grid-cols-2  max-w-2xl mx-auto">

    {/* CEO - Nizam */}
    <div className="flex flex-col items-center">
      <div className="rounded-2xl overflow-hidden shadow-lg bg-gray-100 w-[220px] h-[220px]">
        <img
          src="/Nizam.png"
          alt="Nizam"
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="mt-4 text-xl font-semibold text-gray-900">Nizam</h3>
      <p className="text-gray-600 text-sm">CEO</p>
    </div>

    {/* CFO - Ishwar */}
    <div className="flex flex-col items-center">
      <div className="rounded-2xl overflow-hidden shadow-lg bg-gray-100 w-[220px] h-[220px]">
        <img
          src="/Ishwar.png"
          alt="Ishwar"
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="mt-4 text-xl font-semibold text-gray-900">Ishwar</h3>
      <p className="text-gray-600 text-sm">CFO</p>
    </div>

  </div>
</section>




{/* TESTIMONIALS SECTION */}
<section id="testimonials" className="px-6 py-24 max-w-7xl mx-auto">

  <div className="text-center mb-16">
    <span className={`text-sm tracking-wide uppercase ${BRAND_TEXT_COLOR} block mb-4`}>
      Trust & Results
    </span>

    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
      What Our Clients Say
    </h2>

    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
      Real feedback from businesses we’ve helped scale, automate, and grow 10x faster.
    </p>
  </div>

  {/* Cards */}
  <div className="grid md:grid-cols-3 gap-8">
    {testimonials.map((t, index) => (
      <div
        key={index}
        className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-shadow border border-gray-100"
      >
        
        {/* Stars */}
        <div className="flex items-center gap-2 mb-4">
          {renderStars(t.rating)}
          <span className="text-sm font-medium text-gray-500">
            {t.rating}/5
          </span>
        </div>

        {/* Review */}
        <p className="text-gray-700 italic mb-6 leading-relaxed">
          “{t.review}”
        </p>

        {/* Client info */}
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
            <t.icon size={22} className={BRAND_TEXT_COLOR} />
          </div>
          <div>
            <p className="font-bold text-black">{t.name}</p>
            <p className="text-sm text-gray-500">
              {t.role} — <span className="text-black font-medium">{t.brand}</span>
            </p>
          </div>
        </div>

      </div>
    ))}
  </div>
</section>


      {/* Project Section - Updated to Portfolio Items with Links */}
      <section id="projects" className="py-20 px-6 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
  <span className={`text-sm font-semibold bg-gradient-to-r ${BRAND_GRADIENT} text-transparent bg-clip-text mb-3 block`}>
    Our Portfolio
  </span>

  <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-black">
    Featured Client Projects
  </h2>

  <p className="text-gray-600 max-w-xl mx-auto">
    Click to view the live sites of our success stories.
  </p>
</div>


              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {portfolioItems.map((item, index) => (
      <a 
  key={index}
  href={item.href}
  target="_blank"
  rel="noopener noreferrer"
  className={`relative rounded-2xl overflow-hidden group cursor-pointer transition-transform hover:scale-[1.02] ${item.size === 'large' ? 'h-80' : 'h-64'} shadow-lg`}
>
    {/* Background Image */}
    <div 
      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
      style={{ backgroundImage: `url(${item.image})` }}
    ></div>

    {/* Dark Hover Overlay */}
    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/60 transition-all duration-500"></div>

    {/* Slide-Up Text Container */}
    <div className="
        absolute bottom-0 left-0 w-full px-6 py-6 
        translate-y-10 opacity-0 
        group-hover:translate-y-0 group-hover:opacity-100 
        transition-all duration-500 ease-out
    ">
        <h3 className="text-white text-2xl font-bold mb-1">{item.title}</h3>
        <p className="text-white text-sm opacity-80">
            {item.href.replace(/^https?:\/\//, '').replace(/\/$/, '')}
        </p>
    </div>

    {/* Button Top-Right */}
    <div className="absolute top-6 right-6 w-12 h-12 bg-white/30 rounded-lg backdrop-blur-sm flex items-center justify-center">
        <ArrowRight size={24} className="stroke-white" />
    </div>
</a>


                  ))}
              </div>
          </div>
      </section>
      
     {/* SERVICES SECTION */}
<section id="services" className="px-6 py-24 max-w-7xl mx-auto">

  <div className="text-center mb-16">
    <span className={`text-sm uppercase tracking-wide ${BRAND_TEXT_COLOR} block mb-4`}>
      Our Services
    </span>

    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
      Everything Your Business Needs  
      <br />to Scale Faster Than Ever
    </h2>

    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
      From custom development to intelligent AI automation —  
      we build systems that generate revenue, save time, and grow your business.
    </p>
  </div>

  <div className="grid md:grid-cols-3 gap-10">
    {serviceFeatures.map((feature, index) => (
      <div
        key={index}
        className="bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-xl 
                   hover:shadow-2xl transition-all duration-300 border border-gray-100
                   hover:-translate-y-1 group"
      >
        
        {/* Icon Box */}
        <div
          className={`
            w-14 h-14 rounded-2xl flex items-center justify-center mb-6
            bg-gradient-to-br ${feature.gradient}
            shadow-lg group-hover:scale-105 transition-transform
          `}
        >
          <feature.icon className="text-white" size={28} />
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-gray-900 mb-3">
          {feature.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed text-[15.5px]">
          {feature.description}
        </p>
      </div>
    ))}
  </div>

</section>


{/* Right Side Dark Section - Enhanced UI */}
<section className="py-20 px-6 bg-black text-white">
  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

    {/* Left Content */}
    <div>
      <h2 className="text-5xl font-bold leading-tight mb-6">
        You name it, <br /> we build it — fast.
      </h2>

      <p className="text-gray-400 mb-6">
        High-performance development, automation, and growth systems shipped at the
        speed your business demands.
      </p>

      <div className="flex flex-wrap gap-3 mb-8">
        {[
          'AI Automation', 'B2B Lead Gen', 'Custom Software', 'Web Development',
          'Growth Strategy', 'Mobile Apps', 'API Integration', 'Full Stack', 'Branding'
        ].map((tag, i) => (
          <span 
            key={i} 
            className="px-4 py-2 bg-gray-800/80 rounded-full text-sm 
                       hover:bg-gray-700 transition border border-gray-700"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>

    {/* Right Visual Grid */}
    <div className="grid grid-cols-2 gap-4">
      <div className="bg-gray-900 rounded-2xl p-6 aspect-square flex items-center justify-center">
        <img src="./design.png" className="w-full h-full object-cover rounded-xl" />
      </div>

      <div className="bg-gray-900 rounded-2xl p-6 aspect-square flex items-center justify-center">
        <img src="./dev.png" className="w-full h-full object-cover rounded-xl" />
      </div>

      <div className="bg-gray-900 rounded-2xl p-6 aspect-square flex items-center justify-center col-span-2">
        <img src="./revision.png" className="w-full h-full object-cover rounded-xl" />
      </div>
    </div>
  </div>
</section>
{/* Careers Section - Premium CTA */}
<section id="careers" className="py-20 px-6 bg-black text-white">
  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

    {/* Visual */}
    <div className="rounded-3xl overflow-hidden aspect-square flex items-center justify-center bg-gray-900">
      <img src="./company.png" className="w-full h-full object-cover" />
    </div>

    {/* Content */}
    <div>
      <p className="text-sm text-gray-400 mb-3 tracking-wide">Work with Us</p>

      <h2 className="text-4xl font-bold mb-6">
        Join the Global Force.
      </h2>

      <p className="text-gray-400 mb-8 leading-relaxed">
        Be part of a world-class team building AI systems, growth engines, 
        and high-impact software for international clients across the US, UK, 
        Canada & APAC.
      </p>

      <a 
        href="https://developerstudios.in/careers" 
        target="_blank" 
        rel="noopener noreferrer"
        className={`text-sm font-semibold text-white bg-gradient-to-r ${BRAND_GRADIENT} 
                   px-6 py-3 rounded-full hover:shadow-lg transition-all inline-flex items-center`}
      >
        See Open Positions <ArrowRight size={16} className="ml-2" />
      </a>
    </div>
  </div>
</section>

      
 
    {/* Pricing Section - Premium UI Update */}
{/* <section id="pricing" className="px-6 py-20 max-w-7xl mx-auto">
  <div className="text-center mb-16">
    <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-black">Simple, Transparent Pricing</h2>
    <p className="text-gray-600">Choose the plan that fits your team's needs</p>
  </div>

  <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">

    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 hover:shadow-xl transition-all border border-gray-200">
      <h3 className="text-2xl font-bold mb-2 text-black">Starter</h3>
      <div className="mb-6">
        <span className={`text-4xl font-bold bg-gradient-to-r ${BRAND_GRADIENT} bg-clip-text text-transparent`}>
          $29
        </span>
        <span className="text-gray-600">/month</span>
      </div>

      <ul className="space-y-3 mb-8">
        {[
          'Up to 5 team members',
          '10 projects',
          'Basic integrations',
          'Email support',
        ].map((item) => (
          <li key={item} className="flex items-center gap-2">
            <CheckCircle size={20} className="text-green-500" />
            <span className='text-black'>{item}</span>
          </li>
        ))}
      </ul>

      <button className="w-full bg-gray-100 text-gray-900 py-3 rounded-full hover:bg-gray-200 transition-colors">
        Start Free Trial
      </button>
    </div>

    <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-8 border border-purple-300 shadow-lg relative">
      <div className={`absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r ${BRAND_GRADIENT} text-white px-4 py-1 rounded-full text-sm font-semibold`}>
        Most Popular
      </div>

      <h3 className="text-2xl font-bold mb-2 text-black">Growth ⭐</h3>

      <div className="mb-6">
        <span className={`text-4xl font-bold bg-gradient-to-r ${BRAND_GRADIENT} bg-clip-text text-transparent`}>
          $9
        </span>
        <span className="text-gray-700">/month</span>
      </div>

      <ul className="space-y-3 mb-8">
        {[
          'Unlimited team members',
          'Unlimited projects',
          'Advanced integrations',
          'Priority support',
          'Custom workflows',
        ].map((item) => (
          <li key={item} className="flex items-center gap-2">
            <CheckCircle size={20} className="text-green-600" />
            <span className='text-black'>{item}</span>
          </li>
        ))}
      </ul>

      <button className={`w-full bg-gradient-to-r ${BRAND_GRADIENT} text-white py-3 rounded-full hover:shadow-xl transition-all`}>
        Start Free Trial
      </button>
    </div>

    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 hover:shadow-xl transition-all border border-gray-200">
      <h3 className="text-2xl font-bold mb-2 text-black">Enterprise</h3>
      <div className="mb-6">
        <span className={`text-4xl font-bold bg-gradient-to-r ${BRAND_GRADIENT} bg-clip-text text-transparent`}>
          $299
        </span>
        <span className="text-gray-600">/month</span>
      </div>

      <ul className="space-y-3 mb-8">
        {[
          'Everything in Growth',
          'Dedicated account manager',
          'Custom integrations',
          'SSO & advanced security',
          '24/7 phone support',
        ].map((item) => (
          <li key={item} className="flex items-center gap-2">
            <CheckCircle size={20} className="text-green-500" />
            <span className='text-black'>{item}</span>
          </li>
        ))}
      </ul>

      <button className="w-full bg-gray-900 text-white py-3 rounded-full hover:bg-gray-800 transition-colors">
        Contact Sales
      </button>
    </div>

  </div>
</section> */}


{/* Contact Section - Premium Modern UI */}
<section id="contact" className="px-4 sm:px-6 py-20 max-w-7xl mx-auto">

  {/* Heading */}
  <div className="text-center mb-16">
    <span className={`text-sm font-semibold ${BRAND_TEXT_COLOR} mb-3 block`}>
      Contact Us
    </span>

    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-black">
      Let's Build Something Exceptional
    </h2>

    <p className="text-gray-600 max-w-xl mx-auto text-base sm:text-lg">
      Whether you're starting a project or need support—our team is ready to help.  
      Expect a reply within <span className="font-semibold">24 hours</span>.
    </p>
  </div>

  {/* Responsive Grid */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-14 md:gap-16">

    {/* Left Pane – Contact Card */}
    <div className="relative p-6 sm:p-8 md:p-10 rounded-3xl shadow-xl bg-white/60 backdrop-blur-lg border border-white/40">

      {/* Top gradient bar */}
      <div className={`absolute top-0 left-0 w-full h-2 rounded-t-3xl bg-gradient-to-r ${BRAND_GRADIENT}`}></div>

      {/* Title */}
      <h3 className="text-2xl sm:text-3xl font-bold text-black mb-8 sm:mb-10">
        Get In Touch
      </h3>

      <div className="space-y-8 sm:space-y-10">

        {/* Email Section */}
        <div className="flex gap-4 items-start">
          <div className={`w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-xl bg-gradient-to-br ${BRAND_GRADIENT} shadow-md`}>
            <Mail size={20} className="text-white" />
          </div>
          <div>
            <p className="text-lg font-semibold text-black">Service & Project Queries</p>
            <p className="text-gray-700 text-sm sm:text-base">hello@developerstudios.in</p>
          </div>
        </div>

        {/* Second Email */}
        <div className="flex gap-4 items-start">
          <div className={`w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-xl bg-gradient-to-br ${BRAND_GRADIENT} shadow-md`}>
            <Mail size={20} className="text-white" />
          </div>
          <div>
            <p className="text-lg font-semibold text-black">General Support</p>
            <p className="text-gray-700 text-sm sm:text-base">developerstudios@zohoomail.in</p>
          </div>
        </div>

        {/* Phone Section */}
        <div className="flex gap-4 items-start">
          <div className={`w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-xl bg-gradient-to-br ${BRAND_GRADIENT} shadow-md`}>
            <Phone size={20} className="text-white" />
          </div>
          <div>
            <p className="text-lg font-semibold text-black">Project & Service Call</p>
            <p className="text-gray-700 text-sm sm:text-base">+91 88897 97895</p>
          </div>
        </div>

        <div className="flex gap-4 items-start">
          <div className={`w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-xl bg-gradient-to-br ${BRAND_GRADIENT} shadow-md`}>
            <Phone size={20} className="text-white" />
          </div>
          <div>
            <p className="text-lg font-semibold text-black">Support Call</p>
            <p className="text-gray-700 text-sm sm:text-base">+91 96173 15754</p>
          </div>
        </div>

        {/* Location */}
        <div className="flex gap-4 items-start">
          <div className={`w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-xl bg-gradient-to-br ${BRAND_GRADIENT} shadow-md`}>
            <MapPin size={20} className="text-white" />
          </div>
          <div>
            <p className="text-lg font-semibold text-black">Office Location</p>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              2nd Floor, Twin Plaza, Telephone Exchange Road, Bilaspur, Chhattisgarh, India.
            </p>
          </div>
        </div>

        {/* Social icons */}
        <div className="pt-4 sm:pt-6 border-t border-gray-200">
          <h4 className="font-semibold text-lg text-black mb-3">Connect with us</h4>
          <SocialIcons />
        </div>

      </div>
    </div>

    {/* Right Pane – Contact Form */}
    <div className="p-6 sm:p-8 md:p-10 bg-white/60 rounded-3xl shadow-xl backdrop-blur-lg border border-white/40">
      <ContactForm brandGradient={BRAND_GRADIENT} />
    </div>

  </div>
</section>



{/* CTA Section - Updated Content and Brand Gradient */}
<section id="contact" className="px-6 py-20 max-w-7xl mx-auto">
  <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl p-12 md:p-20 text-center relative overflow-hidden">
    
    {/* Blur circles */}
    <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full blur-3xl opacity-50"></div>
    <div className="absolute bottom-10 left-10 w-40 h-40 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full blur-3xl opacity-50"></div>

    <div className="relative z-10">

      {/* Avatars */}
      <div className="flex items-center justify-center gap-3 mb-6">
        <img src="https://i.pravatar.cc/100?img=1" className="w-10 h-10 rounded-full bg-white" />
        <img src="https://i.pravatar.cc/100?img=4" className="w-10 h-10 rounded-full bg-white -ml-3" />
        <img src="https://i.pravatar.cc/100?img=3" className="w-10 h-10 rounded-full bg-white -ml-3" />
      </div>

      {/* Tag */}
      <div className="inline-block px-4 py-2 rounded-full text-sm mb-6 bg-white">
        <span className={`bg-gradient-to-r ${BRAND_GRADIENT} bg-clip-text text-transparent`}>
          Start Your 10x Growth Journey Today
        </span>
      </div>

      <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">Ready for Next-Gen Growth?</h2>

      {/* CTA buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <button className={`bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 flex items-center gap-2 bg-gradient-to-r ${BRAND_GRADIENT}`}>
          Get Your First Lead For Free <ArrowRight size={18} />
        </button>

        <button className="bg-white text-gray-900 px-8 py-3 rounded-full hover:bg-gray-50 flex items-center gap-2">
          Schedule a Demo <ArrowRight size={18} />
        </button>
      </div>
    </div>
  </div>
</section>

{/* Footer */}
<footer className="px-6 py-12 max-w-7xl mx-auto border-t border-gray-200">
  <div className="grid md:grid-cols-5 gap-8 mb-8">

    {/* Logo + About */}
    <div className="md:col-span-2">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full">
          <img src="./logo.png" alt="logo" className="w-full h-full object-cover" />
        </div>
        <span className="text-xl font-semibold text-black">DeveloperStudios</span>
      </div>

      <p className="text-gray-600 text-sm mt-2">
        Empowering global businesses with Custom IT Solutions, AI Automation, and high-impact Lead Generation strategies.
      </p>

      <div className="mt-4">
        <SocialIcons />
      </div>
    </div>

    {/* Product */}
    <div>
      <h4 className="font-semibold mb-4">Product</h4>
      <ul className="space-y-2 text-sm text-gray-600">
        <li><a href="#services" className="hover:text-gray-900">Services</a></li>
        <li><a href="#projects" className="hover:text-gray-900">Case Studies</a></li>
        <li><a href="#pricing" className="hover:text-gray-900">Pricing</a></li>
        <li><a href="#contact" className="hover:text-gray-900">Contact Sales</a></li>
      </ul>
    </div>

    {/* Resources */}
    <div>
      <h4 className="font-semibold mb-4">Resources</h4>
      <ul className="space-y-2 text-sm text-gray-600">
        <li><a href="#" className="hover:text-gray-900">Blog</a></li>
        <li><a href="#" className="hover:text-gray-900">Help Center</a></li>
        <li><a href="#" className="hover:text-gray-900">Guides & Docs</a></li>
        <li><a href="#" className="hover:text-gray-900">API Docs</a></li>
      </ul>
    </div>

    {/* Company */}
    <div>
      <h4 className="font-semibold mb-4">Company</h4>
      <ul className="space-y-2 text-sm text-gray-600">
        <li><a href="#about" className="hover:text-gray-900">About Us</a></li>
        <li><a href="https://developerstudios.in/careers" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900">Careers</a></li>
        <li><a href="#" className="hover:text-gray-900">Press Kit</a></li>
        <li><a href="#contact" className="hover:text-gray-900">Contact</a></li>
      </ul>
    </div>
  </div>

  <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-4">
    <p className="text-sm text-gray-600">© 2025 DeveloperStudios. All rights reserved.</p>
    <div className="flex items-center gap-6 text-sm text-gray-600">
      <a href="#" className="hover:text-gray-900">Privacy Policy</a>
      <a href="#" className="hover:text-gray-900">Terms & Conditions</a>
    </div>
  </div>
</footer>

    </div>
  );
}