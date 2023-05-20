import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import FormStyled from "../ContactForm/Form.styled";
import Modal from "react-modal";
import BaseButton from "../../Button/Button.styled";
import { CartContext } from "../../../../context/Context";
import ModalStyles from "../../../../styles/ModalStyles";
Modal.setAppElement("#root");

const initialForm = {
  name: "",
  address: "",
  email: "",
  cc: "",
};

export default function CheckoutForm() {
  const [formData, setFormData] = useState(initialForm);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const GlobalState = useContext(CartContext);
  const state = GlobalState.state;
  const orderedItems = state.item;
  const placeholder = 1;
  const dispatch = GlobalState.dispatch;

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Customer info:", formData, "Order Summary:", orderedItems);

    setIsSubmitted(!isSubmitted);
    setFormData(initialForm);
    setIsModalOpen(true);
    dispatch({ type: "Checkout", payload: placeholder });
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  }

  return (
    <FormStyled onSubmit={handleSubmit}>
      <Modal isOpen={isModalOpen} style={ModalStyles}>
        <h2>Thank you for your order!</h2>
        <p>The package will be delivered in 3-7 days.</p>

        <Link to="/">
          <BaseButton>Back</BaseButton>
        </Link>
      </Modal>
      {isSubmitted && <h2>Message Submitted</h2>}
      <div className="input-group">
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
            maxLength="9"
            inputMode="numeric"
            pattern="[0-9]{4,15}"
            autoComplete="cc-number"
          />
        </div>
      </div>
      <BaseButton>Confirm & Pay</BaseButton>
    </FormStyled>
  );
}
