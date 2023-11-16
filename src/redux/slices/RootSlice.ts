import { createSlice } from '@reduxjs/toolkit'

const rootSlice = createSlice({
    name: "root",
    initialState: {
        name: "Name",
        team_name: "Favorite Team",
    },
    reducers: {
        chooseName: (state, action) => { state.name = action.payload},
        chooseTeam: (state, action) => { state.team_name = action.payload},
        
    }
})

export const reducer = rootSlice.reducer;
export const { chooseName, chooseTeam} = rootSlice.actions