import { useState, useEffect } from "react";
import Card from "../../components/ui/Card";
import ProductList from "../../components/ui/ProductList";
export default function Home() {
  const url = "https://api.noroff.dev/api/v1/online-shop";

  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getData() {
      const res = await fetch(url);
      const json = await res.json();
      setProducts(json);
    }
    getData();
  }, []);

  // const items = products.map((product) => (
  //   <Card
  //     key={product.id}
  //     title={product.title}
  //     description={product.description}
  //   />
  // ));
  return <main>{<ProductList products={products} />}</main>;
}
