import React from 'react';
import ReactDOM from 'react-dom/client';
import 'antd/dist/antd.min.css';
import 'swiper/css';
import './index.scss';

import App from './App';
import { Provider } from 'react-redux';
import { store } from './redux/configReducer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
