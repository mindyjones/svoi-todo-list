import { applyMiddleware, combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from './reducers/UserSlice'
import todoReducer from './reducers/TodoSlice'

const rootReducer = combineReducers({
    userReducer,
    todoReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']

// export const store = configureStore(rootReducer, applyMiddleware(thunk))


// export type RootState = ReturnType<typeof store.getState>
// export type AppDispatch = typeof store.dispatch