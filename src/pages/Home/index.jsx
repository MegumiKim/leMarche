import { useState, useEffect } from "react";
import Card from "../../components/ui/Card";
import ProductList from "../../components/ui/ProductList";

export default function Home() {
  const url = "https://api.noroff.dev/api/v1/online-shop";

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        setIsError(false);
        setIsLoading(true);
        const res = await fetch(url);
        const json = await res.json();

        if (res.ok) {
          setProducts(json);
          setIsLoading(false);
        } else {
          throw new Error(json);
        }
      } catch (e) {
        setIsLoading(false);
        setIsError(true);
        console.log(isError);
      }
    }
    getData();
  }, []);

  if (isLoading) {
    return <div>Loading</div>;
  }

  if (isError) {
    return <div>Error Loading Data</div>;
  }

  return <main>{<ProductList products={products} />}</main>;

  // return (
  //   <div>
  //     Success
  //     {products.map((product) => {
  //       return <div key={product.id}>{product.title}</div>;
  //     })}
  //   </div>
  // );
}
