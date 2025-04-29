import React from "react";
import Image from "next/image";

const Contact: React.FC = () => {
  return (
    <section className="bg-white text-black min-h-screen flex flex-col items-center justify-center px-4 py-12">
      {/* Centered Heading */}
      <h2 className="font-gajraj text-7xl font-bold text-center mb-12">
        <span className="text-blue-500">Lets</span>{" "}
        <span className="bg-gradient-to-r from-green-400 via-yellow-400 to-yellow-500 text-transparent bg-clip-text">
          Connect
        </span>
      </h2>

      {/* Grid Layout for Image + Form */}
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Left - Join Now Arrow Image */}
        <div className="flex justify-center">
          <Image
            src="/CallButton.png"
            alt="Join Now Arrow"
            width={160}
            height={160}
            className="object-contain"
          />
        </div>

        {/* Right - Form */}
        <div className="space-y-4">
          <form className="space-y-4">
            <div>
              <label className="block mb-1 text-sm">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 rounded bg-white-800 border border-gray-600 focus:outline-none"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm">Email</label>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 rounded bg-white-800 border border-gray-600 focus:outline-none"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm">
                What service are you interested in
              </label>
              <select className="w-full px-4 py-2 rounded bg-white-800 border border-gray-600 focus:outline-none">
                <option value="">Select project type</option>
                <option value="website">Website Development</option>
                <option value="design">UI/UX Design</option>
                <option value="branding">Branding</option>
              </select>
            </div>

            <div>
              <label className="block mb-1 text-sm">Budget</label>
              <select className="w-full px-4 py-2 rounded bg-white-800 border border-gray-600 focus:outline-none">
                <option value="">Select project budget</option>
                <option value="500-1000">500rs - 1000rs</option>
                <option value="1000-3000">1000rs - 3000rs</option>
                <option value="3000+">3000rs+</option>
              </select>
            </div>

            <div>
              <label className="block mb-1 text-sm">Message</label>
              <textarea
                rows={5}
                placeholder="Tell us about your project"
                className="w-full px-4 py-2 rounded bg-white-800 border border-gray-600 focus:outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-2 bg-black text-white font-semibold rounded transition transform hover:scale-105"
            >
              Submit
            </button>


          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
