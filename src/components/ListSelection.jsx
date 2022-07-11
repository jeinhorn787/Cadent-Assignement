import React from 'react';
import { useGroceryState } from 'hooks/useGroceryState';

const ListSelection = () => {
  const { isItemSelected, selectedItem } = useGroceryState();
  const { category, deliveryMethod, id, name } = selectedItem;

  return (
    <div className="listSelection">
      {!isItemSelected ? (
        <h3>Select an Item for Details</h3>
      ) : (
        <>
          <span>
            <b>ID: </b>
            {id}
          </span>
          <br />
          <span>
            <b>Name: </b>
            {name}
          </span>
          <br />
          <span>
            <b>Category: </b>
            {category}
          </span>
          <br />
          <span>
            <b>Delivery Method: </b>
            {deliveryMethod}
          </span>
        </>
      )}
    </div>
  );
};

export default ListSelection;
