import { render, screen } from '@testing-library/react';
import App from './App';
import {Provider} from 'react-redux';
import rootReducer from './rootReducer';
import {createStore} from 'redux';

const store = createStore(rootReducer)

test('renders todo list', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
    );
  const linkElement = screen.getByText("Todo List");
  expect(linkElement).toBeInTheDocument();
});
