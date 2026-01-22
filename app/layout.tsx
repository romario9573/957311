import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin", "cyrillic"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AI-разработчик | Внедрение ИИ в бизнес | Обучение ИИ",
  description:
    "Профессиональная разработка AI-агентов и внедрение искусственного интеллекта в бизнес-процессы. Обучение работе с ИИ-инструментами. Автоматизация и оптимизация с помощью AI.",
  keywords: [
    "AI-агенты",
    "мультиагентные системы",
    "RAG-агенты",
    "создание AI-контента",
    "нейрогенерация",
    "нейрофотосессии",
    "разработка приложений",
    "автоматизация бизнес-процессов",
    "LLM-модели",
    "чат-боты",
    "AI-разработчик",
    "внедрение ИИ",
    "обучение ИИ",
  ],
  authors: [{ name: "[Ваше Имя]" }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "AI-разработчик | Внедрение ИИ в бизнес | Обучение ИИ",
    description:
      "Профессиональная разработка AI-агентов и внедрение искусственного интеллекта в бизнес-процессы. Обучение работе с ИИ-инструментами. Автоматизация и оптимизация с помощью AI.",
    type: "website",
    locale: "ru_RU",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI-разработчик | Внедрение ИИ в бизнес | Обучение ИИ",
    description:
      "Профессиональная разработка AI-агентов и внедрение искусственного интеллекта в бизнес-процессы. Обучение работе с ИИ-инструментами. Автоматизация и оптимизация с помощью AI.",
  },
};

// JSON-LD структурированные данные
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "[Ваше Имя]",
  jobTitle: "AI-разработчик",
  description:
    "Разработка AI-агентов, внедрение ИИ в бизнес, обучение работе с искусственным интеллектом",
  knowsAbout: [
    "AI-агенты",
    "Мультиагентные системы",
    "RAG-системы",
    "LLM-модели",
    "Автоматизация бизнес-процессов",
    "Нейрогенерация контента",
    "Внедрение ИИ",
    "Обучение ИИ",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="scroll-smooth">
      <head>
        <meta httpEquiv="content-language" content="ru" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
