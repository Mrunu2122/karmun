'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

// const services = [
//   {
//     title: 'Mobile App Development',
//     description: 'Building sleek, high-performance mobile apps for iOS and Android.',
//     image: '/mobile.png',
//   },
//   {
//     title: 'Website Development',
//     description: 'Crafting fast, responsive, and visually stunning websites tailored to your brand.',
//     image: '/website.png',
//   },
//   {
//     title: 'Custom Software Development',
//     description: 'Developing scalable, tailor-made software to solve your unique business challenges.',
//     image: '/software.png',
//   },
//   {
//     title: 'And many more…..',
//     description: 'Logo & Branding Design, Digital Transformation, Cloud & Hosting Solutions, Social Media Marketing, AI & Automation.',
//     image: '/more.png',
//   },
//   {
//     title: 'UI/UX Design',
//     description: 'Designing intuitive and engaging digital experiences your users will love.',
//     image: '/uiux.png',
//   },
//   {
//     title: 'SEO & Digital Marketing',
//     description: 'Driving traffic, leads, and growth through smart SEO and digital campaigns.',
//     image: '/seo.png',
//   },
// ];

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen font-sans overflow-hidden">
      {/* Navbar */}
      <header className="w-[1312px] h-[69px] rounded-[20px] relative top-[62px] left-[64px] flex items-center justify-between px-6 py-4 mr-3">
        {/* Logo and Brand */}
        <div className="flex items-center">
          <img
            src="/logo.png"
            alt="Karmun Logo"
            className="w-[50px] h-[50px] object-contain"
          />
          <span className="ml-2 text-[24px] font-bold bg-[linear-gradient(90deg,#82F369_0%,#91CFFF_40%,#FFAACC_100%)] text-transparent bg-clip-text">
            KarMun Inc.
          </span>
        </div>

        {/* Center: Navigation Buttons */}
        <nav className="flex gap-4 absolute left-1/2 transform -translate-x-1/2">
          {["Services", "About", "Home"].map((label, idx) => (
            <div
              key={idx}
              className="rounded-[20px] p-[2px]"
              style={{
                background: "linear-gradient(90deg, #82F369 , #91CFFF, #FFAACC)",
                borderRadius: "20px",
              }}
            >
              <button className="w-[135px] h-[56px] rounded-[18px] bg-black text-white font-medium">
                {label}
              </button>
            </div>
          ))}
        </nav>

        {/* Contact Button */}
        <div
          className="rounded-[20px] p-[2px]"
          style={{
            background:
              "linear-gradient(90deg, #FFC0CB 0%, #FF7F50 25%, #DC143C 50%, #8B0000 75%)",
          }}
        >
          <button className="w-[135px] h-[56px] rounded-[18px] bg-black font-medium text-[#FF5E5E]">
            Contact
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <motion.section
        className="text-center py-30 px-4"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* "Your Partner in Digital" */}
        <div className="absolute top-[244px] left-[300px]">
          <h2 className="text-white font-[400] text-[74px] leading-[100%] tracking-[0%] text-center font-montserrat">
            Your Partner in Digital <br />
          </h2>
        </div>

        {/* "TRANSFORMATION" Gradient Text */}
        <div className="absolute top-[337px] left-[240px] w-[855px] h-[73px]">
          <h2 className="text-center font-[400] text-[74px] leading-[100%] tracking-[0%] font-poppins align-middle">
            <span className="bg-gradient-to-r from-[#0271C5] to-[#FDBE00] text-transparent bg-clip-text">
              TRANSFORMATION
            </span>
          </h2>
        </div>

        {/* Subheading */}
        <div className="absolute top-[430px] left-[291px] w-[858px] h-[53px]">
          <p className="text-center font-[700] text-[24px] leading-[100%] tracking-[0%] text-[#8B8B8B] font-genos">
            Scalable. Performant. Custom-built solutions for startups and enterprise teams
          </p>
        </div>

        {/* Metrics Image */}
        <div className="absolute top-[503px] left-[395px] w-[650.25px] h-[220px]">
          <img
            src="/100.png"
            alt="Metrics Overview"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Gradient Bordered Image */}
        <div
          className=" bg-black absolute top-[794px] left-[672px] w-[129px] h-[56px] rounded-[20px] p-[1px]"
          style={{
            // border: "1px solid",
            borderImageSource:
              "linear-gradient(90deg, #8B0000 0%, #DC143C 44.71%, #8B0000 75%)",
            // borderImageSlice: 1,
          }}
        >
          <img
            src="/Contact.png"
            alt="Decorative CTA"
            className="w-full h-full rounded-[20px] object-cover"
          />
        </div>

        {/* New Text Section (as requested) */}
        <div className="absolute top-[913px] left-[438px] w-[564px] h-[48px]">
          <p className="text-center font-genos font-bold text-[24px] leading-[100%] text-[#8B8B8B]">
            Reach out to discuss your project or just say hello we're always up for a good conversation.
          </p>
        </div>
      </motion.section>

      {/* Featured Website Development Section */}
      {/* <section className="bg-[#0F0F0F] py-12 px-6 rounded-xl max-w-6xl mx-auto mb-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-lg">
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
      </section> */}

      {/* Services Section */}
      {/* <motion.section
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
      </motion.section> */}

      {/* About Placeholder */}
      {/* <section className="text-left text-gray-700 px-6 pb-12">
        <h3 className="text-xl font-semibold text-white">About</h3> */}
        {/* Add animated content here if needed */}
      {/* </section> */}
    </main>
  );
}
