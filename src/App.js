import Header from './components/Header';
import { useEffect } from 'react';
import RandomPlanet from './components/RandomPlanet';
import { Redirect, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme/theme';
import { useDispatch, useSelector } from 'react-redux';
import { GlobalStyles } from './theme/global';
import PlanetsPage from './pages/planets-page';
import PeoplesPage from './pages/peoples-page';
import StarshipsPage from './pages/starships-page';
import { setDarkMode } from './redux/actions/star';
import Stars from './components/ui/Stars';
import Audio from './components/ui/Audio';
import PlayPause from './components/ui/PlayPause';
function App() {
  const { darkMode } = useSelector(({ StarWars }) => StarWars);
  const dispatch = useDispatch();
  useEffect(() => {
    const localTheme = JSON.parse(window.localStorage.getItem('theme'));

    if (localTheme) {
      dispatch(setDarkMode(true));
    } else {
      dispatch(setDarkMode(false));
    }
  }, []);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <>
        <GlobalStyles />
        <div className="star">
          <div className="star__wrapper">
            <Header />
            <Stars />
            <RandomPlanet />
            <Switch>
              <Route path="/planets" component={PlanetsPage} />
              <Route path="/people" component={PeoplesPage} />
              <Route path="/starships" component={StarshipsPage} />
              <Route exact path="/">
                <Redirect to="/starships" />
              </Route>
            </Switch>

            <Audio />
            <PlayPause />
          </div>
        </div>
      </>
    </ThemeProvider>
  );
}

export const Record = ({ item, field, label }) => {
  return (
    <li>
      {label} {item[field]}
    </li>
  );
};

export default App;
