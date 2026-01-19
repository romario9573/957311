"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FaTelegram } from "react-icons/fa";

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contacts"
      className="pt-12 md:pt-16 pb-24 md:pb-32 px-6"
      ref={ref}
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark mb-6 leading-tight">
            Готов внедрить AI в свой бизнес?<br />
            Начни с бесплатной консультации
          </h2>
          <p className="text-[#424242] text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-[1.7]">
            Напиши мне в Telegram прямо сейчас — обсудим твой проект, подберём оптимальное решение и рассчитаем стоимость. Первые 20 минут консультации бесплатно.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          className="mb-8"
        >
          <a
            href="https://t.me/m/V0FK56BWNTIy"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-white px-12 py-5 rounded-xl font-semibold text-lg
                       transition-all duration-300 active:scale-[0.98]"
            style={{ 
              backgroundColor: "#0088ff",
              boxShadow: "0 4px 12px rgba(0,136,255,0.3)"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#0077dd";
              e.currentTarget.style.boxShadow = "0 8px 16px rgba(0,0,0,0.2)";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#0088ff";
              e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,136,255,0.3)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
            aria-label="Написать в Telegram"
          >
            <FaTelegram className="text-2xl" />
            Написать в Telegram
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="mb-16 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-[#424242]"
        >
          <div className="flex items-center gap-2">
            <span className="text-xl" style={{ color: "rgb(218, 164, 40)" }}>✓</span>
            <span className="text-base">Ответ в течение 1 часа</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xl" style={{ color: "rgb(218, 164, 40)" }}>✓</span>
            <span className="text-base">Честная оценка сроков и бюджета</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xl" style={{ color: "rgb(218, 164, 40)" }}>✓</span>
            <span className="text-base">Готовые кейсы и примеры работ</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="flex justify-center mb-8"
        >
          <a
            href="https://t.me/m/V0FK56BWNTIy"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 transition-colors duration-300"
            style={{ color: "#666666" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#0088ff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#666666";
            }}
            aria-label="Telegram"
          >
            <FaTelegram className="text-[32px] md:text-[40px]" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
          className="pt-8"
        >
          <p className="text-sm md:text-base" style={{ color: "#888888" }}>
            © {currentYear}{" "}
            <span className="font-semibold">Romario</span>
            <span style={{ color: "rgb(218, 164, 40)" }}>[AI]</span>. Все права защищены.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
