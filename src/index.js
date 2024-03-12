import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './root/App';
import { Provider } from 'react-redux';
import { store } from './components/redux/store';
import { ToastContainer } from 'react-toastify';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div  className='indexContainer'>
    <Provider store={store}>
      <App />
      <ToastContainer />
    </Provider>
    </div>
  </React.StrictMode>
);
