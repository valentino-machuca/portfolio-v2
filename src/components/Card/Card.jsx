import React from 'react';
import { useSelector } from 'react-redux';
import s from './Card.module.scss';

import {motion} from 'framer-motion';

const Card = ({data}) => {
    const night = useSelector(state => state.night);

  return (
    <a className={s.redirect} href={data.link} target='_blank' rel="noreferrer">
    <motion.div className={`${s.container} ${night ? '' : s.day}`}
        initial={{y:100, opacity:0}}
        animate={{opacity:1, y:0}}
        transition={{duration: 0.3, delay: 1}}
    >
        <img src={data.img1} alt="" className={s.bkg}/>
       <div className={s.card}>
            <h4>{data.name}</h4>
            <p>{data.description}</p>
        </div>

        <div className={s.images}>
            <motion.div className={s.image}
                initial={{x:-100, opacity:0}}
                animate={{opacity:1, x:0}}
                transition={{duration: 0.3, delay: 1.5}}
            >
                <img src={data.img1} alt="" />
            </motion.div>

            <motion.div className={s.image}
                initial={{x:100, opacity:0}}
                animate={{opacity:1, x:0}}
                transition={{duration: 0.3 , delay: 1.6}}
            >
                <img src={data.img2} alt="" />
            </motion.div>
            <motion.div className={s.image}
                initial={{x:-100, opacity:0}}
                animate={{opacity:1, x:0}}
                transition={{duration: 0.3, delay: 1.7}}
            >
                <img src={data.img3} alt="" />
            </motion.div>
            <motion.div className={s.image}
                initial={{x:100, opacity:0}}
                animate={{opacity:1, x:0}}
                transition={{duration: 0.3, delay: 1.8}}
            >
                <img src={data.img4} alt="" />
            </motion.div>
        </div>
    </motion.div>
    </a>
  )
}

export default Card;