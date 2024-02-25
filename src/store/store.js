import { configureStore } from '@reduxjs/toolkit'
import rootReducer from "../ReduxSlices/TodoSlices"
export const store = configureStore({
    reducer: rootReducer,

})
export default store