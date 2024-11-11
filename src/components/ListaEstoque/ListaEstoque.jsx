import React from 'react';
import ItemEstoque from '../ItemEstoque/ItemEstoque';

function ListaEstoque({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <ItemEstoque
            item={item}
          />
        </li>
      ))}
    </ul>
  );
}

export default ListaEstoque;