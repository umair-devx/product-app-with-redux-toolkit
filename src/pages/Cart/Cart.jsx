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
import { useDispatch, useSelector } from "react-redux";
import {
  addQuantity,
  removeQuantity,
  remove,
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
        <Paper sx={{ p: 5, textAlign: "center", width: 400 }}>
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
          }}
        >
          <CardMedia
            component="img"
            image={item.thumbnail}
            alt={item.title}
            sx={{ width: 120, height: 120, objectFit: "contain" }}
          />

          <CardContent sx={{ flex: 1 }}>
            <Typography variant="h6">{item.title}</Typography>

            <Typography mt={1}>
              Price: <strong>${item.price}</strong>
            </Typography>

            <Typography>
              Item Total:{" "}
              <strong>
                ${(item.price * item.quantity).toFixed(2)}
              </strong>
            </Typography>

            <Stack direction="row" spacing={2} mt={2}>
              <Button
                variant="contained"
                onClick={() => dispatch(addQuantity(item.id))}
              >
                +
              </Button>

              <Typography variant="h6">{item.quantity}</Typography>

              <Button
                variant="contained"
                color="warning"
                onClick={() => dispatch(removeQuantity(item.id))}
              >
                -
              </Button>

              <Button
                variant="contained"
                color="error"
                onClick={() => dispatch(remove(item.id))}
              >
                Remove
              </Button>
            </Stack>
          </CardContent>
        </Card>
      ))}

      <Divider sx={{ my: 3 }} />

      <Paper sx={{ p: 3 }}>
        <Typography variant="h5" fontWeight="bold">
          Total Amount: ${total.toFixed(2)}
        </Typography>
      </Paper>
    </Box>
  );
};

export default Cart;
