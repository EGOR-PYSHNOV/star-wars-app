import React, { useState, useEffect } from 'react';
import placeholderImage from '../assets/img/placeholder.png';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRandomPlanet } from '../redux/actions/star';
import Loader from './ui/Loader';
function RandomPlanet() {
  const [img, setImg] = useState(null);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { randomPlanet } = useSelector(({ StarWars }) => StarWars);

  const getRandomPlanet = () => {
    const randomNumber = Math.floor(Math.random() * 60);
    dispatch(fetchRandomPlanet(randomNumber));

    setImg(`https://starwars-visualguide.com/assets/img/planets/${randomNumber}.jpg`);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
      getRandomPlanet();
    }, 3000);

    return () => {
      clearTimeout(timeout);
      setLoading(true);
    };
  }, [randomPlanet.item]);

  useEffect(() => {
    getRandomPlanet();
    setLoading(true);
  }, []);

  return (
    <div className="star__info" style={loading ? null : { justifyContent: 'center' }}>
      {loading ? (
        <>
          <div className="star__img">
            <img
              src={img}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = placeholderImage;
              }}
              alt=""
            />
          </div>
          <div className="star__desc">
            <div className="star__desc-title">{randomPlanet.item && randomPlanet.item.name}</div>
            <ul className="star__desc-character">
              <li>Population {randomPlanet.item && randomPlanet.item.population}</li>
              <li>Rotation Period {randomPlanet.item && randomPlanet.item.rotation_period}</li>
              <li>Diameter {randomPlanet.item && randomPlanet.item.diameter}</li>
            </ul>
          </div>
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default RandomPlanet;
