"use client";

import { useState, useEffect, memo, ReactNode } from "react";

interface TextSegment {
  text: string;
  highlight?: boolean;
}

interface TerminalTypewriterProps {
  segments: TextSegment[];
  speed?: number;
  delay?: number;
  className?: string;
  showCursor?: boolean;
  onComplete?: () => void;
}

function TerminalTypewriterComponent({
  segments,
  speed = 50,
  delay = 0,
  className = "",
  showCursor = true,
  onComplete,
}: TerminalTypewriterProps) {
  const [displayedChars, setDisplayedChars] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  const totalLength = segments.reduce((acc, seg) => acc + seg.text.length, 0);

  useEffect(() => {
    const delayTimeout = setTimeout(() => {
      setHasStarted(true);
    }, delay);

    return () => clearTimeout(delayTimeout);
  }, [delay]);

  useEffect(() => {
    if (!hasStarted) return;

    if (displayedChars < totalLength) {
      // Получаем предыдущий символ для определения паузы
      let charCount = 0;
      let prevChar = '';
      
      for (const segment of segments) {
        if (charCount + segment.text.length >= displayedChars && displayedChars > 0) {
          const indexInSegment = displayedChars - charCount - 1;
          if (indexInSegment >= 0 && indexInSegment < segment.text.length) {
            prevChar = segment.text[indexInSegment];
          }
          break;
        }
        charCount += segment.text.length;
      }

      // Определяем задержку на основе предыдущего символа
      let baseDelay = speed;
      
      if (prevChar === '.' || prevChar === '!' || prevChar === '?') {
        // Длинная пауза после точки, восклицательного или вопросительного знака
        baseDelay = 400 + Math.random() * 200; // 400-600ms
      } else if (prevChar === ',' || prevChar === ':' || prevChar === ';') {
        // Средняя пауза после запятой, двоеточия или точки с запятой
        baseDelay = 150 + Math.random() * 100; // 150-250ms
      } else if (prevChar === ' ') {
        // Короткая пауза после пробела
        baseDelay = 30 + Math.random() * 10; // 30-40ms
      } else {
        // Обычная скорость с небольшой вариацией
        baseDelay = speed + Math.random() * 20 - 10; // ±10ms вариация
      }

      const currentSpeed = Math.max(baseDelay, 20);

      const timeout = setTimeout(() => {
        setDisplayedChars((prev) => prev + 1);
      }, currentSpeed);

      return () => clearTimeout(timeout);
    } else {
      setIsComplete(true);
      onComplete?.();
    }
  }, [displayedChars, totalLength, speed, hasStarted, onComplete, segments]);

  if (!hasStarted) {
    return null;
  }

  const renderText = (): ReactNode[] => {
    const result: ReactNode[] = [];
    let charCount = 0;

    segments.forEach((segment, segIndex) => {
      const segmentStart = charCount;
      const charsToShow = Math.max(
        0,
        Math.min(displayedChars - segmentStart, segment.text.length)
      );
      const visibleText = segment.text.slice(0, charsToShow);

      if (visibleText) {
        if (segment.highlight) {
          result.push(
            <span key={segIndex} className="terminal-highlight">
              {visibleText}
            </span>
          );
        } else {
          result.push(<span key={segIndex}>{visibleText}</span>);
        }
      }

      charCount += segment.text.length;
    });

    return result;
  };

  return (
    <span className={`terminal-text ${className}`}>
      {renderText()}
      {showCursor && !isComplete && <span className="terminal-cursor" />}
    </span>
  );
}

export const TerminalTypewriter = memo(TerminalTypewriterComponent);
