import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Nav = () => {
    const dispatch = useDispatch();
    const night = useSelector(state => state.night);


  return (
    <div>Nav</div>
  )
}

export default Nav