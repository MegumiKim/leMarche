import { Link } from "react-router-dom";
import BaseButton from "../../components/ui/Button/Button.styled";
export default function PageNotFound() {
  return (
    <main>
      <Link to="/">
        <h1>Page Not Found</h1>
        <BaseButton>Back to Home</BaseButton>
      </Link>
    </main>
  );
}
