"use client";
import React, { useState } from "react";

export default function BookNowForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 1. WhatsApp Redirection
    const whatsappMessage = `Hello, I'm ${formData.name}. I would like to book a consultation on ${formData.date}. Service: ${formData.service}. Contact: ${formData.phone}, Email: ${formData.email}. Message: ${formData.message}`;
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappURL = `https://wa.me/919557911144?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");

    // 2. Google Sheets Submission
    const formURL =
      "https://docs.google.com/forms/d/e/1FAIpQLSeYOURSHEETID/formResponse";

    const googleFormData = new FormData();
    googleFormData.append("entry.1234567890", formData.name); // replace with actual entry IDs
    googleFormData.append("entry.2345678901", formData.phone);
    googleFormData.append("entry.3456789012", formData.email);
    googleFormData.append("entry.4567890123", formData.date);
    googleFormData.append("entry.5678901234", formData.service);
    googleFormData.append("entry.6789012345", formData.message);

    await fetch(formURL, {
      method: "POST",
      body: googleFormData,
      mode: "no-cors",
    });

    alert("Booking submitted! We'll be in touch soon.");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto p-6 bg-white rounded-xl shadow-md space-y-4"
    >
      <h2 className="text-xl font-bold text-center">Book Your Consultation</h2>

      <input
        type="text"
        name="name"
        placeholder="Full Name"
        className="w-full border p-2 rounded"
        onChange={handleChange}
        required
      />
      <input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        className="w-full border p-2 rounded"
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email Address"
        className="w-full border p-2 rounded"
        onChange={handleChange}
      />
      <input
        type="date"
        name="date"
        className="w-full border p-2 rounded"
        onChange={handleChange}
        required
      />
      <select
        name="service"
        className="w-full border p-2 rounded"
        onChange={handleChange}
        required
      >
        <option value="">Select a Service</option>
        <option value="Love & Relationship">Love & Relationship</option>
        <option value="Career Guidance">Career Guidance</option>
        <option value="Health Issues">Health Issues</option>
        <option value="Kundli Matching">Kundli Matching</option>
        <option value="Business & Finance">Business & Finance</option>
      </select>
      <textarea
        name="message"
        placeholder="Your Message"
        rows="3"
        className="w-full border p-2 rounded"
        onChange={handleChange}
      ></textarea>

      <button
        type="submit"
        className="w-full bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600 transition"
      >
        Book Now
      </button>
    </form>
  );
}
