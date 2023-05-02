import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Categorie from "./Categorie"

export default function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="white" onClick={handleShow}>
         <i class="bi bi-list"></i>
      </Button>
      
     
      
      

      <Offcanvas show={show} onHide={handleClose} backdrop="static">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title><h5 className="offcanvas-title" id="bdSidebarOffcanvasLabel">NOS CATÉGORIES</h5></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Categorie/>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

