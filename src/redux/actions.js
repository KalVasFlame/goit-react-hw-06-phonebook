import shortid from "shortid"
import { createAction } from "@reduxjs/toolkit"

const Add = createAction("contacts/Add", ({ name, number }) => ({
  payload: {
    id: shortid.generate(),
    name,
    number,
  },
}))

const Delete = createAction("contacts/Delete")

const Filter = createAction("contacts/Filter")

export default {
  Add,
  Delete,
  Filter,
}
