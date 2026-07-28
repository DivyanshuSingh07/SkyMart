import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

import { RiEyeLine, RiEyeOffLine } from "react-icons/ri";

import {
  getUsers,
  saveUsers,
  saveCurrentUser,
  getCurrentUser,
} from "../utils/localStorage";

import { useAuth } from "../Context/AuthContext";

export default function Auth() {
  const navigate = useNavigate();

  const { user, setUser } = useAuth();

  const [isLogin, setIsLogin] = useState(true);

  const [message, setMessage] = useState({
    text: "",
    type: "",
  });

  const [show, setShow] = useState({
    login: false,
    register: false,
    confirm: false,
  });

  const [form, setForm] = useState({
    identifier: "",
    fullName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  useEffect(() => {
    if (user) {
        navigate("/home");
    }
}, [user]);

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function showMessage(text, type) {
    setMessage({ text, type });

    setTimeout(() => {
      setMessage({
        text: "",
        type: "",
      });
    }, 3000);
  }

  function handleRegister(e) {
    e.preventDefault();

    const users = getUsers();

    if (users.some((u) => u.email.toLowerCase() === form.email.toLowerCase())) {
      return showMessage("Email already registered.", "error");
    }

  

    const newUser = {
    id: Date.now(),

    fullName: form.fullName.trim(),

    username:
        form.username
        .trim()
        .toLowerCase(),

    email:
        form.email
        .trim()
        .toLowerCase(),

    password: form.password,

    role: "customer",

    profileImage: "",

    phone: "",

    createdAt:
        new Date().toISOString(),

    preferences: {

        theme: "dark",

        accent: "lime",

        notifications: true,

        reducedMotion: false
    },

    cart: [],

    wishlist: [],

    orders: [],

    recentlyViewed: [],

    addresses: [],

    coupons: [],

    reviews: [],

    loyaltyPoints: 0,

    supportTickets: [],

    settings: {

        newsletter: true,

        emailUpdates: true,

        smsUpdates: false
    }
};

    users.push(newUser);

    saveUsers(users);

    setForm({
      identifier: "",
      fullName: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    });

    showMessage("Account created successfully!", "success");

    setIsLogin(true);
  }

  function handleLogin(e) {
    e.preventDefault();

    const user = getUsers().find(
      (u) =>
        u.username === form.identifier.toLowerCase().trim() ||
        u.email === form.identifier.toLowerCase().trim(),
    );

    if (!user) {
      return showMessage("No account found.", "error");
    }

    if (user.password !== form.password) {
      return showMessage("Incorrect password.", "error");
    }

    

    saveCurrentUser(
    user.id
    );

    setUser(user);

    toast.success(
    `Welcome back,
    ${user.fullName}`
);

    navigate("/home");
  }

  return (
    <main className="auth-page">
      <section className="brand-section">
        <div className="brand-content">
          <h1 className="logo">SkyMart</h1>

          <h2>
            Shop.
            <br />
            Discover.
            <br />
            Experience.
          </h2>

          <p>
            Discover thousands of products, save your favorites, track orders,
            and enjoy a premium shopping experience from one beautiful
            dashboard.
          </p>
        </div>
      </section>

      <section className="auth-section">
        <div className="auth-card">
          <div className="form-header">
            <button
              className={`tab-btn ${isLogin ? "active" : ""}`}
              onClick={() => setIsLogin(true)}
            >
              Login
            </button>

            <button
              className={`tab-btn ${!isLogin ? "active" : ""}`}
              onClick={() => setIsLogin(false)}
            >
              Register
            </button>
          </div>

          {message.text && (
            <div className={`auth-message ${message.type}`}>{message.text}</div>
          )}

          {isLogin ? (
            <form className="auth-form" onSubmit={handleLogin}>
              <h2>Welcome Back</h2>

              <p>Login using your username or email.</p>

              <div className="form-group">
                <input
                  className="form-input"
                  name="identifier"
                  placeholder="Username or Email"
                  value={form.identifier}
                  onChange={handleChange}
                />
              </div>

              <div className="password-box">
                <input
                  className="form-input"
                  type={show.login ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  value={form.password}
                  onChange={handleChange}
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() =>
                    setShow({
                      ...show,
                      login: !show.login,
                    })
                  }
                >
                  {show.login ? <RiEyeOffLine /> : <RiEyeLine />}
                </button>
              </div>

              <button className="primary-btn">Login</button>
            </form>
          ) : (
            <form className="auth-form" onSubmit={handleRegister}>
              <h2>Create Account</h2>

              <p>Create your SkyMart account.</p>

              <input
                className="form-input"
                name="fullName"
                placeholder="Full Name"
                value={form.fullName}
                onChange={handleChange}
              />

              <input
                className="form-input"
                name="username"
                placeholder="Username"
                value={form.username}
                onChange={handleChange}
              />

              <input
                className="form-input"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
              />

              {/* <input
                className="form-input"
                type="password"
                name="password"
                placeholder="Password"
                value={
                  form.password
                }
                onChange={
                  handleChange
                }
              />

              <input
                className="form-input"
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={
                  form.confirmPassword
                }
                onChange={
                  handleChange
                }
              /> */}

              <div className="password-box">
                <input
                  className="form-input"
                  type={show.register ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  value={form.password}
                  onChange={handleChange}
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() =>
                    setShow({
                      ...show,
                      register: !show.register,
                    })
                  }
                >
                  {show.register ? <RiEyeOffLine /> : <RiEyeLine />}
                </button>
              </div>

              <div className="password-box">
                <input
                  className="form-input"
                  type={show.confirm ? "text" : "password"}
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={form.confirmPassword}
                  onChange={handleChange}
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() =>
                    setShow({
                      ...show,
                      confirm: !show.confirm,
                    })
                  }
                >
                  {show.confirm ? <RiEyeOffLine /> : <RiEyeLine />}
                </button>
              </div>

              <button className="primary-btn">Create Account</button>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}
