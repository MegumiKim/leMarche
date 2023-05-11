import { useState } from "react";
import FormStyled from "./Form.styled";
import Button from "../Button";

const initialForm = {
  name: "",
  subject: "",
  email: "",
  message: "",
};

export default function Form() {
  const [formData, setFormData] = useState(initialForm);

  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
    console.log(event.target);
    setIsSubmitted(!isSubmitted);
    setFormData(initialForm);
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  }

  return (
    <FormStyled onSubmit={handleSubmit}>
      <h2>{isSubmitted && "Message Submitted"}</h2>
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
        <Button text="Submit"></Button>
      </div>
    </FormStyled>
  );
}
