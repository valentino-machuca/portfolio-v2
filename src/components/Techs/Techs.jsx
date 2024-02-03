import React from 'react';
import s from './Techs.module.scss';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';

//tecnologías
import javascript from './assets/javascript.png';
import typescript from './assets/typescript.png';
import react from './assets/react.png';
import redux from './assets/redux.png';
import sass from './assets/sass.png';
import framer from './assets/framer.png';
import postgres from './assets/postgres.png';
import java from './assets/java.png';
import angular from './assets/angular.png';
import material from './assets/material.png';

const techItems = [
    {
        label: 'JavaScript',
        image: javascript,
    },
    {
        label: 'TypeScript',
        image: typescript,
    },
    {
        label: 'React',
        image: react,
    },
    {
        label: 'Redux',
        image: redux,
    },
    {
        label: 'Sass',
        image: sass,
    },
    {
        label: 'Material UI',
        image: material,
    },
    {
        label: 'Framer Motion',
        image: framer,
    },
    {
        label: 'Angular',
        image: angular
    },
    {
        label: 'Java',
        image: java
    },
    {
        label: 'PostgresSQL',
        image: postgres,
    }

]

const Techs = () => {
    const night = useSelector(state => state.night);

    const item = {
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: -100 },
        invertv: { opacity: 1, y: 0 },
        inverth: { opacity: 0, y: 100 },
      }

  return (
    <motion.div className={`${s.container} ${night ? '' : s.day }`}
        initial={{opacity: 0}}
        whileInView={{opacity:1}}
        viewport={{ once: true, amount: 0.8 }}
    >
        {
            techItems.map((tech, index) => (
                <motion.div className={s.tech} variants={item} initial="hidden" animate="visible" transition={{ duration: 0.5, delay: .5 + (index/10)}} >
                    <img src={tech.image} alt="js" />
                    <p>{tech.label}</p>
                </motion.div>
                ))
            }

    </motion.div>
  )
}

export default Techs