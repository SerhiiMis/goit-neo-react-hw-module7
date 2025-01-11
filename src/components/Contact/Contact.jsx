import styles from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <li className={styles.contactItem}>
      <div className={styles.contactDetails}>
        <div className={styles.contactIcon}>
          <span>👤</span> {name}
        </div>
        <div className={styles.contactIcon}>
          <span>📞</span> {number}
        </div>
      </div>
      <button
        className={styles.deleteButton}
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
