import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';

const StocksList = () => (
  <div>
    <h1>Stocks</h1>
  </div>
);

describe('Stocks', () => {
  test('render React component', () => {
    render(<StocksList />);
    expect(screen.getByText('Stocks')).toBeInTheDocument();
  });
});
