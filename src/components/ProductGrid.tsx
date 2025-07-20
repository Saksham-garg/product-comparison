import { type FC, useState, useMemo } from "react";
import { Grid, TextField, Typography } from "@mui/material";
import { products } from "../data/products";
import { ProductCard } from "./ProductCard";

interface Props {
  selectedIds: number[];
  onToggle: (id: number) => void;
}

export const ProductGrid: FC<Props> = ({ selectedIds, onToggle }) => {
  const [search, setSearch] = useState("");

  const filtered = useMemo(
    () =>
      products.filter(
        (p) =>
          p.name.toLowerCase().includes(search.toLowerCase()) ||
          p.brand.toLowerCase().includes(search.toLowerCase())
      ),
    [search]
  );

  return (
    <>
      <TextField
        fullWidth
        label="Search by name or brand"
        variant="outlined"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        sx={{ my: 4 }}
      />

      {filtered.length === 0 ? (
        <Typography variant="h6" align="center" color="text.secondary">
          No products match your search.
        </Typography>
      ) : (
        <Grid container spacing={3}>
          {filtered.map((product) => (
            <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={product.id}>
              <ProductCard
                product={product}
                isSelected={selectedIds.includes(product.id)}
                onSelect={onToggle}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
};
