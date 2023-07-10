import { configureStore } from "@reduxjs/toolkit";

import animalSlice from "../slices/animalSlice";

export const store = configureStore({
    reducer: {
      animal: animalSlice,
    },
    devTools: process.env.NODE_ENV !== "production"
  });