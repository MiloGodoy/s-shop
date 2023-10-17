import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Layout from "../../Components/Layout";
import OrdersCard from "../../Components/OrdersCard";
import { ShoppingCartContext } from "../../Context";
import BillingDetailsForm from "../../Components/BillingDetailsForm/BillingDetailsForm";

function MyOrders() {
  const context = useContext(ShoppingCartContext);

  //using useState to mantain totaPriceProducts value
  const [totalPriceProducts, setTotalPriceProducts] = useState(0);

  useEffect(() => {
    // Calculate totalPriceProducts while chargin page
    const totalPrice = context.order.reduce(
      (total, order) => total + order.totalPrice,
      0
    );
    setTotalPriceProducts(totalPrice);
  }, [context.order]);

  return (
    <Layout>
      <div className="flex items-center justify-center relative w-80 mb-2 mb-4">
        <h1 className="font-medium text-xl">My Orders</h1>
      </div>
      {context.order.map((order, index) => (
        <Link key={index} to={`/my-orders/${index}`}>
          <OrdersCard
            totalPrice={order.totalPrice}
            totalProducts={order.totalProducts}
          />
        </Link>
      ))}
      <div className="font-medium text-xl pt-20px">
        <h1>Total: {totalPriceProducts}$</h1>
      </div>
      <hr />
      <hr />
      <BillingDetailsForm />
      <div className="font-medium text-sm">
        <h1>Total: {totalPriceProducts}$</h1>
      </div>
      <hr />
      <div className="font-medium text-sm pb-10">
        <h9>Pago contra entrega o transferencia bancaria</h9>
      </div>
    </Layout>
  );
}

export default MyOrders;
