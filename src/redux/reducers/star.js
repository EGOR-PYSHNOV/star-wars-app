const initialState = {
  darkMode: false,
  isPlay: true,
  randomPlanet: {
    loaded: false,
    item: null,
  },
  planets: {
    loaded: false,
    items: null,
  },
  planet: {
    loaded: false,
    item: null,
  },
  peoples: {
    items: null,
  },
  people: {
    item: null,
  },
  starships: {
    items: null,
  },
  starship: {
    item: null,
  },
};

const StarWars = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_RANDOM_PLANET': {
      return {
        ...state,
        randomPlanet: {
          item: action.payload,
        },
      };
    }
    case 'SET_PLANETS': {
      return {
        ...state,
        planets: {
          items: action.payload,
        },
      };
    }
    case 'SET_PLANET': {
      return {
        ...state,
        planet: {
          item: action.payload,
        },
      };
    }
    case 'SET_PEOPLES': {
      return {
        ...state,
        peoples: {
          items: action.payload,
        },
      };
    }
    case 'SET_PEOPLE': {
      return {
        ...state,
        people: {
          item: action.payload,
        },
      };
    }

    case 'SET_STARSHIPS': {
      return {
        ...state,
        starships: {
          items: action.payload,
        },
      };
    }
    case 'SET_STARSHIP': {
      return {
        ...state,
        starship: {
          item: action.payload,
        },
      };
    }
    case 'SET_DARKMODE': {
      return {
        ...state,
        darkMode: action.payload,
      };
    }

    case 'TOGGLE_PLAY_VIDEO': {
      return {
        ...state,
        isPlay: !state.isPlay,
      };
    }

    default:
      return state;
  }
};

export default StarWars;
