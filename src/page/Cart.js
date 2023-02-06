import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import { removeProduct } from "../store/CartSlice";
import useRazorpay from "react-razorpay";

const Cart = () => {
  const { products, totalPrice } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  console.log(products);

  const Razorpay = useRazorpay();

  const handleClick = () => {
    // const order = await createOrder(params);

    const options = {
      key: process.env.REACT_APP_RAZORPAY_ID,
      amount: Math.ceil(totalPrice * 82.15 * 1.18 * 100),
      currency: "INR",
      name: "ShopMe",
      description: "Test Transaction",
      image: "https://example.com/your_logo",
      // order_id: Math.ceil(Math.random() * 10000000000),
      handler: (res) => {
        console.log(res);
      },
      prefill: {
        name: "Abhay Kadam",
        email: "youremail@example.com",
        contact: "9999999999",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzpay = new Razorpay(options);
    rzpay.open();
  };

  return (
    <div className="cart">
      <Navbar />
      <h2>Product Cart:</h2>

      <div className="list">
        {products.length === 0 ? (
          <h3>Cart is empty now...</h3>
        ) : (
          <>
            <div className="cart-table">
              <div className="cart-product">
                <div className="row-box">
                  <h4>Image</h4>
                </div>
                <div className="row-box">
                  <h4>Description</h4>
                </div>
                <div className="row-box">
                  <h4>Price</h4>
                </div>
                <div className="row-box">
                  <h4>Quantity</h4>
                </div>
                <div className="row-box">
                  <h4>Total</h4>
                </div>
                <div className="row-box">
                  <h4>Operations</h4>
                </div>
              </div>
              {products.map((item) => (
                <div key={item.id} className="cart-product">
                  <div className="row-box">
                    <div className="cart-img">
                      <img src={item.product.image} alt="" />
                    </div>
                  </div>
                  <div className="row-box">
                    <p>{item.product.title.slice(0, 20)}...</p>
                  </div>
                  <div className="row-box">
                    <p>₹{(item.product.price * 82.15).toFixed(2)}</p>
                  </div>
                  <div className="row-box">
                    <p>{item.quantity}</p>
                  </div>
                  <div className="row-box">
                    <p>
                      ₹{(item.quantity * item.product.price * 82.15).toFixed(2)}
                    </p>
                  </div>
                  <div className="row-box">
                    <button onClick={() => dispatch(removeProduct(item))}>
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-summary">
              <h2>Cart Summary</h2>
              <div className="Summary-row">
                <p>Net Amount : </p>
                <h3>₹ {(totalPrice * 82.15).toFixed(2)}</h3>
              </div>
              <div className="Summary-row">
                <p>Total tax(GST) 9% SGST 9% CGST:</p>
                <h3>₹ {(totalPrice * 82.15 * 0.18).toFixed(2)}</h3>
              </div>
              <div className="Summary-row"></div>
              <div className="divider"></div>
              <div className="Summary-row">
                <p>Gross Amount:</p>
                <h3>₹ {Math.ceil(totalPrice * 82.15 * 1.18)}</h3>
              </div>
              <div className="Summary-row">
                <button onClick={() => handleClick()}>Make a Payment</button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
