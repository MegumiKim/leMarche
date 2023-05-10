import { useState } from "react";
import FormStyled from "./Form.styled";
import Button from "../../../components/ui/Button";

const initialForm = {
  name: "",
  address: "",
  email: "",
  cc: "",
};

export default function CheckoutForm() {
  const [formData, setFormData] = useState(initialForm);

  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    // Validation/Error handling
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
        <label htmlFor="address">Address</label>
        <input
          className="form-input"
          onChange={handleChange}
          type="text"
          name="address"
          value={formData.address}
          placeholder="Address"
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
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
        <label htmlFor="credit">Credit Card</label>
        <input
          className="form-input"
          onChange={handleChange}
          type="tel"
          name="cc"
          value={formData.cc}
          placeholder="XXX XXX XXX XXX"
          required
          minLength={3}
          maxLength="19"
          inputMode="numeric"
          pattern="[0-9]{13,19}"
          autoComplete="cc-number"
        />
      </div>
      <Button text="Confirm & Pay"></Button>
    </FormStyled>
  );
}
