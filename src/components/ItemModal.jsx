import React from "react";
import { Award, BookOpen, CheckCircle, GraduationCap } from "lucide-react";

const ItemModal = ({ item, onClose, icon }) => {
  if (!item) return null; // Return null if no item is selected

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      onClick={onClose} // Close when clicking outside the modal
    >
      <div
        className="relative bg-white rounded-lg shadow-lg w-[50vw] h-[80vh] p-6 overflow-y-auto"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
      >
        {/* Close Button */}
        <div
          className="absolute top-3 right-3 cursor-pointer"
          onClick={(e) => {
            e.stopPropagation(); // Prevents closing from background click
            onClose(); // Executes the close logic
          }}
        >
          <span className="text-6xl mr-4 font-bold" style={{ color: "#FF5722" }}>
            &times;
          </span>
        </div>

        {/* Modal Content */}
        <div className="flex items-center mb-4">
          <h2 className="text-xl font-bold mb-2 ml-2">{item.title}</h2>
        </div>
        <p className="text-base mb-2">{item.description || item.institution}</p>
        <p className="text-sm text-gray-500 mb-4">{item.year}</p>

        {/* Image Container */}
        <div className="relative mb-4">
          {item.image && (
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-[60vh] object-cover rounded-md"
            />
          )}
          {/* Icon positioned at the top right of the image */}
          <div className="absolute top-2 right-2 bg-[#FF5722] rounded-full p-2 shadow-lg flex items-center justify-center">
            {icon || (
              <span className="text-white text-xl font-bold">
                ?
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemModal;
