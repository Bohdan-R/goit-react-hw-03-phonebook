import React from 'react';
import PropTypes from 'prop-types';
import './ContactList.scss';

const ContactList = ({ contacts, deleteContact }) => (
  <div className="contact">
    <ul className="contact__list">
          {contacts.map(({id, name, number}) => (
            <li
              key={id}
              className="contact__item"
            >{name}&nbsp;{number}
              <button
                type="button"
                className="contact__btn"
                onClick={()=>deleteContact(id)}
              >Удалить</button>
            </li>
          ))}
    </ul>
  </div>  
)

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  deleteContact: PropTypes.func.isRequired,
}

export default ContactList;