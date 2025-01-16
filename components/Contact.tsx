"use client"
import React from "react";

const Contact = () => {
  return (
    <section id="testimonials" className="contact-container px-4 py-16 md:py-24">
      <div className="text-center mb-10">
        <h2 className="text-xl uppercase text-gray-500 mb-2">Connect with me</h2>
        <h1 className="text-4xl font-bold mb-4">Get in touch</h1>
       <p className="text-lg text-gray-600">
  I&#39;d love to hear from you! If you have any questions, comments, or feedback, please use the form below.
</p>

      </div>
      <form className="max-w-4xl mx-auto bg-white p-8 shadow-md rounded-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
        </div>
        <textarea
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
