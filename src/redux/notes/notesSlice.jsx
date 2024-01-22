import { createSlice } from "@reduxjs/toolkit";
let nextNoteId = 0;

export const notesSlice = createSlice({
    name: 'notes',
    initialState: {
        items: [],
        filteredItems: [],
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
        deleteItems: (state, action) => {
            const { id } = action.payload;

            state.items = state.items.filter(item => item.id !== id);
        }


    },
});
export const { addText, deleteItems, showItems, filteredItems } = notesSlice.actions;
export default notesSlice.reducer;