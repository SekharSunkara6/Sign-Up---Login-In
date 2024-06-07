import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
    token: string | null;
}

const initialState: AuthState = {
    token: localStorage.getItem('jwt'),
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setToken: (state, action: PayloadAction<string>) => {
            state.token = action.payload;
            localStorage.setItem('jwt', action.payload);
        },
        clearToken: (state) => {
            state.token = null;
            localStorage.removeItem('jwt');
        },
    },
});

export const { setToken, clearToken } = authSlice.actions;
export default authSlice.reducer;
