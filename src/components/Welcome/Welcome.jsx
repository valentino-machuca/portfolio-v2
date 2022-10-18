import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import s from './Welcome.module.scss';

//SetJoined
import { setJoined } from '../../redux/slice';
import Presentation from '../Presentation/Presentation';

const Welcome = () => {
    const dispatch = useDispatch();
    const joined = useSelector(state => state.joined);

    useEffect(() => {}, [joined]);

  return (
    <div className={s.container}>
        <div className={joined ? `${s.ball} ${s.ballClicked}` : s.ball} onClick={() => dispatch(setJoined())}>
            <Presentation />
        </div>
    </div>
  )
}

export default Welcome