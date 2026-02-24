"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const StaffingHero = () => {
  // Floating profile configuration matching the positions in your image
  const profiles = [
    { id: 1, top: '25%', left: '15%', delay: 0, scale: 1 },
    { id: 2, top: '5%', left: '65%', delay: 1.5, scale: 1.1 }, // Top male profile
    { id: 3, top: '55%', left: '85%', delay: 0.8, scale: 0.95 }, // Side female profile
    { id: 4, top: '10%', left: '72%', delay: 2.2, isSpark: true }, // The blue star/spark icon
  ];

  return (
    <section className="relative min-h-[85vh] w-full  flex flex-col items-center justify-center overflow-hidden px-6 pt-24">
      
      {/* 1. Global Network Background */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-50">
        <Image 
          src="/background.webp" 
          alt="Global Network" 
          width={1400} 
          height={900}
          className="object-contain translate-y-20 scale-110"
          priority
        />
      </div>

      {/* 2. Animated Floating Profiles */}
      {profiles.map((profile) => (
        <motion.div
          key={profile.id}
          initial={{ y: 0, x: 0 }}
          animate={{ 
            y: [0, -15, 0],
            x: [0, 5, 0] 
          }}
          transition={{ 
            duration: 5, 
            repeat: Infinity, 
            delay: profile.delay,
            ease: "easeInOut" 
          }}
          className="absolute z-10 hidden lg:block"
          style={{ top: profile.top, left: profile.left }}
        >
          {profile.isSpark ? (
            // Sparkle Icon
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg shadow-blue-500/20 border border-gray-100">
               <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l2.4 7.6H22l-6.2 4.5 2.4 7.9-6.2-4.8-6.2 4.8 2.4-7.9L2 9.6h7.6L12 2z" />
               </svg>
            </div>
          ) : (
            // Profile Image Circle
            <div 
              className="relative rounded-full border-2 border-white/10 overflow-hidden shadow-2xl"
              style={{ width: `${64 * (profile.scale || 1)}px`, height: `${64 * (profile.scale || 1)}px` }}
            >
              <div className="w-full h-full bg-gradient-to-tr from-gray-800 to-gray-700 animate-pulse" />
              {/* <Image src={`/profile-${profile.id}.png`} alt="IT Professional" fill className="object-cover" /> */}
            </div>
          )}
        </motion.div>
      ))}


    </section>
  );
};

export default StaffingHero;




