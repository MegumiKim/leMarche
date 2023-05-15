import Card from "../Card";
import ProductListStyled from "./ProductList.styled";

export default function ProductList(props) {
  return (
    <ProductListStyled>
      {props.products.map((product) => {
        return (
          <Card
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            img={product.imageUrl}
            discountedPrice={product.discountedPrice}
          />
        );
      })}
    </ProductListStyled>
  );
}
