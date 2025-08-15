const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex justify-center items-center">
      <div className="relative bg-tailwind-cream p-6 rounded-lg max-w-lg w-full z-50">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-xl font-bold z-50"
          aria-label="Close modal"
        >
          ×
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
