import css from "../SearchBox/SearchBox.module.css";
import { useId } from "react";

const SearchBox = ({ value, onChange }) => {
  const filterId = useId();

  return (
    <div className={css.filter}>
      <label htmlFor={filterId}>Find contacts by name</label>
      <input id={filterId} type="text" value={value} onChange={onChange} />
    </div>
  );
};

export default SearchBox;
