import React from 'react';

import {
    MealRowWrapper,
    MealName,
    RemoveMeal
} from './elements';

export interface MealRowProps {
    name: string;
    removeMeal: (name: string) => Meal[];
}

export const MealRow: React.FC<MealRowProps> = ({name, removeMeal}) => {
    return (
        <MealRowWrapper>
            <MealName>{name}</MealName>
            <RemoveMeal 
                onClick={() => removeMeal(name)}
                stroke={'#FFF'}
            />
        </MealRowWrapper>
    );
};
