import {useCart} from "react-use-cart"

import "bootstrap/dist/css/bootstrap.min.css"

import "bootstrap/dist/js/bootstrap.bundle.min.js"


import { ReactComponent as IconTruck } from "bootstrap-icons/icons/truck.svg";

//modal
import Modal from 'react-bootstrap/Modal'

import {useState, useEffect} from 'react'

import Order from "./Order"

import axios from "axios"

import Produit from "./Produit"

import {Link} from "react-router-dom"


export default function Offd(){
    
    //recommandation
    const [data, setData] = useState([])
    
    //debut Modal
    const [show, setShow] = useState(false);

    const handleClose = () =>{
        setShow(false);
        

    } 
    const handleShow = () => setShow(true);
    //fin modal
    
    
    const {
        isEmpty, 
        items,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart
        
    } = useCart()
    
    
    useEffect(()=>{
        const fetchData = async()=>{
            const result = await axios('/.netlify/functions/produits')
            setData(result.data)
        }
        fetchData()
    }, [])
    
    const article = items.map(item =>item.name)
    
    const kategorie = items.map(item =>item.categorie.nom)
    
    const filteredData = data.filter((item) => 
        kategorie.includes(item.categorie.nom) && 
        !article.includes(item.name)
    );
    

    if(isEmpty) return <> <div className="text-center"><div><img
                src="../../img/a2.png"
                width="42"
                alt="Visa"
                className="me-2"
              /></div><p className="my-3 py-3 fs-3" aria-label="Bootstrap">votre panier est vide</p><img
                src="../../img/a2.png"
                width="300"
                alt="Visa"
                className="mb-3 pb-3"
              /><Link to="/"><button type="button" className="btn btn-primary">continuer votre shopping</button></Link></div></>
    return(
        <>
            <div className="text-center mb-3"><img
                src="../../img/a2.png"
                width="42"
                alt="Visa"
                className="me-2"
              /></div>
            <div className="container">
                <div className="border border-6 border-info p-3 rounded">
                        {items.map((item,index)=>{
                        return(
                        <div key={index}>
                        <div className="card mt-2 shadow">
                        <div className="card-body">
                            <div className="text-center">
                                <img src={item.image} alt={item.name} style={{width:"8rem"}} />
                                <p>{item.name}</p>
                                </div>
                                <div className="d-flex justify-content-between">
                                <button className="btn btn-danger pb-4 mt-1 ms-3 " onClick={()=>removeItem(item.id)} style={{height:"30px"}}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
  <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
</svg></button>
                                
                                
                                
                               
                                <div class="btn-group" role="group" aria-label="Basic example">
                                  <button type="button" class="btn btn-primary" onClick={()=>updateItemQuantity(item.id, item.quantity+1)}>+</button>
                                  <button type="button" class="btn btn-info text-white">{item.quantity}</button>
                                  <button type="button" class="btn btn-primary" onClick={()=>updateItemQuantity(item.id, item.quantity-1)}>-</button>
                                </div>
                                </div>
                                </div>
                                </div>
                                </div>
                                )
                        })}
                        <div className="card mt-2 shadow rounded-pill" style={{height:"40px"}}>
                        <div className="card-body">
                            <h4 className="text-center font-monospace" style={{color:"#030126", fontSize:"16px"}}><span style={{letterSpacing:"2px"}}>{cartTotal} </span> FCFA</h4>
                        </div>
                        </div>
                        
                        <div className="d-flex justify-content-center mt-3">
                <button className="btn btn-danger" onClick={()=>emptyCart()} style={{fontSize:"14px"}}>
                    Vider le panier
                </button>
                
                
                    <button className="btn btn-primary ms-2" style={{fontSize:"14px"}} data-bs-dismiss="offcanvas" data-bs-target="#bdNavbar" onClick={handleShow}>
                        Commander
                    </button>
                
             </div>
                </div>
            </div>
            
            <div className="alert alert-info mt-3">
                <p className="m-0" style={{fontSize:"10px"}}>
                  <IconTruck className="i-va me-2"/> livraison gratuite pour tout achat de plus de 100 mille francs
                </p>
              </div>
              
              <div className="row">
                <p>Nous vous recommandons aussi ces articles</p>
                  {filteredData.map((item) => {
                    return <Produit key={item.id} {...item} item={item} />;
                  })}
              </div>

              
    <Modal show={show} onHide={handleClose}>
        <Modal.Body>
            <Order handleClose={handleClose}/>
        </Modal.Body>
    </Modal>
        </>
    )
}

