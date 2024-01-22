import { createSlice } from "@reduxjs/toolkit";
let nextNoteId = 0;

export const notesSlice = createSlice({
    name: 'notes',
    initialState: {
        items: [],
        originalItems: [], 
     
    },
    reducers: {
        addText: (state, action) => {
            state.items.push({
                id: String(nextNoteId + 1),
                text: action.payload.text,
                background: action.payload.background,
            });
            state.originalItems.push({
                id: String(nextNoteId + 1),
                text: action.payload.text,
                background: action.payload.background,
            });
            
            nextNoteId += 1;
        },
        deleteItems: (state, action) => {
            const { id } = action.payload;

            state.items = state.items.filter(item => item.id !== id);
            state.originalItems = state.originalItems.filter(item => item.id !== id);
        },
        filteredItems: (state, action) => {
            const letter = action.payload.toLowerCase();
            
            if (!letter) {
                state.items = state.originalItems;
                return;
            }
        
            state.items = state.items.filter(item => {
                if (typeof item.text !== 'string') {
                    return false;
                }
                return item.text.toLowerCase().includes(letter);
            });
        },
       
        


    },
});
export const { addText, deleteItems, showItems, filteredItems } = notesSlice.actions;
export default notesSlice.reducer;