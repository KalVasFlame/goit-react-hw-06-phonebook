import React from "react"
import { connect } from "react-redux"

import actions from "../../../redux/actions"

import styles from "./ContactItem.module.css"

const ContactItem = ({ contacts, onDeleteClick }) =>
  contacts.map(({ id, name, number }) => {
    return (
      <li key={id} className={styles.contacts_item}>
        {name}: {number}
        <button className={styles.contacts_item_button} onClick={() => onDeleteClick(id)} type="button">
          Delete
        </button>
      </li>
    )
  })

const getFilteredContacts = (allContacts, filterValue) =>
  allContacts.filter(({ name }) => name.toLowerCase().includes(filterValue.toLowerCase()))

const mapStateToProps = ({ contacts, filter }) => ({
  contacts: getFilteredContacts(contacts, filter),
})

const mapDispatchToProps = (dispatch) => ({
  onDeleteClick: (id) => dispatch(actions.Delete(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ContactItem)
