"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { TerminalTypewriter } from "./TerminalTypewriter";

interface CaseItem {
  id: number;
  title: string;
  emoji: string;
  description: string;
  tags: string[];
  metric: string;
}

const casesData: CaseItem[] = [
  {
    id: 1,
    title: "AI-Нутрициолог",
    emoji: "🍎",
    description:
      "Telegram-бот, в котором пользователь может узнать КБЖУ еды по фото, следить за своим прогрессом в личном кабинете, а также получить рекомендации по питанию и плану тренировок от AI-помощника.",
    tags: ["RAG-системы", "N8N", "API", "Saas"],
    metric: "Автоматический расчет калорий по фото",
  },
  {
    id: 2,
    title: "AI-Стилист с виртуальной примерочной",
    emoji: "👗",
    description:
      "Telegram-бот, в котором пользователь может примерить на себе любой образ в виртуальной примерочной, получить разбор своей внешности, анализ существующих и подбор новых образов от AI-Стилиста.",
    tags: ["RAG-системы", "N8N", "API", "AI-фото", "Saas"],
    metric: "Виртуальная примерка одежды",
  },
  {
    id: 3,
    title: "Контент-заводы для фото/видео/постов",
    emoji: "🎬",
    description:
      "Автоматизированные контент-заводы с полным циклом — от поиска идей до автопостинга готового контента в социальные сети. Создание фото, видео с AI-аватаром и текстовых постов.",
    tags: ["N8N", "API", "AI-фото/видео"],
    metric: "Полная автоматизация контента",
  },
  {
    id: 4,
    title: "Парсер социальных сетей и сайтов",
    emoji: "🔍",
    description:
      "Сбор конкурентов в вашей нише и их контента из различных социальных сетей в больших объемах. Автоматический анализ и систематизация данных для исследования рынка.",
    tags: ["N8N", "API", "Web Scraping"],
    metric: "Сбор 10000+ постов в день, поиск трендов, генерация идей",
  },
  {
    id: 5,
    title: "AI-продавец с доступом к ассортименту",
    emoji: "🤖",
    description:
      "AI-ассистент продаж, который работает 24/7 и имеет полный доступ к вашей базе товаров. Бот самостоятельно консультирует клиентов, подбирает товары из ассортимента, отвечает на вопросы о характеристиках и наличии, обрабатывает возражения и доводит до покупки. После согласования заказа AI-продавец передает клиента менеджеру для подтверждения оплаты или автоматически интегрируется с платежными системами для мгновенной оплаты.",
    tags: ["AI-агенты", "N8N", "CRM", "Платежи"],
    metric: "Конверсия в заказ ↑ 35-50%, работает с 100+ клиентами одновременно",
  },
  {
    id: 6,
    title: "Многофункциональный AI-агент для бизнеса с личным календарем",
    emoji: "📅",
    description:
      "AI-ассистент для управления задачами, встречами и коммуникациями. Достаточно написать текстом: \"Встреча с Ивановым завтра в 15:00\" - и AI-агент автоматически создаст событие в календаре и напомнит о нем. Агент работает с общим календарем команды (можно на несколько человек), ищет актуальную информацию в интернете, делает исследования по запросу и самостоятельно отправляет email или массовые рассылки.",
    tags: ["AI-агенты", "API", "Email"],
    metric: "Экономия 1-2 часа в день, 0 пропущенных встреч, автоматизация переписки",
  },
];

function CaseCard({ item, index }: { item: CaseItem; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      className="rounded-2xl p-6 md:p-8 border flex flex-col h-full transition-all duration-300"
      style={{
        backgroundColor: "rgb(245, 240, 235)",
        borderColor: "transparent",
        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundImage =
          "linear-gradient(to bottom, rgba(218, 164, 40, 0.08), rgba(218, 164, 40, 0.05))";
        e.currentTarget.style.borderColor = "rgba(218, 164, 40, 0.4)";
        e.currentTarget.style.boxShadow =
          "0 4px 16px rgba(0,0,0,0.12), 0 0 20px rgba(218, 164, 40, 0.2)";
        e.currentTarget.style.transform = "translateY(-4px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundImage = "none";
        e.currentTarget.style.borderColor = "transparent";
        e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.08)";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      {/* Header с эмодзи и заголовком */}
      <div className="flex items-center gap-3 mb-4">
        <span className="text-3xl md:text-4xl flex-shrink-0">{item.emoji}</span>
        <h3 className="text-xl md:text-2xl font-semibold text-dark leading-tight">
          {item.title}
        </h3>
      </div>

      {/* Описание - растягивается */}
      <p className="text-dark/80 text-sm md:text-base leading-relaxed flex-1 mb-4">
        {item.description}
      </p>

      {/* Теги - прижаты к низу */}
      <div className="flex flex-wrap gap-2 mb-4 mt-auto">
        {item.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1.5 rounded-md text-xs md:text-sm text-dark font-medium
                       border transition-all duration-300 cursor-default"
            style={{
              backgroundColor: "rgba(15,15,15,0.05)",
              borderColor: "rgba(15,15,15,0.08)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(218, 164, 40, 0.1)";
              e.currentTarget.style.borderColor = "rgba(218, 164, 40, 0.45)";
              e.currentTarget.style.boxShadow =
                "0 2px 6px rgba(218, 164, 40, 0.18)";
              e.currentTarget.style.transform = "scale(1.03)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(15,15,15,0.05)";
              e.currentTarget.style.borderColor = "rgba(15,15,15,0.08)";
              e.currentTarget.style.boxShadow = "none";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Метрика - всегда в самом низу */}
      <div
        className="flex items-start gap-2 pt-4"
        style={{ borderTop: "1px solid rgba(15, 15, 15, 0.08)" }}
      >
        <span
          className="text-base flex-shrink-0 mt-0.5"
          style={{
            color: "rgb(218, 164, 40)",
            filter: "drop-shadow(0 0 4px rgba(218, 164, 40, 0.4))",
          }}
        >
          ⚡
        </span>
        <span className="text-dark font-semibold text-sm md:text-base leading-snug">
          {item.metric}
        </span>
      </div>
    </motion.article>
  );
}

export default function Cases() {
  const ref = useRef(null);
  const terminalRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isTerminalInView = useInView(terminalRef, { once: true, margin: "-50px" });
  const [subtitleComplete, setSubtitleComplete] = useState(false);
  const [terminalComplete, setTerminalComplete] = useState(false);
  const [highlightApplied, setHighlightApplied] = useState(false);
  const [showTooltipAuto, setShowTooltipAuto] = useState(false);

  const subtitleSegments = [{ text: "Мои избранные проекты" }];
  const terminalTextSegments = [
    { text: "А еще я создал более 200 AI-видео, разработал множество специализированных AI-агентов для разных задач: личный помощник для Telegram-аккаунта, анализ целевой аудитории, сценарист для вирусных видео, автоматизация email-рассылок и многое другое. Связывал AI-агентов с CRM системами. Создавал AI-аватаров. Связывал различные сервисы с AI агентами по API." },
  ];

  // Применить подсветку после завершения печатания
  useEffect(() => {
    if (terminalComplete && !highlightApplied) {
      const timer = setTimeout(() => {
        setHighlightApplied(true);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [terminalComplete, highlightApplied]);

  // Автоматически показать tooltip на 10 секунд
  useEffect(() => {
    if (highlightApplied && !showTooltipAuto) {
      const showTimer = setTimeout(() => {
        setShowTooltipAuto(true);
        
        // Скрыть через 10 секунд
        const hideTimer = setTimeout(() => {
          setShowTooltipAuto(false);
        }, 10000);
        
        return () => clearTimeout(hideTimer);
      }, 1000);
      
      return () => clearTimeout(showTimer);
    }
  }, [highlightApplied, showTooltipAuto]);

  return (
    <section
      id="cases"
      className="cases-section py-24 md:py-32 px-6 relative"
      ref={ref}
    >
      {/* Золотая линия-разделитель сверху */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 h-px"
        style={{
          width: "80%",
          maxWidth: "1000px",
          background:
            "linear-gradient(to right, transparent, rgba(218, 164, 40, 0.6) 20%, rgba(218, 164, 40, 0.8) 50%, rgba(218, 164, 40, 0.6) 80%, transparent)",
        }}
      />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark mb-4">
            Мои кейсы
          </h2>
          <div className="terminal-subtitle text-dark/60 text-base md:text-lg max-w-2xl mx-auto min-h-[30px] flex justify-center">
            {isInView && (
              <TerminalTypewriter
                segments={subtitleSegments}
                speed={60}
                delay={400}
                showCursor={!subtitleComplete}
                onComplete={() => setSubtitleComplete(true)}
              />
            )}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {casesData.map((item, index) => (
            <CaseCard key={item.id} item={item} index={index} />
          ))}
        </div>

        {/* Терминал-блок с дополнительной информацией */}
        <motion.div
          ref={terminalRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isTerminalInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="terminal-wrapper mt-16 md:mt-20 max-w-4xl mx-auto"
        >
          <div
            className="terminal-block rounded-xl overflow-hidden"
            style={{
              backgroundColor: "rgb(15, 15, 15)",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(218, 164, 40, 0.2), 0 0 40px rgba(218, 164, 40, 0.1)",
              border: "1px solid rgba(218, 164, 40, 0.3)",
            }}
          >
            {/* Header терминала */}
            <div
              className="flex items-center gap-3 px-4 py-3 relative"
              style={{
                background: "linear-gradient(to bottom, rgba(30, 30, 30, 1), rgba(20, 20, 20, 1))",
                borderBottom: "1px solid rgba(218, 164, 40, 0.2)",
              }}
            >
              {/* Цветные кружки */}
              <div className="flex gap-2 flex-shrink-0">
                <span className="w-3 h-3 rounded-full" style={{ backgroundColor: "#ff5f56" }} />
                <span className="w-3 h-3 rounded-full" style={{ backgroundColor: "#ffbd2e" }} />
                <span className="w-3 h-3 rounded-full" style={{ backgroundColor: "#27c93f" }} />
              </div>
              
              {/* portfolio.stats ПО ЦЕНТРУ (absolute positioning) */}
              <span
                className="terminal-title-center text-xs md:text-sm"
                style={{
                  fontFamily: "var(--font-mono), 'JetBrains Mono', monospace",
                  color: "rgba(255, 255, 255, 0.6)",
                  position: "absolute",
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
              >
                portfolio.stats
              </span>
              
              {/* TOOLTIP ОБЛАЧКО (НИЖЕ HEADER) */}
              {highlightApplied && (
                <a
                  href="https://drive.google.com/drive/folders/1eQnq6BGtlpHPqYHzCHzfNKGieknFFA-R?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`tooltip-bubble-header ${showTooltipAuto ? 'tooltip-visible' : ''}`}
                  aria-label="Посмотреть примеры AI-видео на Google Drive"
                >
                  <span className="tooltip-icon">📁</span>
                  <span className="tooltip-text">
                    посмотреть примеры на Google Drive
                  </span>
                  <svg className="tooltip-arrow-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M7 17L17 7M17 7H7M17 7V17" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </a>
              )}
            </div>

            {/* Контент терминала */}
            <div
              className="p-5 md:p-6"
              style={{
                fontFamily: "var(--font-mono), 'JetBrains Mono', monospace",
                fontSize: "15px",
                lineHeight: "1.7",
                color: "rgba(255, 255, 255, 0.9)",
              }}
            >
              <div className="flex flex-wrap gap-3">
                <span
                  className="flex-shrink-0"
                  style={{
                    color: "rgb(218, 164, 40)",
                    fontWeight: 600,
                    textShadow: "0 0 8px rgba(218, 164, 40, 0.6), 0 0 12px rgba(218, 164, 40, 0.4)",
                  }}
                >
                  roman@ai-dev:~$
                </span>
                <span className="flex-1 min-w-0">
                  {isTerminalInView && !highlightApplied && (
                    <TerminalTypewriter
                      segments={terminalTextSegments}
                      speed={35}
                      delay={600}
                      showCursor={!terminalComplete}
                      onComplete={() => setTerminalComplete(true)}
                    />
                  )}
                  {highlightApplied && (
                    <>
                      А еще я создал{" "}
                      <span className="highlight-gold">
                        более 200 AI-видео
                      </span>
                      , разработал множество специализированных AI-агентов для разных задач: личный помощник для Telegram-аккаунта, анализ целевой аудитории, сценарист для вирусных видео, автоматизация email-рассылок и многое другое. Связывал AI-агентов с CRM системами. Создавал AI-аватаров. Связывал различные сервисы с AI агентами по API.
                    </>
                  )}
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
