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
          <h2 className="cta-heading">
            Готов внедрить AI в свой бизнес?<br />
            Начни с бесплатной консультации
          </h2>
          <p className="cta-subheading">
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
            className="cta-telegram-button"
            aria-label="Написать в Telegram"
          >
            <FaTelegram className="text-xl md:text-2xl" />
            Написать в Telegram
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="cta-benefits"
        >
          <div className="cta-benefit-item">
            <span className="cta-benefit-icon">✓</span>
            <span className="cta-benefit-text">Ответ в течение 1 часа</span>
          </div>
          <div className="cta-benefit-item">
            <span className="cta-benefit-icon">✓</span>
            <span className="cta-benefit-text">Честная оценка сроков и бюджета</span>
          </div>
          <div className="cta-benefit-item">
            <span className="cta-benefit-icon">✓</span>
            <span className="cta-benefit-text">Готовые кейсы и примеры работ</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="footer-telegram-icon-wrapper"
        >
          <a
            href="https://t.me/m/V0FK56BWNTIy"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-telegram-icon"
            aria-label="Telegram"
          >
            <FaTelegram />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
          className="footer-copyright"
        >
          <p>
            © {currentYear}{" "}
            <span className="font-semibold">Romario</span>
            <span style={{ color: "rgb(218, 164, 40)" }}>[AI]</span>. Все права защищены.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
