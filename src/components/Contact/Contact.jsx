// import { FaPhoenixSquadron, FaPhone, FaUser } from "react-icons/fa6";
import { AiFillAndroid, AiFillPhone } from "react-icons/ai";
import css from "../Contact/Contact.module.css";

const Contact = ({ items: { id, name, number }, onDelete }) => {
  return (
    <div className={css.item}>
      <div className={css.text}>
        <p>
          <AiFillAndroid className={css.icon} />
          <span className={css.description}>{name}</span>
        </p>
        <p>
          <AiFillPhone className={css.icon} />
          <span className={css.description}>{number}</span>
        </p>
      </div>
      <button className={css.button} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
