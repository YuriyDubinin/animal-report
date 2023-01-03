import { configureStore } from "@reduxjs/toolkit";

import animalSlice from "../components/AnimalsListItem/animalSlice";

export const store = configureStore({
    reducer: {
      animal: animalSlice,
    },
    devTools: process.env.NODE_ENV !== "production"
  });