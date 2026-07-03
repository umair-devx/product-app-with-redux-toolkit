import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from '../../config/reduxconfig/reducer/cartSlice';

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid"; // Modern Grid v2 component
import Button from "@mui/material/Button";
import { Typography, Divider, Chip } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import StarIcon from '@mui/icons-material/Star';

// Clean, ultra-modern Product Card Design
const ProductCard = styled(Paper)(({ theme }) => ({
  backgroundColor: "#ffffff",
  padding: theme.spacing(2.5),
  borderRadius: "24px", // Smoother rounded corners
  cursor: "pointer",
  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.03)", // Ultra soft shadow
  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)", 
  height: "100%",
  display: "flex",
  flexDirection: "column",
  position: "relative",
  border: "1px solid rgba(0, 0, 0, 0.04)",
  overflow: "hidden",

  "&:hover": {
    transform: "translateY(-12px)", // Smooth lifting effect
    boxShadow: "0 20px 40px rgba(25, 118, 210, 0.12)", // Elegant glowing shadow
    borderColor: "rgba(25, 118, 210, 0.2)",
    
    "& .product-img-wrapper": {
      backgroundColor: "#f0f7ff", // Image container light shifts to blue
    },
    "& .product-img": {
      transform: "scale(1.08) rotate(1deg)", // Artistic micro-rotation and scale
    },
    "& .cart-icon": {
      transform: "translateX(4px)", // Button icon moves smoothly on hover
    }
  },
}));

const Products = () => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios("https://dummyjson.com/products")
      .then((res) => {
        setData(res.data.products);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "80vh",
        }}
      >
        <CircularProgress size={70} thickness={4} sx={{ color: "#1976d2" }} />
      </Box>
    );
  }

  if (error) {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "80vh",
          gap: 2,
        }}
      >
        <Typography variant="h5" color="error" fontWeight="600">
          Oops! Failed to load products.
        </Typography>
        <Button
          variant="contained"
          onClick={() => window.location.reload()}
          sx={{ borderRadius: "12px", px: 4, textTransform: "none", fontWeight: "bold" }}
        >
          Try Again
        </Button>
      </Box>
    );
  }

  return (
    <Box sx={{ bgcolor: "#fafbfc", minHeight: "100vh", pb: 8 }}>
      {/* Header Section */}
      <Box sx={{ textAlign: "center", pt: 6, pb: 4 }}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: "800",
            background: "linear-gradient(45deg, #0d47a1, #1976d2)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            letterSpacing: "-0.5px"
          }}
        >
          Discover Products
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mt: 1, fontWeight: "500" }}>
          Explore our premium selection crafted just for you
        </Typography>
        <Divider
          sx={{
            width: "60px",
            mx: "auto",
            mt: 2.5,
            borderBottomWidth: 4,
            borderColor: "#1976d2",
            borderRadius: "10px",
          }}
        />
      </Box>

      {/* Grid Container */}
      <Box sx={{ maxWidth: 1240, mx: "auto", px: 3 }}>
        <Grid container spacing={4}>
          {data.map((item) => (
            // Desktop screen par exactly 3 items show honge (md={4})
            <Grid key={item.id} size={{ xs: 12, sm: 6, md: 4 }}>
              <ProductCard elevation={0}>
                
                {/* Float Category Badge */}
                <Chip 
                  label={item.category} 
                  size="small"
                  sx={{
                    position: "absolute",
                    top: 16,
                    left: 16,
                    zIndex: 2,
                    fontWeight: "700",
                    fontSize: "0.7rem",
                    textTransform: "uppercase",
                    backgroundColor: "rgba(255, 255, 255, 0.90)",
                    backdropFilter: "blur(4px)",
                    color: "#1976d2",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                    border: "1px solid rgba(25, 118, 210, 0.1)"
                  }}
                />

                {/* Animated Image Wrapper */}
                <Box 
                  className="product-img-wrapper"
                  sx={{ 
                    overflow: "hidden", 
                    borderRadius: "18px", 
                    mb: 2.5, 
                    bgcolor: "#f7f9fa",
                    p: 2,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    transition: "background-color 0.4s ease"
                  }}
                >
                  <img
                    className="product-img"
                    src={item.thumbnail}
                    alt={item.title}
                    style={{
                      width: "100%",
                      height: "200px",
                      objectFit: "contain",
                      transition: "transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                    }}
                  />
                </Box>

                {/* Info Layout */}
                <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
                  
                  {/* Dummy Rating Layout for Premium E-commerce Look */}
                  <Box sx={{ display: "flex", alignItems: "center", gap: 0.5, mb: 1 }}>
                    <StarIcon sx={{ color: "#ffb703", fontSize: "1rem" }} />
                    <Typography variant="caption" fontWeight="700" color="text.primary">
                      {(4 + Math.random()).toFixed(1)} 
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      (24)
                    </Typography>
                  </Box>

                  <Typography variant="h6" fontWeight="700" sx={{ lineHeight: "1.3", mb: 1, color: "#1a202c" }} noWrap title={item.title}>
                    {item.title}
                  </Typography>

                  <Typography variant="body2" color="text.secondary" sx={{ minHeight: "40px", fontSize: "0.875rem", mb: 2 }}>
                    {item.description.slice(0, 65)}...
                  </Typography>

                  {/* Pricing and Action aligned elegantly */}
                  <Box sx={{ mt: "auto", pt: 1, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <Box>
                      <Typography variant="caption" color="text.secondary" display="block" sx={{ fontWeight: "600", textTransform: "uppercase", fontSize: "0.65rem", letterSpacing: "0.5px" }}>
                        Price
                      </Typography>
                      <Typography variant="h5" color="text.primary" fontWeight="800">
                        ${item.price}
                      </Typography>
                    </Box>

                    {/* High Converting Action Button */}
                    <Button
                      variant="contained"
                      disableElevation
                      endIcon={<ShoppingBagIcon className="cart-icon" sx={{ transition: "transform 0.2s ease" }} />}
                      sx={{
                        px: 2.5,
                        py: 1.2,
                        backgroundColor: "#1976d2",
                        color: "#fff",
                        borderRadius: "12px",
                        fontWeight: "700",
                        textTransform: "none",
                        fontSize: "0.85rem",
                        "&:hover": {
                          backgroundColor: "#0d47a1",
                          boxShadow: "0 8px 20px rgba(13, 71, 161, 0.25)",
                        },
                      }}
                      onClick={() =>
                        dispatch(
                          addProduct({
                            product: item,
                          })
                        )
                  }
                >
                  Add
                </Button>
                  </Box>
                </Box>

              </ProductCard>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Products;