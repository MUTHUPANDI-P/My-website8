import React, { useState } from "react";
import { Container, TextField, Button, Typography, Box } from "@mui/material";
import authService from "../services/authService";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await authService.login(formData);
      alert(`Welcome back! ${response.message}`);
    } catch (error) {
      alert(error.response?.data?.error || "Login failed. Please try again.");
    }
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: "50px" }}>
      <Typography
        variant="h4"
        gutterBottom
        style={{ color: "#2A9D8F", fontWeight: "bold", textAlign: "center" }}
      >
        Welcome Back
      </Typography>
      <Typography
        variant="subtitle1"
        gutterBottom
        style={{ color: "#264653", textAlign: "center", marginBottom: "20px" }}
      >
        Please log in to access your account.
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          margin="normal"
          label="Email Address"
          name="email"
          variant="outlined"
          onChange={handleChange}
          style={{
            backgroundColor: "#F1FAEE",
            borderRadius: "4px",
          }}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Password"
          name="password"
          type="password"
          variant="outlined"
          onChange={handleChange}
          style={{
            backgroundColor: "#F1FAEE",
            borderRadius: "4px",
          }}
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
            Login
          </Button>
        </Box>
        <Typography
          variant="body2"
          style={{ color: "#757575", textAlign: "center", marginTop: "15px" }}
        >
          Forgot your password? <a href="/reset-password" style={{ color: "#E76F51" }}>Reset it here</a>.
        </Typography>
      </form>
    </Container>
  );
};

export default Login;
