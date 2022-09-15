import { useCallback, useEffect, useState } from 'react';
import { Redirect, Route, Switch, useLocation } from 'react-router-dom';
import { setupIonicReact } from '@ionic/react';
import {ScreenOrientation} from '@awesome-cordova-plugins/screen-orientation';
import {StatusBar} from '@awesome-cordova-plugins/status-bar';
import {keyframes} from '@emotion/react';

import {
    GroceriesIcon,
    RecipesIcon,
    MealsIcon,
} from './icons';

import { 
    Groceries,
    Recipes,
} from './pages';

import {
    AppWrapper,
    AppTitle,
    HamburgerMenuIcon,
    AppBodyOuter,
    AppBodyInner,
    TabTray,
    Tab,
    AppPopout,
    NewItem
} from './elements';
import { accentColor, navigationBackgroundColor } from './palette';
import { useCustomEventDispatcher } from './hooks/useCustomEvent';

setupIonicReact();

function getCurrentPage(locationPath: string): Page {
    switch (locationPath) {
        case '/recipes': return 'recipes';
        case '/groceries': return 'groceries';
        case '/meals': return 'meals';
        default: return 'recipes';
    }
}

export const App: React.FC = () => {
    const [popoutIsOpen, setPopoutIsOpen] = useState(false);
    const handleClosePopout = useCallback(() => setPopoutIsOpen(false), [setPopoutIsOpen]);
    const handleOpenPopout = useCallback(() => setPopoutIsOpen(true), [setPopoutIsOpen]);

    const dispatchHelloWorldEvent = useCustomEventDispatcher<{msg: string}>('hello-world');

    const location = useLocation();
    const currentPage = getCurrentPage(location.pathname); 

    // Setup app specific parameters.
    useEffect(() => {
        // Don't allow phone rotation.
        ScreenOrientation.lock(ScreenOrientation.ORIENTATIONS.PORTRAIT_PRIMARY);
    }, []);

    useEffect(() => {
        const pageAccentColor = accentColor(currentPage);

        StatusBar.backgroundColorByHexString(pageAccentColor);

        // NavigationBar provided by cordova-plugin-navigationbar-color
        window?.NavigationBar?.backgroundColorByHexString?.(navigationBackgroundColor, false);

        dispatchHelloWorldEvent({msg: currentPage});
    }, [currentPage]);

    return (
        <AppWrapper>
            <AppTitle page={currentPage}>{currentPage}</AppTitle>
            
            {/* In the future, the hamburder menu should include the ability
                to:
                    - Edit aisles
                    - Sync to web
                    - ???
            */}
            {false && <HamburgerMenuIcon onClick={handleOpenPopout} stroke='#FFF' /> }

            <AppBodyOuter>
                <AppBodyInner>
                    <Switch>
                        <Route exact path="/recipes">
                            <Recipes />
                        </Route>
                        <Route exact path="/groceries">
                            <Groceries />
                        </Route>
                        <Route exact path='/meals'>
                            <p>Meals</p>
                        </Route>

                        {/* Redirect route for when user first lands or if they
                            somehow 404 themselves.
                        */}
                        <Route>
                            <Redirect to="/recipes" />
                        </Route>
                    </Switch>
                </AppBodyInner>
            </AppBodyOuter>

            <NewItem stroke={'#FFF'} width={40} height={40} />

            <TabTray>
                <Tab to='/recipes' activePage={currentPage === 'recipes'}>
                    <RecipesIcon width={28} height={28} stroke={currentPage === 'recipes' ? '#FFF' : '#777'} />
                </Tab>
                <Tab to='/groceries' activePage={currentPage === 'groceries'}>
                    <GroceriesIcon width={28} height={28} stroke={currentPage === 'groceries' ? '#FFF' : '#777'}/>
                </Tab>
                <Tab to='/meals' activePage={currentPage === 'meals'}>
                    <MealsIcon width={28} height={28} stroke={currentPage === 'meals' ? '#FFF' : '#777'} />
                </Tab>
            </TabTray>

            <AppPopout
                portalId='app-menu'
                isOpen={popoutIsOpen}
                animationIn={keyframes`
                    from {right: -100%;}
                    to {right: 0;}
                `}
                animationOut={keyframes`
                    from {right: 0;}
                    to {right: -100%}
                `}
                onBackgroundClick={handleClosePopout}
            />
        </AppWrapper>
    );
};
