import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { addProduct } from "../config/reduxconfig/reducers/cartSlice";

const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <Card sx={{ maxWidth: 300, m: 2, borderRadius: 3 }}>
      <CardMedia
        component="img"
        height="220"
        image={item.image}
        alt={item.title}
        sx={{ objectFit: "contain", p: 2 }}
      />

      <CardContent>
        <Typography gutterBottom variant="h6" noWrap>
          {item.title}
        </Typography>

        <Typography variant="h5" color="success.main">
          ${item.price}
        </Typography>
      </CardContent>

      <CardActions sx={{ justifyContent: "space-between", px: 2, pb: 2 }}>
        <Button
          variant="outlined"
          onClick={() => navigate(`/product/${item.id}`)}
        >
          Show More
        </Button>

        <Button
          variant="contained"
          color="primary"
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
      </CardActions>
    </Card>
  );
};

export default ProductCard;