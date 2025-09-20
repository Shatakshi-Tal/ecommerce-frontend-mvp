import React from 'react';
import fetchMock from 'jest-fetch-mock';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import ProductList from '../../features/products/ProductList';
import '@testing-library/jest-dom';

describe('ProductList', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it('renders search input and category filter', async () => {
    fetchMock.mockResponses(
      [JSON.stringify([
        { id: 1, title: 'Test Product', price: 10, description: '', category: 'cat', image: '' }
      ]), { status: 200 }],
      [JSON.stringify(['cat']), { status: 200 }]
    );

    render(
      <Provider store={store}>
        <MemoryRouter>
          <ProductList />
        </MemoryRouter>
      </Provider>
    );
    expect(await screen.findByPlaceholderText(/search products/i)).toBeInTheDocument();
    expect(await screen.findByText(/all categories/i)).toBeInTheDocument();
  });
});
