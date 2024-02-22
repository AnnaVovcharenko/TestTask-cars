import { createSlice } from "@reduxjs/toolkit";
import { fetchCars } from "./carsOperations";

const initialState = {
    items: [],
    favorites: [],
    isLoading: false,
    error: null
}
const carAdvertSlice = createSlice({
    name: 'adverts',
    initialState,
    reducers: {
        addFavorite: {
            reducer(state, action) {
                state.favorites.push(action.payload);
            },
        },
        deleteFavorete: {
            reducer(state, action) {
                state.favorites = state.favorites.filter(
                    (item) => item !== action.payload
                );
            },
        },
    },


    extraReducers: builder => {
        builder
            .addCase(fetchCars.pending, state => {
                state.isLoading = true;
            })
            .addCase(fetchCars.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            })
            .addCase(fetchCars.fulfilled, (state, action) => {
                state.items = action.payload;
                state.isLoading = false;
            })

    }

});


export const {addFavorite, deleteFavorete} =  carAdvertSlice.actions;
export const carRentReducer = carAdvertSlice.reducer;
