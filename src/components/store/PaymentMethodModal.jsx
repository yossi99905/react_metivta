import Modal from "../Modal";

const PaymentMethodModal = ({ isOpen, onClose, onSelect }) => {
  if (!isOpen) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h2 className="text-center text-lg font-bold mb-6">בחר אמצעי תשלום</h2>

      <div className="flex justify-around items-center space-x-6">
        <button
          onClick={() => onSelect("email")}
          className="flex flex-col items-center focus:outline-none"
        >
          <img
            src="/images/email-pay.png"
            alt="תשלום באימייל"
            className="w-24 h-24 object-contain rounded-lg shadow-md hover:scale-105 transition"
          />
          <span className="mt-2 font-medium">אימייל</span>
        </button>

        <button
          onClick={() => onSelect("card")}
          className="flex flex-col items-center focus:outline-none"
        >
          <img
            src="/images/card-pay.png"
            alt="תשלום בכרטיס"
            className="w-24 h-24 object-contain rounded-lg shadow-md hover:scale-105 transition"
          />
          <span className="mt-2 font-medium">כרטיס</span>
        </button>
      </div>
    </Modal>
  );
};

export default PaymentMethodModal;
