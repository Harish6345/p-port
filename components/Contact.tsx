"use client";

import React, { useState } from "react";

const Contact: React.FC = () => {
  const [status, setStatus] = useState<string | null>(null); // Status for form submission

  // Handle form submission
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);

    // Add your access key here (using your provided key)
    formData.append("access_key", "9082a91d-d8b0-4ee6-9bd4-e724efca139f");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());

      if (res.success) {
        setStatus("Form submitted successfully!");
        (event.target as HTMLFormElement).reset(); // Reset form on success
      } else {
        setStatus("There was an error submitting the form.");
      }
    } catch (error) {
      setStatus("There was an error submitting the form.");
      console.error("Error:", error);
    }
  };

  return (
    <section id="testimonials" className="contact-container px-4 py-16 md:py-24">
      <div className="text-center mb-10">
        <h2 className="text-xl uppercase text-gray-500 mb-2">Connect with me</h2>
        <h1 className="text-4xl font-bold mb-4">Get in touch</h1>
        <p className="text-lg text-gray-600">
          I&#39;d love to hear from you! If you have any questions, comments, or feedback, please use the form below.
        </p>
      </div>

      {status && <p className="text-center text-lg mb-6">{status}</p>} {/* Status message */}

      <form className="max-w-4xl mx-auto bg-white p-8 shadow-md rounded-md" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className="w-full p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="w-full p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
        </div>
        <textarea
          name="message"
          placeholder="Enter your message"
          rows={5}
          className="w-full p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 mb-6"
        ></textarea>
        <div className="flex justify-center">
          <button
            type="submit"
            className="px-6 py-3 bg-black text-white rounded-full text-lg shadow-md hover:bg-gray-800 transition-all duration-300"
          >
            Submit now →
          </button>
        </div>
      </form>

      <footer className="text-center mt-16">
        <p className="text-gray-500 text-sm">
          ©️ 2025 Harish. All rights reserved.
        </p>
        <a
          href="mailto:meduruharish77@gmail.com"
          className="text-lg font-semibold text-black flex justify-center items-center mt-4"
        >
          <span className="mr-2">📧</span> meduruharish77@gmail.com
        </a>
        <div className="h-[2px] w-full bg-gray-100 my-3"></div>
        <div className="mt-6 text-gray-500 text-sm">
          <a href="#" className="mx-2 hover:underline">
            Terms of Services
          </a>
          <a href="#" className="mx-2 hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="mx-2 hover:underline">
            Connect with me
          </a>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
