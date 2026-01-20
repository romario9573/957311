"use client";

import { useState, useEffect } from "react";
import { FaTelegram, FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Блокировка скролла при открытом меню
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

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
        {/* ЛОГОТИП - ВСЕГДА СЛЕВА */}
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

        {/* НАВИГАЦИЯ - ЦЕНТР (только десктоп >= 768px) */}
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

        {/* КНОПКА TELEGRAM - СПРАВА (только десктоп >= 768px) */}
        <div className="header-right hidden md:flex">
          <a
            href="https://t.me/m/V0FK56BWNTIy"
            target="_blank"
            rel="noopener noreferrer"
            className="telegram-button"
            aria-label="Написать в Telegram"
          >
            <FaTelegram className="telegram-icon" />
            Telegram
          </a>
        </div>

        {/* ГАМБУРГЕР - СПРАВА (только мобильные < 768px) */}
        <div className="header-mobile md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="hamburger-button"
            aria-label={mobileMenuOpen ? "Закрыть меню" : "Открыть меню"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* ПОЛНОЭКРАННОЕ МОБИЛЬНОЕ МЕНЮ */}
      {mobileMenuOpen && (
        <>
          {/* Overlay для закрытия меню при клике вне */}
          <div 
            className="mobile-menu-overlay"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />
          
          {/* Само меню */}
          <div className="mobile-menu">
            <nav className="mobile-menu-nav">
              <button
                onClick={() => scrollToSection("about")}
                className="mobile-menu-link"
              >
                О себе
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="mobile-menu-link"
              >
                Услуги
              </button>
              <button
                onClick={() => scrollToSection("cases")}
                className="mobile-menu-link"
              >
                Кейсы
              </button>
              <button
                onClick={() => scrollToSection("contacts")}
                className="mobile-menu-link"
              >
                Контакты
              </button>
              
              {/* Кнопка Telegram в меню */}
              <a
                href="https://t.me/m/V0FK56BWNTIy"
                target="_blank"
                rel="noopener noreferrer"
                className="mobile-menu-telegram"
                aria-label="Написать в Telegram"
              >
                <FaTelegram className="text-xl" />
                Написать в Telegram
              </a>
            </nav>
          </div>
        </>
      )}
    </header>
  );
}
