function showCocktail(currentCocktail) {
  
  currentCocktail.ingredients = currentCocktail.ingredients.replace(/(\!)/gm, '‣');
  currentCocktail.ingredients = currentCocktail.ingredients.replace(/(\;)/gm, '\n');
  currentCocktail.ingredients = currentCocktail.ingredients.replace(/(\?)/gm, '\n');

  return currentCocktail;
}

export default showCocktail;
