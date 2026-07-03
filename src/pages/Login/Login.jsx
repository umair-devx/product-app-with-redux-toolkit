import React, { useState } from "react";
import { 
  Box, 
  TextField, 
  Button, 
  Typography, 
  Paper, 
  InputAdornment, 
  IconButton, 
  Avatar,
  Link
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  
  // State for toggling password visibility
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data:", formData);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // Soft aesthetic background matching the product screen
        background: "linear-gradient(135deg, #f5f9fc 0%, #e3f2fd 100%)",
        p: 2,
      }}
    >
      <Paper
        elevation={0}
        sx={{
          padding: { xs: 3, sm: 5 },
          width: "100%",
          maxWidth: 420,
          borderRadius: "24px",
          textAlign: "center",
          boxShadow: "0 15px 35px rgba(25, 118, 210, 0.08)",
          border: "1px solid rgba(0, 0, 0, 0.04)",
          backgroundColor: "#ffffff",
        }}
      >
        {/* Animated Top Icon Header */}
        <Avatar 
          sx={{ 
            mx: "auto", 
            mb: 2, 
            bgcolor: "rgba(25, 118, 210, 0.08)", 
            color: "#1976d2",
            width: 56,
            height: 56
          }}
        >
          <LockOutlinedIcon sx={{ fontSize: "1.8rem" }} />
        </Avatar>

        <Typography 
          variant="h4" 
          fontWeight="800" 
          sx={{ 
            mb: 1,
            background: "linear-gradient(45deg, #0d47a1, #1976d2)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            letterSpacing: "-0.5px"
          }}
        >
          Welcome Back
        </Typography>
        
        <Typography variant="body2" color="text.secondary" mb={4}>
          Please enter your details to sign in
        </Typography>

        <form onSubmit={handleSubmit}>
          {/* Email Field with Start Icon */}
          <TextField
            fullWidth
            label="Email Address"
            name="email"
            type="email"
            variant="outlined"
            value={formData.email}
            onChange={handleChange}
            margin="normal"
            required
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <MailOutlineIcon sx={{ color: "text.secondary", fontSize: "1.2rem" }} />
                </InputAdornment>
              ),
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "12px",
              }
            }}
          />

          {/* Password Field with Start & End Toggle Icon */}
          <TextField
            fullWidth
            label="Password"
            name="password"
            type={showPassword ? "text" : "password"}
            variant="outlined"
            value={formData.password}
            onChange={handleChange}
            margin="normal"
            required
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockOutlinedIcon sx={{ color: "text.secondary", fontSize: "1.2rem" }} />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOffOutlinedIcon /> : <VisibilityOutlinedIcon />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "12px",
              }
            }}
          />

          {/* Forgot Password Link Wrapper */}
          <Box sx={{ textAlign: "right", mt: 1, mb: 2 }}>
            <Link 
              href="#" 
              underline="hover" 
              variant="body2" 
              sx={{ color: "#1976d2", fontWeight: "600" }}
            >
              Forgot Password?
            </Link>
          </Box>

          {/* Premium Login Button with Interaction */}
          <Button
            type="submit"
            variant="contained"
            disableElevation
            fullWidth
            sx={{
              mt: 1,
              py: 1.4,
              background: "#1976d2",
              fontSize: "0.95rem",
              fontWeight: "700",
              textTransform: "none",
              borderRadius: "12px",
              transition: "all 0.2s ease",
              "&:hover": {
                background: "#0d47a1",
                boxShadow: "0 6px 20px rgba(13, 71, 161, 0.25)",
              },
            }}
          >
            Sign In
          </Button>
        </form>

        {/* Footer Navigation */}
        <Typography variant="body2" color="text.secondary" mt={4}>
          Don't have an account?{" "}
          <Link 
            href="/Register" 
            underline="none" 
            sx={{ color: "#1976d2", fontWeight: "700", "&:hover": { underline: "hover" } }}
          >
            Sign up
          </Link>
        </Typography>
      </Paper>
    </Box>
  );
};

export default Login;