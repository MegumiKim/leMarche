import Card from "../Card";
import ProductListStyled from "./ProductList.styled";

export default function ProductList(props) {
  return (
    <ProductListStyled>
      {props.products.map((product) => {
        console.log(product);
        return (
          <Card
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            img={product.imageUrl}
          />
        );
      })}
    </ProductListStyled>
  );
}
