import { TableContainer, Table, TableRow, TableCell, TableBody, TableHead } from '@mui/material'
import Paper from "@mui/material/Paper";

export default function FTable({}) {
  return (
    <>
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