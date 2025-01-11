import { useDispatch, useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contactsSlice"; // Використовуємо мемоізований селектор
import { deleteContact } from "../../redux/contactsOps";
import styles from "./ContactList.module.css";

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);

  const handleDelete = (id) => {
    dispatch(deleteContact(id)); // Видалення контакту
  };

  return (
    <ul className={styles.contactList}>
      {contacts.map(({ id, name, number }) => (
        <li className={styles.contactItem} key={id}>
          <div className={styles.contactDetails}>
            <div className={styles.contactIcon}>{name}</div>
            <div className={styles.contactIcon}>{number}</div>
          </div>
          <button
            className={styles.deleteButton}
            onClick={() => handleDelete(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
