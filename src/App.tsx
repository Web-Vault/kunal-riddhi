import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { AnimatedCard } from './components/AnimatedCard';
import { FloatingPetals } from './components/FloatingPetals';
import { CustomCursor } from './components/CustomCursor';
import { MusicPlayer } from './components/MusicPlayer';
import { BackToTop } from './components/BackToTop';
import { Countdown } from './components/Countdown';
import { CurtainOpening } from './components/CurtainOpening';
import { Flower, Music, Star, Minus, MapPin, Calendar, Clock } from 'lucide-react';
import { useRef, useState } from 'react';

function App() {
   const [isOpen, setIsOpen] = useState(false);
   const containerRef = useRef(null);
   const { scrollYProgress } = useScroll();
   const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

   // Hooks must be called at the top level
   const weddingImgY = useTransform(scrollYProgress, [0.5, 0.8], [0, -150]);
   const sangeetImgY1 = useTransform(scrollYProgress, [0.3, 0.6], [50, -50]);
   const sangeetImgY2 = useTransform(scrollYProgress, [0.3, 0.6], [-50, 50]);
   const sangeetImgY3 = useTransform(scrollYProgress, [0.3, 0.6], [100, -100]);

   return (
      <div ref={containerRef} className={`relative bg-background ${!isOpen ? 'h-screen overflow-hidden' : ''}`}>
         <CurtainOpening isOpen={isOpen} onOpen={() => setIsOpen(true)} />
         <CustomCursor />
         <FloatingPetals />
         <MusicPlayer autoPlay={isOpen} />
         <BackToTop />

         {isOpen && (
            <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ duration: 1, delay: 0.5 }}
               className="relative overflow-x-hidden"
            >
               <motion.div className="fixed top-0 left-0 right-0 h-1 bg-secondary z-50 origin-left" style={{ scaleX }} />

               {/* Section 1: Hero - The Editorial Landing */}
               <section className="relative min-h-screen flex items-center justify-center p-6 md:p-24 overflow-hidden">
                  <div className="absolute top-12 left-12 hidden md:block z-20">
                     <motion.div 
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }} 
                        transition={{ delay: 2.2 }} 
                        className="flex items-center space-x-4 text-secondary uppercase tracking-[0.5em] text-xs"
                     >
                        <span>2026</span>
                        <Minus className="w-4 h-4" />
                        <span>Ahmedabad</span>
                     </motion.div>
                  </div>

                  <div className="magazine-grid w-full max-w-screen-2xl items-center">
                     <div className="col-span-12 md:col-span-7 relative order-2 md:order-1">
                        <motion.div
                           initial={{ scale: 1.1, opacity: 0 }}
                           animate={{ scale: 1, opacity: 1 }}
                           transition={{ duration: 1.5, delay: 1.8 }}
                           className="aspect-[4/5] md:aspect-[3/4] overflow-hidden grayscale-[0.2] hover:grayscale-0 transition-all duration-1000 shadow-2xl relative"
                        >
                           <img
                              src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1200"
                              alt="Couple"
                              className="w-full h-full object-cover"
                           />
                           <div className="absolute inset-0 border-[20px] border-background pointer-events-none" />
                        </motion.div>
                        <motion.div
                           initial={{ x: -100, opacity: 0 }}
                           animate={{ x: 0, opacity: 1 }}
                           transition={{ delay: 2.5, duration: 1 }}
                           className="absolute -bottom-10 -right-4 md:-right-10 bg-background p-6 md:p-12 minimal-border soft-shadow z-30"
                        >
                           <Countdown />
                        </motion.div>
                     </div>

                     <div className="col-span-12 md:col-span-5 flex flex-col space-y-8 z-10 order-1 md:order-2 md:pl-12 mb-12 md:mb-0">
                        <motion.p
                           initial={{ opacity: 0, y: 20 }}
                           animate={{ opacity: 1, y: 0 }}
                           transition={{ delay: 2.2 }}
                           className="font-script text-4xl md:text-6xl text-secondary"
                        >
                           {"A Celebration of Love".split("").map((char, i) => (
                              <motion.span
                                 key={i}
                                 initial={{ opacity: 0 }}
                                 animate={{ opacity: 1 }}
                                 transition={{ delay: 2.2 + (i * 0.05) }}
                              >
                                 {char}
                              </motion.span>
                           ))}
                        </motion.p>
                        <div className="relative">
                           <motion.h1
                              initial={{ opacity: 0, x: 50 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 2.4, duration: 1 }}
                              className="text-6xl md:text-[12rem] font-serif font-bold leading-[0.85] tracking-tighter text-primary"
                           >
                              Kunal<br />& Ridhhi
                           </motion.h1>
                        </div>
                        <motion.div
                           initial={{ opacity: 0 }}
                           animate={{ opacity: 1 }}
                           transition={{ delay: 3.2 }}
                           className="flex flex-col space-y-2 uppercase tracking-[0.4em] text-sm text-secondary font-sans border-l-2 border-secondary pl-6"
                        >
                           <span className="text-primary font-bold text-xl tracking-widest">10 . 05 . 2026</span>
                           <span>Ahmedabad</span>
                        </motion.div>
                     </div>
                  </div>
               </section>

               {/* Section 2: Ganesh Sthapana - Divine Altar Layout */}
               <section className="relative min-h-screen py-32 bg-background overflow-hidden">
                  <div className="absolute inset-0 ganesh-altar pointer-events-none" />
                  <div className="magazine-grid max-w-screen-2xl mx-auto px-6 md:px-12 items-center">
                     <div className="col-span-12 md:col-span-6 flex flex-col items-center justify-center space-y-12 relative z-10 order-2 md:order-1">
                        <AnimatedCard className="p-0 border-none bg-transparent">
                           <motion.div
                              initial={{ opacity: 0, scale: 0.5 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 1, type: "spring" }}
                              className="relative mb-12"
                           >
                              <div className="absolute inset-0 mandala-pattern opacity-20 animate-spin-slow scale-150" />
                              <div className="relative w-48 h-48 bg-white rounded-full border-2 border-secondary/30 flex items-center justify-center p-8 shadow-2xl">
                                 <Flower className="w-full h-full text-secondary" />
                              </div>
                           </motion.div>
                           <div className="text-center space-y-8">
                              <div className="space-y-2">
                                 <span className="text-xs uppercase tracking-[0.8em] text-secondary font-bold">Divine Blessings</span>
                                 <h2 className="text-6xl md:text-9xl font-serif font-bold text-primary leading-none tracking-tighter">Ganesh<br /><span className="text-secondary italic tracking-widest">Sthapana</span></h2>
                              </div>
                              <p className="text-xl md:text-2xl font-light leading-relaxed max-w-md mx-auto italic text-primary/70">
                                 "A sacred beginning to a lifelong journey, seeking the grace of Lord Ganesha."
                              </p>
                           </div>
                        </AnimatedCard>
                     </div>

                     <div className="col-span-12 md:col-span-5 md:col-start-8 order-1 md:order-2 mb-16 md:mb-0">
                        <div className="relative">
                           <div className="aspect-[3/4] overflow-hidden rounded-t-full golden-border-royal p-2">
                              <img
                                 src="https://images.unsplash.com/photo-1523438885200-e635ba2c371e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                 alt="Ganesh"
                                 className="w-full h-full object-cover rounded-t-full grayscale hover:grayscale-0 transition-all duration-1000"
                              />
                           </div>
                           <div className="absolute -bottom-12 -left-12 bg-primary p-10 text-white shadow-2xl space-y-4 hidden md:block">
                              <div className="flex items-center space-x-3">
                                 <Calendar className="w-5 h-5 text-secondary" />
                                 <span className="uppercase tracking-widest text-sm">09 May, 2026</span>
                              </div>
                              <div className="flex items-center space-x-3">
                                 <Clock className="w-5 h-5 text-secondary" />
                                 <span className="uppercase tracking-widest text-sm">09:00 AM</span>
                              </div>
                              <div className="flex items-center space-x-3">
                                 <MapPin className="w-5 h-5 text-secondary" />
                                 <span className="uppercase tracking-widest text-sm">Khatri Mahajan vadi, Bagasara</span>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </section>

               {/* Section 3: Mandap Mahurat - Architectural Pillar Layout */}
               <section className="relative py-32 md:py-64 bg-white overflow-hidden">
                  <div className="magazine-grid max-w-screen-2xl mx-auto px-6 md:px-12 items-center">
                     <div className="col-span-12 md:col-span-7 relative">
                        <div className="grid grid-cols-2 gap-4 md:gap-8">
                           <motion.div
                              initial={{ y: 100, opacity: 0 }}
                              whileInView={{ y: 0, opacity: 1 }}
                              className="aspect-[4/6] overflow-hidden royal-frame p-2"
                           >
                              <img src="https://images.unsplash.com/photo-1595916533100-36207049405d?auto=format&fit=crop&q=80&w=1200" alt="Mandap 1" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                           </motion.div>
                           <motion.div
                              initial={{ y: -100, opacity: 0 }}
                              whileInView={{ y: 0, opacity: 1 }}
                              className="aspect-[4/6] overflow-hidden royal-frame p-2 mt-20"
                           >
                              <img src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=1200" alt="Mandap 2" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                           </motion.div>
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                           <span className="text-[15vw] font-serif font-bold text-primary/5 uppercase leading-none -rotate-90 tracking-[0.2em]">SACRED</span>
                        </div>
                     </div>

                     <div className="col-span-12 md:col-span-4 md:col-start-9 space-y-12 mt-24 md:mt-0">
                        <AnimatedCard className="p-0 border-none bg-transparent">
                           <div className="space-y-8">
                              <div className="flex items-center space-x-4">
                                 <Star className="w-8 h-8 text-secondary" />
                                 <div className="h-px flex-1 bg-secondary/30" />
                              </div>
                              <h2 className="text-5xl md:text-[7rem] font-serif font-bold leading-none text-primary tracking-tighter">Mandap<br /><span className="text-secondary italic">Mahurat</span></h2>
                              <p className="text-lg md:text-xl font-light text-primary/70 leading-relaxed italic border-r-4 border-secondary pr-8 text-right">
                                 "The building of the sacred pavilion where our souls will unite in the presence of the fire and our loved ones."
                              </p>
                              <div className="space-y-6 pt-12 border-t border-secondary/10">
                                 <div className="flex flex-col items-end space-y-2">
                                    <span className="text-xs uppercase tracking-widest text-secondary font-bold">The Time</span>
                                    <p className="text-2xl font-serif">09 May | 09:30 AM</p>
                                 </div>
                                 <div className="flex flex-col items-end space-y-2">
                                    <span className="text-xs uppercase tracking-widest text-secondary font-bold">The Venue</span>
                                    <p className="text-2xl font-serif text-right italic">Khatri Mahajan vadi, Bagasara</p>
                                 </div>
                              </div>
                              <motion.button
                                 whileHover={{ scale: 1.05, backgroundColor: '#541212', color: '#fff' }}
                                 className="w-full py-5 border-2 border-primary text-primary uppercase tracking-[0.4em] text-xs font-bold transition-all"
                              >
                                 Explore Venue
                              </motion.button>
                           </div>
                        </AnimatedCard>
                     </div>
                  </div>
               </section>

               {/* Section 4: Sangeet - The Floating Symphony */}
               <section className="relative min-h-screen sangeet-stage text-white overflow-hidden">
                  {/* SVG Path for Organic Clipping */}
                  <svg width="0" height="0" className="absolute">
                     <defs>
                        <clipPath id="organic-path" clipPathUnits="objectBoundingBox">
                           <path d="M0.5,0 C0.8,0,1,0.2,1,0.5 C1,0.8,0.8,1,0.5,1 C0.2,1,0,0.8,0,0.5 C0,0.2,0.2,0,0.5,0 Z M0.2,0.2 Q0.5,0,0.8,0.2 T0.8,0.8 Q0.5,1,0.2,0.8 T0.2,0.2" />
                        </clipPath>
                     </defs>
                  </svg>

                  {/* Background: Golden Bokeh & Hairline Circles */}
                  <div className="absolute inset-0 pointer-events-none">
                     {[...Array(8)].map((_, i) => (
                        <motion.div
                           key={`bokeh-${i}`}
                           animate={{ 
                              scale: [1, 1.2, 1],
                              opacity: [0.1, 0.2, 0.1],
                           }}
                           transition={{ duration: 10 + i * 2, repeat: Infinity, ease: "easeInOut" }}
                           className="bokeh-light"
                           style={{ 
                              width: `${200 + i * 100}px`, 
                              height: `${200 + i * 100}px`,
                              top: `${(i * 123) % 100}%`,
                              left: `${(i * 456) % 100}%`
                           }}
                        />
                     ))}
                     {[...Array(3)].map((_, i) => (
                        <div 
                           key={`circle-${i}`}
                           className="hairline-circle"
                           style={{ 
                              width: `${400 + i * 200}px`, 
                              height: `${400 + i * 200}px`,
                              top: '50%',
                              left: '50%',
                              transform: 'translate(-50%, -50%)'
                           }}
                        />
                     ))}
                  </div>

                  <div className="symphony-cluster max-w-screen-2xl mx-auto px-6 relative z-10">
                     {/* Floating Image 1: Large Arched */}
                     <motion.div
                        style={{ y: sangeetImgY1 }}
                        className="absolute left-10 md:left-24 top-20 w-64 md:w-96 aspect-[3/4] rounded-t-full overflow-hidden border border-secondary/20 z-20"
                     >
                        <img 
                           src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1200" 
                           alt="Sangeet 1" 
                           className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                        />
                     </motion.div>

                     {/* Floating Image 2: Organic Shape */}
                     <motion.div
                        style={{ y: sangeetImgY2 }}
                        className="absolute right-10 md:right-32 top-40 w-48 md:w-80 aspect-square shape-organic overflow-hidden border border-secondary/20 z-10"
                     >
                        <img 
                           src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800" 
                           alt="Sangeet 2" 
                           className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                        />
                     </motion.div>

                     {/* Central Content: Deconstructed Typography */}
                     <div className="text-center relative z-30">
                        <div className="mb-12">
                           <motion.div
                              initial={{ opacity: 0 }}
                              whileInView={{ opacity: 1 }}
                              className="flex items-center justify-center space-x-4 mb-8"
                           >
                              <div className="w-8 h-px bg-secondary/50" />
                              <span className="text-secondary uppercase tracking-[1em] text-[10px] font-bold">The Symphony</span>
                              <div className="w-8 h-px bg-secondary/50" />
                           </motion.div>
                           
                           <h2 className="text-7xl md:text-[12rem] font-serif font-bold leading-none tracking-tighter flex flex-wrap justify-center overflow-hidden">
                              {"SANGEET".split("").map((char, i) => (
                                 <motion.span
                                    key={i}
                                    initial={{ y: 100, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    transition={{ delay: i * 0.1, duration: 0.8 }}
                                    className="sangeet-char"
                                 >
                                    {char}
                                 </motion.span>
                              ))}
                           </h2>
                           <motion.p
                              initial={{ opacity: 0 }}
                              whileInView={{ opacity: 1 }}
                              transition={{ delay: 1 }}
                              className="text-secondary italic text-4xl md:text-6xl font-script mt-4 music-shimmer"
                           >
                              of Harmony
                           </motion.p>
                        </div>

                        <div className="space-y-12 max-w-lg mx-auto">
                           <p className="text-xl md:text-2xl font-light text-accent/80 leading-relaxed italic border-y border-secondary/10 py-8">
                              "Where music transcends language and every beat tells our story."
                           </p>

                           <div className="grid grid-cols-2 gap-12 text-left">
                              <div className="space-y-1">
                                 <span className="text-secondary text-[10px] uppercase tracking-widest font-bold">The Time</span>
                                 <p className="text-2xl font-serif">09 May | 07 PM</p>
                              </div>
                              <div className="space-y-1">
                                 <span className="text-secondary text-[10px] uppercase tracking-widest font-bold">The Venue</span>
                                 <p className="text-2xl font-serif">Perfect resort, Bagasara-Amreli Highway </p>
                              </div>
                           </div>

                           <motion.button
                              whileHover={{ scale: 1.05 }}
                              className="px-12 py-5 bg-transparent border border-secondary text-secondary uppercase tracking-[0.5em] text-[10px] font-bold hover:bg-secondary hover:text-primary transition-all duration-500"
                           >
                              Join the Celebration
                           </motion.button>
                        </div>
                     </div>

                     {/* Floating Image 3: Small Circle */}
                     <motion.div
                        style={{ y: sangeetImgY3 }}
                        className="absolute bottom-20 left-1/3 w-32 md:w-48 aspect-square rounded-full overflow-hidden border border-secondary/20 z-20 hidden md:block"
                     >
                        <img 
                           src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=400" 
                           alt="Sangeet 3" 
                           className="w-full h-full object-cover grayscale"
                        />
                     </motion.div>
                  </div>

                  {/* Delicate Floating Musical Particles */}
                  <div className="absolute inset-0 pointer-events-none">
                     {[...Array(12)].map((_, i) => (
                        <motion.div
                           key={`particle-${i}`}
                           animate={{ 
                              y: [0, -200],
                              opacity: [0, 0.3, 0],
                              rotate: [0, 360]
                           }}
                           transition={{ 
                              duration: 8 + (i % 5) * 2, 
                              repeat: Infinity, 
                              delay: (i % 4) * 1.5 
                           }}
                           className="absolute text-secondary/20"
                           style={{ 
                              bottom: '-20px', 
                              left: `${(i * 17) % 100}%` 
                           }}
                        >
                           <Music className="w-6 h-6" />
                        </motion.div>
                     ))}
                  </div>
               </section>

               {/* Section 5: The Wedding - Grand Cinematic Spread */}
               <section className="relative min-h-[150vh] bg-white overflow-hidden py-32 md:py-64">
                  {/* Decorative Background Elements */}
                  <div className="absolute top-0 right-0 w-1/2 h-full bg-background/50 -z-10" />
                  <div className="absolute top-1/2 left-0 w-full h-px bg-secondary/20 -z-10" />

                  <div className="magazine-grid max-w-screen-2xl mx-auto px-6 md:px-12 items-start">
                     {/* Left Column: Image Collage */}
                     <div className="col-span-12 md:col-span-7 relative">
                        <div className="relative z-10">
                           <motion.div
                              initial={{ opacity: 0, y: 50 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 1.2 }}
                              className="royal-frame bg-white"
                           >
                              <div className="aspect-[4/5] overflow-hidden">
                                 <motion.img
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.8 }}
                                    src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=1200"
                                    alt="Main Wedding"
                                    className="w-full h-full object-cover"
                                 />
                              </div>
                           </motion.div>
                        </div>

                        {/* Floating Secondary Image */}
                        <motion.div
                           style={{ y: weddingImgY }}
                           className="absolute -bottom-20 -left-10 md:-left-20 w-1/2 z-20 hidden md:block"
                        >
                           <div className="minimal-border p-2 bg-background shadow-2xl">
                              <img
                                 src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800"
                                 alt="Detail"
                                 className="w-full h-full object-cover grayscale"
                              />
                           </div>
                        </motion.div>

                        {/* Decorative Text */}
                        <div className="absolute top-1/4 -right-12 pointer-events-none select-none z-0">
                           <span className="text-[12vw] font-serif font-bold text-primary/5 uppercase leading-none tracking-tighter vertical-text">
                              VOWS
                           </span>
                        </div>
                     </div>

                     {/* Right Column: Detailed Content */}
                     <div className="col-span-12 md:col-span-4 md:col-start-9 space-y-16 mt-24 md:mt-0 sticky top-32">
                        <div className="space-y-6">
                           <motion.div
                              initial={{ opacity: 0 }}
                              whileInView={{ opacity: 1 }}
                              className="flex items-center space-x-4"
                           >
                              <div className="h-px w-8 bg-secondary" />
                              <span className="text-xs uppercase tracking-[0.8em] text-secondary font-bold">The Main Event</span>
                           </motion.div>
                           <h2 className="text-6xl md:text-9xl font-serif font-bold leading-[0.8] tracking-tighter text-primary">
                              The<br />
                              <span className="wedding-title-shimmer italic">Wedding</span><br />
                              Day
                           </h2>
                        </div>

                        <AnimatedCard className="p-0 border-none bg-transparent">
                           <div className="space-y-12">
                              <p className="text-xl md:text-2xl font-light text-primary/70 leading-relaxed italic border-l-2 border-secondary pl-8">
                                 "A union of two souls, blessed by tradition and celebrated with love. Join us as we begin our forever."
                              </p>

                              <div className="space-y-10">
                                 <div className="flex items-start space-x-6">
                                    <div className="w-12 h-12 rounded-full border border-secondary/30 flex items-center justify-center flex-shrink-0">
                                       <Calendar className="w-5 h-5 text-secondary" />
                                    </div>
                                    <div className="space-y-1">
                                       <span className="text-xs uppercase tracking-widest text-secondary font-bold">The Date</span>
                                       <p className="text-2xl font-serif">Sunday, 10 May 2026</p>
                                    </div>
                                 </div>

                                 <div className="flex items-start space-x-6">
                                    <div className="w-12 h-12 rounded-full border border-secondary/30 flex items-center justify-center flex-shrink-0">
                                       <Clock className="w-5 h-5 text-secondary" />
                                    </div>
                                    <div className="space-y-1">
                                       <span className="text-xs uppercase tracking-widest text-secondary font-bold">The Muhurat</span>
                                       <p className="text-2xl font-serif">11:00 AM Onwards</p>
                                    </div>
                                 </div>

                                 <div className="flex items-start space-x-6">
                                    <div className="w-12 h-12 rounded-full border border-secondary/30 flex items-center justify-center flex-shrink-0">
                                       <MapPin className="w-5 h-5 text-secondary" />
                                    </div>
                                    <div className="space-y-1">
                                       <span className="text-xs uppercase tracking-widest text-secondary font-bold">The Venue</span>
                                       <p className="text-2xl font-serif">Perfect resort, Bagasara-Amreli Highway</p>
                                    </div>
                                 </div>
                              </div>

                              <div className="pt-8">
                                 <motion.button
                                    whileHover={{ scale: 1.02, backgroundColor: '#541212', color: '#fff' }}
                                    className="w-full py-5 border-2 border-primary text-primary uppercase tracking-[0.5em] text-xs font-bold transition-all duration-300 shadow-xl"
                                 >
                                    Get Directions
                                 </motion.button>
                              </div>
                           </div>
                        </AnimatedCard>
                     </div>
                  </div>
               </section>

               {/* Section 6: Reception - Modern Sophistication */}
               {/* <section className="relative py-32 md:py-64 bg-white overflow-hidden">
                  <div className="absolute inset-0 pattern-dots opacity-5" />
                  <div className="magazine-grid max-w-screen-2xl mx-auto px-6 md:px-12 items-center">
                     <div className="col-span-12 md:col-span-6 order-2 md:order-1 flex flex-col items-center">
                        <div className="grid grid-cols-2 gap-8 w-full">
                           <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} className="col-span-1 aspect-[3/4] overflow-hidden grayscale hover:grayscale-0 transition-all">
                              <img src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800" alt="Reception 1" className="w-full h-full object-cover" />
                           </motion.div>
                           <motion.div initial={{ opacity: 0, y: -50 }} whileInView={{ opacity: 1, y: 0 }} className="col-span-1 aspect-[3/4] overflow-hidden mt-12 grayscale hover:grayscale-0 transition-all">
                              <img src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800" alt="Reception 2" className="w-full h-full object-cover" />
                           </motion.div>
                        </div>
                     </div>
                     <div className="col-span-12 md:col-span-5 md:col-start-8 order-1 md:order-2 space-y-12 mb-16 md:mb-0">
                        <AnimatedCard className="p-0 border-none">
                           <h2 className="text-5xl md:text-8xl font-serif font-bold text-primary mb-8 tracking-tighter">Reception<br /><span className="text-secondary italic">Dinner</span></h2>
                           <div className="space-y-8">
                              <p className="text-xl font-light text-primary/60 leading-relaxed italic">
                                 "A formal dinner to celebrate our new beginning as husband and wife."
                              </p>
                              <div className="magazine-grid pt-12 border-t border-secondary/20">
                                 <div className="col-span-6">
                                    <span className="block text-secondary font-bold uppercase tracking-widest text-xs mb-2">Time</span>
                                    <span className="text-xl">08:00 PM</span>
                                 </div>
                                 <div className="col-span-6">
                                    <span className="block text-secondary font-bold uppercase tracking-widest text-xs mb-2">Location</span>
                                    <span className="text-xl">Grand Ballroom</span>
                                 </div>
                              </div>
                           </div>
                        </AnimatedCard>
                     </div>
                  </div>
               </section> */}

               {/* Footer: The Final Note */}
               <footer className="relative min-h-[120vh] flex flex-col items-center justify-center bg-primary text-background overflow-hidden p-6 text-center">
                  <div className="absolute inset-0 opacity-10 mandala-pattern scale-150 rotate-12" />

                  {/* Animated Background Text */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] select-none pointer-events-none">
                     <span className="text-[20vw] font-serif font-bold uppercase leading-none">FOREVER</span>
                  </div>

                  <div className="z-10 space-y-20 max-w-4xl mx-auto">
                     {/* <motion.div
                        initial={{ opacity: 0, scale: 0, rotate: -180 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 1.5, type: "spring" }}
                        className="relative inline-block"
                     >
                        <div className="absolute -inset-8 border-2 border-secondary/30 rounded-full animate-spin-slow" />
                        <Heart className="w-24 h-24 text-secondary fill-secondary mx-auto" />
                     </motion.div> */}

                     <div className="space-y-12">
                        <div className="space-y-4">
                           <motion.span
                              initial={{ opacity: 0 }}
                              whileInView={{ opacity: 1 }}
                              className="text-secondary uppercase tracking-[0.8em] text-xs font-bold block"
                           >
                              A Heartfelt Request
                           </motion.span>
                           <h2 className="text-6xl md:text-[8rem] font-serif font-bold tracking-tighter leading-none text-accent">
                              With Love,<br />Always
                           </h2>
                        </div>

                        <p className="font-script text-4xl md:text-6xl text-secondary italic leading-relaxed">
                           Your presence is our most cherished gift.<br />
                           We can't wait to celebrate the beginning of our forever with you.
                        </p>
                     </div>

                     <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 border-t border-secondary/20">
                        <div className="space-y-4">
                           <span className="text-xs uppercase tracking-widest text-secondary font-bold">The Families</span>
                           <div className="space-y-1 text-accent/80 font-light">
                              <p>Mr. & Mrs. Lathigara</p>
                              <p>Mr. & Mrs. Pattani</p>
                           </div>
                        </div>
                        <div className="space-y-4">
                           <span className="text-xs uppercase tracking-widest text-secondary font-bold">Contact</span>
                           <div className="space-y-1 text-accent/80 font-light">
                              <p>RSVP by April 1st</p>
                              <p>+91 87584 99499</p>
                           </div>
                        </div>
                     </div>

                     <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="pt-12"
                     >
                        <span className="text-secondary font-serif italic text-3xl tracking-[0.2em] shimmer-text">
                           #KunalWedsRidhhi
                        </span>
                     </motion.div>
                  </div>

                  {/* Bottom Decorative Element */}
                  <div className="absolute bottom-12 left-0 right-0 flex justify-center space-x-8 opacity-30">
                     {[...Array(5)].map((_, i) => (
                        <Flower key={i} className="w-6 h-6 text-secondary" />
                     ))}
                  </div>
               </footer>
            </motion.div>
         )}
      </div>
   );
}

export default App;
