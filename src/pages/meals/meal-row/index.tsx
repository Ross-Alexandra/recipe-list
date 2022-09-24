import React from 'react';

export interface MealRowProps {
    name: string;
    removeMeal: (name: string) => Meal[];
}

export const MealRow: React.FC<MealRowProps> = ({name}) => {
    return (
        <p>{name}</p>
    );
};