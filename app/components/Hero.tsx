"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaTelegram } from "react-icons/fa";
import { TerminalTypewriter } from "./TerminalTypewriter";

export default function Hero() {
  const [showSecondText, setShowSecondText] = useState(false);
  const [showButton, setShowButton] = useState(false);

  // Сегменты первой фразы с выделенным именем
  const firstTextSegments = [
    { text: "Приветствую тебя, это мой сайт-визитка. Меня зовут " },
    { text: "Роман", highlight: true },
    { text: ", я занимаюсь созданием чат-ботов, AI-агентов, сайтов, мобильных приложений, автоматизаций и AI-контента" },
  ];

  // Сегменты второй фразы
  const secondTextSegments = [
    { text: "Разрабатываю AI-решения для бизнеса, помогаю внедрять технологии, которые делают повседневную жизнь и бизнес-процессы легче и эффективнее" },
  ];

  return (
    <section
      id="hero"
      className="flex items-center justify-center px-6 pb-20"
      style={{ minHeight: "65vh" }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark mb-8 tracking-tight">
            [AI-разработчик]
          </h1>
        </motion.div>

        {/* Первая фраза с терминальным эффектом */}
        <div className="min-h-[70px] md:min-h-[80px] mb-4">
          <p
            className="terminal-subtitle text-lg md:text-xl font-medium text-dark leading-relaxed"
            aria-label="Приветствую тебя, это мой сайт-визитка. Меня зовут Роман, я занимаюсь созданием чат-ботов, AI-агентов, сайтов, мобильных приложений, автоматизаций и AI-контента"
          >
            <TerminalTypewriter
              segments={firstTextSegments}
              speed={45}
              delay={800}
              showCursor={!showSecondText}
              onComplete={() => setShowSecondText(true)}
            />
          </p>
        </div>

        {/* Вторая фраза с терминальным эффектом */}
        <div className="min-h-[80px] md:min-h-[70px] mb-10">
          {showSecondText && (
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="terminal-description text-base md:text-lg text-dark/75 max-w-2xl mx-auto leading-relaxed"
              aria-label="Разрабатываю AI-решения для бизнеса, помогаю внедрять технологии, которые делают повседневную жизнь и бизнес-процессы легче и эффективнее"
            >
              <TerminalTypewriter
                segments={secondTextSegments}
                speed={30}
                delay={200}
                showCursor={!showButton}
                onComplete={() => setShowButton(true)}
              />
            </motion.p>
          )}
        </div>

        {/* Кнопка появляется после завершения анимации */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={showButton ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <a
            href="https://t.me/username"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-white px-8 py-3.5 rounded-xl font-semibold text-base
                       transition-all duration-300 active:scale-[0.98]"
            style={{ 
              backgroundColor: "#0088CC",
              boxShadow: "0 4px 12px rgba(0,136,204,0.3)" 
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#0077B5";
              e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,136,204,0.4), 0 0 24px rgba(0,136,204,0.3)";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#0088CC";
              e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,136,204,0.3)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
            aria-label="Связаться в Telegram"
          >
            <FaTelegram className="text-xl" />
            Связаться в Telegram
          </a>
        </motion.div>
      </div>
    </section>
  );
}
