import React from 'react';
import { useSelector } from 'react-redux';
import s from './Home.module.scss';

//framer motion
import { AnimatePresence } from 'framer-motion';
// import Presentation from '../Presentation/Presentation';
// import Techs from '../Techs/Techs';
// import Card from '../Card/Card';
import Nav from '../Nav/Nav';
import About from '../About/About';

const Home = () => {
    const joined = useSelector(state => state.joined);
    const night = useSelector(state => state.night);

  return (
    <div className={joined ? `${s.container} ${night ? '' : s.day }` : s.noDisplay} >
        <AnimatePresence>
          {
            joined &&
            <>
            <Nav />
            <div className={s.content}>
                <div className={s.about}>
                    <About />
                </div>
            </div>
            </>
          }
        </AnimatePresence>
    </div>
  )
}

export default Home;