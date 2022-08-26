import { Redirect, Route } from 'react-router-dom';
import { setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
setupIonicReact();

export const App: React.FC = () => (
    <IonReactRouter>
        <Route exact path="/tab1">
            <a href='/tab2'>Get Hacking!</a>
        </Route>
        <Route exact path="/tab2">
            <a href='/tab1'>Back to the first page</a>
        </Route>
        <Route exact path="/">
            <Redirect to="/tab1" />
        </Route>
    </IonReactRouter>
);
