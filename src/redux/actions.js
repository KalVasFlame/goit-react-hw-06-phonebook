import types from "./types"
import shortid from "shortid"

const Add = ({ name, number }) => ({
  type: types.ADD,
  payload: {
    id: shortid.generate(),
    name,
    number,
  },
})
const Delete = (id) => ({
  type: types.DELETE,
  payload: id,
})

const Filter = (value) => ({
  type: types.FILTER,
  payload: value,
})

export default {
  Add,
  Delete,
  Filter,
}
