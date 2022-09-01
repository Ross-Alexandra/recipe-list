import React, { useCallback } from 'react';
import { useAisles, useGroceries } from '../../services';
import { AisleGroceries } from './aisle-groceries';

import {
    GroceryHeader,
    TotalItemsText,
    ClearGroceriesButton,
    AddItemsToListWrapper,
    AddItemsToListText
} from './elements';

export const Groceries: React.FC = () => {
    const [aisles] = useAisles();
    const [groceries, {remove, check, uncheck}] = useGroceries();

    const clearGroceries = useCallback(() => {
        groceries.forEach(({name}) => remove(name));
    }, [groceries]);

    const checkedGroceriesCount = groceries.filter(({checked}) => checked).length;
    return (
        <>
            <GroceryHeader>
                <TotalItemsText>{`${checkedGroceriesCount} of ${groceries.length} checked`}</TotalItemsText>
                <ClearGroceriesButton onClick={() => clearGroceries()}>Clear List</ClearGroceriesButton>
            </GroceryHeader>

            {aisles.map(name => 
                <AisleGroceries
                    key={name}
                    aisleName={name}
                    groceries={groceries.filter(({aisle}) => aisle === name)}
                    checkGrocery={check}
                    uncheckGrocery={uncheck}
                />    
            )}

            {groceries.length === 0 && (
                <AddItemsToListWrapper>
                    <AddItemsToListText>
                        Go to your recipies and select some ingredients to add to your list!
                    </AddItemsToListText>
                </AddItemsToListWrapper>
            )}
        </>
    );
};
