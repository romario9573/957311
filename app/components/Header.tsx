"use client";

import { useState } from "react";
import { FaTelegram, FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className="header"
      style={{
        boxShadow: "0 4px 20px rgba(218, 164, 40, 0.25), 0 2px 8px rgba(218, 164, 40, 0.15)"
      }}
    >
      <div className="header-container">
        {/* ЛОГОТИП - ЛЕВАЯ ЧАСТЬ */}
        <div className="header-left">
          <button
            onClick={() => scrollToSection("hero")}
            className="logo-link"
            aria-label="Romario[AI] - главная"
          >
            <span className="logo-text">
              <span className="logo-base">Romar</span>
              <span className="logo-i-custom">
                <span className="logo-i-letter">ı</span>
                <span className="logo-gear">⚙</span>
              </span>
              <span className="logo-base">o</span>
              <span className="logo-ai">[AI]</span>
            </span>
          </button>
        </div>

        {/* НАВИГАЦИЯ - ЦЕНТРАЛЬНАЯ ЧАСТЬ */}
        <nav className="header-center hidden md:flex">
          <button
            onClick={() => scrollToSection("about")}
            className="nav-link"
          >
            О себе
          </button>
          <button
            onClick={() => scrollToSection("services")}
            className="nav-link"
          >
            Услуги
          </button>
          <button
            onClick={() => scrollToSection("cases")}
            className="nav-link"
          >
            Кейсы
          </button>
          <button
            onClick={() => scrollToSection("contacts")}
            className="nav-link"
          >
            Контакты
          </button>
        </nav>

        {/* КНОПКА TELEGRAM - ПРАВАЯ ЧАСТЬ */}
        <div className="header-right hidden md:flex">
          <a
            href="https://t.me/username"
            target="_blank"
            rel="noopener noreferrer"
            className="telegram-button"
            aria-label="Написать в Telegram"
          >
            <FaTelegram className="telegram-icon" />
            Telegram
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white text-2xl ml-auto"
          aria-label="Открыть меню"
        >
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-dark border-t border-white/10">
          <div className="flex flex-col p-4 gap-4">
            <button
              onClick={() => scrollToSection("about")}
              className="text-white/70 hover:text-white transition-colors duration-200 text-left py-2"
            >
              О себе
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-white/70 hover:text-white transition-colors duration-200 text-left py-2"
            >
              Услуги
            </button>
            <button
              onClick={() => scrollToSection("cases")}
              className="text-white/70 hover:text-white transition-colors duration-200 text-left py-2"
            >
              Кейсы
            </button>
            <button
              onClick={() => scrollToSection("contacts")}
              className="text-white/70 hover:text-white transition-colors duration-200 text-left py-2"
            >
              Контакты
            </button>
            <a
              href="https://t.me/username"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 text-white px-5 py-3 rounded-lg font-semibold
                         transition-all duration-200"
              style={{ backgroundColor: "#0088CC" }}
              aria-label="Написать в Telegram"
            >
              <FaTelegram className="text-lg" />
              Telegram
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
