import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITag } from "../../types/types";

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
    reducers: {
        tagsFetching(state) {
            state.isLoading = true;
        },
        tagsFetchingSuccess(state, action: PayloadAction<ITag[]>) {
            state.isLoading = false;
            state.error = '';
            state.tags = action.payload;
        },
        tagsFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload
        }
    }
})

export default tagsSlice.reducer