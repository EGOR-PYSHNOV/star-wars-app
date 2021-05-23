import React from 'react';

function ListItem({ name, onGetItems, id }) {
  return <li onClick={() => onGetItems(id)}>{name}</li>;
}

export default ListItem;
