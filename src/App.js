import React from 'react';
import { Provider, defaultChains } from 'wagmi';
import { InjectedConnector } from 'wagmi/connectors/injected'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'

import Header from './components/Header';
import Main from './components/Main';


const App = () => {
  const chains = defaultChains

  const connectors = ({ chainId }) => {
    return [
      new InjectedConnector({
        chains,
        options: { shimDisconnect: true },
      }),
      new WalletConnectConnector({
        options: {
          qrcode: true,
        },
      }),
    ]
  }

  return (
    <div>
      <Provider autoConnect connectors={connectors}>
        <Header />
        <Main />
      </Provider>
    </div>
  )
}

export default App;
