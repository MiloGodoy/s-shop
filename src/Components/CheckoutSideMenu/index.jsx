import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { ShoppingCartContext } from "../../Context";
import OrderCard from "../../Components/OrderCard";
import { totalPrice } from "../../utils";
import "./styles.css";

const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCartContext);
  const [counters, setCounters] = useState({});

  // Función para calcular el precio total de un producto con su cantidad
  const calculateItemTotal = (product) => {
    return product.price * (counters[product.id] || 1);
  };

  // Función para calcular el precio total del carrito
  const calculateTotal = () => {
    const itemTotals = context.cartProducts.map((product) =>
      calculateItemTotal(product)
    );
    return itemTotals.reduce((total, itemTotal) => total + itemTotal, 0);
  };

  const handleDelete = (id) => {
    const filteredProducts = context.cartProducts.filter(
      (product) => product.id !== id
    );
    context.setCartProducts(filteredProducts);

    // Eliminar el contador asociado al producto eliminado
    setCounters((prevCounters) => {
      const updatedCounters = { ...prevCounters };
      delete updatedCounters[id];
      return updatedCounters;
    });
  };

  const handleCheckout = () => {
    const orderToAdd = {
      date: "01.02.23",
      products: context.cartProducts,
      totalProducts: context.cartProducts.length,
      totalPrice: calculateTotal(),
    };

    context.setOrder([...context.order, orderToAdd]);
    context.setCartProducts([]);
    setCounters({}); // Reiniciar contadores al finalizar el pedido
  };

  const handleCloseCheckout = () => {
    context.closeCheckoutSideMenu();
  };

  const handleIncrement = (id) => {
    setCounters((prevCounters) => ({
      ...prevCounters,
      [id]: (prevCounters[id] || 0) + 1,
    }));
  };

  const handleDecrement = (id) => {
    if (counters[id] > 1) {
      setCounters((prevCounters) => ({
        ...prevCounters,
        [id]: prevCounters[id] - 1,
      }));
    }
  };

  return (
    <aside
      className={`${
        context.isCheckoutSideMenuOpen ? "flex" : "hidden"
      } checkout-side-menu flex-col fixed right-0 border border-black rounded-lg bg-white`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">My Order</h2>
        <div>
          <XMarkIcon
            className="h-6 w-6 text-black cursor-pointer"
            onClick={handleCloseCheckout}
          ></XMarkIcon>
        </div>
      </div>
      <div className="px-6 overflow-y-scroll flex-1">
        {context.cartProducts.length > 0 ? (
          context.cartProducts.map((product) => (
            <div key={product.id} className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleIncrement(product.id)}
                  className="text-black"
                >
                  +
                </button>
                <p className="text-sm font-medium">
                  {counters[product.id] || 1}
                </p>
                <button
                  onClick={() => handleDecrement(product.id)}
                  className="text-black"
                >
                  -
                </button>
              </div>
              <OrderCard
                id={product.id}
                title={product.title}
                imageUrl={product.images}
                price={calculateItemTotal(product)}
                handleDelete={() => handleDelete(product.id)}
              />
            </div>
          ))
        ) : (
          <p>No hay productos en el carrito.</p>
        )}
      </div>
      <div className="px-6 mb-6">
        <p className="flex justify-between items-center mb-2">
          <span className="font-light">Total:</span>
          <span className="font-medium text-2xl">${calculateTotal()}</span>
        </p>
        <Link to="/my-orders/last">
          <button
            className="bg-black py-3 text-white w-full rounded-lg"
            onClick={() => {
              handleCheckout();
              handleCloseCheckout();
            }}
          >
            Agregar al carrito
          </button>
        </Link>
      </div>
    </aside>
  );
};

export default CheckoutSideMenu;
