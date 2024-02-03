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
        >
            Desarrollador Full Stack con experiencia profesional. Mi enfoque es crear soluciones innovadoras con agilidad en el aprendizaje. 
            Soy proactivo, responsable y cuento con habilidades para transmitir conocimientos.
            Disfruto del trabajo en equipo y estoy buscando nuevas oportunidades para aplicar mis habilidades en un entorno dinámico.
        </motion.p>
    </div>
  )
}

export default About;