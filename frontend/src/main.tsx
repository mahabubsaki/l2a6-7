import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import './index.css';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './redux/store/index.ts';
import { RouterProvider } from 'react-router-dom';
import routes from './routes/index.tsx';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ChakraProvider>
          <div className='bg-white dark:bg-black text-black dark:text-white'>
            <RouterProvider router={routes} fallbackElement={<div>s</div>} />
          </div>

        </ChakraProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
);
