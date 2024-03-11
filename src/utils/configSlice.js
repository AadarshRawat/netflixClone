import { createSlice } from "@reduxjs/toolkit"

const configSlice = createSlice({
    name:'config',
    initialState:{
        lang:'en'
    },

    reducers:{
        addPrefferedLanguage:(state,action) => {

            state.lang=action.payload
            console.log('state--->',state)

        }
    }
}
)

export const { addPrefferedLanguage } = configSlice.actions;
export default configSlice.reducer;
