import { motion } from 'framer-motion';

export function FloatingPetals() {
  const petals = Array.from({ length: 40 }); // Increased count for better coverage
  const flowerTypes = ['🌸', '💮', '🍃', '✨'];

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {petals.map((_, i) => {
        const duration = Math.random() * 15 + 10;
        const delay = Math.random() * 20;
        const startX = Math.random() * 100;
        const endX = startX + (Math.random() - 0.5) * 40; // Add some horizontal drift
        const size = Math.random() * 20 + 10;
        const type = flowerTypes[Math.floor(Math.random() * flowerTypes.length)];

        return (
          <motion.div
            key={i}
            initial={{ 
              opacity: 0, 
              x: `${startX}vw`, 
              y: -50,
              rotate: 0,
              scale: 0
            }}
            animate={{ 
              opacity: [0, 1, 1, 0],
              y: "110vh",
              x: `${endX}vw`,
              rotate: Math.random() * 720,
              scale: [0, 1, 1, 0.5]
            }}
            transition={{ 
              duration,
              repeat: Infinity,
              delay,
              ease: "linear"
            }}
            className="absolute text-secondary/40 select-none"
            style={{ 
              fontSize: `${size}px`,
              filter: `blur(${Math.random() * 1}px)` 
            }}
          >
            {type}
          </motion.div>
        );
      })}
    </div>
  );
}
