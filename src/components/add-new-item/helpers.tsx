import {
    GroceriesIcon as _GroceryIcon,
    MealsIcon as _MealsIcon,
    RecipesIcon as _RecipesIcon
} from '../../icons';
import { backgroundColor } from '../../palette';

const GroceriesIcon = <_GroceryIcon width={15} height={15} stroke={backgroundColor} />;
const RecipesIcon = <_RecipesIcon width={15} height={15} stroke={backgroundColor} />;
const MealsIcon = <_MealsIcon width={15} height={15} stroke={backgroundColor} />;

const addGroceryText = 'Add Grocery';
const addRecipeText = 'Add Recipe';
const addMealText = 'Add Meal';

export function getPrimaryIcon(currentPage: Page) {
    switch (currentPage) {
        case 'groceries': return GroceriesIcon;
        case 'recipes': return RecipesIcon;
        case 'meals': return MealsIcon;
        default: return GroceriesIcon;
    }
}

export function getAlternateIcons(currentPage: Page) {
    switch (currentPage) {
        case 'groceries': return [MealsIcon, RecipesIcon];
        case 'recipes': return [MealsIcon, GroceriesIcon];
        case 'meals': return [GroceriesIcon, RecipesIcon];
        default: return [MealsIcon, RecipesIcon];
    }
}

export function getPrimaryButtonTitle(currentPage: Page) {
    switch (currentPage) {
        case 'groceries': return addGroceryText;
        case 'recipes': return addRecipeText;
        case 'meals': return addMealText;
        default: return addGroceryText;
    }
}

export function getAlternateButtonTitles(currentPage: Page) {
    switch (currentPage) {
        case 'groceries': return [addMealText, addRecipeText];
        case 'recipes': return [addMealText, addGroceryText];
        case 'meals': return [addGroceryText, addRecipeText];
        default: return [addMealText, addRecipeText];
    }
}

export function getPrimaryOnClick(currentPage: Page): Page {
    return currentPage;
}

export function getAlternateOnClicks(currentPage: Page): [Page, Page] {
    switch (currentPage) {
        case 'groceries': return ['meals', 'recipes'];
        case 'recipes': return ['meals', 'groceries'];
        case 'meals': return ['groceries', 'recipes'];
        default: return ['meals', 'recipes'];
    }
}
