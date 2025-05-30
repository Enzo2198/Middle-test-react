import { useState } from 'react'
import { TextField, Button, Box} from '@mui/material'
import { TableContainer, Table, TableRow, TableCell, TableBody, TableHead } from '@mui/material'
import Paper from "@mui/material/Paper";

const headers = [
    {name: 'id', text: 'ID'},
    {name: 'name', text: 'Name'},
    {name: 'price', text: 'Price'},
    {name: 'remaining', text: 'Remaining'},
    {name: 'action', text: ''}
]

export default function ({width, rows, onUpdate}) {
    const [curProduct, setCurProduct] = useState({
        id: '',
        name: '',
        price: '',
        remaining: '',
    })
    return (
        <>
            <Box sx={{
                margin:0,
                padding:0,
                display: 'flex',
                justifyContent: 'space-between'
            }}>
                <TextField sx={{
                    width: '90%',
                }} id="outlined-basic" size="small" label="search" variant="outlined" />
                <Button sx={{
                    width: '20%',
                    height: '40px',
                    marginLeft: '10px',
                }} variant="contained">Add new</Button>
            </Box>

            <TableContainer sx={{maxWidth: width, margin: 'auto'}} component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            {
                                headers.map((header) => {
                                    return <TableCell size={"small"} key={header.name}>{header.text}</TableCell>
                                })
                            }
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {
                            rows?.map((row) => {
                                // @ts-ignore
                                return (
                                  <TableRow key={row.id}>
                                      {
                                          headers.map((header) => {
                                              if (header.name === 'action') {
                                                  // @ts-ignore
                                                  return RenderActionBtn(headers, row.id, () => onUpdate(row.id))
                                              }

                                              const rowKey = header.name
                                              // const header = headers.find(h => h.name === rowKey)
                                              return (
                                                <TableCell size={"small"} key={`${rowKey}-${row.id}`}>
                                                    {
                                                        row[rowKey]
                                                          ? header?.displayProperty ? row[rowKey][header.displayProperty] : row[rowKey]
                                                          : ''
                                                    }
                                                </TableCell>
                                              )
                                          })
                                      }
                                  </TableRow>
                                )
                            })
                        }

                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}