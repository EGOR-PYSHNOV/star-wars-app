import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDarkMode } from '../../redux/actions/star';
function Toggle() {
  const dispatch = useDispatch();
  const { darkMode } = useSelector(({ StarWars }) => StarWars);
  const onChangeTheme = () => {
    if (!darkMode) {
      window.localStorage.setItem('theme', 'true');
      dispatch(setDarkMode(true));
    } else {
      window.localStorage.setItem('theme', 'false');
      dispatch(setDarkMode(false));
    }
  };
  return (
    <div className="toggle-container">
      <input
        type="checkbox"
        className="dn"
        id="dn"
        checked={darkMode ? true : false}
        onChange={() => onChangeTheme()}
      />
      <label htmlFor="dn" className="toggle">
        <div className="starwars-toggle">
          <img className="obi" src="https://thumb.ibb.co/nc0bvT/ben.png" alt="" />
          <img className="vader" src="https://thumb.ibb.co/iTqWUo/darth_vader.png" alt="" />
        </div>
      </label>
    </div>
  );
}

export default Toggle;
