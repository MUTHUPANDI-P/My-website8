import React from "react";
import { Container, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Container
      style={{
        textAlign: "center",
        marginTop: "100px",
        padding: "20px",
        backgroundColor: "#F4F4F9",
        borderRadius: "10px",
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Typography
        variant="h5"
        gutterBottom
        style={{
          color: "#1D3557",
          fontWeight: "bold",
          fontFamily: "'Roboto', sans-serif",
        }}
      >
        LoginCentral
      </Typography>
      <Typography
        variant="h7"
        gutterBottom
        style={{
          color: "#457B9D",
          fontWeight: "400",
          fontStyle: "italic",
          marginBottom: "30px",
        }}
      >
        Your gateway to a seamless digital journey.

      </Typography>
      <Box mt={4}>
        <Button
          variant="contained"
          style={{
            backgroundColor: "#2A9D8F",
            color: "#fff",
            marginRight: "15px",
            padding: "12px 30px",
            fontWeight: "bold",
            fontSize: "16px",
            borderRadius: "8px",
          }}
          component={Link}
          to="/register"
        >
          Join Now
        </Button>
        <Button
          variant="contained"
          style={{
            backgroundColor: "#E76F51",
            color: "#fff",
            padding: "12px 30px",
            fontWeight: "bold",
            fontSize: "16px",
            borderRadius: "8px",
          }}
          component={Link}
          to="/login"
        >
          Log In
        </Button>
      </Box>
    </Container>
  );
};

export default Home;
