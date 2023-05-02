import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {useCart} from "react-use-cart"
import Respanier from "./Respanier"


export default function Example() {
    
    
  const {totalItems} = useCart()
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="white" onClick={handleShow}>
         <i class="bi bi-cart3"></i>
         <span className="translate-middle badge rounded-pill" style={{backgroundColor:"#e32727"}}>{totalItems}</span>
      </Button>
      
     
      
      

      <Offcanvas show={show} onHide={handleClose} backdrop="static" placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title><img
                src="../../img/a2.png"
                width="42"
                alt="Visa"
                className="me-2"/></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Respanier/>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
