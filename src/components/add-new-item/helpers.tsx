import {
    GroceriesIcon as _GroceryIcon,
    MealsIcon as _MealsIcon,
    RecipesIcon as _RecipesIcon
} from '../../icons';

const iconSize = 25;
const iconStroke = '#FFF';
const GroceriesIcon = <_GroceryIcon width={iconSize} height={iconSize} stroke={iconStroke} />;
const RecipesIcon = <_RecipesIcon width={iconSize} height={iconSize} stroke={iconStroke} />;
const MealsIcon = <_MealsIcon width={iconSize} height={iconSize} stroke={iconStroke} />;

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
