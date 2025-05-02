import React from 'react';
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../FrameMotion/variants';

const About = () => {
  return (
    <section className="h-screen py-12 flex justify-center">
      <div className="w-full flex justify-center items-center h-full">
        <div className="flex flex-col md:flex-row w-full md:w-3/4 gap-12">
          {/* Content Section */}
          <motion.section 
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.7 }}
            className="w-full md:w-3/5 flex justify-center items-center">
            <div className="w-3/4 text-center md:text-left mt-12 md:mt-0">
              <h1 className="text-4xl lg:text-7xl font-semibold text-primary">
                Maerika2k24
              </h1>
              <p className="mt-4 text-base lg:text-lg leading-relaxed">
               Maerika2k24 is a premier platform for students to showcase their talents. It highlights the rich art forms of Islamic culture, presenting them to a wider audience. The event fosters creativity, cultural appreciation, and artistic expression.
              </p>
            </div>
          </motion.section>
        </div>
      </div>
    </section>
  );
};

export default About;
