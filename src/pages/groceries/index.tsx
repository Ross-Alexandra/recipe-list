import _ from 'lodash';
import React, { useCallback, useState } from 'react';
import { errorCodesToText } from '../../error-codes-to-text';
import { useCustomEventHandler, useFieldErrors } from '../../hooks';
import { useAisles, useGroceries } from '../../services';
import { AisleGroceries } from './aisle-groceries';

import {
    GroceryHeader,
    ButtonsWrapper,
    TotalItemsText,
    ClearGroceriesButton,
    GroceryFooter,
    AddItemsToListText,
    ModalTitle,
    GroceryNameInput,
    AisleSelector,
    SaveButton,
    Modal,
    ErrorText,
    NewGroceryModalFrame,
    ClearWarningModalFrame,
    ClearButton,
    ClearButtonsWrapper
} from './elements';

export const Groceries: React.FC = () => {
    const [aisles] = useAisles();
    const [groceries, {save, remove, check, uncheck}] = useGroceries();

    const [clearingGroceries, setClearingGroceries] = useState(false);

    const [creatingGrocery, setCreatingGrocery] = useState(false);
    const [newGroceryName, setNewGroceryName] = useState('');
    const [newGroceryAisle, setNewGroceryAisle] = useState(_.get(aisles, 0));
    const [newGroceryErrors, {
        newError,
        clearFieldErrors
    }] = useFieldErrors<{name: string[], aisle: string[]}>();

    const handleNewGroceryEvent = useCallback(() => {
        setCreatingGrocery(true);
    }, [setCreatingGrocery]);
    useCustomEventHandler('new-grocery', handleNewGroceryEvent);

    const saveNewGrocery = useCallback(() => {
        if (!newGroceryName) {
            newError('name', 'is-blank');
            return;

        } 
        const groceryName = newGroceryName.toLowerCase();
        if (_.find(groceries, {name: groceryName, usedBy: ['Manually Added']})) {
            newError('name', 'already-manually-added');
            return;
        }

        const recipeName = _.find(groceries, {name: groceryName}) ? 'Manually Added' : '';
        save(groceryName, newGroceryAisle, recipeName);
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
                {groceries.length > 0 &&
                    <ButtonsWrapper>
                        <ClearGroceriesButton onClick={() => setClearingGroceries(true)}>Clear List</ClearGroceriesButton>
                    </ButtonsWrapper>
                }
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

            {groceries.length === 0 && (
                <GroceryFooter>
                    <AddItemsToListText>
                        Open your recipies and select some ingredients to add to your list!
                    </AddItemsToListText>
                </GroceryFooter>
            )}

            <Modal
                isOpen={creatingGrocery}
                onBackgroundClick={() => setCreatingGrocery(false)}
            >
                <NewGroceryModalFrame
                    closeButtonColor='#FFF'
                    handleClose={() => setCreatingGrocery(false)}
                >
                    <ModalTitle>New Grocery Item</ModalTitle>
                    <div>
                        <GroceryNameInput 
                            type="text"
                            placeholder='Item Name'
                            value={newGroceryName}
                            hasError={false}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                setNewGroceryName(e.target.value);
                                clearFieldErrors('name');
                            }}
                        />
                        {newGroceryErrors.name && <ErrorText>{_.get(errorCodesToText, newGroceryErrors.name?.[0])}</ErrorText>}
                    </div>

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
                </NewGroceryModalFrame>
            </Modal>

            <Modal
                isOpen={clearingGroceries}
                onBackgroundClick={() => setClearingGroceries(false)}
            >
                <ClearWarningModalFrame
                    closeButtonColor='#FFF'
                    handleClose={() => setClearingGroceries(false)}
                >
                    <ModalTitle>Clear all items from list?</ModalTitle>
                    <ClearButtonsWrapper>
                        <ClearButton
                            onClick={() => {
                                clearGroceries();
                                setClearingGroceries(false);
                            }}
                        >
                            Yes
                        </ClearButton>
                        <ClearButton onClick={() => setClearingGroceries(false)}>No</ClearButton>
                    </ClearButtonsWrapper>
                </ClearWarningModalFrame>
            </Modal>
        </>
    );
};
