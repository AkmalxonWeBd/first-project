import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { ProductCrud } from '../slice/product';
import { OrderCrud } from '../slice/order/order';
import { categoriesApi } from '../slice/CategoriesCrud/crud';
import { SubCategoryCrud } from '../slice/client/subcategory';
import { BasketCrud } from '../slice/client/basket';
import BasketCheckout from '../../client/basket/chekout';
import { DeliveriesCrud } from '../slice/client/deliveries';
import { GetBanner } from '../slice/banner';
import { DiscountCrud } from '../slice/discount';
import { NoteCrud } from '../slice/node/node';
export const store = configureStore({
  reducer: {
    [ProductCrud.reducerPath]: ProductCrud.reducer,
    [OrderCrud.reducerPath]: OrderCrud.reducer,
    [SubCategoryCrud.reducerPath]: SubCategoryCrud.reducer,
    [categoriesApi.reducerPath]: categoriesApi.reducer,
    [BasketCrud.reducerPath]: BasketCrud.reducer,
    [DeliveriesCrud.reducerPath]: DeliveriesCrud.reducer,
    [GetBanner.reducerPath]: GetBanner.reducer,
    [DiscountCrud.reducerPath]: DiscountCrud.reducer,
    [NoteCrud.reducerPath]: NoteCrud.reducer,
    
    
    
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      categoriesApi.middleware,
      ProductCrud.middleware,
      OrderCrud.middleware,
      SubCategoryCrud.middleware,
      DeliveriesCrud.middleware,
      GetBanner.middleware,
      DiscountCrud.middleware,
      NoteCrud.middleware,
    ),
});

setupListeners(store.dispatch);