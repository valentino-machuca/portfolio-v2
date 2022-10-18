import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import s from './Home.module.scss';

//framer motion
import { AnimatePresence } from 'framer-motion';
// import Presentation from '../Presentation/Presentation';
// import Techs from '../Techs/Techs';
import Card from '../Card/Card';

//redux
import { setNight } from '../../redux/slice';

const Home = () => {
    const joined = useSelector(state => state.joined);
    const night = useSelector(state => state.night);
    const dispatch = useDispatch();

  return (
    <div className={joined ? `${s.container} ${night ? '' : s.day }` : s.noDisplay}  onClick={() => dispatch(setNight())}>
        <AnimatePresence>
          {
            joined &&
            // <Techs/>
            // <Presentation/>
            <Card />
          }
        </AnimatePresence>
    </div>
  )
}

export default Home;