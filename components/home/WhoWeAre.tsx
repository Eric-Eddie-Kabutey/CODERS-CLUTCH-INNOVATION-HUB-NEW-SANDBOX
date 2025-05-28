"use client";
import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const cardVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
    },
  }),
};

// SVG Icon Components (unchanged)
const IconSkillDevelopment = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    className="w-6 h-6 text-white"
  >
    <path d="M12 5 L7 13 H17 Z" strokeLinejoin="round" strokeLinecap="round" />
    <line
      x1="7"
      y1="16"
      x2="17"
      y2="16"
      strokeLinejoin="round"
      strokeLinecap="round"
    />
  </svg>
);

const IconCoCreation = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-6 h-6 text-white"
  >
    <path d="M7 9a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V9Z"></path>
    <path d="M7 9h0a2.5 2.5 0 0 0-2.5 2.5V7"></path>
    <path d="M17 9h0a2.5 2.5 0 0 1 2.5 2.5V7"></path>
    <path d="M7 15h0a2.5 2.5 0 0 1-2.5-2.5V17"></path>
    <path d="M17 15h0a2.5 2.5 0 0 0 2.5-2.5V17"></path>
  </svg>
);

const IconGlobe = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6 text-white"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.75 12H20.25m-10.125 8.25A8.966 8.966 0 0112 20.25a8.966 8.966 0 01-2.375-1.217m0 0c1.563-.773 2.375-2.438 2.375-4.033 0-1.595-.812-3.26-2.375-4.033m0 0A8.966 8.966 0 0112 3.75a8.966 8.966 0 012.375 1.217m0 0c-1.563.773-2.375 2.438-2.375 4.033 0 1.595.812 3.26 2.375 4.033M12 3.75v16.5"
    />
  </svg>
);

const IconConnectingStartups = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-6 h-6 text-white"
  >
    <rect x="3" y="3" width="7" height="7" rx="1"></rect>
    <rect x="14" y="3" width="7" height="7" rx="1"></rect>
    <rect x="14" y="14" width="7" height="7" rx="1"></rect>
    <rect x="3" y="14" width="7" height="7" rx="1"></rect>
  </svg>
);

const WhoWeAre = () => {
  const cardData = [
    {
      icon: <IconSkillDevelopment />,
      title: "Enabling Skill Development",
      description:
        "Enabling skill development at BlueSPACE Innovation Hub in Ghana means equipping young innovators and entrepreneurs with practical, future-ready skills in technology and business.",
      iconBgShape: "rounded-full",
    },
    {
      icon: <IconCoCreation />,
      title: "Accelerating Co-Creation & Startup",
      description:
        "BlueSPACE Innovation Hub fosters a collaborative environment where creative minds, industry experts, and entrepreneurs co-create impactful solutions.",
      iconBgShape: "rounded",
    },
    {
      icon: <IconGlobe />,
      title: "Changing lives through job creation",
      description:
        "At BlueSPACE Innovation Hub, job creation is at the heart of our mission. By nurturing tech talent, supporting startup growth, and promoting digital entrepreneurship.",
      iconBgShape: "rounded-full",
    },
    {
      icon: <IconConnectingStartups />,
      title: "Connecting Startups to Market",
      description:
        "BlueSPACE Innovation Hub plays a vital role in helping startups move beyond development into real-world impact. By connecting emerging ventures with potential customers.",
      iconBgShape: "rounded",
    },
  ];

  return (
    <motion.div
      className="font-sans bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      {/* Top Section */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <motion.p
          variants={itemVariants}
          className="text-sm text-gray-500 mb-3"
        >
          {" // Who We Are"}
        </motion.p>
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Left Column */}
          <motion.div variants={itemVariants}>
            <motion.h1
              className="text-4xl lg:text-5xl font-bold text-black mb-5 leading-tight"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              Welcome to <br />
              <span className="text-[#0052CC]">BlueSPACE Innovation Hub</span>
            </motion.h1>
            <motion.p
              className="text-base lg:text-lg text-gray-700 leading-relaxed"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              We are key to expanding the impact of the{" "}
              <strong className="text-black font-bold">
                BlueSPACE Financial Cloud (BFC)
              </strong>{" "}
              across Africa and the world.
            </motion.p>
          </motion.div>

          {/* Right Column */}
          <motion.div className="pt-0 md:pt-1" variants={itemVariants}>
            <motion.p
              className="text-base lg:text-lg text-gray-700 mb-6 leading-relaxed"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Our Vision is to be the leading innovation center that creates the
              platform for digital transformation and serves as the fertile
              ground for next generation solutions
            </motion.p>
            <motion.button
              className="bg-[#00A99D] text-white font-semibold py-3 px-6 rounded-md flex items-center space-x-2 hover:bg-opacity-90 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Learn More</span>
              <ArrowRight className="w-5 h-5" strokeWidth={2.5} />
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Bottom Section */}
      <motion.div
        className="bg-[#00A99D] text-white py-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <motion.p
            className="text-sm opacity-80 mb-2"
            initial={{ x: -20 }}
            whileInView={{ x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {" // Our Stand & Goal"}
          </motion.p>
          <motion.h2
            className="text-4xl lg:text-5xl font-bold mb-12 leading-tight"
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Glance through <br className="md:hidden" /> our Innovation Hub
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
            {cardData.map((card, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-start"
                variants={cardVariants}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <motion.div
                  className={`w-12 h-12 border-2 border-white flex items-center justify-center mb-4 ${card.iconBgShape}`}
                  whileHover={{ rotate: 5, scale: 1.1 }}
                >
                  {card.icon}
                </motion.div>
                <h3 className="text-xl lg:text-2xl font-semibold mb-3">
                  {card.title}
                </h3>
                <p className="text-sm opacity-90 leading-relaxed">
                  {card.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default WhoWeAre;
