const url = 'https://swapi.dev/api/';

export const StarWarsApi = {
  async getResource(type) {
    const response = await fetch(`${url}${type}`);
    return await response.json();
  },

  planets: {
    async getPlanet(id) {
      return StarWarsApi.getResource(`planets/${id}/`);
    },
    async getPlanets() {
      return StarWarsApi.getResource(`planets/`);
    },
  },
  peoples: {
    getPeople(id) {
      return StarWarsApi.getResource(`people/${id}/`);
    },
    getPeoples() {
      return StarWarsApi.getResource(`people/`);
    },
  },
  starships: {
    getStarShip(id) {
      return StarWarsApi.getResource(`starships/${id}/`);
    },
    getStarShips() {
      return StarWarsApi.getResource(`starships/`);
    },
  },
};
