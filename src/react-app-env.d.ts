/// <reference types="react-scripts" />

type Page = 'recipes' | 'groceries' | 'meals';

interface Recipe {
    name: string;
    ingredients: Ingredient[];
}

interface Ingredient {
    name: string;
    aisle: string;
}

interface Grocery {
    name: string;
    aisle: string;
    usedBy: string[];
    checked: boolean;
}

interface Window {
    //eslint-disable-next-line @typescript-eslint/no-explicit-any
    NavigationBar: any;
}

