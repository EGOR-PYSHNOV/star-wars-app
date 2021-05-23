import { StarWarsApi } from '../../api/api';
export const fetchRandomPlanet = (id) => async (dispatch) => {
  const planet = await StarWarsApi.planets.getPlanet(id);

  dispatch(setRandomPlanet(planet));
};

export const fetchPlanet = (id) => async (dispatch) => {
  const planet = await StarWarsApi.planets.getPlanet(id);
  planet.id = id;
  dispatch(setPlanet(planet));
};

export const fetchPlanets = () => async (dispatch) => {
  const planets = await StarWarsApi.planets.getPlanets();

  dispatch(setPlanets(planets.results));
};

export const fetchPeople = (id) => async (dispatch) => {
  const people = await StarWarsApi.peoples.getPeople(id);
  people.id = id;
  dispatch(setPeople(people));
};

export const fetchPeoples = () => async (dispatch) => {
  const peoples = await StarWarsApi.peoples.getPeoples();

  dispatch(setPeoples(peoples.results));
};

export const fetchStarship = (id) => async (dispatch) => {
  const starship = await StarWarsApi.starships.getStarShip(id);
  starship.id = id;
  dispatch(setStarship(starship));
};

export const fetchStarships = () => async (dispatch) => {
  const starships = await StarWarsApi.starships.getStarShips();

  dispatch(setStarships(starships.results));
};

export const setRandomPlanet = (item) => ({
  type: 'SET_RANDOM_PLANET',
  payload: item,
});

export const setPlanets = (items) => ({
  type: 'SET_PLANETS',
  payload: items,
});

export const setPlanet = (item) => ({
  type: 'SET_PLANET',
  payload: item,
});

export const setPeoples = (items) => ({
  type: 'SET_PEOPLES',
  payload: items,
});

export const setPeople = (item) => ({
  type: 'SET_PEOPLE',
  payload: item,
});

export const setStarships = (items) => ({
  type: 'SET_STARSHIPS',
  payload: items,
});

export const setStarship = (item) => ({
  type: 'SET_STARSHIP',
  payload: item,
});

export const setDarkMode = (theme) => ({
  type: 'SET_DARKMODE',
  payload: theme,
});

export const togglePlayVideo = () => ({
  type: 'TOGGLE_PLAY_VIDEO',
});
