import { keyframes } from '@emotion/react';
import { Animate } from '@ross-alexandra/react-utilities';
import React, { useCallback, useState } from 'react';
import { GroceriesIcon, MealsIcon, RecipesIcon } from '../../icons';
import { backgroundColor } from '../../palette';
import {
    NewItemWrapper,
    NewItem,
    Modal,
    MainButonAlternate,
    ModalContentWrapper,
    ModalItemName,
    ModalItemIcon,
} from './elements';

function primaryIcon(currentPage: Page) {
    switch (currentPage) {
        case 'groceries': return GroceriesIcon;
        case 'recipes': return RecipesIcon;
        case 'meals': return MealsIcon;
        default: return GroceriesIcon;
    }
}

export interface AddNewItemProps {
    currentPage: Page;
}

export const AddNewItem: React.FC<AddNewItemProps> = ({currentPage}) => {
    const [overlayActive, setOverlayActive] = useState(false);
    const [hidePlus, setHidePlus] = useState(false);

    const openOverlay = useCallback(() => {
        setOverlayActive(true);
        setHidePlus(true);
    }, [setOverlayActive]);
    const closeOverlay = useCallback(() => {
        setOverlayActive(false);
    }, [setOverlayActive]);

    const PrimaryIcon = primaryIcon(currentPage);
    return (
        <>
            <NewItemWrapper 
                overlayOpen={overlayActive}
                onClick={openOverlay}
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
                        <PrimaryIcon width={15} height={15}/>
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
                    <ModalItemName index={2}>Name 1</ModalItemName>
                    <ModalItemIcon index={2}>1</ModalItemIcon>
                    <ModalItemName index={1}>Name 2</ModalItemName>
                    <ModalItemIcon index={1}>2</ModalItemIcon>
                    <ModalItemName index={0}>Name 3</ModalItemName>
                </ModalContentWrapper>
            </Modal>
        </>
    );
};
