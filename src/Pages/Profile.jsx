import { useState } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { useAuth } from "../Context/AuthContext";

import { getUsers, saveUsers } from "../utils/localStorage";

import toast from "react-hot-toast";

import "../styles/profile.css";

export default function Profile() {
  const { user, setUser } = useAuth();

  const [form, setForm] = useState({
    fullName: user?.fullName || "",

    username: user?.username || "",

    email: user?.email || "",

    profileImage: user?.profileImage || "",
  });

  const [imageUrl, setImageUrl] = useState("");

  function handleChange(e) {
    setForm({
      ...form,

      [e.target.name]: e.target.value,
    });
  }

  function handleSave() {
    const users = getUsers();

    const updatedUsers = users.map((item) =>
      item.id === user.id
        ? {
            ...item,

            fullName: form.fullName,

            username: form.username,

            email: form.email,

            profileImage: form.profileImage,
          }
        : item,
    );

    saveUsers(updatedUsers);

    setUser({
      ...user,

      ...form,
    });

    toast.success("Profile Updated!");
  }

  function handleImageUrl() {
    if (!imageUrl.trim()) {
      return;
    }

    setForm({
      ...form,

      profileImage: imageUrl,
    });

    toast.success("Image URL Added");

    setImageUrl("");
  }

  function handleImageUpload(e) {
    const file = e.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = () => {
      setForm((prev) => ({
        ...prev,

        profileImage: reader.result,
      }));

      toast.success("Picture Uploaded!");
    };

    reader.readAsDataURL(file);
  }

  function handleRemoveImage() {
    setForm((prev) => ({
      ...prev,
      profileImage: "",
    }));

    const users = getUsers();

    const updatedUsers = users.map((item) =>
      item.id === user.id
        ? {
            ...item,
            profileImage: "",
          }
        : item,
    );

    saveUsers(updatedUsers);

    setUser({
      ...user,
      profileImage: "",
    });

    toast.success("Profile picture removed!");
  }

  return (
    <>
      <Navbar />

      <section className="profile-page">
        <div
          className="
                    profile-card"
        >
          <h1>My Profile</h1>

          <div
            className="
                        profile-picture"
          >
            <div
              className="
                            profile-preview"
            >
              {form.profileImage ? (
                <img src={form.profileImage} />
              ) : (
                form.fullName?.charAt(0)
              )}
            </div>

            <div className="profile-actions">
              <label className="upload-btn">
                Upload Picture
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  hidden
                />
              </label>

              {form.profileImage && (
                <button
                  type="button"
                  className="remove-btn"
                  onClick={handleRemoveImage}
                >
                  Remove Picture
                </button>
              )}
            </div>

            <div
              className="
                            divider"
            >
              OR
            </div>

            <div
              className="
                            url-box"
            >
              <input
                type="text"
                placeholder="
                                Paste Image URL"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
              />

              <button onClick={handleImageUrl}>Save URL</button>
            </div>
          </div>

          <div
            className="
                        profile-form"
          >
            <input
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              placeholder="
                            Full Name"
            />

            <input
              name="username"
              value={form.username}
              onChange={handleChange}
              placeholder="
                            Username"
            />

            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="
                            Email"
            />

            <button
              onClick={handleSave}
              className="
                            save-btn"
            >
              Save Changes
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
