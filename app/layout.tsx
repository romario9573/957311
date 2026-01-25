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
  metadataBase: new URL('https://romarioai.ru'),
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
  authors: [{ name: "Роман" }],
  creator: "Роман",
  publisher: "Роман",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://romarioai.ru',
  },
  openGraph: {
    title: "AI-разработчик | Внедрение ИИ в бизнес | Обучение ИИ",
    description:
      "Профессиональная разработка AI-агентов и внедрение искусственного интеллекта в бизнес-процессы. Обучение работе с ИИ-инструментами. Автоматизация и оптимизация с помощью AI.",
    url: 'https://romarioai.ru',
    siteName: 'Romario[AI]',
    type: "website",
    locale: "ru_RU",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI-разработчик | Внедрение ИИ в бизнес | Обучение ИИ",
    description:
      "Профессиональная разработка AI-агентов и внедрение искусственного интеллекта в бизнес-процессы. Обучение работе с ИИ-инструментами. Автоматизация и оптимизация с помощью AI.",
  },
  verification: {
    yandex: '1d1cafc5922356c8',
  },
};

// JSON-LD структурированные данные для SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Роман",
  url: "https://romarioai.ru",
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
  sameAs: [
    "https://t.me/m/V0FK56BWNTIy"
  ],
  offers: {
    "@type": "AggregateOffer",
    offerCount: "20",
    lowPrice: "500",
    highPrice: "50000",
    priceCurrency: "RUB"
  }
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
