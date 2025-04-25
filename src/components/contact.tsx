"use client";

import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    projectBudget: "",
    description: "",
  });

  const [formError, setFormError] = useState({
    name: "",
    email: "",
    projectType: "",
    projectBudget: "",
    description: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const errors = { ...formError };

    if (!formData.name) {
      errors.name = "Name is required.";
    } else {
      errors.name = "";
    }

    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Valid email is required.";
    } else {
      errors.email = "";
    }

    if (!formData.projectType) {
      errors.projectType = "Project type is required.";
    } else {
      errors.projectType = "";
    }

    if (!formData.projectBudget) {
      errors.projectBudget = "Project budget is required.";
    } else {
      errors.projectBudget = "";
    }

    if (!formData.description) {
      errors.description = "Description is required.";
    } else {
      errors.description = "";
    }

    setFormError(errors);

    return Object.values(errors).every((error) => error === "");
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    // Create a message format for WhatsApp
    const message = `*New Contact Form Submission*\n\nName: ${formData.name}\nEmail: ${formData.email}\nProject Type: ${formData.projectType}\nProject Budget: ${formData.projectBudget}\nDescription: ${formData.description}`;

    // Encode the message to handle special characters
    const encodedMessage = encodeURIComponent(message);

    // WhatsApp API link (replace with your actual phone number)
    const whatsappLink = `https://wa.me/918180811338?text=${encodedMessage}`;

    // Redirect to WhatsApp with the message pre-filled
    window.open(whatsappLink, "_blank");

    // Optionally, reset the form and show success message
    setIsSubmitted(true);
    setFormData({
      name: "",
      email: "",
      projectType: "",
      projectBudget: "",
      description: "",
    });
  };

  return (
    <div className="px-4 py-12">
      <h2 className="tracking-tight text-[38px] md:text-[56px] lg:text-[74px] text-center font-[400] mb-12">
        <span className="bg-gradient-to-r from-[#0271C5] via-[#FDBE00] to-[#FDBE00] text-transparent bg-clip-text font-gajraj">
          Let&apos;s
        </span>
        <span className="text-black font-montserrat"> Connect</span>
      </h2>

      <div>
        {isSubmitted && (
          <div className="text-center text-green-500 mb-6">
            <p>Thank you for your submission! We will get back to you soon.</p>
          </div>
        )}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 w-full max-w-2xl mx-auto bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-xl"
        >
          {/* Name */}
          <div className="relative">
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="peer w-full border-b-2 border-gray-300 bg-transparent py-4 placeholder-transparent focus:border-black focus:outline-none"
              placeholder="Your Name"
            />
            <label
              htmlFor="name"
              className="absolute left-0 -top-2.5 text-gray-600 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-gray-600"
            >
              Your Name
            </label>
            {formError.name && (
              <p className="text-red-500 text-sm mt-1">{formError.name}</p>
            )}
          </div>

          {/* Email */}
          <div className="relative">
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="peer w-full border-b-2 border-gray-300 bg-transparent py-4 placeholder-transparent focus:border-black focus:outline-none"
              placeholder="Your Email"
            />
            <label
              htmlFor="email"
              className="absolute left-0 -top-2.5 text-gray-600 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-gray-600"
            >
              Your Email
            </label>
            {formError.email && (
              <p className="text-red-500 text-sm mt-1">{formError.email}</p>
            )}
          </div>

          {/* Project Type */}
          <div className="relative">
            <select
              name="projectType"
              id="projectType"
              value={formData.projectType}
              onChange={handleChange}
              required
              className="peer w-full border-b-2 border-gray-300 bg-transparent py-4 appearance-none focus:border-black focus:outline-none"
            >
              <option value="" disabled hidden>
                Select project type
              </option>
              <option value="web">Web-Development</option>
              <option value="mobile">Mobile-App</option>
              <option value="design">UI/UX-Design</option>
            </select>
            <label
              htmlFor="projectType"
              className="absolute left-0 -top-2.5 text-gray-600 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-gray-600"
            >
              Project Type
            </label>
            {formError.projectType && (
              <p className="text-red-500 text-sm mt-1">
                {formError.projectType}
              </p>
            )}
          </div>

          {/* Project Budget */}
          <div className="relative">
            <select
              name="projectBudget"
              id="projectBudget"
              value={formData.projectBudget}
              onChange={handleChange}
              required
              className="peer w-full border-b-2 border-gray-300 bg-transparent py-4 appearance-none focus:border-black focus:outline-none"
            >
              <option value="" disabled hidden>
                Select project budget
              </option>
              <option value="under5k">Under ₹5,000</option>
              <option value="5k-10k">₹5,000 - ₹10,000</option>
              <option value="10k+">Above ₹10,000</option>
            </select>
            <label
              htmlFor="projectBudget"
              className="absolute left-0 -top-2.5 text-gray-600 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-gray-600"
            >
              Project Budget
            </label>
            {formError.projectBudget && (
              <p className="text-red-500 text-sm mt-1">
                {formError.projectBudget}
              </p>
            )}
          </div>

          {/* Project Description */}
          <div className="relative">
            <textarea
              name="description"
              id="description"
              value={formData.description}
              onChange={handleChange}
              rows={5}
              required
              className="peer w-full border-b-2 border-gray-300 bg-transparent py-4 placeholder-transparent focus:border-black focus:outline-none resize-none"
              placeholder="Describe your project"
            />
            <label
              htmlFor="description"
              className="absolute left-0 -top-2.5 text-gray-600 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-gray-600"
            >
              Describe your project
            </label>
            {formError.description && (
              <p className="text-red-500 text-sm mt-1">
                {formError.description}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="mt-6 bg-black text-white py-4 rounded-xl hover:bg-gray-800 transition-all font-semibold tracking-wide"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
