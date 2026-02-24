"use client";
import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import Image from 'next/image';

// --- Sub-Component: Counting Numbers ---
const StatsCounter = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return <span ref={ref}>{count}{suffix}</span>;
};

// --- Sub-Component: Scroll Highlight Words ---
const WordHighlight = ({ text }: { text: string }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.9", "start 0.2"], // Controls the range of the whole paragraph highlight
  });

  const words = text.split(" ");

  return (
    <span ref={containerRef} className="flex flex-wrap">
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return <Word key={i} progress={scrollYProgress} range={[start, end]}>{word}</Word>;
      })}
    </span>
  );
};

const Word = ({ children, progress, range }: { children: React.ReactNode, progress: any, range: [number, number] }) => {
  // Maps the scroll progress to this specific word's opacity
  const opacity = useTransform(progress, range, [0.15, 1]);
  return (
    <motion.span style={{ opacity }} className="mr-3 mt-1">
      {children}
    </motion.span>
  );
};

export default function FormanceAboutSection() {
  return (
    <section className="bg-white py-24 px-6 md:px-12 lg:px-24 font-sans text-[#1a1a1a]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        
        {/* Left Column */}
        <div className="flex flex-col justify-between space-y-12">
          <div className="space-y-8">
            <div className="flex items-center gap-3 text-xs font-bold tracking-[0.2em] uppercase">
              <span className="w-4 h-4 bg-blue-800 rounded-full"></span>
              About Us
            </div>
            
            <div className="relative rounded-[2rem] overflow-hidden w-full aspect-[4/3] shadow-sm bg-gray-100">
              {/* <Image 
                src="" 
                alt="Formance Team" 
                fill 
                className="object-cover"
              /> */}
            </div>
          </div>
          
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-md">
            We love to create, we love to solve, we love to collaborate, 
            and we love to turn amazing ideas into reality. We're here 
            to partner with you through every step of the process.
          </p>
        </div>

        {/* Right Column */}
        <div className="flex flex-col justify-between">
          <div className="relative pt-12">
            <h2 className="text-4xl md:text-5xl font-bold leading-[1.2] tracking-tight">
              <WordHighlight text="At Formance, we craft marketing strategies that deliver measurable growth. With a focus on results, we help businesses." />
            </h2>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 mt-24 border-t border-gray-100 pt-12">
            <div>
              <div className="text-4xl md:text-6xl lg:text-7xl font-bold mb-3">
                <StatsCounter value={3} suffix="+" />
              </div>
              <p className="text-gray-500 text-sm md:text-base font-medium">Years of Experience</p>
            </div>
            <div>
              <div className="text-4xl md:text-6xl lg:text-7xl font-bold mb-3">
                <StatsCounter value={10} suffix="+" />
              </div>
              <p className="text-gray-500 text-sm md:text-base font-medium">Client Projects</p>
            </div>
            <div>
              <div className="text-4xl md:text-6xl lg:text-7xl font-bold mb-3">
                <StatsCounter value={100} suffix="%" />
              </div>
              <p className="text-gray-500 text-sm md:text-base font-medium">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}