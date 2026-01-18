# Tooltip в Header Терминала - ФИНАЛЬНАЯ ВЕРСИЯ

## ✅ Что сделано

Tooltip перемещён **ВНУТРЬ header терминала** между цветными кружками (🔴🟡🟢) и центром, при этом "portfolio.stats" остаётся **строго по центру**.

## 📍 Правильная позиция

```
┌──────────────────────────────────────────────────┐
│ 🔴🟡🟢  [📁 TOOLTIP]     portfolio.stats         │ ← HEADER
│  ↑dots  ↑ ТУТ!          ↑ центр                 │
├──────────────────────────────────────────────────┤
│ roman@ai-dev:~$ текст более 200 AI-видео...     │
└──────────────────────────────────────────────────┘
```

## 🔧 Изменения в коде

### 1. Cases.tsx - Структура Header с центрированием

**Ключевые изменения:**
- Header получил `position: relative` для absolute позиционирования
- Tooltip между кружками (слева)
- "portfolio.stats" центрируется через `position: absolute` + `left: 50%` + `transform: translateX(-50%)`

```tsx
<div className="flex items-center gap-3 px-4 py-3 relative">
  {/* Цветные кружки */}
  <div className="flex gap-2 flex-shrink-0">
    <span className="w-3 h-3 rounded-full" style={{ backgroundColor: "#ff5f56" }} />
    <span className="w-3 h-3 rounded-full" style={{ backgroundColor: "#ffbd2e" }} />
    <span className="w-3 h-3 rounded-full" style={{ backgroundColor: "#27c93f" }} />
  </div>
  
  {/* TOOLTIP В HEADER (между кружками и центром) */}
  {highlightApplied && (
    <a
      href="..."
      className={`tooltip-bubble-header ${showTooltipAuto ? 'tooltip-visible' : ''}`}
    >
      <span className="tooltip-icon">📁</span>
      <span className="tooltip-text">посмотреть примеры на Google Drive</span>
      <svg className="tooltip-arrow-icon" width="12" height="12">...</svg>
    </a>
  )}
  
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
</div>
```

### 2. globals.css - Новые стили

**Класс изменён:**
- `.tooltip-link-header` → `.tooltip-bubble-header`
- `.arrow-icon` → `.tooltip-arrow-icon`
- Анимация `tooltipGentlePulse` → `tooltipPulse`

**Добавлено:**
- `.terminal-title-center` с `pointer-events: none`
- Компактный padding: `8px 12px` (вместо `8px 14px`)

## 🎨 Ключевые особенности

### Flexbox + Absolute позиционирование
```css
.terminal-header {
  display: flex;
  position: relative; /* Для absolute центрирования */
  gap: 3px;
}

.terminal-title-center {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  pointer-events: none; /* Не мешает кликам */
}
```

### Компактное облачко
```css
.tooltip-bubble-header {
  padding: 8px 12px; /* Компактнее */
  border-radius: 8px;
  font-size: 12px;
  gap: 6px;
}
```

### Лёгкая пульсация
```css
@keyframes tooltipPulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.03);
  }
}
```

## 📱 Адаптивность

### Планшеты (≤768px)
- Padding: `6px 10px`
- Font-size: `11px`
- Gap: `4px`
- Ограничение ширины текста: `max-width: 140px`

### Смартфоны (≤480px)
- Tooltip полностью скрыт: `display: none`

## 🎯 Поведение

1. **Появление:** Tooltip появляется через 1 секунду после завершения печатания текста
2. **Длительность:** Показывается 10 секунд
3. **Исчезновение:** Плавно исчезает через 10 секунд
4. **Hover:** При наведении на золотой текст "более 200 AI-видео" tooltip также появляется
5. **Анимация:** Лёгкая пульсация каждые 3 секунды (с задержкой 0.5с)

## ✅ Результат

- ✅ Tooltip В HEADER между кружками и центром
- ✅ "portfolio.stats" строго по центру (absolute positioning)
- ✅ Компактное облачко (8px 12px padding)
- ✅ Плавное появление/исчезание (600ms/800ms)
- ✅ Лёгкая пульсация с задержкой
- ✅ Адаптивный дизайн
- ✅ Стильный и профессиональный вид

## 🔍 Схема расположения

```
Flexbox flow (слева направо):
┌─────────────────────────────────────────┐
│ [dots] [tooltip] <space>                │
│                                         │
│         [portfolio.stats]               │
│         ↑ absolute center               │
└─────────────────────────────────────────┘
```

**Порядок элементов в DOM:**
1. 🔴🟡🟢 Кружки (flex-shrink-0)
2. 📁 Tooltip (flex-shrink-0)
3. portfolio.stats (position: absolute, left: 50%)

**Центрирование работает независимо от tooltip!**
