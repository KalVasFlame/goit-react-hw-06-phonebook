import { combineReducers } from "redux"
import { configureStore } from "@reduxjs/toolkit"

import { contactsReducer, filterReducer } from "./reducers"

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
})

const store = configureStore({
  reducer: rootReducer,
})
export default store
