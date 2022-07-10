import { render, screen } from '@testing-library/react';
import { useGroceryState } from 'hooks/useGroceryState';

import ListSelection from './ListSelection';

jest.mock('hooks/useGroceryState', () => ({
  useGroceryState: jest.fn()
}));

describe('<ListSelection />', () => {
  beforeEach(jest.clearAllMocks);

  it('should render a message to select an item when no item selected', () => {
    useGroceryState.mockReturnValue({
      isItemSelected: false,
      selectedItem: {}
    });

    render(<ListSelection />);

    expect(screen.getByText('Select an Item')).toBeInTheDocument();
  });

  it('should render all of a selected items details', () => {
    useGroceryState.mockReturnValue({
      isItemSelected: true,
      selectedItem: {
        id: 10,
        name: 'Apple',
        category: 'Fruit',
        deliveryMethod: 'Air'
      }
    });

    render(<ListSelection />);

    expect(screen.queryByText('Select an Item')).not.toBeInTheDocument();
    expect(screen.getByText(/id/i)).toBeInTheDocument();
    expect(screen.getByText(/name/i)).toBeInTheDocument();
    expect(screen.getByText(/category/i)).toBeInTheDocument();
    expect(screen.getByText(/delivery method/i)).toBeInTheDocument();
    expect(screen.getByText(10)).toBeInTheDocument();
    expect(screen.getByText('Apple')).toBeInTheDocument();
    expect(screen.getByText('Fruit')).toBeInTheDocument();
    expect(screen.getByText('Air')).toBeInTheDocument();
  })
})