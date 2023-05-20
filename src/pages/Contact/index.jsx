import ContactForm from "../../components/ui/Forms/ContactForm";
import { Helmet, HelmetProvider } from "react-helmet-async";

export default function Contact() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>LeMarche | Contact</title>
        </Helmet>
      </HelmetProvider>
      <main>
        <h1>Contact</h1>
        <div className="flex-container-main">
          <ContactForm />
          <div>
            <img src="./images/image1.webp" alt="le Marche user with an ipad" />
          </div>
        </div>
      </main>
    </>
  );
}
