"use client";

import { useEffect, useRef, useState } from "react";

export default function PricingTerminal() {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const terminalRef = useRef<HTMLDivElement>(null);
  const currentIndexRef = useRef(0);
  const animationFrameRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number>(0);

  const fullText = `Каждый AI-проект уникален. В таблице представлены типовые,
коробочные решения с фиксированной ценой.
Для разработки под ваше ТЗ стоимость рассчитывается индивидуально -
от 10 000₽ до 150 000₽+ (для сложных или нестандартных решений).
На цену влияет сложность и нестандартность задачи. Если ваша задача
приближена к типовой, то стоимость будет как у типовой.`;

  useEffect(() => {
    // Проверка prefers-reduced-motion
    const prefersReducedMotion =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      setDisplayedText(fullText);
      setHasAnimated(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            setIsTyping(true);
            startTypingAnimation();
          }
        });
      },
      { threshold: 0.2 }
    );

    if (terminalRef.current) {
      observer.observe(terminalRef.current);
    }

    return () => {
      if (terminalRef.current) {
        observer.unobserve(terminalRef.current);
      }
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  const startTypingAnimation = () => {
    const typingSpeed = 35;
    lastTimeRef.current = performance.now();

    const typeNextChar = (currentTime: number) => {
      const elapsed = currentTime - lastTimeRef.current;

      if (elapsed >= typingSpeed) {
        if (currentIndexRef.current < fullText.length) {
          setDisplayedText(fullText.slice(0, currentIndexRef.current + 1));
          currentIndexRef.current++;
          lastTimeRef.current = currentTime;
        } else {
          setIsTyping(false);
          return;
        }
      }

      animationFrameRef.current = requestAnimationFrame(typeNextChar);
    };

    animationFrameRef.current = requestAnimationFrame(typeNextChar);
  };

  const handleClick = () => {
    if (isTyping) {
      // Пропустить анимацию при клике
      setDisplayedText(fullText);
      setIsTyping(false);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    }
  };

  // Функция для подсветки цен золотым цветом
  const formatText = (text: string) => {
    const parts = text.split(/(\d+\s?\d+\s?\d+₽\+?)/g);
    return parts.map((part, index) => {
      if (/\d+\s?\d+\s?\d+₽\+?/.test(part)) {
        return (
          <span
            key={index}
            style={{
              color: "rgb(218, 164, 40)",
              fontWeight: 600,
              textShadow:
                "0 0 8px rgba(218, 164, 40, 0.6), 0 0 12px rgba(218, 164, 40, 0.4)",
            }}
          >
            {part}
          </span>
        );
      }
      return part;
    });
  };

  return (
    <div
      ref={terminalRef}
      className="pricing-terminal-container"
      style={{
        marginTop: "40px",
        width: "100%",
        maxWidth: "900px",
        marginLeft: "auto",
        marginRight: "auto",
      }}
      onClick={handleClick}
      role="region"
      aria-label="Информация о ценообразовании"
    >
      <div
        className="terminal-block"
        style={{
          backgroundColor: "rgb(15, 15, 15)",
          borderRadius: "12px",
          overflow: "hidden",
          boxShadow:
            "0 8px 32px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(218, 164, 40, 0.2), 0 0 40px rgba(218, 164, 40, 0.1)",
          border: "1px solid rgba(218, 164, 40, 0.3)",
          transition: "all 0.3s ease",
          cursor: isTyping ? "pointer" : "default",
        }}
      >
        {/* Header терминала */}
        <div
          className="terminal-header"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            padding: "12px 16px",
            background:
              "linear-gradient(to bottom, rgba(30, 30, 30, 1), rgba(20, 20, 20, 1))",
            borderBottom: "1px solid rgba(218, 164, 40, 0.2)",
          }}
        >
          <div style={{ display: "flex", gap: "8px" }}>
            <span
              style={{
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                backgroundColor: "#ff5f56",
              }}
            />
            <span
              style={{
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                backgroundColor: "#ffbd2e",
              }}
            />
            <span
              style={{
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                backgroundColor: "#27c93f",
              }}
            />
          </div>
          <span
            style={{
              fontFamily: "var(--font-mono), 'Fira Code', 'Courier New', monospace",
              fontSize: "13px",
              color: "rgba(255, 255, 255, 0.6)",
            }}
          >
            pricing.info
          </span>
        </div>

        {/* Контент терминала */}
        <div
          className="terminal-content"
          style={{
            padding: "32px",
            fontFamily: "var(--font-mono), 'Fira Code', 'Courier New', monospace",
            fontSize: "15px",
            lineHeight: "1.8",
            color: "#ffffff",
            minHeight: "200px",
          }}
        >
          <div style={{ display: "flex", gap: "8px" }}>
            <span
              style={{
                color: "rgb(218, 164, 40)",
                fontWeight: 600,
                flexShrink: 0,
                textShadow:
                  "0 0 8px rgba(218, 164, 40, 0.6), 0 0 12px rgba(218, 164, 40, 0.4)",
              }}
            >
              roman@ai-dev:~$
            </span>
            <div
              style={{
                flex: 1,
                whiteSpace: "pre-wrap",
                wordBreak: "break-word",
              }}
            >
              {formatText(displayedText)}
              {isTyping && (
                <span
                  className="cursor-blink"
                  style={{
                    display: "inline-block",
                    width: "8px",
                    height: "18px",
                    backgroundColor: "rgb(218, 164, 40)",
                    marginLeft: "2px",
                    animation: "blink 1s step-end infinite",
                  }}
                />
              )}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blink {
          0%,
          50% {
            opacity: 1;
          }
          51%,
          100% {
            opacity: 0;
          }
        }

        @media (max-width: 768px) {
          .pricing-terminal-container {
            padding: 0 16px;
          }

          .terminal-content {
            padding: 24px 20px !important;
            font-size: 13px !important;
          }

          .terminal-header {
            padding: 10px 14px !important;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .cursor-blink {
            animation: none !important;
            opacity: 1 !important;
          }
        }
      `}</style>
    </div>
  );
}
