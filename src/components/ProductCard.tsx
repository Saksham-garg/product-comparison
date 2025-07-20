import { type FC } from "react";
import type { Product } from "@models/product";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Stack,
  Box,
} from "@mui/material";

interface Props {
  product: Product;
  isSelected: boolean;
  onSelect: (id: number) => void;
}

export const ProductCard: FC<Props> = ({ product, isSelected, onSelect }) => {
  return (
    <Card
      sx={{
        maxWidth: 320,
        width: "100%",
        height: "100%",
        border: isSelected ? "2px solid #1976d2" : "1px solid #e0e0e0",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <CardMedia
        component="img"
        height="180"
        image={product.image}
        alt={product.name}
        sx={{
          objectFit: "cover",
          backgroundColor: "#f0f0f0",
        }}
        onError={(e) => {
          (e.target as HTMLImageElement).src = "/images/placeholder.png";
        }}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6" gutterBottom noWrap>
          {product.name}
        </Typography>
        <Typography
          variant="subtitle2"
          color="text.secondary"
          gutterBottom
          noWrap
        >
          {product.brand}
        </Typography>
        <Typography variant="body1" fontWeight="bold" gutterBottom>
          {product.price}
        </Typography>
        <Box component="ul" sx={{ pl: 2, mt: 1, mb: 2 }}>
          {product.features.map((f, i) => (
            <li key={i}>
              <Typography variant="body2">{f}</Typography>
            </li>
          ))}
        </Box>
        <Stack>
          <Button
            onClick={() => onSelect(product.id)}
            variant={isSelected ? "contained" : "outlined"}
            color="primary"
            size="small"
            fullWidth
          >
            {isSelected ? "Remove" : "Add to Compare"}
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
};
