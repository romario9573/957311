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
  title: "Разработка AI-агентов и мультиагентных систем | Создание AI-контента",
  description:
    "Профессиональная разработка AI-решений: интеллектуальные агенты, мультиагентные системы, AI-генерация фото/видео, создание приложений. Опыт 2+ года",
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
  ],
  authors: [{ name: "[Ваше Имя]" }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Разработка AI-агентов и мультиагентных систем",
    description:
      "Профессиональная разработка AI-решений: интеллектуальные агенты, мультиагентные системы, AI-генерация контента",
    type: "website",
    locale: "ru_RU",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI-разработчик | Создание интеллектуальных систем",
    description:
      "Разработка AI-агентов, мультиагентных систем, создание AI-контента",
  },
};

// JSON-LD структурированные данные
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "[Ваше Имя]",
  jobTitle: "AI-разработчик",
  description:
    "Разработка AI-агентов, мультиагентных систем и создание AI-контента",
  knowsAbout: [
    "AI-агенты",
    "Мультиагентные системы",
    "RAG-системы",
    "LLM-модели",
    "Автоматизация бизнес-процессов",
    "Нейрогенерация контента",
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
