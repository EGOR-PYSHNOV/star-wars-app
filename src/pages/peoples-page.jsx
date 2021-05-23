import React from 'react';
import List from '../components/ListItems/List';
import ItemInfo from '../components/ItemInfo';
import { useSelector } from 'react-redux';
import { fetchPeoples, fetchPeople } from '../redux/actions/star';
import { Record } from '../App';
function PeoplesPage() {
  const { peoples, people } = useSelector(({ StarWars }) => StarWars);
  return (
    <div className="list">
      <List type={peoples} fetchItems={fetchPeoples} fetchItem={fetchPeople} />
      <ItemInfo type={people} imgSrc={'https://starwars-visualguide.com/assets/img/characters/'}>
        <Record field="population" label="Population" />
        <Record field="eye_color" label="Eye color" />
        <Record field="birth_year" label="Birth year" />
        <Record field="gender" label="Gender" />
      </ItemInfo>
    </div>
  );
}

export default PeoplesPage;
