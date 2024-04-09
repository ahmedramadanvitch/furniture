import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./RTK-Query/Api/apiSlice";
const store = configureStore({
  reducer: {
    // RTK QUERY API
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
export default store;
