import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"

import { persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist"
import storage from "redux-persist/lib/storage"
import { contactsReducer, filterReducer } from "./reducers"

const persistConfig = {
  key: "contacts",
  storage,
  blacklist: ["filter"],
}
const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
]
const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
})
const store = configureStore({
  reducer: persistReducer(persistConfig, rootReducer),
  middleware,
})

const persistor = persistStore(store)

export default { store, persistor }
