import React, { useState, useEffect } from 'react';
import ListItem from './ListItem';
import { useDispatch } from 'react-redux';

import Loader from '../ui/Loader';

function List({ type, fetchItems, fetchItem }) {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const getItems = async () => {
    await dispatch(fetchItems());
    setLoading(true);
  };

  const onGetItems = (id) => {
    dispatch(fetchItem(id));
  };

  useEffect(() => {
    getItems();
    console.log(1);
  }, []);

  return (
    <ul
      className="list__items"
      style={loading ? null : { display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      {loading ? (
        type.items &&
        type.items.map((item, idx) => {
          const idRegExp = /\/([0-9]*)\/$/;
          const idItem = item.url.match(idRegExp)[1];

          return <ListItem key={idx} name={item.name} id={idItem} onGetItems={onGetItems} />;
        })
      ) : (
        <Loader />
      )}
    </ul>
  );
}

export default List;
