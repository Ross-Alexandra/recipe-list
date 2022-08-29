/// <reference types="react-scripts" />

type Page = 'recipes' | 'groceries';

interface Recipe {
    name: string;
    ingredients: Ingredient[];
}

interface Ingredient {
    name: string;
    type: string;
}

interface Grocery {
    name: string;
    aisle: string;
    usedBy: string[];
}