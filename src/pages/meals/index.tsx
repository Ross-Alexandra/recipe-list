import React, { useCallback, useState } from 'react';
import { 
    useCustomEventHandler,
    useFieldErrors,
    FieldError
} from '../../hooks';
import { useMeals } from '../../services/mealService';
import { MealRow } from './meal-row';

import {
    Modal,
    ModalFrame,
    MealCountWrapper,
    MealCountText,
    NoMealsRow,
    NoMealsText,
    NewMealForm,
    NewMealTitle,
    NewMealNameInput,
    InputWrapper,
    SubmitMealButton,
    ErrorText
} from './elements';
import _ from 'lodash';

interface NewMealFormData {
    name: HTMLInputElement;
}

export const Meals: React.FC = () => {
    const [meals, saveMeal, removeMeal] = useMeals();
    const [addingMeal, setAddingMeal] = useState(false);

    const [errors, {newError, clearFieldErrors}] = useFieldErrors<{
        name: FieldError[];
    }>();

    const stopAddingMeal = useCallback(() => {
        setAddingMeal(false);
    }, [setAddingMeal]);

    const startAddingMeal = useCallback(() => {
        setAddingMeal(true);
    }, []);

    useCustomEventHandler('new-meal', () => startAddingMeal());

    return (
        <>
            <MealCountWrapper>
                <MealCountText>{meals.length || 'No'} Meals</MealCountText>
            </MealCountWrapper>
            {meals.length === 0 &&
                <NoMealsRow>
                    <NoMealsText>
                        Open your recipies and select some meals to add to your list!
                    </NoMealsText>
                </NoMealsRow>
            }
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
                    <NewMealForm
                        onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
                            e.preventDefault();
                            const { name: {value: name} } = e.target as typeof e.target & NewMealFormData;

                            if (name.length === 0) {
                                newError('name', 'Name must not be empty');
                                return;
                            }

                            saveMeal(name);
                            stopAddingMeal();
                        }}
                    >
                        <NewMealTitle>New Meal</NewMealTitle>

                        <InputWrapper>
                            <NewMealNameInput
                                name='name'
                                type='text'
                                hasErrors={false}
                                placeholder='Meal Name'
                                onChange={() => clearFieldErrors('name')}
                            />
                            {!_.isEmpty(errors.name) && (
                                errors.name.map(nameError => 
                                    <ErrorText key={nameError}>{nameError}</ErrorText>
                                )
                            )}
                        </InputWrapper>

                        <SubmitMealButton type='submit'>Submit</SubmitMealButton>
                    </NewMealForm>
                </ModalFrame>
            </Modal>
        </>
    );
};
