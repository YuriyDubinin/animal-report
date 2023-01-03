import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    animalId: 0,
    data: {}
}

export const animalSlice = createSlice({
    name: 'animal',
    initialState,
    reducers: {
        setAnimalId: (state, action) => {
            state.animalId = action.payload;
        }
    }
});

export const { setAnimalId } = animalSlice.actions;

export const selectAnimalId = (state) => state.animal.animalId;

export default animalSlice.reducer;