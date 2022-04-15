import { configureStore } from "@reduxjs/toolkit";
// import api from "./middleware/api";
// import logger from "./middleware/logger";
// import toastify from "./middleware/toastify";
// import reducer from "./reducer";
import { bugsApi } from "services/bugsapi";
import { userApi } from "services/usersapi";

// const reducers = {
//   [USER_API_REDUCER_KEY]: userApi.reducer,
//   [BUGS_API_REDUCER_KEY]: bugsApi.reducer,
// };

// const rootReducer = combineReducers(reducers);

function configStore() {
  return configureStore({
    reducer: {
      // Add the generated reducer as a specific top-level slice
      [userApi.reducerPath]: userApi.reducer,
      [bugsApi.reducerPath]: bugsApi.reducer,
    },

    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(userApi.middleware, bugsApi.middleware),
  });
}

export default configStore;
