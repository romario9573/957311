"use client";

import { useState, useEffect, memo, ReactNode } from "react";

interface TextSegment {
  text: string;
  bold?: boolean;
}

interface TypewriterTextProps {
  segments: TextSegment[];
  speed?: number;
  delay?: number;
  className?: string;
  showCursor?: boolean;
  onComplete?: () => void;
}

function TypewriterTextComponent({
  segments,
  speed = 40,
  delay = 0,
  className = "",
  showCursor = true,
  onComplete,
}: TypewriterTextProps) {
  const [displayedChars, setDisplayedChars] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  // Общая длина всего текста
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
      // Добавляем небольшую вариацию скорости для естественности
      const variation = Math.random() * 20 - 10; // ±10ms
      const currentSpeed = Math.max(speed + variation, 15);
      
      const timeout = setTimeout(() => {
        setDisplayedChars((prev) => prev + 1);
      }, currentSpeed);

      return () => clearTimeout(timeout);
    } else {
      setIsComplete(true);
      onComplete?.();
    }
  }, [displayedChars, totalLength, speed, hasStarted, onComplete]);

  if (!hasStarted) {
    return null;
  }

  // Рендерим текст посегментно
  const renderText = (): ReactNode[] => {
    const result: ReactNode[] = [];
    let charCount = 0;

    segments.forEach((segment, segIndex) => {
      const segmentStart = charCount;
      const segmentEnd = charCount + segment.text.length;
      
      // Сколько символов показать из этого сегмента
      const charsToShow = Math.max(0, Math.min(displayedChars - segmentStart, segment.text.length));
      const visibleText = segment.text.slice(0, charsToShow);

      if (visibleText) {
        if (segment.bold) {
          result.push(
            <strong key={segIndex} className="font-bold">
              {visibleText}
            </strong>
          );
        } else {
          result.push(<span key={segIndex}>{visibleText}</span>);
        }
      }

      charCount = segmentEnd;
    });

    return result;
  };

  return (
    <span className={className}>
      {renderText()}
      {showCursor && !isComplete && (
        <span
          className="inline-block ml-0.5 animate-blink"
          style={{ color: "rgb(218, 164, 40)", fontWeight: 300 }}
        >
          |
        </span>
      )}
    </span>
  );
}

export const TypewriterText = memo(TypewriterTextComponent);
