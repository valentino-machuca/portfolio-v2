import React from 'react';
import s from './Techs.module.scss';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';

//tecnologías
import express from './assets/express.png';
import framer from './assets/framer.png';
import javascript from './assets/javascript.png';
import node from './assets/node.png';
import postgres from './assets/postgres.png';
import react from './assets/react.png';
import redux from './assets/redux.png';
import sass from './assets/sass.png';
import sequelize from './assets/sequelize.png';

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
        <motion.div className={s.tech} variants={item} initial="hidden" animate="visible" transition={{ duration: 0.5, delay: .5}} >
            <img src={javascript} alt="js" />
            <p>JavaScript</p>
        </motion.div>

        <motion.div className={s.tech} variants={item} initial="inverth" animate="invertv" transition={{ duration: 0.5, delay: .7}} >
            <img src={react} alt="react" />
            <p>React</p>
        </motion.div>

        <motion.div className={s.tech} variants={item} initial="hidden" animate="visible" transition={{ duration: 0.5, delay: .9}} >
            <img src={redux} alt="redux" />
            <p>Redux</p>
        </motion.div>

        <motion.div className={s.tech} variants={item} initial="inverth" animate="invertv" transition={{ duration: 0.5, delay: 1.1}} >
            <img src={sass} alt="sass" />
            <p>Sass</p>
        </motion.div>

        <motion.div className={s.tech} variants={item} initial="hidden" animate="visible" transition={{ duration: 0.5, delay: 1.3}} >
            <img src={framer} alt="framer" />
            <p>Framer Motion</p>
        </motion.div>

        <motion.div className={s.tech} variants={item} initial="inverth" animate="invertv" transition={{ duration: 0.5, delay: 1.5}} >
            <img src={node} alt="node" />
            <p>Node.js</p>
        </motion.div>

        <motion.div className={s.tech} variants={item} initial="hidden" animate="visible" transition={{ duration: 0.5, delay: 1.7}} >
            <img src={express} alt="express" />
            <p>Express</p>
        </motion.div>

        <motion.div className={s.tech} variants={item} initial="inverth" animate="invertv" transition={{ duration: 0.5, delay: 1.9}} >
            <img src={sequelize} alt="sequelize" />
            <p>Sequelize</p>
        </motion.div>

        <motion.div className={s.tech} variants={item} initial="hidden" animate="visible" transition={{ duration: 0.5, delay: 2.1}} >
            <img src={postgres} alt="postgres" />
            <p>PostgreSQL</p>
        </motion.div>

    </motion.div>
  )
}

export default Techs