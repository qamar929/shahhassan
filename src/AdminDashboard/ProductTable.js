import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addProduct,removeProduct } from "../Redux/Reducers/productSlice";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import {db} from '.././firebase-config'
import {collection,addDoc,getDocs} from 'firebase/firestore'


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function ProductTable() {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);

  const productsCollection = collection(db, "products");
  useEffect(() => {
    const getProducts = async () => {
      const data = await getDocs(productsCollection);
      setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      dispatch(addProduct(products));
    };
    
    getProducts();

}, [products]);
  
  //const showProducts = useSelector((state) => state.products)
  //setProducts ();

  const deleteProduct = ((id)=>{

    dispatch(removeProduct(id))

  });
 

 

  return (
    <TableContainer
      sx={{ minWidth: 1000 }}
      aria-label="custom pagination table"
      component={Paper}
    >
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Product Name</StyledTableCell>
            <StyledTableCell align="right">Price</StyledTableCell>
            <StyledTableCell align="right">stock</StyledTableCell>
            <StyledTableCell align="right">Actions</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product) => (
            <StyledTableRow key={product.id}>
              <StyledTableCell component="th" scope="row">
                {product.name}
              </StyledTableCell>
              <StyledTableCell align="right">{product.price}</StyledTableCell>
              <StyledTableCell align="right">
                {product.stock}
              </StyledTableCell>
              <StyledTableCell align="right">
                <IconButton color="secondary" aria-label="delete" onClick={ ()=> deleteProduct(product.id) }>
                  <DeleteIcon  />
                </IconButton>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
