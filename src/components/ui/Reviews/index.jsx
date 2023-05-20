import Rating from "./Rating";
import ReviewsStyled from "./Reviews.styled";

export default function Review({ review }) {
  return (
    <ReviewsStyled key={review.id}>
      <div className="rating-wrapper">
        <h4>{review.username}</h4>
        <Rating rating={review.rating} />
      </div>
      <p>{review.description}</p>
    </ReviewsStyled>
  );
}
