'use client';

import { useEffect, useRef, useState } from 'react';

interface Props {
  text: string;
  delay?: number;
  speed?: number;
  variance?: number;
  cursorHoldMs?: number;
  triggerOnView?: boolean;
  className?: string;
}

export default function TypewriterText({
  text,
  delay = 400,
  speed = 85,
  variance = 45,
  cursorHoldMs = 2500,
  triggerOnView = false,
  className,
}: Props) {
  const [displayed, setDisplayed] = useState('');
  const [cursor, setCursor] = useState<'solid' | 'blinking' | 'off'>('solid');
  const [active, setActive] = useState(!triggerOnView);
  const containerRef = useRef<HTMLSpanElement>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!triggerOnView) return;
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [triggerOnView]);

  useEffect(() => {
    if (!active) return;
    let i = 0;
    setDisplayed('');
    setCursor('solid');

    const tick = () => {
      if (i < text.length) {
        i++;
        setDisplayed(text.slice(0, i));
        const jitter = (Math.random() - 0.5) * variance * 2;
        timer.current = setTimeout(tick, speed + jitter);
      } else {
        setCursor('blinking');
        timer.current = setTimeout(() => setCursor('off'), cursorHoldMs);
      }
    };

    timer.current = setTimeout(tick, delay);
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, [active, text, delay, speed, variance, cursorHoldMs]);

  return (
    <span ref={containerRef} className={className}>
      {displayed}
      {cursor !== 'off' && (
        <span
          aria-hidden
          className={cursor === 'blinking' ? 'tw-cursor tw-cursor--blink' : 'tw-cursor'}
        />
      )}
    </span>
  );
}
