import ProductList from "../../components/ui/ProductList";
import useApi from "../../hooks/apiHook";
import Hero from "../../components/ui/Hero";

// import { CartState } from "../../context/Context";

export default function Home() {
  const url = "https://api.noroff.dev/api/v1/online-shop";
  const { data, isLoading, isError } = useApi(url);

  if (isLoading) {
    return <div>Loading</div>;
  }

  if (isError) {
    return <div>Error Loading Data</div>;
  }

  return (
    <main>
      <section>
        <Hero />
      </section>
      <section>{<ProductList products={data} />}</section>
    </main>
  );
}
