import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';


export type TUser = {
    userId: string;
    email: string;
    name: string;
};

type TAuthState = {
    user: null | TUser;
};

const initialState: TAuthState = {
    user: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<TAuthState>) => {
            const { user } = action.payload;
            state.user = user;
        },
        logout: (state) => {
            state.user = null;
        },
    },
});

export const { setUser, logout } = authSlice.actions;
export const selectCurrentUser = (state: RootState) => state.auth.user;
export default authSlice.reducer;

