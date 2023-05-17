import { Link, useParams } from "react-router-dom";
import useApi from "../../hooks/apiHook";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/Context";
import Modal from "react-modal";
import Price from "../../components/ui/Price";
import BaseButton, {
  MiniBtn,
  SecondaryBtn,
} from "../../components/ui/Button/Button.styled";
import { useLocalStorage } from "../../hooks/localStorageHook";
import Review from "../../components/ui/Reviews";
import ProductStyled from "./Product.styled";
Modal.setAppElement("#root");

export default function Product() {
  const GlobalState = useContext(CartContext);
  const dispatch = GlobalState.dispatch;

  let { id } = useParams();
  const url = `https://api.noroff.dev/api/v1/online-shop/${id}`;
  const { data, isLoading, isError } = useApi(url);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);

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
      <Modal isOpen={isSecondModalOpen}>
        <div>
          <img src={data.imageUrl}></img>
        </div>
        <MiniBtn onClick={() => setIsSecondModalOpen(false)}>X</MiniBtn>
      </Modal>
      <section className="flex-container-main">
        <div className="img-wrapper" onClick={() => setIsSecondModalOpen(true)}>
          <img src={data.imageUrl}></img>
        </div>
        <div className="product--descriptions">
          <h1>{data.title}</h1>
          <Price price={data.price} discountedPrice={data.discountedPrice} />
          {data.rating > 0 && (
            <div className="rating">
              <p>Rating: {data.rating}</p>
              <span>({data.reviews.length} reviews)</span>
            </div>
          )}
          <div className="tags">
            {data.tags &&
              data.tags.map((tag, index) => {
                return <p id={index}># {tag}</p>;
              })}
          </div>
          <p>{data.description}</p>
          <BaseButton onClick={addToCart}>Add To Cart</BaseButton>
        </div>
      </section>
      <section className="reviews">
        {data.reviews && <h2>User Review</h2>}
        {data.reviews &&
          data.reviews.map((review) => {
            return <Review review={review} key={review.id} />;
          })}
      </section>
    </ProductStyled>
  );
}
