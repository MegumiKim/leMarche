import { useContext } from "react";
import { QueryContext } from "../../../../context/Context";
import SearchFormStyled from "./SearchForm.styled";

export default function SearchForm({ data }) {
  const { setQuery } = useContext(QueryContext);

  // Search Functions
  function handleChange(event) {
    const userInput = event.target.value.toLocaleLowerCase();
    const keys = ["title", "description"];

    // search filters starts working over 3 characters
    if (userInput.length === 0 || userInput.length > 2) {
      const searchResult = data.filter((item) =>
        keys.some((key) => item[key].toLowerCase().includes(userInput))
      );
      setQuery(searchResult);
    }
  }

  function handleFocus() {
    window.scrollTo({ top: 500, behavior: "smooth" });
  }

  return (
    <SearchFormStyled>
      <input
        type="text"
        onChange={handleChange}
        onClick={handleFocus}
        placeholder="Search Products"
        className="form-input"
      />
    </SearchFormStyled>
  );
}
