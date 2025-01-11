import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "./redux/contactsOps";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import { selectLoading, selectError } from "./redux/contactsSlice";
import styles from "./App.module.css";

const App = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={styles.appContainer}>
      <h1>Phonebook</h1>
      {loading && <p className={styles.loading}>Loading...</p>}
      {error && <p className={styles.error}>Error: {error}</p>}
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
};

export default App;
