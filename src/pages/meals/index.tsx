import { ModalFrame } from '@ross-alexandra/react-utilities';
import React, { useCallback, useState } from 'react';
import { useCustomEventHandler } from '../../hooks';
import { useMeals } from '../../services/mealService';

import {
    Modal
} from './elements';
import { MealRow } from './meal-row';

interface NewMealFormData {
    name: HTMLInputElement;
}

export const Meals: React.FC = () => {
    const [meals, saveMeal, removeMeal] = useMeals();
    const [addingMeal, setAddingMeal] = useState(false);

    const stopAddingMeal = useCallback(() => {
        setAddingMeal(false);
    }, [setAddingMeal]);

    const startAddingMeal = useCallback(() => {
        setAddingMeal(true);
    }, []);

    useCustomEventHandler('new-meal', () => startAddingMeal());

    return (
        <>
            {meals.map(({name}) => 
                <MealRow 
                    key={name}
                    name={name}
                    removeMeal={removeMeal}
                />
            )}

            <Modal
                isOpen={addingMeal}
                onBackgroundClick={stopAddingMeal}
            >
                <ModalFrame
                    handleClose={stopAddingMeal}
                    closeButtonColor={'#FFF'}
                >
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            const { name: {value: name} } = e.target as typeof e.target & NewMealFormData;

                            saveMeal(name);
                            stopAddingMeal();
                        }}
                    >
                        <input
                            name='name'
                            type='text'
                        />

                        <button type='submit'>Submit</button>
                    </form>

                </ModalFrame>
            </Modal>
        </>
    );
};
