"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import PricingTerminal from "./PricingTerminal";

interface Service {
  id: number;
  icon: string;
  name: string;
  description: string;
  details: string;
  price: string;
  priceUnit: string;
  priceNote?: string;
}

const servicesData: Service[] = [
  // СЕРВЕРНАЯ ИНФРАСТРУКТУРА
  {
    id: 1,
    icon: "🖥️",
    name: "Установка n8n (Self-hosted)",
    description: "Собственная платформа no-code автоматизации на вашем сервере без облачных лимитов.",
    details: "Для кого: Компании с >5000 выполнений/мес, бизнес с 152-ФЗ. Выгода: Безлимит (экономия 5000₽/мес), 152-ФЗ, в 2-3 раза быстрее Cloud.",
    price: "10 000",
    priceUnit: "₽",
  },
  {
    id: 2,
    icon: "🗄️",
    name: "Развертывание Supabase",
    description: "Полный Backend на вашем сервере: PostgreSQL, Auth, API, Storage.",
    details: "Для кого: Стартапы (MVP), бизнес с требованиями к локализации данных. Функции: OAuth, Real-time, RLS, S3-хранилище.",
    price: "15 000",
    priceUnit: "₽",
  },
  // AI-АГЕНТЫ
  {
    id: 4,
    icon: "🤖",
    name: "Telegram-бот с AI",
    description: "Умный чат-бот с памятью, настраиваемой ролью, понимающий текстовые и голосовые сообщения.",
    details: "Применение: Личный помощник, личный ассистент Telegram аккаунта, клиентский сервис, нумеролог, психолог, копирайтер и любые другие роли для самых разных задач. + проверка подписки на канал (если необходимо) и сбор пользователей в базу.",
    price: "от 12 000",
    priceUnit: "₽",
  },
  {
    id: 5,
    icon: "📚",
    name: "RAG-агент (База Знаний)",
    description: "AI-агент отвечающий по вашим документам без галлюцинаций.",
    details: "Применение: HR-бот по регламентам, техподдержка, юридический ассистент, обучение. Базовый пакет: До 50 документов.",
    price: "от 40 000",
    priceUnit: "₽",
  },
  {
    id: 6,
    icon: "📞",
    name: "Голосовой AI-агент",
    description: "Голосовой робот с человеческой речью (<1 секунды задержка) для звонков.",
    details: "Сценарии: Холодные звонки, входящая линия, HR-интервью, подтверждение заказов. Технологии: ElevenLabs (29 языков) + связь с CRM.",
    price: "от 30 000",
    priceUnit: "₽",
  },
  {
    id: 7,
    icon: "🔮",
    name: "AI-агент/AI-продукт (SaaS)",
    description: "Готовый продукт для монетизации. Микросервис интегрированный в Telegram бота.",
    details: "Настройка базы данных для работы с пользователями и их личными аккаунтами в сервисе, настройка тарифов, подключение платежной системы, настройка сценариев работы, настройка рассылок и уведомлений. Примеры: AI Фитнес-тренер + нутрициолог, AI стилист с виртуальной примерочной.",
    price: "от 50 000",
    priceUnit: "₽",
  },
  {
    id: 8,
    icon: "👔",
    name: "AI-HR Рекрутер",
    description: "Автоматизация найма: парсинг резюме, интервью, скоринг, запись на встречу.",
    details: "Процесс: HH.ru → Telegram → Интервью → LLM модель для оценки (0-100 баллов) → Календарь → Отчёт HR. Выгода: 5 минут вместо 30, беспристрастность, 24/7, обработка 100+ кандидатов.",
    price: "от 40 000",
    priceUnit: "₽",
  },
  // КОНТЕНТ-МАРКЕТИНГ
  {
    id: 9,
    icon: "🎬",
    name: "Контент-завод (AI-аватары)",
    description: "Автоконвейер видео с виртуальным ведущим без участия человека.",
    details: "Процесс: Поиск идей → сценарий → HeyGen → Автопостинг готового видео. Применение: Образовательный контент, новости, корпоративные видео, реклама.",
    price: "от 40 000",
    priceUnit: "₽",
  },
  {
    id: 10,
    icon: "🎥",
    name: "Контент-завод (AI-видео)",
    description: "Вирусный контент без съёмки: концепция → Модель генерации видео → публикация.",
    details: "Форматы: Абстрактные визуализации, рекламные креативы, сторителлинг, игровой контент.",
    price: "от 40 000",
    priceUnit: "₽",
  },
  {
    id: 13,
    icon: "📸",
    name: "Нейрофотосессия",
    description: "Профессиональные AI-фото с полным сохранением вашей внешности для соцсетей без студии и фотографа.",
    details: "За каждые 15 фото 2 фото в подарок. Первое фото - 100 рублей. 300р - цена за 1 фото.",
    price: "300",
    priceUnit: "₽",
  },
  // ВЕБ-РАЗРАБОТКА
  {
    id: 14,
    icon: "🌐",
    name: "Сайт на чистом коде",
    description: "Быстрый сайт под ваши задачи.",
    details: "Включено: Дизайн, адаптив, SEO, домен, хостинг 1 год.",
    price: "от 50 000",
    priceUnit: "₽",
  },
  {
    id: 16,
    icon: "📱",
    name: "Мобильное приложение (Flutter)",
    description: "Кроссплатформенное приложение на Flutter - одна кодовая база для iOS и Android.",
    details: "Преимущества: Экономия 40% vs нативная разработка, Hot Reload, красивый UI, нативная производительность. MVP включает: Дизайн 5-7 экранов, базовый функционал (авторизация, профиль, фича), backend API.",
    price: "от 70 000",
    priceUnit: "₽",
    priceNote: "MVP",
  },
  // КОНСУЛЬТАЦИИ И ОБУЧЕНИЕ
  {
    id: 17,
    icon: "💡",
    name: "Консалтинг по внедрению AI продукта",
    description: "Экспертная помощь в интеграции AI решений в ваш бизнес.",
    details: "Анализ задач, подбор оптимальных технологий, разработка архитектуры, консультации по внедрению. Подходит для: Компании внедряющие AI, стартапы с AI идеями, бизнес ищущий точки роста через AI.",
    price: "4 000",
    priceUnit: "₽/час",
  },
  {
    id: 18,
    icon: "🎓",
    name: "Личное обучение AI по индивидуальной программе",
    description: "Персональные занятия для освоения AI инструментов под ваши цели.",
    details: "Программа: Практическое обучение работе AI-сервисами, prompt engineering, автоматизация рабочих процессов и создание AI агентов с помощью n8n. Формат: 1 на 1 онлайн, гибкий график.",
    price: "3 000",
    priceUnit: "₽/час",
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="services"
      className="services-section py-24 md:py-32 px-6 relative"
      ref={ref}
      style={{ backgroundColor: "rgb(231, 215, 197)" }}
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
        {/* Заголовок секции */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark mb-4">
            Услуги
          </h2>
        </motion.div>

        {/* Терминальный промо-блок */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="mb-12 md:mb-16"
        >
          <div
            className="terminal-block rounded-xl overflow-hidden transition-all duration-300"
            style={{
              backgroundColor: "rgb(15, 15, 15)",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(218, 164, 40, 0.2), 0 0 40px rgba(218, 164, 40, 0.1)",
              border: "1px solid rgba(218, 164, 40, 0.3)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-4px)";
              e.currentTarget.style.boxShadow =
                "0 12px 48px rgba(0, 0, 0, 0.35), 0 0 0 1px rgba(218, 164, 40, 0.3), 0 0 50px rgba(218, 164, 40, 0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow =
                "0 8px 32px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(218, 164, 40, 0.2), 0 0 40px rgba(218, 164, 40, 0.1)";
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
              <div className="flex gap-2">
                <span className="w-3 h-3 rounded-full" style={{ backgroundColor: "#ff5f56" }} />
                <span className="w-3 h-3 rounded-full" style={{ backgroundColor: "#ffbd2e" }} />
                <span className="w-3 h-3 rounded-full" style={{ backgroundColor: "#27c93f" }} />
              </div>
              <span
                className="absolute left-1/2 -translate-x-1/2 text-xs md:text-sm"
                style={{
                  fontFamily: "var(--font-mono), 'JetBrains Mono', monospace",
                  color: "rgba(255, 255, 255, 0.6)",
                }}
              >
                services.promo
              </span>
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
                <span className="flex-1 min-w-0" style={{ color: "rgba(255, 255, 255, 0.9)" }}>
                  Первая 20-минутная консультация по внедрению AI-продукта{" "}
                  <span
                    className="highlight-free"
                    style={{
                      color: "rgb(218, 164, 40)",
                      fontWeight: 700,
                      textShadow: "0 0 12px rgba(218, 164, 40, 0.6), 0 0 20px rgba(218, 164, 40, 0.4)",
                    }}
                  >
                    БЕСПЛАТНО
                  </span>
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Таблица услуг (Desktop) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          className="hidden md:block services-table-container"
        >
          <table className="services-table">
            <thead>
              <tr>
                <th>Услуга</th>
                <th>Описание</th>
                <th>Цена</th>
              </tr>
            </thead>
            <tbody>
              {servicesData.map((service) => (
                <tr key={service.id}>
                  <td>
                    <div className="service-name">
                      <span className="service-icon">{service.icon}</span>
                      <span>{service.name}</span>
                    </div>
                  </td>
                  <td>
                    <div className="service-description">
                      <strong>{service.description}</strong>
                      <br />
                      {service.details}
                    </div>
                  </td>
                  <td className="service-price">
                    <span className="price-value">
                      {service.price}
                    </span>
                    <span className="price-currency">
                      {service.priceUnit}
                    </span>
                    {service.priceNote && (
                      <span className="price-note">
                        {service.priceNote}
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Карточки услуг (Mobile) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          className="services-cards"
        >
          {servicesData.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-card-header">
                <span className="service-icon">{service.icon}</span>
                <h3>{service.name}</h3>
              </div>
              <div className="service-card-description">
                <p><strong>{service.description}</strong></p>
                <p>{service.details}</p>
              </div>
              <div className="service-card-price">
                <span className="price-value">{service.price}</span>
                <span className="price-currency">{service.priceUnit}</span>
              </div>
              {service.priceNote && (
                <div className="price-note" style={{ textAlign: 'right', marginTop: '5px' }}>
                  {service.priceNote}
                </div>
              )}
            </div>
          ))}
        </motion.div>

        {/* Терминал с информацией о ценообразовании */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
        >
          <PricingTerminal />
        </motion.div>
      </div>
    </section>
  );
}
