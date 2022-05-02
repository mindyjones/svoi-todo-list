import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITag } from "models";
import { fetchTags } from "./ActionCreators";

interface TagState {
    tags: ITag[];
    isLoading: boolean;
    error: string;
}

const initialState: TagState = {
    tags: [],
    isLoading: false,
    error: ''
}

export const tagsSlice = createSlice({
    name: 'tags',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchTags.fulfilled.type]: (state, action: PayloadAction<ITag[]>) => {
            state.isLoading = false;
            state.error = '';
            state.tags = action.payload;
        },
        [fetchTags.pending.type]: (state) => {
            state.isLoading = true;
        },
        [fetchTags.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload
        }
    }
})

export default tagsSlice.reducer