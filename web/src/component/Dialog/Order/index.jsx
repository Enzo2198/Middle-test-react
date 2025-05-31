import { DialogContainer } from "../../index.js";
import { Stack, TextField } from "@mui/material";

export default ({ isOpen, onClose, product, setProduct, onSave }) => {

  const onChange = (event) => {
    setProduct({ ...product, [event.target.name]: event.target.value });
  }

  return (
    <DialogContainer
      isOpen={isOpen}
      onClose={onClose}
      onSave={onSave}
    >
      <Stack sx={{ width: 450, mt: 1 }} spacing={2}>
        <TextField
          label="Date"
          type="date"
          name="date"
          value={product.date || ''}
          onChange={onChange}
          InputLabelProps={{
            shrink: true,
          }}
          fullWidth
        />
        <TextField
          fullWidth
          name="product_id"
          label="Product ID"
          variant="standard"
          value={product.product_id || ''}
          onChange={onChange}
        />
        <TextField
          fullWidth
          name="quantity"
          label="Quantity"
          variant="standard"
          value={product.quantity || ''}
          onChange={onChange}
        />
        <TextField
          fullWidth
          name="amount"
          label="Amount"
          variant="standard"
          value={product.amount || ''}
          onChange={onChange}
        />
      </Stack>
    </DialogContainer>
  );
}
