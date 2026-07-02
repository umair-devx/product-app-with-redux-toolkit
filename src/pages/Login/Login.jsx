import React, { useState } from "react";
import { Box, TextField, Button, Typography, Paper, Divider } from "@mui/material";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data:", formData);
  };

  return (
    <>
    <Typography
        variant="h3"
        align="center"
        sx={{
          fontWeight: "bold",
          color: "#1976d2",
          mt: 3,
          
          
        }}
      >
        Login / Sign Up
      </Typography>

      <Divider
        sx={{
          width: "120px",
          mx: "auto",
          my: 2,
          borderBottomWidth: 0,
          bgcolor: "#1976d2",
          
        }}
         />
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #e3f2fd, #bbdefb)",
      }}
    >
      <Paper
        elevation={10}
        sx={{
          padding: 4,
          width: 350,
          borderRadius: 3,
          textAlign: "center",
        }}
      >
        <Typography variant="h4" fontWeight="bold" mb={2}>
          Login
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            margin="normal"
          />

          <TextField
            fullWidth
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            margin="normal"
          />

          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              mt: 2,
              py: 1.2,
              background: "#1976d2",
              fontWeight: "bold",
              textTransform: "none",
              "&:hover": {
                background: "#0d47a1",
              },
            }}
          >
            Login
          </Button>
        </form>
      </Paper>
    </Box>
    </>
  );
};

export default Login;