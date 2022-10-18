import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import s from './Nav.module.scss';
import { motion } from 'framer-motion';
import Form from '../Form/Form';

//redux
import { setMenu, setNight } from '../../redux/slice';

import github from './assets/github.png';
import linkedin from './assets/linkedin.png';
import email from './assets/email.png';
import luna from './assets/luna.png';
import sol from './assets/sol.png';

import cv from './assets/download.png';
import download from './assets/Curriculum Vitae - Valentino Machuca.pdf';

const Nav = () => {
    const dispatch = useDispatch();
    const night = useSelector(state => state.night);
    const menu = useSelector(state => state.menu);

  return (
    <motion.div className={menu ? `${s.container} ${s.open} ${night ? '' : s.day }` : `${s.container} ${night ? '' : s.day }`}
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 0.5, delay: 1}}
    >
        <div className={s.formulario}>
            <Form />
        </div>
        <div className={s.icons}>
            <h2>{'<>'}</h2>
            <div className={s.contacts}>
                <motion.a href="https://github.com/valentino-machuca" target='_blank' rel="noreferrer"
                    initial={{opacity: 0, y:-100}}
                    animate={{opacity:1, y:0}}
                    transition={{duration: 0.3, delay: 2.3}}
                ><img src={github} alt="github"/></motion.a>

                <motion.a href="https://www.linkedin.com/in/valentino-machuca" target='_blank' rel="noreferrer"
                    initial={{opacity: 0, y:-100}}
                    animate={{opacity:1, y:0}}
                    transition={{duration: 0.3, delay: 2.5}}
                ><img src={linkedin} alt="linkedin"/></motion.a>

                <motion.a
                    initial={{opacity: 0, y:-100}}
                    animate={{opacity:1, y:0}}
                    transition={{duration: 0.3, delay: 2.7}}
                    href={download}
                    download={true}
                ><img src={cv} alt="cv"/></motion.a>

                <motion.div
                    initial={{opacity: 0, y:-100}}
                    animate={{opacity:1, y:0}}
                    transition={{duration: 0.3, delay: 2.9}}
                    className={s.contact}
                    onClick={() => dispatch(setNight())}>
                <img src={night ? luna : sol} alt="nightmode"/>
                </motion.div>

                <motion.div
                    initial={{opacity: 0, y:-100}}
                    animate={{opacity:1, y:0}}
                    transition={{duration: 0.3, delay: 3.1}}
                    className={s.contactOpen}
                    onClick={() => dispatch(setMenu())}
                >{menu ? <h3>X</h3> : <img src={email} alt="email"/>}</motion.div>
            </div>
        </div>
    </motion.div>
  )
}

export default Nav