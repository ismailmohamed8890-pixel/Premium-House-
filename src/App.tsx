/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Phone, MessageSquare, HardHat, Wrench, Building2, Building, Landmark, MapPin, Smartphone, Mail, Contact, ArrowRight, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-on-surface selection:bg-secondary-container selection:text-on-secondary-container">
      {/* Top Navigation */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-surface-white/80 backdrop-blur-md border-b border-outline-variant/10 shadow-sm py-4' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-0 max-w-container-max mx-auto">
          <div className="flex flex-col">
            <span className={`font-headline-md text-2xl md:text-3xl font-bold tracking-tight transition-colors duration-300 ${scrolled ? 'text-primary' : 'text-surface-white'}`}>
              Premium House
            </span>
            <span className="font-label-sm text-[10px] tracking-[0.3em] uppercase text-secondary">
              Real Estate
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {['Home', 'Metrics', 'About', 'Services', 'Why Us'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className={`transition-colors font-label-sm text-label-sm ${
                  scrolled 
                    ? 'text-on-surface-variant hover:text-secondary' 
                    : 'text-surface-white/80 hover:text-surface-white'
                }`}
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <div className={`hidden sm:flex items-center space-x-4 ${scrolled ? 'text-primary' : 'text-surface-white'}`}>
              <a href="tel:+97126660260" className="hover:opacity-80 transition-opacity">
                <Phone size={20} />
              </a>
              <a href="https://wa.me/+971503082777" className="hover:opacity-80 transition-opacity">
                <MessageSquare size={20} />
              </a>
            </div>
            <button className={`${scrolled ? 'bg-primary text-on-primary' : 'bg-surface-white text-primary'} px-6 py-2.5 font-label-sm text-label-sm hover:opacity-80 transition-all duration-300 active:scale-95`}>
              Connect Now
            </button>
            <button 
              className="md:hidden text-surface-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu className={scrolled ? 'text-primary' : 'text-surface-white'} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-surface-white pt-24 px-margin-mobile md:hidden"
          >
            <nav className="flex flex-col space-y-6">
              {['Home', 'Metrics', 'About', 'Services', 'Why Us'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="text-2xl font-serif text-primary border-b border-outline-variant/10 pb-4"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <div className="flex space-x-6 pt-6">
                <a href="tel:+97126660260" className="bg-surface-container p-4 rounded-full"><Phone size={24} /></a>
                <a href="https://wa.me/+971503082777" className="bg-surface-container p-4 rounded-full"><MessageSquare size={24} /></a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        {/* Section 1: Hero Chamber */}
        <section className="relative h-screen w-full flex items-center overflow-hidden" id="home">
          <div className="absolute inset-0 z-0">
            <img 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBl4Dm4n1kZEwTeYJCQZlhXRY9Oyq2rFdk4MGmNvfwcq5HmvDOfqGSFfOXqGeaO3MCc2PS-SgeAHrRpiOzyI8hNSwtsX4bGAKizN74_SwI4QMzrkj0UDXZ2hFIyrboQuNUPskR0yHTTiOOPy3eOCoc1eBQSs3hqMqUnb3GjXiqM4k8KY9aIM7ngt_0V32UvMxDWlidGPSJc95NTjyHvLmmNr5UCCAGBZzRiHL7Rka8S-T7Vop1JPzQX60SiTCRi25ePT5G0Yml-NQvX"
              alt="Luxury villa in Abu Dhabi"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/40 to-transparent"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-primary/20 to-primary/80"></div>
          </div>
          
          <div className="relative z-10 w-full px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-surface-white">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="max-w-3xl"
            >
              <div className="flex items-center space-x-3 mb-6 opacity-90">
                <span className="w-12 h-[1px] bg-secondary"></span>
                <span className="font-label-sm text-label-sm tracking-[0.2em] uppercase">Premium House Real Estate</span>
              </div>
              <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg mb-6 leading-tight">
                Elevating Property.<br />Defining Value.
              </h1>
              <p className="font-body-lg text-body-lg text-surface-variant/90 mb-10 max-w-2xl leading-relaxed">
                A specialized real estate company offering fully integrated solutions across the entire property sector. Backed by strong hands-on experience and a highly professional team, we manage your residential and commercial projects seamlessly from initial concept to final structural completion.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  className="flex items-center justify-center gap-3 bg-secondary-container text-on-secondary-container px-10 py-5 font-title-lg text-body-md hover:bg-secondary transition-colors group" 
                  href="https://wa.me/+971503082777"
                >
                  <MessageSquare size={20} />
                  WhatsApp Inquiry
                </a>
                <a 
                  className="flex items-center justify-center gap-3 border border-secondary text-secondary px-10 py-5 font-title-lg text-body-md hover:bg-secondary/10 transition-colors" 
                  href="tel:+97126660260"
                >
                  <Phone size={20} />
                  Direct Call
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section 2: Metrics Strip */}
        <section className="bg-primary-container py-24 border-y border-outline/10 text-surface-white" id="metrics">
          <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
              {[
                { label: 'Units Managed', value: '1,000+' },
                { label: 'Villas Maintained', value: '500+' },
                { label: 'Integrated Solutions', value: '100%' }
              ].map((metric, index) => (
                <motion.div 
                  key={metric.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center"
                >
                  <span className="font-display-lg text-secondary-fixed mb-2">{metric.value}</span>
                  <span className="font-label-sm text-label-sm uppercase tracking-widest text-[#858383]">{metric.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Corporate Profile */}
        <section className="py-32 md:py-40 bg-surface-white" id="about">
          <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img 
                    className="w-full h-full object-cover" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWKYnqt_PvNNgIYjtJt3ix1z2xi6N40-k4GajcuzH0lJePtEq6A6xcQ86OWXkDJEQzbNnyFP7SY4ov7vMszHBoIlhGVC14lkey6xWObuL7L35eh2i_hiXkW-T_OLHXkFBxbwMQE0EHkuudtq55svzJjWnKFzyxgVVWSCVVIa5HRtrOI034VNHI7cfSxpX7OW3ILcg2S_8R0EAnKg67cmbFilvFWgz4nhkmhqn45u5MdnZytJOyOMavGylji3sisnrujCpL_QGZm0cS"
                    alt="Corporate office"
                  />
                </div>
                <div className="absolute -bottom-8 -right-8 bg-secondary-fixed p-12 hidden md:block shadow-xl">
                  <span className="font-headline-md text-headline-md text-on-secondary-fixed block mb-2">15+</span>
                  <span className="font-label-sm text-label-sm text-on-secondary-fixed-variant uppercase tracking-widest">Years of Excellence</span>
                </div>
              </motion.div>

              <div>
                <span className="font-label-sm text-label-sm text-secondary uppercase tracking-[0.3em] mb-4 block">Corporate Profile</span>
                <h2 className="font-headline-xl text-headline-xl mb-8">About Premium House</h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant mb-12 leading-relaxed">
                  Premium House Real Estate stands as a pillar of reliability in the UAE's dynamic property landscape. We transcend traditional brokerage by offering an ecosystem of services—from groundbreaking construction to meticulous asset management. Our legacy is built on the convergence of technical precision and local market mastery.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                  <div className="p-8 bg-surface-container-low border-l-4 border-secondary">
                    <h3 className="font-title-lg text-title-lg mb-3">Our Vision</h3>
                    <p className="font-body-md text-body-md text-on-surface-variant">To define the new standard of integrated real estate excellence in the GCC region through innovation and transparency.</p>
                  </div>
                  <div className="p-8 bg-surface-container-low border-l-4 border-secondary">
                    <h3 className="font-title-lg text-title-lg mb-3">Our Mission</h3>
                    <p className="font-body-md text-body-md text-on-surface-variant">Empowering property owners with seamless management, development, and investment strategies that maximize long-term value.</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  {['Professionalism', 'Transparency', 'Quality', 'Commitment', 'Sustainability'].map(tag => (
                    <span key={tag} className="px-4 py-2 bg-surface-container-highest text-on-surface-variant font-label-sm text-[10px] uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Integrated Services */}
        <section className="py-32 md:py-40 bg-surface" id="services">
          <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
              <div className="max-w-2xl">
                <span className="font-label-sm text-label-sm text-secondary uppercase tracking-[0.3em] mb-4 block">The Ecosystem</span>
                <h2 className="font-headline-xl text-headline-xl">Integrated Services</h2>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-xs">One partner. Every solution for your real estate journey.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-gutter">
              {/* Construction */}
              <motion.div 
                whileHover={{ y: -10 }}
                className="md:col-span-3 lg:col-span-4 bg-surface-white p-10 border border-outline-variant/10 shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                <HardHat className="text-4xl text-secondary mb-8" size={32} />
                <h3 className="font-title-lg text-title-lg mb-4">Construction & Contracting</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">Turnkey solutions from ground-breaking to handover, ensuring structural integrity and premium finishes.</p>
              </motion.div>

              {/* Maintenance */}
              <motion.div 
                whileHover={{ y: -10 }}
                className="md:col-span-3 lg:col-span-4 bg-surface-white p-10 border border-outline-variant/10 shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                <Wrench className="text-4xl text-secondary mb-8" size={32} />
                <h3 className="font-title-lg text-title-lg mb-4">Maintenance & Facilities</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">24/7 proactive facility management for residential villas and corporate commercial spaces.</p>
              </motion.div>

              {/* Management */}
              <motion.div 
                whileHover={{ y: -10 }}
                className="md:col-span-6 lg:col-span-4 bg-primary text-on-primary p-10 border border-outline-variant/10 shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                <Building2 className="text-4xl text-secondary-fixed mb-8" size={32} />
                <h3 className="font-title-lg text-title-lg mb-4">Property Management</h3>
                <p className="font-body-md text-body-md text-[#858383]">Optimizing rental yields, tenant screening, and financial reporting with institutional precision.</p>
              </motion.div>

              {/* Brokerage */}
              <motion.div 
                whileHover={{ y: -10 }}
                className="md:col-span-6 lg:col-span-7 bg-surface-white p-10 border border-outline-variant/10 shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex flex-col md:flex-row gap-8">
                  <Building className="text-4xl text-secondary shrink-0" size={32} />
                  <div>
                    <h3 className="font-title-lg text-title-lg mb-4">Brokerage</h3>
                    <p className="font-body-md text-body-md text-on-surface-variant">Exclusive listings and strategic advisory for buyers and sellers in the luxury Abu Dhabi market.</p>
                  </div>
                </div>
              </motion.div>

              {/* Mortgage */}
              <motion.div 
                whileHover={{ y: -10 }}
                className="md:col-span-6 lg:col-span-5 bg-surface-white p-10 border border-outline-variant/10 shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex flex-col md:flex-row gap-8">
                  <Landmark className="text-4xl text-secondary shrink-0" size={32} />
                  <div>
                    <h3 className="font-title-lg text-title-lg mb-4">Mortgage & Financing</h3>
                    <p className="font-body-md text-body-md text-on-surface-variant">Tailored financial advice and access to premium banking rates for high-net-worth investors.</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section 5: Strategic Edge */}
        <section className="py-32 md:py-40 bg-primary-container text-surface-white border-y border-outline/10" id="why-us">
          <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
            <div className="flex flex-col lg:flex-row gap-20">
              <div className="lg:w-1/3 lg:sticky lg:top-40 h-fit">
                <span className="font-label-sm text-label-sm text-secondary-fixed uppercase tracking-[0.3em] mb-4 block">Strategic Edge</span>
                <h2 className="font-headline-xl text-headline-xl text-surface-white leading-tight">Why Partners Choose Premium House</h2>
              </div>
              <div className="lg:w-2/3 space-y-24">
                {[
                  {
                    num: '01',
                    title: 'Proven Track Record',
                    text: 'Our portfolio spans iconic developments across Abu Dhabi. We don\'t just promise results; we have delivered sustained growth and flawless execution for over a decade.'
                  },
                  {
                    num: '02',
                    title: 'Everything Under One Roof',
                    text: 'Forget managing multiple contractors. From engineering to legal brokerage, we provide a unified command structure for your real estate assets.'
                  },
                  {
                    num: '03',
                    title: 'Measurable Results',
                    text: 'Our approach is data-driven. We provide transparent reporting on ROI, occupancy rates, and maintenance efficiencies, ensuring you are always in control.'
                  }
                ].map((item, i) => (
                  <motion.div 
                    key={item.num}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.2 }}
                    viewport={{ once: true }}
                    className="flex gap-10"
                  >
                    <span className="font-display-lg text-secondary-fixed opacity-20">{item.num}</span>
                    <div>
                      <h3 className="font-headline-md text-headline-md mb-6">{item.title}</h3>
                      <p className="font-body-lg text-body-lg text-[#858383] leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Instant Communication */}
        <section className="py-32 md:py-40 bg-surface-white" id="connect">
          <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
              {/* Action Blocks */}
              <div className="space-y-6">
                <motion.a 
                  whileHover={{ x: 10 }}
                  className="flex items-center justify-between p-10 bg-secondary-container text-on-secondary-container hover:bg-secondary hover:text-surface-white transition-all duration-300 group" 
                  href="https://wa.me/+971503082777"
                >
                  <div className="flex items-center gap-6">
                    <MessageSquare size={40} />
                    <div>
                      <span className="font-title-lg text-title-lg block">WhatsApp Executive</span>
                      <span className="font-body-md opacity-70">Average response: 5 mins</span>
                    </div>
                  </div>
                  <ArrowRight size={32} className="group-hover:translate-x-2 transition-transform" />
                </motion.a>
                
                <motion.a 
                  whileHover={{ x: 10 }}
                  className="flex items-center justify-between p-10 border-2 border-secondary text-secondary hover:bg-secondary/5 transition-all duration-300 group" 
                  href="tel:+97126660260"
                >
                  <div className="flex items-center gap-6">
                    <Phone size={40} />
                    <div>
                      <span className="font-title-lg text-title-lg block">Call Headquarters</span>
                      <span className="font-body-md opacity-70">Direct line to our specialists</span>
                    </div>
                  </div>
                  <ArrowRight size={32} className="group-hover:translate-x-2 transition-transform" />
                </motion.a>
              </div>

              {/* Corporate Info */}
              <div className="p-10 bg-primary text-on-primary">
                <h3 className="font-headline-md text-headline-md mb-10 text-secondary-fixed">Premium House Headquarters</h3>
                <div className="space-y-8">
                  <div className="flex gap-6">
                    <MapPin className="text-secondary" size={24} />
                    <p className="font-body-md text-[#858383]">Office 702, Floor 4, Building 54,<br />Al Zahiah St. Abu Dhabi, UAE</p>
                  </div>
                  <div className="flex gap-6">
                    <Phone className="text-secondary" size={24} />
                    <p className="font-body-md text-[#858383]">+971 2 666 0260</p>
                  </div>
                  <div className="flex gap-6">
                    <Smartphone className="text-secondary" size={24} />
                    <p className="font-body-md text-[#858383]">+971 50 308 2777</p>
                  </div>
                  <div className="flex gap-6">
                    <Mail className="text-secondary" size={24} />
                    <p className="font-body-md text-[#858383]">admin@premiumhouseyae.com</p>
                  </div>
                  <div className="flex gap-6">
                    <Contact className="text-secondary" size={24} />
                    <p className="font-body-md text-[#858383]">P.O. Box: 00000, Abu Dhabi</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer Map */}
        <div className="w-full h-[400px] grayscale contrast-125 brightness-75 hover:grayscale-0 transition-all duration-500 overflow-hidden">
          <img 
            className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-700" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDO6d2_ni3oLvrJy9twS4exhCGYCAQgYxgDKxHVAdUxoALcV1yyyEVVBYzwlSbG6iDxy8HHT7HE7d0k5tiW3V27DBmMOcgxYkxkg0lnYkit9Vtc3U74Wxucg8ciVvnBEzlUBMIXiQgHkG0GUTlesKm_EFvoxERuLTJpG8bMfyg564DodXaHID1pGGmmZ8jaQdmW0XcNEwXmiXiUsQ1WFe5bUYhM1TvCDKlUucOnQeVtFD_OEAdmlu9xrj2XU6fpTa_t0PC1wUnpEXcB"
            alt="Business district map"
          />
        </div>
      </main>

      {/* Global Footer */}
      <footer className="bg-primary border-t border-outline/20 text-surface-white">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-mobile md:px-margin-desktop py-20 max-w-container-max mx-auto">
          <div className="md:col-span-2">
            <span className="font-headline-md text-headline-md text-surface-white block mb-6">Premium House</span>
            <p className="text-[#858383] font-body-md max-w-md leading-relaxed">
              Licensed by Abu Dhabi Department of Municipalities and Transport. A leading force in integrated real estate solutions, property management, and strategic development.
            </p>
          </div>
          
          <div>
            <span className="font-title-lg text-title-lg text-on-primary block mb-6">Company</span>
            <ul className="space-y-4">
              {['Privacy Policy', 'Terms of Service', 'Investor Relations', 'Global Offices'].map(link => (
                <li key={link}>
                  <a className="text-[#858383] hover:text-surface-white font-body-md hover:translate-x-1 transition-transform inline-block" href="#">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span className="font-title-lg text-title-lg text-on-primary block mb-6">Newsletter</span>
            <div className="relative">
              <input 
                className="w-full bg-surface-white/10 border-none text-surface-white p-4 focus:ring-2 focus:ring-secondary focus:outline-none" 
                placeholder="Email Address" 
                type="email" 
              />
              <button className="absolute right-4 top-1/2 -translate-y-1/2 text-secondary-container hover:text-secondary transition-colors">
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>

        <div className="px-margin-mobile md:px-margin-desktop py-10 border-t border-outline/10 max-w-container-max mx-auto">
          <p className="text-[#858383] font-label-sm text-[10px] text-center md:text-left opacity-50">
            © 2024 Premium House Real Estate. All rights reserved. Licensed by Abu Dhabi Department of Municipalities and Transport.
          </p>
        </div>
      </footer>
    </div>
  );
}

