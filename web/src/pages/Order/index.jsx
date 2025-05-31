import { useState } from 'react'
import { TextField, Button, Box} from '@mui/material'
import { TableContainer, Table, TableRow, TableCell, TableBody, TableHead } from '@mui/material'
import Paper from "@mui/material/Paper";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { OrderDialog } from "../../component/index.js";

const headers = [
  {name: 'id', text: 'ID'},
  {name: 'date', text: 'Date'},
  {name: 'product_id', text: 'Product Id'},
  {name: 'quantity', text: 'Quantity'},
  {name: 'amount', text: 'Amount'},
  {name: 'action', text: ''}
]

export default function ProductTable({ width }) {
  const [isOpenDialog, setIsOpenDialog] = useState(false)
  const [curProduct, setCurProduct] = useState({
    id: '',
    name: '',
    price: '',
    remaining: '',
  });

  const [products, setProducts] = useState([
    {id: 1, date: '2025-05-25', product_id: 2, quantity: 2, amount: 16000},
    {id: 2, date: '2025-05-25', product_id: 1, quantity: 1, amount: 20000},
  ]);


  const onAdd = () => {
    setIsOpenDialog(true)
  }



  const handleDelete = (id) => {
    setProducts(prev => prev.filter(p => p.id !== id));
  };

  const RenderActionBtn = (rowId, onDelete) => (
    <TableCell size="small" key={`action-${rowId}`}>
      <DeleteOutlineIcon
        color="error"
        sx={{ cursor: 'pointer' }}
        onClick={() => onDelete(rowId)}
      />
    </TableCell>
  );

  return (
    <>
      <Box sx={{ margin: 0, padding: 0, display: 'flex', justifyContent: 'space-between' }}>
        <TextField
          sx={{ width: '90%' }}
          id="outlined-basic"
          size="small"
          label="search"
          variant="outlined"
        />
        <Button
          sx={{ width: '20%', height: '40px', marginLeft: '10px' }}
          variant="contained"
          onClick={onAdd}
        >
          Add new
        </Button>
      </Box>

      <TableContainer sx={{ maxWidth: width, margin: 'auto', mt: 2 }} component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              {headers.map((header) => (
                <TableCell size="small" key={header.name}>{header.text}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((row) => (
              <TableRow key={row.id}>
                {headers.map((header) => {
                  if (header.name === 'action') {
                    return RenderActionBtn(row.id, handleDelete);
                  }

                  const rowKey = header.name;
                  return (
                    <TableCell size="small" key={`${rowKey}-${row.id}`}>
                      {row[rowKey]}
                    </TableCell>
                  );
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <OrderDialog
        product={curProduct}
        setProduct={setCurProduct}
        // onSave={onSave}
        isOpen={isOpenDialog}
        onClose={() => setIsOpenDialog(false)}
      />
    </>
  );
}
