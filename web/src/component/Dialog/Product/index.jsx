import {DialogContainer} from "../../index.js";
import {Stack, TextField} from "@mui/material";

export default ({isOpen, onClose, product, setProduct, onSave}) => {

  const onChange = (event) => {
    setProduct({...product, [event.target.name]: event.target.value})
  }

  return (
    <DialogContainer
      isOpen={isOpen}
      onClose={onClose}
      onSave={onSave}
    >
      <Stack sx={{ width: 450 }} spacing={2}>
        <TextField
          fullWidth
          name={"name"}
          label="Name"
          variant="standard"
          value={product.name}
          onChange={onChange}
        />
        <TextField
          fullWidth
          name={"price"}
          label="Price"
          variant="standard"
          value={product.price}
          onChange={onChange}
        />
        <TextField
          fullWidth
          name={"remaining"}
          label="Remaining"
          variant="standard"
          value={product.remaining}
          onChange={onChange}
        />

      </Stack>
    </DialogContainer>
  )
}