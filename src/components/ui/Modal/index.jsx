import Modal from "react-modal";
Modal.setAppElement("#root");

export default function MyModal(props) {
  return <Modal onClick={props.handleClick} isOpen={props.isModalOpen}></Modal>;
}
