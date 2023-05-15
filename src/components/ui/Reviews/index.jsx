import ReviewsStyled from "./Reviews.styled";

export default function Review(props) {
  const review = props.review;

  return (
    <ReviewsStyled key={review.id}>
      <div className="rating-wrapper">
        <h4>{review.username}</h4>
        <p>Rating: {review.rating}</p>
      </div>
      <p>{review.description}</p>
    </ReviewsStyled>
  );
}
