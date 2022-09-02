import _ from 'lodash';
import React, { useCallback, useState } from 'react';
import { useAisles, useGroceries } from '../../services';
import { AisleGroceries } from './aisle-groceries';

import {
    GroceryHeader,
    ButtonsWrapper,
    AddGroceryButton,
    TotalItemsText,
    ClearGroceriesButton,
    GroceryFooter,
    AddItemsToListText,
    ModalTitle,
    GroceryNameInput,
    AisleSelector,
    SaveButton,
    Modal,
    ModalFrame,
} from './elements';

export const Groceries: React.FC = () => {
    const [aisles] = useAisles();
    const [groceries, {save, remove, check, uncheck}] = useGroceries();

    const [creatingGrocery, setCreatingGrocery] = useState(false);
    const [newGroceryName, setNewGroceryName] = useState('');
    const [newGroceryAisle, setNewGroceryAisle] = useState(_.get(aisles, 0));

    const saveNewGrocery = useCallback(() => {
        save(newGroceryName, newGroceryAisle, '');
        setCreatingGrocery(false);
        setNewGroceryName('');
        setNewGroceryAisle(_.get(aisles, 0));
    }, [newGroceryName, newGroceryAisle, save]);

    const clearGroceries = useCallback(() => {
        groceries.forEach(({name}) => remove(name));
    }, [groceries]);

    const checkedGroceriesCount = groceries.filter(({checked}) => checked).length;
    return (
        <>
            <GroceryHeader>
                <TotalItemsText>
                    {groceries.length >= 1 && `${checkedGroceriesCount} of ${groceries.length} checked`}
                    {groceries.length === 0 && 'No groceries'}
                </TotalItemsText>
                <ButtonsWrapper>
                    <AddGroceryButton onClick={() => setCreatingGrocery(true)}>New Item</AddGroceryButton>
                    <ClearGroceriesButton onClick={() => clearGroceries()}>Clear List</ClearGroceriesButton>
                </ButtonsWrapper>
            </GroceryHeader>

            {aisles.map(name => 
                <AisleGroceries
                    key={name}
                    aisleName={name}
                    groceries={groceries.filter(({aisle}) => aisle === name)}
                    checkGrocery={check}
                    uncheckGrocery={uncheck}
                    removeGrocery={remove}
                />    
            )}

            <GroceryFooter>
                {groceries.length === 0 && (
                    <AddItemsToListText>
                        Go to your recipies and select some ingredients to add to your list!
                    </AddItemsToListText>
                )}
                
            </GroceryFooter>

            <Modal
                isOpen={creatingGrocery}
                onBackgroundClick={() => setCreatingGrocery(false)}
            >
                <ModalFrame
                    closeButtonColor='#FFF'
                    handleClose={() => setCreatingGrocery(false)}
                >
                    <ModalTitle>New Grocery Item</ModalTitle>
                    <GroceryNameInput 
                        type="text"
                        placeholder='Item Name'
                        value={newGroceryName}
                        hasError={false}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            setNewGroceryName(e.target.value);
                        }}
                    />
                    <AisleSelector
                        value={newGroceryAisle}
                        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                            setNewGroceryAisle(e.target.value);
                        }}
                    >
                        {aisles.map((aisleName) => 
                            <option key={aisleName} value={aisleName}>{aisleName}</option>
                        )}
                    </AisleSelector>
                    <SaveButton onClick={saveNewGrocery}>Save</SaveButton>
                </ModalFrame>
            </Modal>
        </>
    );
};
