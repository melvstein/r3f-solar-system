import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { TPlanets, TPlanetsResponse } from "../../Types/planetTypes";
import axios from "axios";
import { API_URL, PLANETS_API_ENDPOINT } from "../../utils/constants";

export const fetchPlanets = createAsyncThunk(
    'planets/fetchPlanets',
    async () => {
        const response = await axios.get<TPlanetsResponse>(API_URL + PLANETS_API_ENDPOINT);
        return response.data.data.content;
    }
);

type TPlanetState = {
    planets : TPlanets;
    loading : boolean;
    error: string | null;
}

const initialState: TPlanetState = {
    planets : [],
    loading : false,
    error : null,
};

const planetSlice = createSlice({
    name: "Planets",
    initialState,
    reducers: {/* 
        setPlanets(state, action: PayloadAction<TPlanets>) {
            state.planets = action.payload;
        },
     */},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPlanets.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchPlanets.fulfilled, (state, action) => {
                state.loading = false;
                state.planets = action.payload;
            })
            .addCase(fetchPlanets.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message ?? "Something went wrong";
            });
    },
});

// export const { setPlanets } = planetSlice.actions;
export default planetSlice.reducer;