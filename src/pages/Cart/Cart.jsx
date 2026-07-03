import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Stack,
  Divider,
  Paper,
} from "@mui/material";
// Trash/Delete icon import kiya hai
import DeleteIcon from "@mui/icons-material/Delete"; 
import { useDispatch, useSelector } from "react-redux";
import {
  addQuantity,
  removeQuantity,
  remove,
  clearCart,
} from "../../config/reduxconfig/reducer/cartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", mt: 8 }}>
        <Paper sx={{ p: 5, textAlign: "center", width: 400, boxShadow: 3 }}>
          <Typography variant="h4">🛒 Cart is Empty</Typography>
          <Typography color="text.secondary" mt={2}>
            Add some products to your cart.
          </Typography>
        </Paper>
      </Box>
    );
  }

  return (
    <Box sx={{ maxWidth: 1100, mx: "auto", p: 3 }}>
      <Typography variant="h4" fontWeight="bold" mb={3}>
        Shopping Cart
      </Typography>

      {cartItems.map((item) => (
        <Card
          key={item.id}
          sx={{
            display: "flex",
            mb: 3,
            p: 2,
            alignItems: "center",
            gap: 2,
            boxShadow: 2,
            borderRadius: 2
          }}
        >
          <CardMedia
            component="img"
            image={item.thumbnail}
            alt={item.title}
            sx={{ width: 120, height: 120, objectFit: "contain" }}
          />

          <CardContent sx={{ flex: 1 }}>
            <Typography variant="h6" fontWeight="600">{item.title}</Typography>

            <Typography mt={1} color="text.secondary">
              Price: <strong style={{ color: "#000" }}>${item.price}</strong>
            </Typography>

            <Typography color="text.secondary">
              Item Total:{" "}
              <strong style={{ color: "#000" }}>
                ${(item.price * item.quantity).toFixed(2)}
              </strong>
            </Typography>

            <Stack direction="row" spacing={2} mt={2} alignItems="center">
              <Button
                variant="contained"
                size="small"
                onClick={() => dispatch(addQuantity(item.id))}
              >
                +
              </Button>

              <Typography variant="h6" fontWeight="600">{item.quantity}</Typography>

              <Button
                variant="contained"
                color="warning"
                size="small"
                onClick={() => dispatch(removeQuantity(item.id))}
              >
                -
              </Button>

              <Button
                variant="outlined"
                color="error"
                size="small"
                onClick={() => dispatch(remove(item.id))}
              >
                Remove
              </Button>
            </Stack>
          </CardContent>
        </Card>
      ))}

      <Divider sx={{ my: 4 }} />

      {/* Grand Total Section */}
      <Paper sx={{ p: 4, borderRadius: 2, boxShadow: 3 }}>
        <Stack 
          direction={{ xs: "column", sm: "row" }} 
          justifyContent="space-between" 
          alignItems={{ xs: "flex-start", sm: "center" }}
          spacing={2}
        >
          <Typography variant="h5" fontWeight="bold" color="primary.main">
            Total Amount: ${total.toFixed(2)}
          </Typography>
          
          <Button 
            variant="contained" 
            color="error"
            startIcon={<DeleteIcon />} // Yahan Icon add kiya hai
            sx={{ 
              px: 3, 
              py: 1, 
              fontWeight: "bold",
              textTransform: "none",
              borderRadius: 2
            }}
            onClick={() => {
              if (window.confirm("Are you sure you want to clear the whole cart?")) {
                dispatch(clearCart());
              }
            }}
          >
            Clear Cart
          </Button>
        </Stack>
      </Paper>
    </Box>
  );
};

export default Cart;