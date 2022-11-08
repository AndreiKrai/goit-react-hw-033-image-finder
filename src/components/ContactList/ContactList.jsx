import React from 'react';
import PropTypes from 'prop-types';

export default function ContactList({ contacts, onBtnClick }) {
  // console.log(contacts);

  // const onDeleteBtnClick = ()=>{onBtnClick(contact.name)}
  return contacts.map(contact => {
    const style = { display: 'flex', alignItems: 'baseline' };
    return (
      <div key={contact.id} style={style}>
        <p style={{ marginRight: '25px' }}>
          {contact.name}:{contact.number}
        </p>
        <button
          name={contact.name}
          onClick={() => onBtnClick(contact.id)}
          type="button"
          className="btn btn-primary"
        >
          Delete
        </button>
      </div>
    );
  });
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onBtnClick: PropTypes.func.isRequired,
};
