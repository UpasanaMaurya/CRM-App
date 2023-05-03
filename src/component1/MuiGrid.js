import React from "react";
// import Table from "@mui/material/Table";
// import Paper from "@mui/material/Paper";
// import TableContainer from "@mui/material/TableContainer";
// import { TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import styled from "styled-components";
import { DataGrid } from "@mui/x-data-grid";
import { useGridData } from "./GridData";
const MuiContainer = styled.div`
  width: 100vw;
  height: 100vh;
  min-width: 600px;
`;
const columnDefs = [{ field: "make" }, { field: "model" }, { field: "price" }];

const MuiGrid = () => {
  const rowData = useGridData({
    url: "https://www.ag-grid.com/example-assets/row-data.json",
  });
  return (
    <MuiContainer>
      <DataGrid checkboxSelection rows={rowData} columns={columnDefs} />
    </MuiContainer>
  );
};

export default MuiGrid;

// <TableContainer component={Paper}>
//       <Table sx={{ minWidth: 650 }}>
//         <TableHead>
//           <TableRow>
//             <TableCell>empID</TableCell>
//             <TableCell>Name</TableCell>
//             <TableCell>age</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rowData.map((row) => (
//             <TableRow
//               key={row.empID}
//               sx={{ "&:last-child td,&:last-child th": { border: 0 } }}
//             >
//               <TableCell component="th" scope="row">
//                 {row.empID}
//               </TableCell>
//               <TableCell>{row.name}</TableCell>
//               <TableCell>{row.age}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
