import { useState, useRef } from 'react';
import Modal from '../Modal';
import SuccessMessage from '../SuccessMessage';
import { paymentByCard } from '../../api/paymentApi';

const FormCardPayment = ({ isOpen, onClose, amount, onSuccess }) => {
  const [showMessage, setShowMessage] = useState(false);
  const [msgName, setMsgName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const cardInputRef = useRef(null);

  const handleCardInput = (e) => {
    setCardNumber(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // כאן ניתן להוסיף לוגיקה של בדיקה/סימולציה של תשלום
    if (!cardNumber || cardNumber.length < 10) {
      alert('כרטיס לא תקין');
      return;
    }
    try {
        const resp = await paymentByCard({ cardNumber, price: amount });      
    }
    catch (err) {
        console.log(err);
    }

    setShowMessage(true);
    setMsgName(`תשלום בסך ${amount} בוצע בהצלחה`);

    // איפוס השדה
    setCardNumber('');
    if (cardInputRef.current) cardInputRef.current.value = '';
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <input
          type="text"
          ref={cardInputRef}
          placeholder="סרוק או הזן כרטיס מגנטי"
          onChange={handleCardInput}
          autoFocus
          className="rounded-2xl p-2 text-right w-full"
        />

        <input
          type="number"
          value={amount}
          readOnly
          className="rounded-2xl p-2 text-right w-full bg-gray-100"
        />

        <button type="submit" className="rounded-2xl p-2 bg-tailwind-green text-white">
          אשר תשלום
        </button>
      </form>

      {showMessage && (
        <SuccessMessage
          show={showMessage}
          onClickBtn={() => {
            setShowMessage(false);
            onClose();
            onSuccess?.();
          }}
          name={msgName}
        />
      )}
    </Modal>
  );
};

export default FormCardPayment;
