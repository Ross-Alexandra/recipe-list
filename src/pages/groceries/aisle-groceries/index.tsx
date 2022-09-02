import React, { useState } from 'react';
import {keyframes} from '@emotion/react';

import {
    Animate,
    AisleWrapper,
    AisleHeader,
    AisleTitle,
    AisleBody,
    Chevron,
    AisleItemCount,
    GroceryRow,
    GroceryInfo,
    GroceryCheckedBox,
    GroceryUncheckedBox,
    GroceryName,
    GroceryUsedBy,
    GarbageCan,
    GROCERY_ROW_HEIGHT
} from './elements';
import _ from 'lodash';

function getAndMoreText(maxCharacters: number, totalItems: number, text: string) {
    const includedItems = text.split(', ').length;

    const placeholder = `... and ${totalItems - includedItems + 2} more.`;
    const textCharacters = maxCharacters - placeholder.length;

    if (text.length < maxCharacters) return text;
    else return text.substring(0, textCharacters).split(', ').slice(0, -1).join(', ').concat(placeholder);
}

export interface AisleGroceriesProps {
    aisleName: string;
    groceries: Grocery[];
    checkGrocery: (name: string) => Grocery[];
    uncheckGrocery: (name: string) => Grocery[];
    removeGrocery: (name: string, from?: string) => Grocery[];
}

export const AisleGroceries: React.FC<AisleGroceriesProps> = ({
    aisleName,
    groceries,
    checkGrocery,
    uncheckGrocery,
    removeGrocery
}) => {
    const [expanded, setExpanded] = useState(() => {
        return !groceries.every(({checked}) => checked);
    });

    const checkedItemCount = groceries.filter(({checked}) => checked).length;

    if (_.isEmpty(groceries)) return null;
    return (
        <AisleWrapper>
            <AisleHeader onClick={() => setExpanded(isExpanded => !isExpanded)}>
                <Chevron expanded={expanded} stroke='#fff'/>
                <AisleTitle>{aisleName}</AisleTitle>
                <AisleItemCount>{`${checkedItemCount} / ${groceries.length}`}</AisleItemCount>
            </AisleHeader>

            <Animate
                display={expanded}
                animationIn={keyframes`
                    from {max-height: 0px;}
                    to {max-height: ${GROCERY_ROW_HEIGHT * groceries.length}px;}
                `}
                animationOut={keyframes`
                    from {max-height: ${GROCERY_ROW_HEIGHT * groceries.length}px;}
                    to {max-height: 0px;}
                `}
            > 
                <AisleBody>
                    {groceries.map(({name, usedBy, checked}) => 
                        <GroceryRow key={name} checked={checked}>
                            {checked ? (
                                <GroceryCheckedBox
                                    stroke={'#FFF'}
                                    onClick={() => {
                                        if (checked) uncheckGrocery(name);
                                        else checkGrocery(name);
                                    }}    
                                />
                            ) : (
                                <GroceryUncheckedBox
                                    stroke={'#FFF'}
                                    onClick={() => {
                                        if (checked) uncheckGrocery(name);
                                        else checkGrocery(name);
                                    }}    
                                />
                            )}
                            <GroceryInfo>
                                <GroceryName>{name}</GroceryName>
                                <GroceryUsedBy>{getAndMoreText(81, groceries.length, usedBy.join(', '))}</GroceryUsedBy>
                            </GroceryInfo>

                            <GarbageCan stroke={'#FFF'} onClick={() => removeGrocery(name)}/>
                        </GroceryRow>
                    )}
                </AisleBody>
            </Animate>
        </AisleWrapper>
    );
};
