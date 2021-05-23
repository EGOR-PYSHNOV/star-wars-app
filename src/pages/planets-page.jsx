import React from 'react';
import List from '../components/ListItems/List';
import ItemInfo from '../components/ItemInfo';
import { useSelector } from 'react-redux';
import { fetchPlanet, fetchPlanets } from '../redux/actions/star';
import { Record } from '../App';
function PlanetsPage() {
  const { planets, planet } = useSelector(({ StarWars }) => StarWars);
  return (
    <div className="list">
      <List type={planets} fetchItems={fetchPlanets} fetchItem={fetchPlanet} />
      <ItemInfo type={planet} imgSrc={'https://starwars-visualguide.com/assets/img/planets/'}>
        <Record field="population" label="Population" />
        <Record field="rotation_period" label="Rotation period" />
        <Record field="diametr" label="Diametr" />
      </ItemInfo>
    </div>
  );
}

export default PlanetsPage;
