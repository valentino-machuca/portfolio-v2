import React from 'react';
import s from './Presentation.module.scss';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';

const Presentation = () => {
  const night = useSelector(state => state.night);

  return (
    <motion.div className={`${s.scrolling_words_container} ${night ? '' : s.day }`}
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      transition={{duration: 0.6, delay: 0.5}}
    >
      <span>Hello</span>
      <div className={s.scrolling_words_box}>
        <ul>
          <li className={s.gradient}>click!</li>
          <li className={s.gradient}>world!</li>
          <li className={s.gradient}>devs!</li>
          <li className={s.gradient}>recruiter! ;)</li>
          <li className={s.gradient}>click!</li>
        </ul>
      </div>
    </motion.div>
  )
}

export default Presentation;