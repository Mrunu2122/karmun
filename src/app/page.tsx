'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const services = [
  {
    title: 'Mobile App Development',
    description: 'Building sleek, high-performance mobile apps for iOS and Android.',
    image: '/mobile.png',
  },
  {
    title: 'Website Development',
    description: 'Crafting fast, responsive, and visually stunning websites tailored to your brand.',
    image: '/website.png',
  },
  {
    title: 'Custom Software Development',
    description: 'Developing scalable, tailor-made software to solve your unique business challenges.',
    image: '/software.png',
  },
  {
    title: 'And many more…..',
    description: 'Logo & Branding Design, Digital Transformation, Cloud & Hosting Solutions, Social Media Marketing, AI & Automation.',
    image: '/more.png',
  },
  {
    title: 'UI/UX Design',
    description: 'Designing intuitive and engaging digital experiences your users will love.',
    image: '/uiux.png',
  },
  {
    title: 'SEO & Digital Marketing',
    description: 'Driving traffic, leads, and growth through smart SEO and digital campaigns.',
    image: '/seo.png',
  },
];

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen font-sans">
      {/* Navbar */}
      <header className="flex justify-between items-center px-6 py-4">
        <h1 className="text-xl font-bold text-[#00FFAA]">Karmun Inc.</h1>
        <nav className="flex gap-4">
          <button className="border border-white px-4 py-1 rounded hover:bg-white hover:text-black">Services</button>
          <button className="border border-white px-4 py-1 rounded hover:bg-white hover:text-black">About</button>
          <button className="border border-white px-4 py-1 rounded hover:bg-white hover:text-black">Home</button>
          <button className="bg-red-600 px-4 py-1 rounded hover:bg-red-700 text-white">Contact</button>
        </nav>
      </header>

      {/* Hero Section */}
      <motion.section
        className="text-center py-12 px-4"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl md:text-4xl font-semibold italic">
          Your Partner in Digital <br />
          <span className="text-[#D3B037] tracking-widest font-bold">TRANSFORMATION</span>
        </h2>
        <p className="mt-2 text-sm text-gray-400">
          SCROLL DOWN TO EXPLORE OUR SERVICE AND EXPERTISE SECTION
        </p>

        {/* Metrics */}
        <motion.div
  className="flex justify-center gap-6 mt-8 flex-wrap"
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ delay: 0.5, duration: 0.6 }}
>
  {["Performance", "Accessibility", "Best Practices", "SEO"].map((label, index) => (
    <motion.div
      key={label}
      className="flex flex-col items-center text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7 + index * 0.2 }}
    >
      <div className="w-24 h-24 rounded-full border-4 border-green-400 flex items-center justify-center mb-2">
        <p className="text-2xl text-green-400 font-bold">100</p>
      </div>
      <p className="text-sm text-white">{label}</p>
    </motion.div>
  ))}
</motion.div>


        <div className="mt-8">
          <span className="text-2xl animate-bounce">⬇</span>
        </div>
      </motion.section>

      {/* Featured Website Development Section */}
      <section className="bg-[#0F0F0F] py-12 px-6 rounded-xl max-w-6xl mx-auto mb-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-lg">
        <div className="md:w-1/2">
          <Image
            src="/featured-website.png"
            alt="Website Development"
            width={1008}
            height={450}
            className="rounded-xl"
          />
        </div>
        <div className="md:w-1/2 text-white text-center md:text-left">
          <h3 className="text-2xl font-bold mb-4">Website Development</h3>
          <p className="text-lg text-gray-300">
            Crafting fast, responsive, and visually stunning websites tailored to your brand.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <motion.section
        className="text-center py-16 px-6"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-2xl font-bold mb-12">
          <span className="text-[#00FFAA]">SERVICES</span>{" "}
          <span className="text-[#F9B233] italic">We Provide</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-[#0F0F0F] border border-gray-700 rounded-xl p-4 flex flex-col md:flex-row items-center gap-4 shadow-md"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Image
                src={service.image}
                alt={service.title}
                width={120}
                height={120}
                className="rounded-lg object-contain"
              />
              <div className="text-left">
                <h4 className="text-white text-lg font-semibold">{service.title}</h4>
                <p className="text-sm text-gray-300 mt-2">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* About Placeholder */}
      <section className="text-left text-gray-700 px-6 pb-12">
        <h3 className="text-xl font-semibold text-white">About</h3>
        {/* Add animated content here if needed */}
      </section>
    </main>
  );
}
