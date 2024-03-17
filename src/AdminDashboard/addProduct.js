import React, { useState,useEffect } from "react";
import "./admin.css";
import { Container, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import Popup from "reactjs-popup";
import Grid from "@mui/material/Unstable_Grid2";
import { useDispatch } from "react-redux";
import { addProduct } from "../Redux/Reducers/productSlice";
import {db} from '.././firebase-config'
import {collection,addDoc,getDocs} from 'firebase/firestore'
import ShowAlert from "./ShowAlert";

export default function AddProduct() {
  const [showAlerts, setShowAlerts] = useState(false);

  const [productName, setProductName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [stock, setstock] = React.useState("");
  //const [img,setImg] = React.useState("");
  const dispatch = useDispatch();
  

 
  const productsCollectionRef = collection(db,"products")
  const handleSave = async () => {
    
    const data = {
      productName: productName,
      description: description,
      price: price,
      stock: stock,
    };

    await addDoc(productsCollectionRef,{name:productName,description:description,price:price,stock:stock})

    dispatch(addProduct(data));
setShowAlerts(true);
    // Popup.close();
  };

  const handleChange = (event) => {
    setstock(event.target.value);
    console.log(stock);
  };

  const handleProductName = (event) => {
    setProductName(event.target.value);
  };

  const handleDescription = (event) => {
    setDescription(event.target.value);
  };
  const handlePrice = (event) => {
    setPrice(event.target.value);
    console.log(price);
  };

  return (
   <>


    <Container>
      <Popup
        trigger={<Button variant="contained">Add Product</Button>}
        modal // Makes the popup a modal, blocking background interaction
        closeOnDocumentClick // Close popup on clicking outside
        animation // Applies default fade animation
        // Optional: Use custom animation from your imported styles
        // animation="my-custom-animation"
        contentStyle={{
          // Customize popup style here
          backgroundColor: "rgba(255, 255, 255, 0.95)", // Transparent white
          border: "1px solid rgba(255, 255, 255, 0.5)", // White border with opacity
          borderRadius: "5px", // Smooth corners
          padding: "20px", // Optional padding
        }}
      >
        {(close) => (
          <Container maxWidth="sm">
            <Grid container spacing={2}>
              <Grid xs={6} md={4}>
                <TextField
                  id="outlined-basic"
                  label="Product Name"
                  variant="outlined"
                  value={productName}
                  onChange={handleProductName}
                />
              </Grid>
              <Grid xs={6} md={8}>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="Description"
                  variant="outlined"
                  value={description}
                  onChange={handleDescription}
                />
              </Grid>
              <Grid xs={12} md={12}>
                <TextField
                  id="outlined-basic"
                  label="Price"
                  variant="outlined"
                  value={price}
                  onChange={handlePrice}
                />
              </Grid>
              <Grid xs={12} md={6}>
                <TextField
                  id="outlined-basic"
                  label="stock"
                  variant="outlined"
                  value={stock}
                  onChange={handleChange}
                />
              </Grid>

              <Grid xs={12} md={6}>
                
             {   <input type="file"             />}
              
              </Grid>
              <Grid>
                <Button variant="contained" onClick={() => {handleSave(); close();}}>
                  Save
                </Button>
              </Grid>
            </Grid>
          </Container>
        )}
      </Popup>
    </Container>
   </>
   
  );
}
