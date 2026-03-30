import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Flower } from 'lucide-react';

interface CurtainOpeningProps {
  onOpen: () => void;
  isOpen: boolean;
}

export function CurtainOpening({ onOpen, isOpen }: CurtainOpeningProps) {
  return (
    <AnimatePresence>
      {!isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-background"
          exit={{ pointerEvents: 'none' }}
        >
          {/* Left Panel */}
          <motion.div
            initial={{ x: 0 }}
            exit={{ 
              x: '-100%', 
              filter: 'blur(10px)',
              transition: { duration: 2.2, ease: [0.65, 0, 0.35, 1] } 
            }}
            className="absolute top-0 left-0 w-1/2 h-full bg-primary z-10 border-r border-secondary/5 flex items-center justify-end"
          >
            <div className="absolute inset-0 golden-embroidery opacity-5" />
            <div className="w-[1px] h-3/4 bg-secondary/30 mr-[-0.5px] golden-seam" />
          </motion.div>

          {/* Right Panel */}
          <motion.div
            initial={{ x: 0 }}
            exit={{ 
              x: '100%', 
              filter: 'blur(10px)',
              transition: { duration: 2.2, ease: [0.65, 0, 0.35, 1] } 
            }}
            className="absolute top-0 right-0 w-1/2 h-full bg-primary z-10 border-l border-secondary/5 flex items-center justify-start"
          >
            <div className="absolute inset-0 golden-embroidery opacity-5" />
            <div className="w-[1px] h-3/4 bg-secondary/30 ml-[-0.5px] golden-seam" />
          </motion.div>

          {/* Central Monogram Seal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ 
              opacity: 0, 
              scale: 1.2, 
              filter: 'blur(20px)',
              transition: { duration: 1.2, ease: "easeOut" }
            }}
            className="relative z-20 flex flex-col items-center justify-center space-y-12"
          >
            <div className="relative group cursor-pointer" onClick={onOpen}>
               {/* Decorative Halo */}
               <motion.div 
                 animate={{ rotate: 360 }}
                 transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                 className="absolute -inset-16 border border-secondary/20 rounded-full border-dashed"
               />
               <motion.div 
                 animate={{ rotate: -360 }}
                 transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
                 className="absolute -inset-20 border border-secondary/10 rounded-full"
               />

               {/* Main Seal */}
               <motion.div
                 whileHover={{ scale: 1.05 }}
                 className="w-48 h-48 rounded-full minimal-seal flex flex-col items-center justify-center p-8 text-center space-y-2 relative bg-background/80 backdrop-blur-sm overflow-hidden"
               >
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent pointer-events-none" />
                  
                  <motion.div 
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="space-y-1"
                  >
                    <span className="text-secondary text-xs uppercase tracking-[0.4em] block">Union of</span>
                    <h2 className="monogram-text text-3xl font-serif">K & R</h2>
                    <div className="flex justify-center py-1">
                      <Heart className="w-3 h-3 text-secondary fill-secondary opacity-60" />
                    </div>
                  </motion.div>
                  
                  <motion.div
                    className="absolute bottom-4 left-0 right-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                  >
                     <span className="text-[10px] uppercase tracking-[0.6em] text-secondary font-sans font-bold block opacity-60">2026</span>
                  </motion.div>
               </motion.div>

               {/* Floating Button Detail */}
               <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 1.2 }}
                 className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-max"
               >
                  <div className="flex flex-col items-center space-y-4">
                    <motion.div
                      animate={{ y: [0, 8, 0] }}
                      transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                    >
                      <Flower className="w-6 h-6 text-secondary/40" />
                    </motion.div>
                    <p className="font-script text-3xl text-primary/70 italic tracking-widest whitespace-nowrap">Tap to reveal the journey</p>
                  </div>
               </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
