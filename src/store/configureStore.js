import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import api from "./middleware/api";
import logger from "./middleware/logger";
import toastify from "./middleware/toastify";
import reducer from "./reducer";
import { bugsApi } from "services/bugsapi";

function configStore() {
  return configureStore({
    reducer: {
      [bugsApi.reducerPath]: bugsApi.reducer,
    },
    middleware: [
      ...getDefaultMiddleware(),
      logger({ destination: "console" }),
      // toastify,
      // api,
    ],
  });
}

export default configStore;
