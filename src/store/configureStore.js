import { configureStore } from "@reduxjs/toolkit";
// import api from "./middleware/api";
// import logger from "./middleware/logger";
// import toastify from "./middleware/toastify";
// import reducer from "./reducer";
import { bugsApi } from "services/bugsapi";

function configStore() {
  return configureStore({
    reducer: {
      // Add the generated reducer as a specific top-level slice
      [bugsApi.reducerPath]: bugsApi.reducer,
    },
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(bugsApi.middleware),
  });
}

export default configStore;
