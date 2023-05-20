import ProductList from "../../components/ui/ProductList";
import useApi from "../../hooks/apiHook";
import Hero from "../../components/ui/Hero";
import { Helmet } from "react-helmet";
import SearchForm from "../../components/ui/Forms/SearchForm";
import { useEffect, useState } from "react";

export default function Home() {
  const url = "https://api.noroff.dev/api/v1/online-shop";
  const { data, isLoading, isError } = useApi(url);
  const [query, setQuery] = useState([]);

  useEffect(() => setQuery(data), [data]);

  if (isLoading) {
    return <h1 className="loader">Loading...</h1>;
  }

  if (isError) {
    return <h2>Error Loading Data</h2>;
  }

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

  return (
    <div>
      <Helmet>
        <title>LeMarche | Home</title>
        <meta
          name="description"
          content="Le Marche offers the coolest items on discount and Free Shipping."
        />
      </Helmet>

      <section>
        <Hero />
      </section>
      <main>
        <section>
          <input
            type="text"
            onChange={(event) => handleChange(event)}
            placeholder="Search"
            className="form-input"
          />
          {<ProductList products={query} />}
        </section>
      </main>
    </div>
  );
}
