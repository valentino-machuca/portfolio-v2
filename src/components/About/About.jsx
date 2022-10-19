import React from 'react';
import s from './About.module.scss';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';

const About = () => {
    const night = useSelector(state => state.night);

  return (
    <div className={`${s.container} ${night ? '' : s.day }`}>
        <motion.span
            initial={{opacity: 0, y: -100}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 1, delay: 1.5}}
        >Hola, mi nombre es</motion.span>
        <motion.h4
            initial={{opacity: 0, x: 100}}
            animate={{opacity: 1, x: 0}}
            transition={{duration: 1, delay: 1.6}}
        >Valentino Machuca.</motion.h4>

        <motion.p
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 1, delay: 1.5}}
        >Soy desarrollador Full Stack orientado a Front End y ocasionalmente diseño. Me gusta crear lindos, solidos y escalables productos frontend que tengan una gran experiencia de usuario.</motion.p>
    </div>
  )
}

export default About;