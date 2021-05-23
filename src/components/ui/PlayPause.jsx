import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { togglePlayVideo } from '../../redux/actions/star';
function PlayPause() {
  const dispatch = useDispatch();
  const { isPlay } = useSelector(({ StarWars }) => StarWars);
  const isActiveClass = ['button button--play'];
  if (isPlay) {
    isActiveClass.push(' button--active');
  }

  const onTogglePlay = () => {
    dispatch(togglePlayVideo());
  };
  return (
    <div className={isActiveClass.join('')} onClick={() => onTogglePlay()}>
      <div className="button__shape button__shape--one"></div>
      <div className="button__shape button__shape--two"></div>
    </div>
  );
}

export default PlayPause;
