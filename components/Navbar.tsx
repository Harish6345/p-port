"use client";
import gsap from "gsap";
import { useRef, useEffect, useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Navbar() {
  const data = "harish.";
  const arr = data.split("");
  const refs = useRef<(HTMLHeadingElement | null)[]>([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (refs.current) {
      gsap.fromTo(
        refs.current.filter((el): el is HTMLHeadingElement => el !== null),
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: {
            each: 0.7,
            yoyo: true,
          },
        }
      );
    }
    gsap.from(".btn", {
      y: -100,
      duration: 2,
      scale: 2,
      ease: "elastic.inOut",
    });
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="flex items-center justify-between p-4 sm:p-6 md:p-8 lg:p-10 relative">
      {/* Logo Section */}
      <div className="logo-container flex items-center space-x-2">
        {arr.map((item, index) => (
          <h1
            className="text-2xl font-bold uppercase"
            key={index}
            ref={(el) => {
              refs.current[index] = el; // Assign `el` to the refs array
            }}
          >
            {item}
          </h1>
        ))}
      </div>

      {/* Navbar Links (Desktop) */}
      <div className="hidden lg:block relative py-4 px-6 w-full sm:w-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-100/90 via-sky-100/90 to-indigo-100/90 blur-lg rounded-lg"></div>
        <div className="navbar-links relative flex gap-4 px-8 py-3 rounded-full bg-white flex-wrap justify-center sm:justify-start">
          <a
            className="relative after:content-[''] after:block after:h-[2px] after:bg-gradient-to-r from-sky-400 via-orange-400 to-red-200 after:w-0 after:origin-center after:transition-all hover:after:w-full"
            href="#home"
          >
            Home
          </a>
          <a
            className="relative after:content-[''] after:block after:h-[2px] after:bg-gradient-to-r from-sky-400 via-orange-400 to-red-200 after:w-0 after:origin-center after:transition-all hover:after:w-full"
            href="#about"
          >
            About Me
          </a>
          <a
            className="relative after:content-[''] after:block after:h-[2px] after:bg-gradient-to-r from-sky-400 via-orange-400 to-red-200 after:w-0 after:origin-center after:transition-all hover:after:w-full"
            href="#services"
          >
            Services
          </a>
          <a
            className="relative after:content-[''] after:block after:h-[2px] after:bg-gradient-to-r from-sky-400 via-orange-400 to-red-200 after:w-0 after:origin-center after:transition-all hover:after:w-full"
            href="#work"
          >
            My Work
          </a>
          <a
            className="relative after:content-[''] after:block after:h-[2px] after:bg-gradient-to-r from-sky-400 via-orange-400 to-red-200 after:w-0 after:origin-center after:transition-all hover:after:w-full"
            href="#testimonials"
          >
            Contact
          </a>
        </div>
      </div>

      {/* Connect Button */}
      <div className="md:block connect-btn">
        <a href="https://www.linkedin.com/in/meduruharish/">
          <button className="border btn flex items-center gap-2 rounded-full px-6 py-2 hover:bg-gradient-to-r from-sky-200/10 via-orange-400/10 to-pink-500/10 duration-300">
            Connect <MdArrowOutward />
          </button>
        </a>
      </div>

      {/* Hamburger Menu Icon */}
      <button
        className={`lg:hidden flex items-center justify-center space-y-2 z-50 ${
          isMenuOpen ? "hidden" : ""
        }`}
        onClick={toggleMenu}
      >
        <RxHamburgerMenu size={30} />
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className={`lg:hidden absolute top-0 left-0 w-full h-screen bg-white z-40 p-8 transition-all transform ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="navbar-links flex flex-col gap-6 text-center">
            <a href="#home" className="py-2 text-xl" onClick={closeMenu}>
              Home
            </a>
            <a href="#about" className="py-2 text-xl" onClick={closeMenu}>
              About Me
            </a>
            <a href="#services" className="py-2 text-xl" onClick={closeMenu}>
              Services
            </a>
            <a href="#work" className="py-2 text-xl" onClick={closeMenu}>
              My Work
            </a>
            <a href="#testimonials" className="py-2 text-xl" onClick={closeMenu}>
              Contact
            </a>
          </div>
          <button
            className="absolute top-4 right-4 text-3xl text-black"
            onClick={toggleMenu}
          >
            &times;
          </button>
        </div>
      )}
    </div>
  );
}
