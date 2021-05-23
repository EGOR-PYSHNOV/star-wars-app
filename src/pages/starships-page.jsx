import React from 'react';
import List from '../components/ListItems/List';
import ItemInfo from '../components/ItemInfo';
import { useSelector } from 'react-redux';
import { fetchStarships, fetchStarship } from '../redux/actions/star';
import { Record } from '../App';
function StarshipsPage() {
  const { starships, starship } = useSelector(({ StarWars }) => StarWars);
  return (
    <div className="list">
      <List type={starships} fetchItems={fetchStarships} fetchItem={fetchStarship} />
      <ItemInfo type={starship} imgSrc={'https://starwars-visualguide.com/assets/img/starships/'}>
        <Record field="model" label="Model" />
        <Record field="manufacturer" label="Manufacturer" />
        <Record field="starship_class" label="Starship Class" />
        <Record field="passengers" label="Passengers" />
      </ItemInfo>
    </div>
  );
}

export default StarshipsPage;
