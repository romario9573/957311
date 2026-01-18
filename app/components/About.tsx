"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  "AI-агенты",
  "Мультиагентные системы",
  "RAG-системы",
  "LLM (GPT, Claude, Gemini)",
  "Чат-боты",
  "LangChain",
  "N8N",
  "API",
  "AI-фото/видео",
  "Нейрофотосессии",
  "Автоматизация процессов",
  "Prompt Engineering",
  "Создание сайтов",
  "AI для упрощения и улучшения жизни",
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      className="px-6 relative"
      style={{ paddingTop: "20px", paddingBottom: "80px" }}
      ref={ref}
    >
      {/* Золотая линия-разделитель */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 h-px"
        style={{
          width: "80%",
          background: "linear-gradient(to right, transparent, rgba(218, 164, 40, 0.6) 20%, rgba(218, 164, 40, 0.8) 50%, rgba(218, 164, 40, 0.6) 80%, transparent)"
        }}
      />
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark mb-12 text-center">
            Обо мне
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="mb-16"
        >
          {/* AI-решения для бизнеса */}
          <div className="mb-8">
            <h3 
              className="text-lg md:text-xl font-semibold text-dark mb-3 relative pl-4"
              style={{ borderLeft: "4px solid rgb(218, 164, 40)", borderRadius: "2px" }}
            >
              AI-решения для бизнеса
            </h3>
            <p className="text-dark/85 text-base md:text-lg leading-relaxed">
              Разрабатываю AI-решения для бизнеса: от простых чат-ботов до сложных 
              мультиагентных систем, способных автоматизировать бизнес-процессы и 
              повысить эффективность работы бизнеса. Также я занимаюсь созданием 
              приложений и сайтов для разных задач.
            </p>
          </div>

          {/* Создание AI-контента */}
          <div className="mb-8">
            <h3 
              className="text-lg md:text-xl font-semibold text-dark mb-3 relative pl-4"
              style={{ borderLeft: "4px solid rgb(218, 164, 40)", borderRadius: "2px" }}
            >
              Создание AI-контента
            </h3>
            <p className="text-dark/85 text-base md:text-lg leading-relaxed">
              Создаю фото и видео с помощью ИИ — от нейрофотосессий и коротких 
              вирусных роликов до полноценных рекламных кампаний и клипов.
            </p>
          </div>

          {/* Опыт и экспертиза */}
          <div>
            <h3 
              className="text-lg md:text-xl font-semibold text-dark mb-3 relative pl-4"
              style={{ borderLeft: "4px solid rgb(218, 164, 40)", borderRadius: "2px" }}
            >
              Опыт и экспертиза
            </h3>
            <p className="text-dark/85 text-base md:text-lg leading-relaxed">
              Практик с опытом более 2 лет ежедневного использования различных 
              LLM-моделей и AI-сервисов для бытовых и рабочих задач. Помогаю 
              внедрять технологии, которые делают жизнь и бизнес-процессы легче, 
              быстрее, эффективнее и прибыльнее.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        >
          <h3 className="text-xl md:text-2xl font-semibold text-dark mb-8 text-center">
            Ключевые навыки
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{
                  duration: 0.4,
                  delay: 0.5 + index * 0.05,
                  ease: "easeOut",
                }}
                className="px-4 py-2 text-dark rounded-full text-sm md:text-base font-medium
                           border transition-all duration-300 cursor-default"
                style={{ 
                  backgroundColor: "rgb(245, 240, 235)",
                  borderColor: "rgba(15, 15, 15, 0.12)",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.05)"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(218, 164, 40, 0.12)";
                  e.currentTarget.style.borderColor = "rgba(218, 164, 40, 0.5)";
                  e.currentTarget.style.boxShadow = "0 2px 8px rgba(218, 164, 40, 0.2), 0 0 12px rgba(218, 164, 40, 0.15)";
                  e.currentTarget.style.transform = "scale(1.05)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "rgb(245, 240, 235)";
                  e.currentTarget.style.borderColor = "rgba(15, 15, 15, 0.12)";
                  e.currentTarget.style.boxShadow = "0 1px 3px rgba(0,0,0,0.05)";
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
