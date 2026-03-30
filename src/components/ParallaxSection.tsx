import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, ReactNode } from 'react';

interface ParallaxSectionProps {
  children: ReactNode;
  backgroundImage?: string;
  className?: string;
  speed?: number;
  overlay?: boolean;
}

export function ParallaxSection({ 
  children, 
  backgroundImage, 
  className = '', 
  speed = 0.5,
  overlay = false
}: ParallaxSectionProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", `${speed * 100}%`]);

  return (
    <section 
      ref={ref} 
      className={`relative min-h-screen overflow-hidden flex items-center justify-center ${className}`}
    >
      {backgroundImage && (
        <motion.div 
          style={{ y }}
          className="absolute inset-0 -z-10"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
          {overlay && <div className="absolute inset-0 bg-primary/20" />}
        </motion.div>
      )}
      <div className="relative z-10 w-full max-w-screen-2xl mx-auto px-6 md:px-12 py-24">
        {children}
      </div>
    </section>
  );
}
