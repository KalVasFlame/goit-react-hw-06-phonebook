import React from "react"
import { connect, useSelector } from "react-redux"

import actions from "../../../redux/actions"

import styles from "./ContactItem.module.css"

const ContactItem = ({ onDeleteClick }) => {
  const contacts = useSelector(({ contacts }) => contacts)
  const filter = useSelector(({ filter }) => filter)
  const filteredContacts = getFilteredContacts(contacts, filter)
  return filteredContacts.map(({ id, name, number }) => {
    return (
      <li key={id} className={styles.contacts_item}>
        {name}: {number}
        <button className={styles.contacts_item_button} onClick={() => onDeleteClick(id)} type="button">
          Delete
        </button>
      </li>
    )
  })
}
const getFilteredContacts = (allContacts, filterValue) =>
  allContacts.filter(({ name }) => name.toLowerCase().includes(filterValue.toLowerCase()))

const mapDispatchToProps = (dispatch) => ({
  onDeleteClick: (id) => dispatch(actions.Delete(id)),
})

export default connect(null, mapDispatchToProps)(ContactItem)
