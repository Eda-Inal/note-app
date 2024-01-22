import { createSlice } from "@reduxjs/toolkit";
let nextNoteId = 1;

export const notesSlice = createSlice({
    name: 'notes',
    initialState: {
        items: [{
            id:"0",
            text:"Study redux!",
            background:"pink"
        }],
        originalItems: [], 
        edit :{
            id: "",
            text:"",
            background:""
        },
     
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
        editedItems: (state, action) => {
            const { id, text, background } = action.payload;
          
            state.items.map((item) => {
              if (item.id === id) {
                state.edit.background = item.background;
                state.edit.id = item.id;
                state.edit.text = item.text;
                
                state.items = state.items.filter(item => item.id !== id);
            state.originalItems = state.originalItems.filter(item => item.id !== id);
          
                // Sadece text değerini güncelle
                state.edit.text = text;
              }
            });
          }
          
       
        


    },
});
export const { addText, deleteItems, showItems, filteredItems,editedItems } = notesSlice.actions;
export default notesSlice.reducer;