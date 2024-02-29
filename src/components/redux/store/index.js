import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { ProductCrud } from '../slice/product';
import { categoriesApi } from '../slice/CategoriesCrud/crud'; 
import { SubCategoryCrud } from '../slice/client/subcategory';
import { GetBanner } from '../slice/banner';
import { OrderCrud } from '../slice/order/order';
export const store = configureStore({
  reducer: {
    [ProductCrud.reducerPath]: ProductCrud.reducer,
    [OrderCrud.reducerPath]: OrderCrud.reducer,
    [SubCategoryCrud.reducerPath]: SubCategoryCrud.reducer,
    [categoriesApi.reducerPath]: categoriesApi.reducer,
    [GetBanner.reducerPath]: GetBanner.reducer,
    
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      categoriesApi.middleware,
      ProductCrud.middleware,
      OrderCrud.middleware,
      SubCategoryCrud.middleware,
      GetBanner.middleware
    ),
});

setupListeners(store.dispatch);