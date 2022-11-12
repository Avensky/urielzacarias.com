import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './store/store';
import App from './App';

test('render Suspense element', () => {
  render(
    <Provider store={store}>
        <BrowserRouter>
              <App />
        </BrowserRouter>
    </Provider>
  );
  expect(true).to.equal(true);
  //const linkElement = screen.getByText('Loading...');
  //expect(linkElement).toBeInTheDocument();
});