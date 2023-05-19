import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import BaseButton from "../../components/ui/Button/Button.styled";

export default function PageNotFound() {
  return (
    <>
      <Helmet>
        <title>LeMarche | Contact</title>
      </Helmet>
      <main>
        <Link to="/">
          <h1>Page Not Found</h1>
          <BaseButton>Back to Home</BaseButton>
        </Link>
      </main>
    </>
  );
}
