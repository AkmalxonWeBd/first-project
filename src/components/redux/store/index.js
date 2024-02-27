import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { ProductCrud } from '../slice/product';
import { OrderCrud } from '../slice/order/order';
import { SubcategoriesCrud } from '../slice/SubCategories/crud';
import { categoriesApi } from '../slice/CategoriesCrud/crud'; // Import named export

export const store = configureStore({
  reducer: {
    [ProductCrud.reducerPath]: ProductCrud.reducer,
    [OrderCrud.reducerPath]: OrderCrud.reducer,
    [SubcategoriesCrud.reducerPath]: SubcategoriesCrud.reducer,
    [categoriesApi.reducerPath]: categoriesApi.reducer, // Use named export
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      categoriesApi.middleware,
      ProductCrud.middleware,
      OrderCrud.middleware,
      SubcategoriesCrud.middleware
    ),
});

setupListeners(store.dispatch);


