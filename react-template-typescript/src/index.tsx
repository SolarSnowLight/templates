/* Библиотеки */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store/store';

/* Контейнеры */
import App from './containers/App/App';

/* Стили */
import 'swiper/css/bundle';
import './styles/normalize.css';
import './styles/index.scss';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);