import ContactForm from "../../components/ui/Forms/ContactForm";

export default function Contact() {
  return (
    <main>
      <h1>Contact</h1>
      <div className="flex-container-main">
        <ContactForm />
        <div>
          <img src="./images/image1.jpg" alt="" />
        </div>
      </div>
    </main>
  );
}
