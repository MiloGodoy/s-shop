import React from "react";

const OrderCard = (props) => {
  const { id, title, imageUrl, price, quantity, productTotal, handleDelete } =
    props;

  return (
    <div className="flex items-center justify-between mb-3 border border-black rounded-lg p-4">
      <div className="flex items-center gap-4">
        <img
          src={imageUrl}
          alt={title}
          className="w-16 h-16 object-cover rounded"
        />
        <div>
          <p className="font-medium">{title}</p>
          <p className="text-gray-500">${price} each</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <p className="font-medium">{quantity}x</p>
        <p className="font-medium">${productTotal}</p>
        <button onClick={() => handleDelete(id)} className="text-red-500">
          X
        </button>
      </div>
    </div>
  );
};

export default OrderCard;
