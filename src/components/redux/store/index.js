import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { ProductCrud } from '../slice/product';
import { OrderCrud } from '../slice/order/order';
import { SubcategoriesCrud } from '../slice/SubCategories/crud';
import { SubCategoryCrud } from '../slice/client/subcategory';
import { CategoryCrud } from '../slice/CategoriesCrud/crud';
import GetBanner from '../../admin/banner/Getbanner'; // Correct import statement assuming Getbanner is exported as default

export const store = configureStore({
  reducer: {
    [ProductCrud.reducerPath]: ProductCrud.reducer,
    [OrderCrud.reducerPath]: OrderCrud.reducer,
    [SubcategoriesCrud.reducerPath]: SubcategoriesCrud.reducer,
    [CategoryCrud.reducerPath]: CategoryCrud.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      CategoryCrud.middleware,
      ProductCrud.middleware,
      OrderCrud.middleware,
      SubcategoriesCrud.middleware,
      SubCategoryCrud.middleware,
      GetBanner.middleware, // Use GetBanner instead of Getbanner
    ),
});

setupListeners(store.dispatch);
