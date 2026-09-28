import { useState } from "react";

function Registration() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    event: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid 10-digit number";
    }

    if (!formData.event) {
      newErrors.event = "Please select an event";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="success">
        <h2>Registration Successful!</h2>
        <p>Thank you for registering for {formData.event}.</p>
      </div>
    );
  }

  return (
    <div className="page">
      <h2>Event Registration</h2>
      <p>Join your favourite TechFest events!</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Full Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>

        <div>
          <label>Email</label>
          <input
            type="text"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div>
          <label>Phone Number</label>
          <input
            type="text"
            name="phone"
            placeholder="Enter 10-digit phone number"
            value={formData.phone}
            onChange={handleChange}
          />
          {errors.phone && <span className="error">{errors.phone}</span>}
        </div>

        <div>
          <label>Select Event</label>
          <select
            name="event"
            value={formData.event}
            onChange={handleChange}
          >
            <option value="">--Select an event--</option>
            <option value="Coding Contest">Coding Contest</option>
            <option value="Web Dev Workshop">Web Dev Workshop</option>
            <option value="Robotics Challenge">Robotics Challenge</option>
            <option value="Dance Fusion">Dance Fusion</option>
          </select>
          {errors.event && <span className="error">{errors.event}</span>}
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Registration;