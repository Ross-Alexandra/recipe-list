import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { IonReactRouter } from '@ionic/react-router';
import {ModalPortal} from '@ross-alexandra/react-utilities';

import * as serviceWorkerRegistration from './serviceWorkerRegistration';

ReactDOM.render(
    <React.StrictMode>
        <IonReactRouter>
            <App />
        </IonReactRouter>
        <ModalPortal id='app-menu'/>
        <ModalPortal />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();
