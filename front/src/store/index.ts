import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from './reducers/UserSlice'
import { todoAPI } from 'services/TodoService';
import { tagAPI } from "services/TagsService";

const rootReducer = combineReducers({
    userReducer,
    [tagAPI.reducerPath]: tagAPI.reducer,
    [todoAPI.reducerPath]: todoAPI.reducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            // getDefaultMiddleware().concat(tagAPI.middleware)
            getDefaultMiddleware().concat(todoAPI.middleware)

    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']