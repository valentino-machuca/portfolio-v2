import React from 'react';
import Home from '../Home/Home';
import Welcome from '../Welcome/Welcome';
import s from './Canvas.module.scss';

const Canvas = () => {
  return (
    <div className={s.container}>
      <Home />
      <Welcome />
    </div>
  )
}

export default Canvas;