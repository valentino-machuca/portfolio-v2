import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import s from './Home.module.scss';

//framer motion
import { AnimatePresence } from 'framer-motion';
// import Presentation from '../Presentation/Presentation';
// import Techs from '../Techs/Techs';
// import Card from '../Card/Card';
import Nav from '../Nav/Nav';

const Home = () => {
    const joined = useSelector(state => state.joined);
    const night = useSelector(state => state.night);
    const dispatch = useDispatch();

  return (
    <div className={joined ? `${s.container} ${night ? '' : s.day }` : s.noDisplay} >
        <AnimatePresence>
          {
            joined &&
            <>
            <Nav />
            <div className={s.content}>
            </div>
            </>
          }
        </AnimatePresence>
    </div>
  )
}

export default Home;