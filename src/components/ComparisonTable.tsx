import { type FC } from "react";
import { type Product } from "@types/product";
import {
  Paper,
  Typography,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button,
  Box,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

interface Props {
  selectedProducts: Product[];
  onRemove: (id: number) => void;
  onClear: () => void;
}

export const ComparisonTable: FC<Props> = ({
  selectedProducts,
  onRemove,
  onClear,
}) => {
  const highlightDiffs = (attr: keyof Product): boolean => {
    const values = selectedProducts.map((p) => p[attr]);
    return new Set(values).size > 1;
  };

  const featureCount = Math.max(
    ...selectedProducts.map((p) => p.features.length)
  );

  return (
    <Box mt={6}>
      <Paper elevation={3} sx={{ p: 3, overflowX: "auto" }}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6">Comparison View</Typography>
          <Button color="error" onClick={onClear}>
            Clear All
          </Button>
        </Box>

        <Table sx={{ mt: 2 }} size="small">
          <TableHead>
            <TableRow>
              <TableCell>Attribute</TableCell>
              {selectedProducts.map((p) => (
                <TableCell key={p.id} align="center">
                  <Box display="flex" justifyContent="center" alignItems="center" gap={1}>
                    <Typography variant="subtitle2">{p.name}</Typography>
                    <IconButton size="small" onClick={() => onRemove(p.id)}>
                      <DeleteIcon fontSize="small" />
                    </IconButton>
                  </Box>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            <TableRow
              sx={{
                backgroundColor: highlightDiffs("brand") ? "#f5f5f5" : "transparent",
              }}
            >
              <TableCell>Brand</TableCell>
              {selectedProducts.map((p) => (
                <TableCell key={p.id} align="center">
                  {p.brand}
                </TableCell>
              ))}
            </TableRow>

            <TableRow
              sx={{
                backgroundColor: highlightDiffs("price") ? "#f5f5f5" : "transparent",
              }}
            >
              <TableCell>Price</TableCell>
              {selectedProducts.map((p) => (
                <TableCell key={p.id} align="center">
                  {p.price}
                </TableCell>
              ))}
            </TableRow>

            {[...Array(featureCount)].map((_, index) => (
              <TableRow key={index}>
                <TableCell>{`Feature ${index + 1}`}</TableCell>
                {selectedProducts.map((p) => (
                  <TableCell key={p.id} align="center">
                    {p.features[index] || "-"}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Box>
  );
};
