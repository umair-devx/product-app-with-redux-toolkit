import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from '../../config/reduxconfig/reducer/cartSlice';

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { Typography, Divider } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

const Item = styled(Paper)(({ theme }) => ({
  background: "linear-gradient(135deg, #ffffff, #e3f2fd)",
  padding: theme.spacing(2),
  textAlign: "center",
  borderRadius: "18px",
  cursor: "pointer",
  boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
  transition: "all 0.3s ease-in-out",

  "&:hover": {
    transform: "translateY(-10px) scale(1.02)",
    boxShadow: "0 15px 35px rgba(0,0,0,0.3)",
    background: "linear-gradient(135deg, #bbdefb, #90caf9)",
  },

  color: theme.palette.text.primary,
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
        // console.log(res.data.products)
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
        <CircularProgress size={100} />
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
        <Typography variant="h4" color="error">
          Something went wrong!
        </Typography>

        <Button
          variant="contained"
          color="error"
          onClick={() => window.location.reload()}
        >
          Retry
        </Button>
      </Box>
    );
  }

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
        Products
      </Typography>

      <Divider
        sx={{
          width: "120px",
          mx: "auto",
          my: 2,
          borderBottomWidth: 3,
          bgcolor: "#1976d2",
        }}
      />

      <Box
        sx={{
          flexGrow: 1,
          p: 3,
          background: "linear-gradient(135deg, #e3f2fd, #bbdefb)",
        }}
      >
        <Grid container spacing={3}>
          {data.map((item) => (
            <Grid xs={12} sm={6} md={4} lg={3} key={item.id}>
              <Item>
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                    borderRadius: "10px",
                  }}
                />

                <Typography variant="h6" mt={2}>
                  {item.title}
                </Typography>

                <Typography color="text.secondary">
                  {item.category}
                </Typography>

                <Typography sx={{ my: 1 }}>
                  {item.description.slice(0, 70)}...
                </Typography>

                <Typography
                  variant="h5"
                  color="primary"
                  fontWeight="bold"
                >
                  ${item.price}
                </Typography>

                <Button
                  variant="contained"
                  disableElevation
                  sx={{
                    mt: 2,
                    backgroundColor: "#1976d2",
                    color: "#fff",
                    borderRadius: "10px",
                    textTransform: "none",
                    "&:hover": {
                      backgroundColor: "#0d47a1",
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
                  Add To Cart
                </Button>
              </Item>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Products;