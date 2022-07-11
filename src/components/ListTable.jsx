import React from 'react';
import { useGroceryState } from 'hooks/useGroceryState';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';

export const ListTable = () => {
  const {
    handleDeselectItem,
    handleRemoveItem,
    handleSelectItem,
    groceryList,
    selectedItem
  } = useGroceryState();

  return (
    <TableContainer id="grocery-list-table">
      <Table sx={{ maxWidth: 600 }}>
        <TableHead>
          <TableRow>
            <TableCell align="right">Name</TableCell>
            <TableCell align="center">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {groceryList.map((item) => {
            const { id, name } = item;
            const isItemSelected = id === selectedItem.id;

            return (
              <TableRow key={id} selected={isItemSelected}>
                <TableCell align="right">{name}</TableCell>
                <TableCell align="right">
                  <Button
                    disabled={isItemSelected}
                    onClick={() => handleSelectItem(id)}
                  >
                    Select
                  </Button>
                  <Button
                    disabled={!isItemSelected}
                    onClick={() => handleDeselectItem()}
                  >
                    Deselect
                  </Button>
                  <Button onClick={() => handleRemoveItem(id)}>Remove</Button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ListTable;
