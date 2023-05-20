import { Link } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import BaseButton from "../../components/ui/Button/Button.styled";

export default function PageNotFound() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>LeMarche | 404</title>
        </Helmet>
      </HelmetProvider>
      <main>
        <Link to="/">
          <h1>Page Not Found</h1>
          <BaseButton>Back to Home</BaseButton>
        </Link>
      </main>
    </>
  );
}
