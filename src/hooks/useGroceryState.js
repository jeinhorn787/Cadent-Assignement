import { useDispatch, useSelector } from "react-redux";
import { deselectItem, removeItem, selectItem } from 'ducks/groceries';

export const useGroceryState = () => {
  const dispatch = useDispatch();
  const groceries = useSelector(state => state.groceries);

  const handleRemoveItem = id => dispatch(removeItem(id));
  const handleSelectItem = id => dispatch(selectItem(id));
  const handleDeselectItem = () => dispatch(deselectItem());

  return {
    /* Selectors */
    groceryList: groceries.list,
    isItemSelected: groceries.isItemSelected,
    selectedItem: groceries.selectedItem,
    /* Actions */
    handleDeselectItem,
    handleRemoveItem,
    handleSelectItem
  };
}