import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

/**
 * Test What user would see
 */
test('renders the form correctly', () => {
  const { getByText, getByLabelText } = render(<App />);
  const nameLabel = getByText(/Name:/i);
  const ageLabel = getByText(/Age:/i);
  expect(nameLabel).toBeInTheDocument();
  expect(ageLabel).toBeInTheDocument();
  const input = getByLabelText(/Age:/i);
  expect(input).toHaveAttribute('type', 'number')
});
