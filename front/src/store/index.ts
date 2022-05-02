import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from './reducers/UserSlice'
import { todoAPI } from 'services/TodoService';
import { tagAPI } from "services/TagsService";
import { selectedTagReducer } from "./reducers/selectedTag.slice";

const rootReducer = combineReducers({
    userReducer,
    selectedTag: selectedTagReducer,
    [tagAPI.reducerPath]: tagAPI.reducer,
    [todoAPI.reducerPath]: todoAPI.reducer
})

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        // getDefaultMiddleware().concat(tagAPI.middleware)
        getDefaultMiddleware().concat(todoAPI.middleware)

})

export const setupStore = () => {
    return store
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
export type TypeRootState = ReturnType<typeof store.getState>