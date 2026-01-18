"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FaTelegram, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contacts"
      className="py-24 md:py-32 px-6"
      ref={ref}
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark mb-6">
            Давайте работать вместе
          </h2>
          <p className="text-dark/60 text-base md:text-lg max-w-xl mx-auto mb-12">
            Готов обсудить ваш проект и найти оптимальное решение
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="mb-16"
        >
          <a
            href="https://t.me/username"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-white px-10 py-5 rounded-button font-semibold text-lg md:text-xl
                       transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            style={{ 
              backgroundColor: "#0088CC",
              boxShadow: "0 4px 12px rgba(0,136,204,0.3)"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#0077B5";
              e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,136,204,0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#0088CC";
              e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,136,204,0.3)";
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
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="flex justify-center gap-6 mb-16"
        >
          <a
            href="https://github.com/username"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 text-dark/50 hover:text-dark transition-colors duration-300"
            aria-label="GitHub"
          >
            <FaGithub className="text-2xl" />
          </a>
          <a
            href="https://linkedin.com/in/username"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 text-dark/50 hover:text-dark transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="text-2xl" />
          </a>
          <a
            href="https://t.me/username"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 text-dark/50 hover:text-dark transition-colors duration-300"
            aria-label="Telegram"
          >
            <FaTelegram className="text-2xl" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          className="pt-8 border-t border-dark/10"
        >
          <p className="text-dark/40 text-sm">
            © {currentYear} [Ваше Имя]. Все права защищены.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
