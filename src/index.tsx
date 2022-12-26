import React from 'react';
import ReactDOM from 'react-dom/client';
import { DAppProvider, Rinkeby } from '@usedapp/core';
import { getDefaultProvider } from 'ethers';
import { Provider } from 'react-redux';
import { ApiProvider } from '@reduxjs/toolkit/query/react';
import { userAPI } from './services/UserService';
import { store } from './store/store';
import './index.css';
import App from './App';

const config = { 
  networks: [Rinkeby],
  readOnlyChainId: Rinkeby.chainId,
  readOnlyUrls: {
    [Rinkeby.chainId]: getDefaultProvider('rinkeby'),
  },
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <DAppProvider config={config}> 
    <ApiProvider api={userAPI}>
      <Provider store={store}>
        <App />
      </Provider>
    </ApiProvider>
  </DAppProvider> 
); 
