import React from 'react';
import { Provider } from 'react-redux';
import store, { persister } from './Store/store';
import { PersistGate } from 'redux-persist/integration/react';

export const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persister}>
        <div>
          <h1>Hello team!</h1>
        </div>
      </PersistGate>
    </Provider>
  );
};

export default App;
