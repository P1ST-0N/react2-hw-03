import Contact from "../Contact/Contact";
import css from "../Contact/Contact.module.css";

const ContactList = ({ items, onDelete }) => {
  return (
    <ul className={css.contact_list}>
      {items.map((item) => {
        return (
          <li key={item.id}>
            <Contact items={item} onDelete={onDelete}></Contact>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
