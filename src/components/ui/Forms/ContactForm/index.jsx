import { useState } from "react";
import FormStyled from "./Form.styled";
import BaseButton from "../../Button/Button.styled";

const initialForm = {
  name: "",
  subject: "",
  email: "",
  message: "",
};

export default function ContactForm() {
  const [formData, setFormData] = useState(initialForm);
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
    setIsSubmitted(!isSubmitted);
    setFormData(initialForm);
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  }

  return (
    <FormStyled onSubmit={handleSubmit}>
      {isSubmitted && (
        <h2 className="success">Message Successfully Submitted</h2>
      )}
      <div>
        <label htmlFor="name">Full Name</label>
        <input
          className="form-input"
          onChange={handleChange}
          type="text"
          name="name"
          value={formData.name}
          placeholder="Full Name"
          required
          minLength={3}
        />
      </div>
      <div>
        <label htmlFor="name">Subject</label>
        <input
          className="form-input"
          onChange={handleChange}
          type="text"
          name="subject"
          value={formData.subject}
          placeholder="Subject"
          required
          minLength={3}
        />
      </div>
      <div>
        <label htmlFor="name">Email</label>
        <input
          className="form-input"
          onChange={handleChange}
          type="email"
          name="email"
          value={formData.email}
          placeholder="Email"
          required
        />
      </div>
      <div>
        <label htmlFor="name">Message</label>
        <textarea
          className="form-input"
          onChange={handleChange}
          type="text"
          name="message"
          value={formData.message}
          placeholder="Message"
          required
          minLength={3}
        />
      </div>

      <div>
        <BaseButton text="Submit">Submit</BaseButton>
      </div>
    </FormStyled>
  );
}
