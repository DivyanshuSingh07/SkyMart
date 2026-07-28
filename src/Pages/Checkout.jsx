import { useState } from "react";
import { useNavigate } from "react-router";

import { useCart } from "../Context/CartContext";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import toast from "react-hot-toast";

import "../styles/checkout.css";

export default function Checkout() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    payment: "card",
  });

  const navigate = useNavigate();

  const { cart } = useCart();

  const { clearCart } = useCart();

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,

    0,
  );

  const shipping = cart.length > 0 ? 15 : 0;

  const tax = subtotal * 0.1;

  const total = subtotal + shipping + tax;

  function handleChange(e) {
    setForm({
      ...form,

      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    toast.success("Order placed successfully!");

    clearCart();

    setTimeout(() => {
      navigate("/orders");
    }, 1500);
  }

  return (
    <>
      <Navbar />

      <section className="checkout-page">
        <h1>Checkout</h1>

        <div className="checkout-container">
          <form className="checkout-form" onSubmit={handleSubmit}>
            <h2>Shipping Address</h2>

            <input
              name="name"
              placeholder="Full Name"
              onChange={handleChange}
            />

            <input
              name="phone"
              placeholder="Phone Number"
              onChange={handleChange}
            />

            <input
              name="address"
              placeholder="Address"
              onChange={handleChange}
            />

            <input name="city" placeholder="City" onChange={handleChange} />

            <input name="state" placeholder="State" onChange={handleChange} />

            <input
              name="pincode"
              placeholder="Pincode"
              onChange={handleChange}
            />

            <h2>Payment Method</h2>

            <div className="payment-options">
              <label>
                <input
                  type="radio"
                  name="payment"
                  value="card"
                  checked={form.payment === "card"}
                  onChange={handleChange}
                />
                💳 Card
              </label>

              <label>
                <input
                  type="radio"
                  name="payment"
                  value="upi"
                  checked={form.payment === "upi"}
                  onChange={handleChange}
                />
                📱 UPI
              </label>

              <label>
                <input
                  type="radio"
                  name="payment"
                  value="cash"
                  checked={form.payment === "cash"}
                  onChange={handleChange}
                />
                🚚 Cash
              </label>
            </div>

            <button>Place Order</button>
          </form>

          <div className="order-summary">
            <h2>Order Summary</h2>

            <div className="summary-products">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="
                    summary-product"
                >
                  <img src={item.image} />

                  <div>
                    <h4>{item.title}</h4>

                    <p>
                      Qty:
                      {item.quantity}
                    </p>
                  </div>

                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>

            <div className="summary-row">
              <span>Subtotal</span>

              <span>${subtotal.toFixed(2)}</span>
            </div>

            <div className="summary-row">
              <span>Shipping</span>

              <span>${shipping}</span>
            </div>

            <div className="summary-row">
              <span>Tax</span>

              <span>${tax.toFixed(2)}</span>
            </div>

            <hr />

            <div
              className="
        summary-row
        total"
            >
              <strong>Total</strong>

              <strong>${total.toFixed(2)}</strong>
            </div>

            <div
              className="
        delivery-info"
            >
              <p>✓ Secure Payment</p>

              <p>✓ Free Returns</p>

              <p>✓ Delivery in 2-3 Days</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
