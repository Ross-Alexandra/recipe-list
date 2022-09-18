import { keyframes } from '@emotion/react';
import { Animate } from '@ross-alexandra/react-utilities';
import React, { useCallback, useState } from 'react';
import { backgroundColor } from '../../palette';

import { useCustomEventDispatcher } from '../../hooks';

import {
    NewItemWrapper,
    NewItem,
    Modal,
    MainButonAlternate,
    ModalContentWrapper,
    ModalItemName,
    ModalItemIcon,
} from './elements';

import {
    getAlternateButtonTitles,
    getAlternateIcons,
    getAlternateOnClicks,
    getPrimaryButtonTitle,
    getPrimaryIcon,
    getPrimaryOnClick
} from './helpers';
import { useHistory } from 'react-router';

export interface AddNewItemProps {
    currentPage: Page;
}

export const AddNewItem: React.FC<AddNewItemProps> = ({currentPage}) => {
    const [overlayActive, setOverlayActive] = useState(false);
    const [hidePlus, setHidePlus] = useState(false);

    const history = useHistory();
    const newRecipeDispatch = useCustomEventDispatcher('new-recipe');
    const newGroceryDispatch = useCustomEventDispatcher('new-grocery');
    const newMealDispatch = useCustomEventDispatcher('new-meal');

    const newRecipe = useCallback(() => {
        history.push('/recipes');

        setTimeout(() => {
            newRecipeDispatch();
        }, 250);
    }, [history, newRecipeDispatch]);
    
    const newGrocery = useCallback(() => {
        history.push('/groceries');

        setTimeout(() => {
            newGroceryDispatch();
        }, 250);
    }, [history, newGroceryDispatch]);

    const newMeal = useCallback(() => {
        history.push('/meals');

        setTimeout(() => {
            newMealDispatch();
        }, 250);
    }, [history, newMealDispatch]);

    const eventDispatchers = {
        'recipes': newRecipe,
        'groceries': newGrocery,
        'meals': newMeal
    };

    const PrimaryIcon = getPrimaryIcon(currentPage);
    const alternateIcons = getAlternateIcons(currentPage);

    const primaryTitle = getPrimaryButtonTitle(currentPage);
    const alternateTitles = getAlternateButtonTitles(currentPage);

    const primaryOnClick = getPrimaryOnClick(currentPage);
    const alternateOnClicks = getAlternateOnClicks(currentPage);

    const openOverlay = useCallback(() => {
        setOverlayActive(true);
        setHidePlus(true);
    }, [setOverlayActive]);

    const closeOverlay = useCallback(() => {
        setOverlayActive(false);
    }, [setOverlayActive]);

    const toggleOverlay = useCallback(() => {
        if (overlayActive) {
            closeOverlay();
            eventDispatchers[primaryOnClick]?.();
        }
        else openOverlay();
    }, [overlayActive, closeOverlay, openOverlay, primaryOnClick]);

    return (
        <>
            <NewItemWrapper 
                overlayOpen={overlayActive}
                onClick={toggleOverlay}
            >
                <Animate
                    display={overlayActive}
                    animationIn={keyframes`
                        from {transform: rotate(-90deg)}
                        to {transform: rotate(0deg)}
                    `}
                    animationOut={keyframes`
                        from {transform: rotate(0deg)}
                        to {transform: rotate(-90deg)}
                    `}
                    afterAnimateOut={() => setHidePlus(false)}
                >
                    <MainButonAlternate>
                        {PrimaryIcon}
                    </MainButonAlternate>
                </Animate>

                {!hidePlus && (
                    <NewItem
                        stroke={backgroundColor}
                        width={15}
                        height={15}
                    />
                )}
            </NewItemWrapper>

            <Modal
                isOpen={overlayActive}
                onBackgroundClick={closeOverlay}
                
                portalId='new-item-overlay'
            >
                <ModalContentWrapper
                    onClick={closeOverlay}
                >
                    <ModalItemName index={2}>{alternateTitles[0]}</ModalItemName>
                    <ModalItemIcon
                        index={2}
                        onClick={() => eventDispatchers[alternateOnClicks[0]]?.()}
                    >
                        {alternateIcons[0]}
                    </ModalItemIcon>
                    <ModalItemName index={1}>{alternateTitles[1]}</ModalItemName>
                    <ModalItemIcon
                        index={1}
                        onClick={() => eventDispatchers[alternateOnClicks[1]]?.()}
                    >
                        {alternateIcons[1]}
                    </ModalItemIcon>
                    <ModalItemName index={0}>{primaryTitle}</ModalItemName>
                </ModalContentWrapper>
            </Modal>
        </>
    );
};
