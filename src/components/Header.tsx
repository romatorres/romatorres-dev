"use client";

import { useState } from "react";
import Image from "next/image";
import { scrollToSection } from "@/lib/scroll";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    scrollToSection(e, sectionId);
    setIsOpen(false); // Fechar menu móvel após clicar
  };

  return (
    <header className="fixed w-full bg-background/20 backdrop-blur-sm z-50">
      <nav className="container mx-auto px-12 py-10">
        <div className="flex items-center justify-between">
          <a
            href="#header"
            onClick={(e) => scrollToSection(e, "header")}
            className="relative w-32 h-11"
          >
            <Image
              src="/img/logo.png"
              alt="Logomarca RomaTorres"
              fill
              className="object-contain"
            />
          </a>

          <div className="hidden md:flex space-x-8 text-secondary font-secondary text-xs font-medium">
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, "header")}
              className="hover:text-primary duration-300"
            >
              HOME
            </a>
            <a
              href="#about"
              onClick={(e) => scrollToSection(e, "about")}
              className="hover:text-primary duration-300"
            >
              SOBRE
            </a>
            <a
              href="#services"
              onClick={(e) => scrollToSection(e, "services")}
              className="hover:text-primary duration-300"
            >
              SERVIÇOS
            </a>
            <a
              href="#projects"
              onClick={(e) => scrollToSection(e, "projects")}
              className="hover:text-primary duration-300"
            >
              PROJETOS
            </a>
            <a
              href="#contacts"
              onClick={(e) => scrollToSection(e, "contacts")}
              className="hover:text-primary duration-300"
            >
              CONTATOS
            </a>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
        <div
          className={`md:hidden fixed top-[72px] right-0 w-full bg-white/90 backdrop-blur-sm p-6 transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="space-y-4 flex flex-col items-center">
            <a
              href="#about"
              onClick={(e) => scrollToSection(e, "about")}
              className="block hover:text-blue-600 transition-colors duration-300 text-center text-lg"
            >
              About
            </a>
            <a
              href="#services"
              onClick={(e) => scrollToSection(e, "services")}
              className="block hover:text-blue-600 transition-colors duration-300 text-center text-lg"
            >
              Services
            </a>
            <a
              href="#projects"
              onClick={(e) => scrollToSection(e, "projects")}
              className="block hover:text-blue-600 transition-colors duration-300 text-center text-lg"
            >
              Projects
            </a>
            <a
              href="#contacts"
              onClick={(e) => scrollToSection(e, "contacts")}
              className="block hover:text-blue-600 transition-colors duration-300 text-center text-lg"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
