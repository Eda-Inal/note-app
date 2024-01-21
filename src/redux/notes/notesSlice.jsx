import { createSlice } from "@reduxjs/toolkit";
let nextNoteId = 0;

export const notesSlice = createSlice({
    name: 'notes',
    initialState: {
        items: []
    },
    reducers: {
        addText : (state,action) =>{
            state.items.push({
                id : String(nextNoteId+1),
                text: action.payload
            })
        }
    },
});
export const {addText} = notesSlice.actions;
export default notesSlice.reducer;