import React from "react";

const TinyModal = ({ message, onOk, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
      <div className="bg-blue-200 rounded-xl shadow-lg max-w-xl p-5 mx-2 sm:mx-0 pointer-events-auto">
        <p className="text-gray-700 text-center mb-4  font-semibold">{message}</p>
        <div className="flex justify-center gap-4">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
            onClick={onOk}
          >
            OK
          </button>
          <button
            className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 transition"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default TinyModal;
