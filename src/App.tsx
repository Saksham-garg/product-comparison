import { Box, Container, Typography } from "@mui/material";
import { useState, useEffect, useRef } from "react";
import { products } from "./data/products";
import { ComparisonTable } from "./components/ComparisonTable";
import { ProductGrid } from "@components/ProductGrid";
import { ThemeToggle } from "@components/Theme/ThemeToggle";
import { CompareBar } from "@components/CompareBar";

interface AppProps {
  mode: "light" | "dark";
  toggleTheme: () => void;
}

function App({ mode, toggleTheme }: AppProps) {
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const compareRef = useRef<HTMLDivElement | null>(null);

  const scrollToCompare = () => {
    if (compareRef.current) {
      compareRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  useEffect(() => {
    const saved = localStorage.getItem("compare-products");
    if (saved) {
      setSelectedIds(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("compare-products", JSON.stringify(selectedIds));
  }, [selectedIds]);

  const toggleProduct = (id: number) => {
    setSelectedIds((prev) =>
      prev.includes(id)
        ? prev.filter((pid) => pid !== id)
        : prev.length < 3
        ? [...prev, id]
        : prev
    );
  };

  const selectedProducts = products.filter((p) => selectedIds.includes(p.id));

  return (
    <>
      <Container maxWidth="lg" sx={{ mb: 12 }}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mt={4}
        >
          <Typography variant="h4" fontWeight="bold">
            Product Comparison Tool
          </Typography>
          <ThemeToggle mode={mode} toggleTheme={toggleTheme} />
        </Box>

        <ProductGrid selectedIds={selectedIds} onToggle={toggleProduct} />

        <div ref={compareRef}>
          {selectedProducts.length >= 2 && (
            <ComparisonTable
              selectedProducts={selectedProducts}
              onRemove={toggleProduct}
              onClear={() => setSelectedIds([])}
            />
          )}
        </div>
      </Container>
      <CompareBar
        selectedCount={selectedIds.length}
        onClear={() => setSelectedIds([])}
        onCompareClick={scrollToCompare}
      />
    </>
  );
}

export default App;
