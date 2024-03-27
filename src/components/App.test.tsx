import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import App from './App';

// eslint-disable-next-line react/display-name
jest.mock('./MoviesContextProvider', () => ({children}: {children: React.ReactNode}) => (<div className='context'>{children}</div>))
describe('App component', () => {
  it('Should render Navigation component', async () => {
    render(
        <App />
    );
    await waitFor(() => {
      const homeText = screen.getByText(/Home/i);
      expect(homeText).toBeInTheDocument()
    })
  });

});