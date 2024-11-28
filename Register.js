import React, { useState } from "react";
import { Container, TextField, Button, Typography, Box } from "@mui/material";
import authService from "../services/authService";

const Register = () => {
  const [formData, setFormData] = useState({ username: "", email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await authService.register(formData);
      alert(`Welcome, ${formData.username}! ${response.message}`);
    } catch (error) {
      alert(error.response?.data?.error || "Registration failed. Please try again.");
    }
  };

  return (
    <Container
      maxWidth="sm"
      style={{
        marginTop: "50px",
        padding: "20px",
        backgroundColor: "#F1FAEE",
        borderRadius: "10px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        style={{
          textAlign: "center",
          fontWeight: "bold",
          color: "#2A9D8F",
          marginBottom: "20px",
        }}
      >
        Create Your Account
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          margin="normal"
          label="Username"
          name="username"
          variant="outlined"
          onChange={handleChange}
          style={{ backgroundColor: "#FFF", borderRadius: "4px" }}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Email Address"
          name="email"
          variant="outlined"
          onChange={handleChange}
          style={{ backgroundColor: "#FFF", borderRadius: "4px" }}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Password"
          name="password"
          type="password"
          variant="outlined"
          onChange={handleChange}
          style={{ backgroundColor: "#FFF", borderRadius: "4px" }}
        />
        <Box mt={3}>
          <Button
            type="submit"
            variant="contained"
            fullWidth
            style={{
              backgroundColor: "#E76F51",
              color: "#FFF",
              fontWeight: "bold",
            }}
          >
            Register
          </Button>
        </Box>
      </form>
    </Container>
  );
};

export default Register;

