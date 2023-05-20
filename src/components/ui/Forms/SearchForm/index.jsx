import { useEffect, useState } from "react";

export default function SearchForm() {
  const [searchInput, setSearchInput] = useState("");

  function handleChange(event) {
    const { value } = event.target;
    setSearchInput(value);
    console.log(searchInput);
  }

  return (
    <div>
      <input
        type="text"
        onChange={handleChange}
        placeholder="Search"
        className="form-input"
      />
    </div>
  );
}
