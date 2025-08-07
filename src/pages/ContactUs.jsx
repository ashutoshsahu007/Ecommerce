import { useState } from "react";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    else if (!/^\d{10}$/.test(formData.phone))
      newErrors.phone = "Invalid phone number";

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const res = await fetch(
      "https://ecommerce-5a3b1-default-rtdb.firebaseio.com/store.json",
      {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    console.log(res, "response");

    // Reset form (optional)
    setFormData({ name: "", email: "", phone: "" });
    setErrors({});
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md mt-10 mb-10 flex-grow"
      >
        <h2 className="text-2xl font-semibold mb-6 text-center">User Form</h2>

        {/* Name Field */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-1" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>

        {/* Email Field */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-1" htmlFor="email">
            Email ID
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        {/* Phone Field */}
        <div className="mb-6">
          <label className="block text-gray-700 mb-1" htmlFor="phone">
            Phone Number
          </label>
          <input
            type="text"
            name="phone"
            id="phone"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.phone}
            onChange={handleChange}
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-[#09b3ec] hover:bg-[#1ab8ed] cursor-pointer text-white py-2 rounded-md  transition"
        >
          Submit
        </button>
      </form>
      <Footer />
    </div>
  );
};

export default ContactUs;
