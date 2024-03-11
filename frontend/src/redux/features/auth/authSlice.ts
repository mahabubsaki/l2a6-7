import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';


export type TUser = {
    _id: string;
    email: string;
    name: string;
    photoURL: string;
    token: string;
};

type TAuthState = {
    user: null | TUser;
    token: null | string;
};

const initialState: TAuthState = {
    user: null,
    token: null
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<TAuthState>) => {
            const { user, token } = action.payload;
            state.token = token;
            state.user = user;
        },
        logout: (state) => {
            state.user = null;
            state.token = null;
        },
    },
});

export const { setUser, logout } = authSlice.actions;
export const selectCurrentUser = (state: RootState) => state.auth.user;
export default authSlice.reducer;

