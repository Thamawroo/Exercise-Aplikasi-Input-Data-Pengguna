import React, { useState } from 'react';
import axios from 'axios';

const RegisterPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    // Kirim data ke server
    axios.post('http://localhost:5000/users', formData)
      .then(response => {
        console.log('User registered successfully:', response.data);
        // Redirect ke halaman lain jika diperlukan
      })
      .catch(error => {
        console.error('Error registering user:', error);
      });
  };

  const handlePasswordVisibility = () => {
    // Toggle password visibility
    // Implementasi tergantung pada preferensi Anda
  };

  return (
    <div className="register-container">
      <h1>Page Register</h1>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <input
          type="checkbox"
          id="showPassword"
          name="showPassword"
          onChange={handlePasswordVisibility}
        />
        <label htmlFor="showPassword">Show Password</label>
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default RegisterPage;
