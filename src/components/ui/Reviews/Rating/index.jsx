import { FaStar } from "react-icons/fa";

export default function Rating({ rating }) {
  return (
    <p>
      <FaStar className="star" /> {rating.toFixed(1)}
    </p>
  );
}
