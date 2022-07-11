import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useGroceryState } from 'hooks/useGroceryState';

import { ListTable } from './ListTable';

jest.mock('hooks/useGroceryState', () => ({
  useGroceryState: jest.fn()
}));

describe('<ListTable />', () => {
  beforeEach(jest.clearAllMocks);

  it('renders the table correctly', () => {
    useGroceryState.mockReturnValue({
      groceryList: [
        { id: 10, name: 'Apple', category: 'Fruit', deliveryMethod: 'Air' }
      ],
      selectedItem: {}
    });
    render(<ListTable />);

    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Actions')).toBeInTheDocument();
    expect(screen.getByText('Apple')).toBeInTheDocument();
    expect(screen.getByText('Select')).toBeInTheDocument();
    expect(screen.getByText('Deselect')).toBeInTheDocument();
    expect(screen.getByText('Remove')).toBeInTheDocument();
  });

  it('should properly select item', async () => {
    const mockHandleSelectItem = jest.fn();
    useGroceryState.mockReturnValue({
      groceryList: [
        { id: 10, name: 'Apple', category: 'Fruit', deliveryMethod: 'Air' }
      ],
      selectedItem: {},
      handleSelectItem: mockHandleSelectItem
    });
    render(<ListTable />);

    const button = screen.getByText('Select');

    await userEvent.click(button);

    expect(mockHandleSelectItem).toHaveBeenCalledWith(10);
  });

  it('should properly deselect item', async () => {
    const mockHandleDeselectItem = jest.fn();
    useGroceryState.mockReturnValue({
      groceryList: [
        { id: 10, name: 'Apple', category: 'Fruit', deliveryMethod: 'Air' }
      ],
      selectedItem: {
        id: 10,
        name: 'Apple',
        category: 'Fruit',
        deliveryMethod: 'Air'
      },
      handleDeselectItem: mockHandleDeselectItem
    });

    render(<ListTable />);

    const button = screen.getByText('Deselect');

    await userEvent.click(button);

    expect(mockHandleDeselectItem).toHaveBeenCalled();
  });

  it('should properly remove item', async () => {
    const mockHandleRemoveItem = jest.fn();
    useGroceryState.mockReturnValue({
      groceryList: [
        { id: 10, name: 'Apple', category: 'Fruit', deliveryMethod: 'Air' }
      ],
      selectedItem: {},
      handleRemoveItem: mockHandleRemoveItem
    });

    render(<ListTable />);

    const button = screen.getByText('Remove');

    await userEvent.click(button);

    expect(mockHandleRemoveItem).toHaveBeenCalledWith(10);
  });
});
