import { useState } from "react";

import Navbar from "../components/Navbar";
import toast from "react-hot-toast";

import "../styles/checkout.css";

export default function Checkout() {

    const [form, setForm] = useState({

        name:"",
        phone:"",
        address:"",
        city:"",
        state:"",
        pincode:"",
        payment:"card"

    });

    function handleChange(e){

        setForm({

            ...form,

            [e.target.name]:
            e.target.value
        });
    }

    function handleSubmit(e){

        e.preventDefault();

        toast.success(
    "Order placed successfully!"
);
    }

    return(

        <>

            <Navbar />

            <section className="checkout-page">

                <h1>
                    Checkout
                </h1>

                <div className="checkout-container">

                    <form
                    className="checkout-form"
                    onSubmit={
                        handleSubmit
                    }
                    >

                        <h2>
                            Shipping Address
                        </h2>

                        <input
                            name="name"
                            placeholder="Full Name"
                            onChange={
                                handleChange
                            }
                        />

                        <input
                            name="phone"
                            placeholder="Phone Number"
                            onChange={
                                handleChange
                            }
                        />

                        <input
                            name="address"
                            placeholder="Address"
                            onChange={
                                handleChange
                            }
                        />

                        <input
                            name="city"
                            placeholder="City"
                            onChange={
                                handleChange
                            }
                        />

                        <input
                            name="state"
                            placeholder="State"
                            onChange={
                                handleChange
                            }
                        />

                        <input
                            name="pincode"
                            placeholder="Pincode"
                            onChange={
                                handleChange
                            }
                        />

                        <h2>
                            Payment Method
                        </h2>

                        <label>
                            <input
                                type="radio"
                                name="payment"
                                value="card"
                                checked={
                                    form.payment ===
                                    "card"
                                }
                                onChange={
                                    handleChange
                                }
                            />

                            Card
                        </label>

                        <label>
                            <input
                                type="radio"
                                name="payment"
                                value="upi"
                                checked={
                                    form.payment ===
                                    "upi"
                                }
                                onChange={
                                    handleChange
                                }
                            />

                            UPI
                        </label>

                        <label>
                            <input
                                type="radio"
                                name="payment"
                                value="cash"
                                checked={
                                    form.payment ===
                                    "cash"
                                }
                                onChange={
                                    handleChange
                                }
                            />

                            Cash On Delivery
                        </label>

                        <button>
                            Place Order
                        </button>

                    </form>

                    <div className="order-summary">

                        <h2>
                            Order Summary
                        </h2>

                        <div>
                            <span>
                                Subtotal
                            </span>

                            <span>
                                $249
                            </span>
                        </div>

                        <div>
                            <span>
                                Shipping
                            </span>

                            <span>
                                Free
                            </span>
                        </div>

                        <div>
                            <span>
                                Tax
                            </span>

                            <span>
                                $20
                            </span>
                        </div>

                        <hr />

                        <div>

                            <strong>
                                Total
                            </strong>

                            <strong>
                                $269
                            </strong>

                        </div>

                    </div>

                </div>

            </section>

        </>
    );
}