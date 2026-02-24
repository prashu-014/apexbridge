"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    content: "TCZ helped us with our new website launch in a seamless manner. Through all our discussions, they made sure to have the website designed as we had envisioned it to be. Thank you team TCZ.",
    author: "Dr. Sarita Ahlawat",
    role: "Managing Director and Co-Founder, Botlab Dynamics",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarita", 
  },
  {
    id: 2,
    content: "Working with TechChefz Digital on our website has been an absolute pleasure! With a site involving thousands of pages and complex requirements, their team has done an incredible job.",
    author: "Sarabpreet Singh",
    role: "Webmaster, Manipal Institute",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarab",
  },
  {
    id: 3,
    content: "The TCZ team are experts in their respective domains and helped us with excellent end-to-end development of our business-critical platform.",
    author: "Dr. Kunal Joshi",
    role: "Healthcare Marketing Professional",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kunal",
  }
];

const TestimonialSlider = () => {
  const [index, setIndex] = useState(0);

  const paginate = useCallback((dir: number) => {
    setIndex((prev) => (prev + dir + testimonials.length) % testimonials.length);
  }, []);

  // Auto-swipe functionality
  useEffect(() => {
    const timer = setInterval(() => paginate(1), 5000);
    return () => clearInterval(timer);
  }, [paginate]);

  return (
    <section className="py-20 px-6 md:px-12 bg-white overflow-hidden min-h-[700px] flex items-center">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* LEFT COLUMN: TEXT CONTENT */}
        <div className="flex flex-col space-y-8">
          <div>
            <span className="text-gray-400 uppercase tracking-widest text-sm font-semibold mb-4 block">
              CLIENT TESTIMONIALS
            </span>
            <h2 className="text-[42px] md:text-[56px] font-bold text-[#1a1a1a] leading-[1.1] mb-6">
              Discover How <br /> We <span className="text-[#00a9e2]">Transformed</span> <br /> Businesses Like Yours.
            </h2>
            <p className="text-[#666] text-lg leading-relaxed max-w-[400px]">
              Showcasing our impact and the transformative results we've achieved for businesses similar to yours.
            </p>
          </div>

          {/* Navigation Buttons - Matching Screenshot Blue */}
          <div className="flex gap-4">
            <button 
              onClick={() => paginate(-1)}
              className="w-14 h-14 flex items-center justify-center bg-[#006ccf] text-white rounded-md hover:bg-[#005bb0] transition-all active:scale-95"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            </button>
            <button 
              onClick={() => paginate(1)}
              className="w-14 h-14 flex items-center justify-center bg-[#006ccf] text-white rounded-md hover:bg-[#005bb0] transition-all active:scale-95"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
          </div>
        </div>

        {/* RIGHT COLUMN: 3D TRANSFORMED CARDS */}
        <div className="relative h-[550px] w-full flex items-center justify-start lg:justify-center">
          <div className="relative w-full max-w-[420px] h-full flex items-center perspective-[1500px]">
            
            <AnimatePresence mode="popLayout">
              {/* Active Card */}
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0, scale: 1, rotateY: 0, z: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="absolute z-20 w-full bg-[#f4f4f4] rounded-xl border border-gray-200 p-8 md:p-12 shadow-sm"
              >
                <QuoteIcon />
                <p className="text-[#333] text-[19px] leading-relaxed font-light mb-12">
                  {testimonials[index].content}
                </p>
                <div className="flex items-center gap-5 mt-auto">
                  <div className="w-20 h-20 rounded-full border-[5px] border-[#00c2b2] overflow-hidden">
                    <img src={testimonials[index].image} alt="" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="text-[#005eb8] font-bold text-xl">{testimonials[index].author}</h4>
                    <p className="text-gray-500 text-sm mt-1">{testimonials[index].role}</p>
                  </div>
                </div>
              </motion.div>

              {/* Background 3D Card (The "Not Match" part - this adds the depth) */}
              <motion.div
                key={`bg-${index}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4, rotateY: -35, x: 300, z: -200, scale: 0.9 }}
                transition={{ duration: 0.8 }}
                className="absolute z-10 w-full bg-white rounded-xl border border-gray-200 p-8 md:p-12 hidden lg:block origin-left"
              >
                <QuoteIcon opacity={0.3} />
                <div className="space-y-4 opacity-20">
                    <div className="h-4 w-full bg-gray-200 rounded" />
                    <div className="h-4 w-3/4 bg-gray-200 rounded" />
                    <div className="h-4 w-5/6 bg-gray-200 rounded" />
                </div>
                <div className="flex items-center gap-4 mt-20 opacity-20">
                   <div className="w-16 h-16 rounded-full bg-gray-200" />
                   <div className="h-4 w-32 bg-gray-200 rounded" />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

const QuoteIcon = ({ opacity = 1 }) => (
  <div className="mb-6" style={{ opacity }}>
    <svg width="32" height="26" viewBox="0 0 29 24" fill="none">
        <path d="M-2.09815e-06 24L-9.72474e-07 11.1238C-3.397e-07 3.88571 3.58095 0.152379 10.819 9.45831e-07L12.419 1.08571e-06L12.419 6.01905L10.7429 6.09524C8.30476 6.24762 7.08571 7.77143 7.08571 10.7429L7.08571 11.9619L12.419 11.9619L12.419 24L-2.09815e-06 24ZM28.419 6.01905L26.7429 6.09524C24.3048 6.24762 23.1619 7.77143 23.1619 10.7429L23.1619 11.9619L28.419 11.9619L28.419 24L16 24L16 11.1238C16 3.88572 19.581 0.152381 26.819 2.3446e-06L28.419 2.48447e-06L28.419 6.01905Z" fill="#008bf0" />
    </svg>
  </div>
);

export default TestimonialSlider;