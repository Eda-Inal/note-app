import { createSlice } from "@reduxjs/toolkit";
let nextNoteId = 0;

export const notesSlice = createSlice({
    name: 'notes',
    initialState: {
        items: []
    },
    reducers: {
        addText: (state, action) => {
            state.items.push({
                id: String(nextNoteId + 1),
                text: action.payload.text,
                background: action.payload.background,
            });
            nextNoteId += 1;
        },
       
    },
});
export const {addText,addBackground} = notesSlice.actions;
export default notesSlice.reducer;