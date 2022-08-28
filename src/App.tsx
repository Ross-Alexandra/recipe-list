import { useCallback, useState } from 'react';
import { Redirect, Route, Switch, useLocation } from 'react-router-dom';
import { setupIonicReact } from '@ionic/react';
import {keyframes} from '@emotion/react';

import {
    GroceriesIcon,
    RecipesIcon
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
    TabText,
    AppPopout,
} from './elements';

setupIonicReact();
export const App: React.FC = () => {
    const [popoutIsOpen, setPopoutIsOpen] = useState(false);
    const handleClosePopout = useCallback(() => setPopoutIsOpen(false), [setPopoutIsOpen]);
    const handleOpenPopout = useCallback(() => setPopoutIsOpen(true), [setPopoutIsOpen]);

    const location = useLocation();
    const currentPage: Page = location.pathname === '/recipes' ? 'recipes' : 'groceries'; 

    return (
        <AppWrapper>
            <AppTitle>{currentPage}</AppTitle>
            <HamburgerMenuIcon onClick={handleOpenPopout} stroke='#FFF' />

            <AppBodyOuter>
                <AppBodyInner>
                    <Switch>
                        <Route exact path="/recipes">
                            <Recipes />
                        </Route>
                        <Route exact path="/groceries">
                            <Groceries />
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

            <TabTray>
                <Tab to={'/recipes'} activePage={currentPage === 'recipes'}>
                    <RecipesIcon stroke={'#FFF'} />
                    <TabText>Recipes</TabText>
                </Tab>
                <Tab to={'/groceries'} activePage={currentPage === 'groceries'}>
                    <GroceriesIcon stroke={'#FFF'}/>
                    <TabText>Groceries</TabText>
                </Tab>
            </TabTray>

            <AppPopout
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
