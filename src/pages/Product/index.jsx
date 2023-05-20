import { Link, useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../../context/Context";
import { Helmet } from "react-helmet";
import useApi from "../../hooks/apiHook";
import Modal from "react-modal";
import Price from "../../components/ui/Price";
import BaseButton, {
  MiniBtn,
  SecondaryBtn,
} from "../../components/ui/Button/Button.styled";
import Review from "../../components/ui/Reviews";
import ProductStyled from "./Product.styled";
import ModalStyles, { secondModalStyle } from "../../styles/ModalStyles";
import Rating from "../../components/ui/Reviews/Rating";
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
    <>
      <Helmet>
        <title>LeMarche |Product</title>
      </Helmet>
      <ProductStyled>
        <Modal isOpen={isModalOpen} style={ModalStyles}>
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
        <Modal isOpen={isSecondModalOpen} style={secondModalStyle}>
          <div>
            <img src={data.imageUrl}></img>
          </div>
          <MiniBtn onClick={() => setIsSecondModalOpen(false)}>X</MiniBtn>
        </Modal>
        <div className="container">
          <section className="flex-container-main">
            <div
              className="img-wrapper"
              onClick={() => setIsSecondModalOpen(true)}
            >
              <img src={data.imageUrl}></img>
            </div>
            <div className="product--descriptions">
              <h1>{data.title}</h1>
              <Price
                price={data.price}
                discountedPrice={data.discountedPrice}
                className="product-price"
              />
              {data.rating > 0 && (
                <div className="rating">
                  <Rating rating={data.rating} />
                  <span>({data.reviews.length} reviews)</span>
                </div>
              )}
              <div className="tags">
                {data.tags &&
                  data.tags.map((tag, index) => {
                    return <p key={index}># {tag}</p>;
                  })}
              </div>
              <p>{data.description}</p>
              <BaseButton onClick={addToCart}>Add To Cart</BaseButton>
            </div>
          </section>
          <section className="reviews">
            {data.reviews && data.reviews.length > 0 && <h2>User Review</h2>}
            {data.reviews &&
              data.reviews.map((review) => {
                return <Review review={review} key={review.id} />;
              })}
          </section>
        </div>
      </ProductStyled>
    </>
  );
}
