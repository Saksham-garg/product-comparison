import { type FC } from "react";
import { Button, Typography, Paper, Stack, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

interface Props {
  selectedCount: number;
  onClear: () => void;
  onCompareClick: () => void;
}

export const CompareBar: FC<Props> = ({
  selectedCount,
  onClear,
  onCompareClick,
}) => {
  if (selectedCount < 2) return null;

  return (
    <Paper
      elevation={4}
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        px: 3,
        py: 2,
        backgroundColor: "background.paper",
        borderTop: "1px solid #ccc",
        zIndex: 999,
      }}
    >
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={2}
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography variant="body1">
          {selectedCount} product{selectedCount > 1 ? "s" : ""} selected for
          comparison
        </Typography>

        <Stack direction="row" spacing={2}>
          <Button variant="contained" onClick={onCompareClick}>
            Compare Now
          </Button>
          <IconButton onClick={onClear} color="error">
            <DeleteIcon />
          </IconButton>
        </Stack>
      </Stack>
    </Paper>
  );
};
