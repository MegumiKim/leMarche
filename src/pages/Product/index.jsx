import { Link, useParams } from "react-router-dom";
import useApi from "../../hooks/apiHook";
import ProductStyled from "./Product.styled";
import { useContext, useState } from "react";
import { CartContext } from "../../context/Context";
import Modal from "react-modal";
import Price from "../../components/ui/Price";
import BaseButton, {
  SecondaryBtn,
} from "../../components/ui/Button/Button.styled";

Modal.setAppElement("#root");

export default function Product() {
  const GlobalState = useContext(CartContext);
  const dispatch = GlobalState.dispatch;

  let { id } = useParams();
  const url = `https://api.noroff.dev/api/v1/online-shop/${id}`;
  const { data, isLoading, isError } = useApi(url);
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (isLoading || !data) {
    return <div>Loading Data</div>;
  }
  if (isError) {
    return <div>Error</div>;
  }

  data.quantity = 1;

  function addToCart() {
    dispatch({ type: "Add", payload: data });
    setIsModalOpen(true);
  }

  return (
    <ProductStyled>
      <Modal isOpen={isModalOpen}>
        <h2>{data.title} is added to your cart</h2>
        <div className="btn-wrapper">
          <Link to="/">
            <BaseButton onClick={() => setIsModalOpen(false)}>
              Back to home
            </BaseButton>
          </Link>
          <Link to="/Cart">
            <SecondaryBtn
              className="btn-secondary"
              text="View Cart"
              onClick={() => setIsModalOpen(false)}
            >
              View Cart
            </SecondaryBtn>
          </Link>
        </div>
      </Modal>
      <div>
        <img src={data.imageUrl}></img>
      </div>
      <div className="product--descriptions">
        <h1>{data.title}</h1>
        <Price price={data.price} discountedPrice={data.discountedPrice} />
        <p>{data.description}</p>
        <BaseButton onClick={addToCart}>Add To Cart</BaseButton>
      </div>
    </ProductStyled>
  );
}
