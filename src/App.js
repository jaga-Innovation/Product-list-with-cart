import React from 'react';
import DisplayItems from './Components/DisplayItems';
import Cart from './Components/Cart';
import {Provider} from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, {persistedStore} from './Store';
import './styles.css';

function App(){
    return(
        <Provider store={store}>
            <PersistGate 
                persistor={persistedStore}>
                <main className={'container'}>
                    <DisplayItems/>  
                    <Cart/>              
                </main>                
            </PersistGate>

        </Provider>
    )
}

export default App;