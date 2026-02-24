"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const stats = [
  {
    number: "30+",
    title: "Technologies",
    description:
      "Leveraging advanced technologies to drive digital innovation.",
    image: "/images/vr.jpg",
  },
  {
    number: "50+",
    title: "Clients & Partners",
    description:
      "Delivering tailored digital solutions for leading enterprises.",
    image: "/images/handshake.jpg",
  },
  {
    number: "2x",
    title: "Growth y/y",
    description:
      "Achieving consistent year-over-year growth and innovation.",
    image: "/images/growth.jpg",
  },
  {
    number: "7+",
    title: "Years in Business",
    description:
      "Driving digital transformation with years of proven expertise.",
    image: "/images/globe.jpg",
  },
  {
    number: "250+",
    title: "Global Team",
    description:
      "A strong global team driving innovation and transformation.",
    image: "/images/team.jpg",
  },
];

const containerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const,},
  },
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-[#0c0c0c] to-black text-white px-6 lg:px-20 py-20">
      {/* Header */}
      <div className="grid lg:grid-cols-2 gap-10 items-start mb-16">
        <div>
          <p className="text-gray-400 uppercase tracking-widest text-sm mb-4">
            Why Choose Us
          </p>

          <h1 className="text-4xl lg:text-6xl font-semibold leading-tight">
            Redefining Digital Transformation
          </h1>
        </div>

        <p className="text-gray-400 text-lg leading-relaxed">
          We accelerate digital transformation for enterprises through
          innovative, customer-centric solutions, leveraging cutting-edge
          technology and industry expertise to deliver measurable impact.
        </p>
      </div>

      {/* Cards */}
      <motion.div
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {stats.map((item, index) => (
          <motion.div
            key={index}
            variants={cardVariant}
            whileHover={{ scale: 1.03 }}
            className="relative group rounded-3xl border border-white/10 bg-gradient-to-br from-[#111] to-[#0a0a0a] p-8 overflow-hidden backdrop-blur-xl"
          >
            {/* Background Glow */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-600/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition duration-500" />

            {/* Content */}
            <div className="relative z-10">
              <h2 className="text-4xl font-bold text-blue-500 mb-4">
                {item.number}
              </h2>

              <h3 className="text-xl font-semibold mb-2">
                {item.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </main>
  );
}
