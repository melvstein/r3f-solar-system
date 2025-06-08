import { configureStore } from "@reduxjs/toolkit";
import planetReducer from '../features/planet/planetSlice';

export const store = configureStore({
    reducer: {
        planets: planetReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;