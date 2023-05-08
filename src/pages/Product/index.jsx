import { useParams } from "react-router-dom";
import useApi from "../../hooks/apiHook";
import ProductStyled from "./Product.styled";
import Button from "../../components/ui/Button";

export default function Product() {
  let { id } = useParams();
  const url = `https://api.noroff.dev/api/v1/online-shop/${id}`;
  const { data, isLoading, isError } = useApi(url);

  function addToCart() {
    console.log("item added");
  }
  if (isLoading || !data) {
    return <div>Loading Data</div>;
  }
  if (isError) {
    return <div>Error</div>;
  }
  return (
    <ProductStyled>
      <div>
        <img src={data.imageUrl}></img>
      </div>
      <div className="product--descriptions">
        <h1>{data.title}</h1>
        <p>{data.description}</p>
        <p className="price">NOK {data.price}</p>
        <Button handleClick={addToCart} text="Add To Cart"></Button>
      </div>
    </ProductStyled>
  );
}
