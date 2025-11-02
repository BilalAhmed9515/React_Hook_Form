import React, { useState } from "react";
import * as Yup from "yup";

const Form = () => {

  // -------------------- form valiadtion ---------------------

  const validateSchema = Yup.object({
    name: Yup.string()
      .required("Please enter your full name.")
      .matches(/^[A-Za-z\s]+$/, "Name can only contain letters and spaces.")
      .min(3, "Your name must be at least 3 characters long."),

    email: Yup.string()
      .required("Please enter your email address.")
      .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Please enter a valid email address."),

    phone: Yup.string()
      .required("Please enter your phone number.")
      .matches(/^(?:\+92|0092|0)?3[0-9]{9}$/, "Please enter a valid Pakistani phone number (e.g. +923001234567)."),

    checkbox: Yup.array().min(1, "Please select at least one option."),

    message: Yup.string().required("Please enter your message."),

    file: Yup.mixed().test(
      "required",
      "Please upload at least one file (PNG, JPG, or PDF).",
      (value) => value && value.length > 0
    ),
  });

  // ------------------------ Handle Change ----------------------------

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    checkbox: [],
    message: "",
    file: [],
  });

  const handlechange = (e) => {
    const { name, type, value, files, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => {
        if (checked) {
          return { ...prev, checkbox: [...prev.checkbox, value] };
        } else {
          return { ...prev, checkbox: prev.checkbox.filter((item) => item !== value) };
        }
      });
    } else if (type === "file") {
      setFormData((prev) => ({
        ...prev, file: [...files], // FIXED: convert FileList to array
      }));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

// ------------------------- Handle Submit-------------------------

  const [errors, setErrors] = useState({});
  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      setErrors({});
      await validateSchema.validate(formData, { abortEarly: false });
      console.log("✅ Form Data:", formData);
      alert("Form submitted successfully!");
    } catch (err) {
      if (err.inner) {
        const newErrors = {};
        err.inner.forEach((error) => {
          newErrors[error.path] = error.message;
        });
        setErrors(newErrors);
      }
    }
  };

  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg p-8">
        <header className="mb-6">
          <h1 className="text-2xl font-semibold text-gray-800">Contact & Upload</h1>
        </header>

        <form onSubmit={handlesubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                name="name"
                onChange={handlechange}
                type="text"
                placeholder="Jane Doe"
                className={`w-full rounded-lg border px-4 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 ${errors.name ? "border-red-400 focus:ring-red-200" : "border-gray-200 focus:ring-indigo-200"
                  }`}
              />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                onChange={handlechange}
                type="email"
                placeholder="jane@example.com"
                className={`w-full rounded-lg border px-4 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 ${errors.email ? "border-red-400 focus:ring-red-200" : "border-gray-200 focus:ring-indigo-200"
                  }`}
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="phone">
                Phone Number
              </label>
              <input
                id="phone"
                name="phone"
                onChange={handlechange}
                type="tel"
                placeholder="+92 300 0000000"
                className={`w-full rounded-lg border px-4 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 ${errors.phone ? "border-red-400 focus:ring-red-200" : "border-gray-200 focus:ring-indigo-200"
                  }`}
              />
              {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
            </div>

            {/* Checkbox */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Select options</label>
              <div className="space-y-2">
                {["updates", "news", "offers"].map((option) => (
                  <label key={option} className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      onChange={handlechange}
                      checked={formData.checkbox.includes(option)}
                      value={option}
                      name="checkbox"
                      className="h-4 w-4 rounded text-indigo-600 focus:ring-indigo-500 border-gray-300"
                    />
                    <span className="text-sm text-gray-700 capitalize">{option}</span>
                  </label>
                ))}
              </div>
              {errors.checkbox && <p className="text-red-500 text-xs mt-1">{errors.checkbox}</p>}
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              onChange={handlechange}
              rows={4}
              placeholder="Leave a short message..."
              className={`w-full rounded-lg border px-4 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 ${errors.message ? "border-red-400 focus:ring-red-200" : "border-gray-200 focus:ring-indigo-200"
                }`}
            />
            {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
          </div>

          {/* File */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Upload file</label>
            <div className="flex items-center gap-4">
              <label
                htmlFor="file-upload"
                className="flex items-center gap-2 rounded-lg border border-dashed border-gray-300 px-4 py-3 cursor-pointer hover:bg-gray-50"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16v-6a4 4 0 118 0v6m-4-6v6m0 0v2" />
                </svg>
                <span className="text-sm text-gray-600">Choose a file</span>
                <input id="file-upload" onChange={handlechange} name="file" type="file" multiple className="sr-only" />
              </label>
              <p className="text-sm text-gray-500">PNG, JPG or PDF — max 5MB</p>
            </div>
            {errors.file && <p className="text-red-500 text-xs mt-1">{errors.file}</p>}
          </div>

          {/* Buttons */}
          <div className="flex items-center justify-end gap-3">
            <button type="reset" className="rounded-lg px-4 py-2 text-sm font-medium border border-gray-200 text-gray-700 hover:bg-gray-50">
              Reset
            </button>
            <button
              type="submit"
              className="rounded-lg px-4 py-2 text-sm font-medium bg-indigo-600 text-white shadow-sm hover:bg-indigo-700"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
