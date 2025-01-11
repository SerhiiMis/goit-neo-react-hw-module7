import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const number = form.number.value;

    dispatch(addContact({ name, number })); // Додаємо новий контакт
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      <label className={styles.label}>
        Name:
        <input
          type="text"
          name="name"
          placeholder="Name"
          required
          className={styles.input}
        />
      </label>
      <label className={styles.label}>
        Number:
        <input
          type="text"
          name="number"
          placeholder="Number"
          required
          className={styles.input}
        />
      </label>
      <button type="submit" className={styles.submitButton}>
        Add Contact
      </button>
    </form>
  );
};

export default ContactForm;
