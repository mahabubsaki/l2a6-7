import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';



// Define a type for the slice state
interface ThemeState {
    theme: 'light' | 'dark';
}

// Define the initial state using that type
const initialState: ThemeState = {
    theme: 'light',
};

export const counterSlice = createSlice({
    name: 'theme',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        setTheme: (state, action: PayloadAction<'light' | 'dark'>) => {
            state.theme = action.payload;
        }
    },
});

export const { setTheme } = counterSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectTheme = (state: RootState) => state.theme.theme;

export default counterSlice.reducer;