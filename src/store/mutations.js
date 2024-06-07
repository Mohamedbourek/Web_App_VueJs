export default {
  setSearchedMeals(state, meals) {
    state.searchedMeals = meals || [];
  },
  setMealsByLetter(state, meals) {
    state.mealsByLetter = meals || [];
  },
  setMealsByIngredients(state, meals) {
    state.mealsByIngredient = meals || [];
  },
  setIngredient(state, ingredient) {
    state.ingredient = ingredient;
  },
};