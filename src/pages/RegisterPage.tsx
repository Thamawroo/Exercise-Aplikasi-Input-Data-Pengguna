import React, { useState } from 'react';
import { Box, Flex, Heading, Input, Button, Checkbox } from '@chakra-ui/react';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    // Lakukan pengiriman data formulir ke server di sini
    console.log(formData);
  };

  return (
    <Box p="4" maxWidth="600px" mx="auto">
      <Heading as="h2" size="lg" mb="4">Page Register</Heading>
      <Box>
        <Box mb="4">
          <label htmlFor="name">Name</label>
          <Input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
        </Box>
        <Box mb="4">
          <label htmlFor="email">Email</label>
          <Input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
        </Box>
        <Box mb="4">
          <label htmlFor="password">Password</label>
          <Input
            type={showPassword ? 'text' : 'password'}
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <Checkbox mt="2" onChange={() => setShowPassword(!showPassword)}>Show Password</Checkbox>
        </Box>
        <Button colorScheme="blue" onClick={handleSubmit}>Submit</Button>
      </Box>
    </Box>
  );
};

export default RegisterPage;
