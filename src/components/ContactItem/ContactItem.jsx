import PropTypes from 'prop-types';
import css from "../ContactItem/ContactItem.module.css"

const ContactItem = ({ name, number, id, deleteContacts }) => {
  return (
    <li className={css.contact__item}>
      <p className={css.text__name}>{name}</p>
      <p className={css.text__number}>{number}</p>
      <button className={css.button} type="button" onClick={() => deleteContacts(id)}>
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  deleteContacts: PropTypes.func.isRequired,
};

export default ContactItem;
