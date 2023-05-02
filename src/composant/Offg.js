
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Categorie from "./Categorie"

export default function Offg() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="white" onClick={handleShow}>
        <i class="bi bi-list"></i>
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>NOS CATÉGORIES</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Categorie />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

