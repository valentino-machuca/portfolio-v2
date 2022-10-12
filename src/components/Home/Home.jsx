import React from 'react';
import { useSelector } from 'react-redux';
import s from './Home.module.scss';

const Home = () => {
    const joined = useSelector(state => state.joined);

  return (
    <div className={joined ? s.container : s.noDisplay}>
        
    </div>
  )
}

export default Home;