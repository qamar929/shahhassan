import React, { useState } from "react";
import "./admin.css";
import Aheader from "./Aheader";
import Asidebar from "./Asidebar";
import { Container } from "@mui/material";
import AddProduct from "./addProduct";
import ProductTable from "./ProductTable";
import Grid from "@mui/material/Unstable_Grid2";

export default function Aproducts() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };
  return (
    <div className="grid-container">
      <Aheader OpenSidebar={OpenSidebar} />
      <Asidebar
        openSidebarToggle={openSidebarToggle}
        OpenSidebar={OpenSidebar}
      />

      <Container maxWidth="sm">
        <Grid container spacing={4}>
          <Grid>
            <h1>Products</h1>

            <AddProduct />
          </Grid>
          <Grid>
            <ProductTable />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
