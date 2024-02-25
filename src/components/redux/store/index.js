// import { configureStore } from '@reduxjs/toolkit'
// import { setupListeners } from '@reduxjs/toolkit/query'
// import { ProductCrud } from '../slice/product'
// import { categoriesApi, useCreateCategoryMutation } from '../slice/CategoriesCrud/crud'



// export const store = configureStore({
//   reducer: {
//     [ProductCrud.reducerPath]: ProductCrud.reducer,
//     [useCreateCategoryMutation.reducerPath]: useCreateCategoryMutation.reducer,
//     [categoriesApi.reducerPath]: categoriesApi.reducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware()
//     .concat(ProductCrud.middleware,
//       useCreateCategoryMutation.middleware,
//       ),
// })
// setupListeners(store.dispatch)

import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { categoriesApi } from '../slice/CategoriesCrud/crud';
import { ProductCrud } from '../slice/product';
import { OrderCrud } from '../slice/order/order';
import { SubcategoriesCrud } from '../slice/SubCategories/crud';
import { SubCategoryCrud } from '../slice/client/subcategory';
import { GetBanner } from '../slice/banner';

export const store = configureStore({
  reducer: {
    [GetBanner.reducerPath] :GetBanner.reducer,
    [categoriesApi.reducerPath]: categoriesApi.reducer,
    [ProductCrud.reducerPath] :ProductCrud.reducer,
    [OrderCrud.reducerPath] :OrderCrud.reducer,
    [SubcategoriesCrud.reducerPath] :SubcategoriesCrud.reducer,
    [SubCategoryCrud.reducerPath] :SubCategoryCrud.reducer,

    
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      categoriesApi.middleware,
      ProductCrud.middleware,
      OrderCrud.middleware,
      SubcategoriesCrud.middleware,
      SubCategoryCrud.middleware,
      GetBanner.middleware,
      ), 
  

});

setupListeners(store.dispatch);
