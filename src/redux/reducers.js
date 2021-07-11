import { createReducer } from "@reduxjs/toolkit"
import actions from "./actions"

export const contactsReducer = createReducer([], {
  [actions.Add]: (state, { payload }) => [payload, ...state],
  [actions.Delete]: (state, { payload }) => state.filter(({ id }) => id !== payload),
})

export const filterReducer = createReducer("", {
  [actions.Filter]: (state, { payload }) => payload,
})

export default {
  contactsReducer,
  filterReducer,
}
