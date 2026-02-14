import { createPortal } from "react-dom";
import "./ConfirmModal.css";

const ConfirmModal = ({
  isOpen,
  onClose,
  onConfirm,
  title,
  message,
  confirmButtonTitle,
}) => {
  if (!isOpen) return null;

  return createPortal(
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>{title}</h2>
        <p>{message}</p>
        <div className="modal-buttons">
          <button className="modal-cancel" onClick={onClose}>
            Cancel
          </button>
          <button className="modal-confirm" onClick={onConfirm}>
            {confirmButtonTitle}
          </button>
        </div>
      </div>
    </div>,
    document.body,
  );
};

export default ConfirmModal;
