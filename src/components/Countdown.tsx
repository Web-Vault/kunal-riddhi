import { useState, useEffect } from 'react';

export function Countdown() {
  const weddingDate = new Date('2026-05-10T11:00:00').getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate - now;

      if (distance < 0) {
        clearInterval(timer);
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [weddingDate]);

  return (
    <div className="flex justify-center space-x-4 md:space-x-8 mt-12">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="text-center">
          <div className="text-3xl md:text-5xl font-serif font-bold text-secondary">
            {String(value).padStart(2, '0')}
          </div>
          <div className="text-xs md:text-sm uppercase tracking-widest text-primary/70">
            {unit}
          </div>
        </div>
      ))}
    </div>
  );
}
