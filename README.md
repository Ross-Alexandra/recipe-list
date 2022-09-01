# RecipeList
An app to learn Ionic/React with. A simple recipe-first grocery list app.

## Development
For unknown reasons, using `ionic` with `capacitor` does not appear to support
live reload on any Android API < 29. Please ensure you're using API_29 or greater
to ensure that you will be able to develop with live reload (using `npm run start:android`).

## Known UX issues:
 - ~~Users need an edit button on their recipes. (pencil icon beside the garbage can)~~,
 - ~~Users want to be able to click on an ingredient to edit it,~~
 - Users need a way of adding items to their list without needing to add that ingredient to a recipe (eg: toilet paper),
 - Users want to swipe to remove individual ingredients from the grocery list,
 - ~~Users want an 'add all' button beside the recipe name.~~
 - Users like to click the 'save' button to add a new recipe intead of clicking the + icon,
 
## Known Bugs:
 - ~~If an ingredient is added to the list, then the recipe for that ingredient is deleted, the ingredient is not currently deleted.~~
