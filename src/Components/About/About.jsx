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
                Funoon Fiesta
              </h1>
              <p className="mt-4 text-base lg:text-lg leading-relaxed">
                The new society tries to break the Islamic cultures and live according to 
                the new rational thinking freely without rules and regulations.  
                The world is preparing an opportunity for that. But the true believer 
                who lives without giving up Islamic values in any crisis presents the moral 
                and cultural values of the believer to the world through Funoon Fiesta.
              </p>
            </div>
          </motion.section>
        </div>
      </div>
    </section>
  );
};

export default About;
