import ProductList from "../../components/ui/ProductList";
import useApi from "../../hooks/apiHook";
import Hero from "../../components/ui/Hero";
import { Helmet } from "react-helmet";
import SearchForm from "../../components/ui/Forms/SearchForm";
import { useEffect } from "react";
import { useContext } from "react";
import { QueryContext } from "../../context/Context";

export default function Home() {
  const url = "https://api.noroff.dev/api/v1/online-shop";
  const { data, isLoading, isError } = useApi(url);
  const { query, setQuery } = useContext(QueryContext);

  useEffect(() => {
    setQuery(data);
  }, [data]);

  if (isLoading) {
    return <h1 className="loader">Loading...</h1>;
  }
  if (isError) {
    return <h2>Error Loading Data</h2>;
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
        <SearchForm data={data} />
        <section>{<ProductList products={query} />}</section>
      </main>
    </div>
  );
}
