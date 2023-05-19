import ContactForm from "../../components/ui/Forms/ContactForm";
import { Helmet } from "react-helmet";

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>LeMarche | Contact</title>
      </Helmet>
      <main>
        <h1>Contact</h1>
        <div className="flex-container-main">
          <ContactForm />
          <div>
            <img src="./images/image1.jpg" alt="" />
          </div>
        </div>
      </main>
    </>
  );
}
