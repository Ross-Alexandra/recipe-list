# RecipeList
An app to learn Ionic/React with. A simple recipe-first grocery list app.

## Development
For unknown reasons, using `ionic` with `capacitor` does not appear to support
live reload on any Android API < 29. Please ensure you're using API_29 or greater
to ensure that you will be able to develop with live reload (using `npm run start:android`).

## Known UX issues:
- Users need to be able to be able to see a list of recipes they are making for the week
- ~~Users need to be able to click on groceries to see the full title (so ellipsis doesn't~~ 
  ~~require users to remember what comes after the ellipsis).~~

## Known Bugs:
 - ~~Long grocery names will push the garbage can icon slightly ('Canned Tomatoes (500ml)' for example)~~