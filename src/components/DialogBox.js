import React, { useEffect, useState } from "react";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Paper from '@mui/material/Paper';
import Draggable from 'react-draggable';
import Cart from "./Cart/Cart";
import Box from '@mui/material/Box';

function PaperComponent(props) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}

export default function DialogBox(props) {
 

 
  return (
    <React.Fragment>
      
      <Box
            noValidate
            component="form"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              m: 'auto',
              width: 700,
            }}
          >

<Dialog
        open={props.open}
        onClose={props.onClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
          Cart Items 
        </DialogTitle>
        <DialogContent>
         <Cart/>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={props.onClose}>
            Cancel
          </Button>
          <Button onClick={props.onClose}>Checkout</Button>
        </DialogActions>
      </Dialog>

</Box>
    </React.Fragment>
  );
}