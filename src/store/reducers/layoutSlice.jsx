import { createSlice } from '@reduxjs/toolkit';

export const layoutSlice = createSlice({
    name: 'layout',
    initialState: { isSmallScreen: false, isLargeScreen: false },
    reducers: {
        setScreenSize(state, action) {
            const { isSmallScreen, isLargeScreen } = action.payload;
            state.isSmallScreen = isSmallScreen;
            state.isLargeScreen = isLargeScreen;
        },
    },
});


export const {setScreenSize} = layoutSlice.actions;
export default layoutSlice.reducer