import { Link, useParams } from "react-router-dom";
import useApi from "../../hooks/apiHook";
import ProductStyled from "./Product.styled";
import Button from "../../components/ui/Button";
import { useContext, useState } from "react";
import { CartContext } from "../../context/Context";
import Modal from "react-modal";
Modal.setAppElement("#root");

export default function Product() {
  let { id } = useParams();
  const url = `https://api.noroff.dev/api/v1/online-shop/${id}`;
  const { data, isLoading, isError } = useApi(url);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const GlobalState = useContext(CartContext);
  const dispatch = GlobalState.dispatch;

  function addToCart() {
    dispatch({ type: "Add", payload: data });
    setIsModalOpen(true);
  }

  if (isLoading || !data) {
    return <div>Loading Data</div>;
  }
  if (isError) {
    return <div>Error</div>;
  }

  data.quantity = 1;
  return (
    <ProductStyled>
      <Modal isOpen={isModalOpen}>
        <h2>{data.title} is added to your cart</h2>
        <Link to="/">
          <Button text="Back" onClick={() => setIsModalOpen(false)}></Button>
        </Link>
      </Modal>
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
