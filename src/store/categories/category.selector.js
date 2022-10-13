import { createSelector } from "reselect";

const selectCategoryReducer = (state) => state.categories;

//if selectCategoriesReducer keep same value don't re execute
export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.categories
);

//if selectCategories keep same values this will not re-execute
export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) =>
    categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {})
);

export const selectCategoriesIsLoading = createSelector(
  [selectCategoriesMap],
  (categoriesSlice) => categoriesSlice.isLoading
);
