import { ReactComponent as IconCreditCard2Front } from "bootstrap-icons/icons/credit-card-2-front.svg";
import { ReactComponent as IconCart3 } from "bootstrap-icons/icons/cart3.svg";


import {useState} from "react"

import axios from "axios"

import {useCart} from "react-use-cart"

import { toast } from 'react-toastify';



export default function Order({handleClose}){
    

    
        //state (état ou données)
    
    const [nom, setNom] = useState("")
    const [phone, setPhone] = useState(null)
    
    const {items,cartTotal, emptyCart} = useCart()
    
    
    

    

    
    //comportements
    
    const handleSubmit = (e)=>{
        e.preventDefault()
        
        for(let i=0 ; i<items.length; i++){
            axios({
              method: 'post',
              url: '/.netlify/functions/commande',
              data: {
                "nom": nom,
                
                "phone": phone,
                
                "quantity": JSON.stringify(items[i].quantity),
                
                "produit": JSON.stringify(items[i].id)
              },
            })
            
            .then(response => {
              // La commande a été passée avec succès, vider le panier
              emptyCart();
            
            })
            
            .catch(error => {
              console.log(error);
            });
        }
        
        toast.success("Commande prise en compte. Livraison dans un delai de 24h. Merci!",  { autoClose: 30000 }) ;
        
        setNom("")
        setPhone("")
        
        //alert("commande passé avec succès")
    }
    
    
    
    
    const handleChange = (e)=>{
        setNom(e.target.value)
    }
    
    const handleOnChange = (e)=>{
        setPhone(e.target.value)
    }
    

    
    

    return(
        <>
        <div>
          <div className="row">
            <div className="col-md-12">
              <div className="card mb-3 border-info">
                <div className="card-header bg-info">
                  <IconCreditCard2Front className="i-va" /> Formulaire De Commande
                </div>
                <form onSubmit={handleSubmit}>
                <div className="card-body">
                  
                  <div className="row g-3">
                    <div className="col-md-6">
                      <input
                        value={nom}
                        type="text"
                        className="form-control"
                        placeholder="Nom"
                        onChange={handleChange}
                       required="true"/>
                    </div>
                    <div className="col-md-6">
                      <input
                        value={phone}
                        type="number"
                        className="form-control"
                        placeholder="Numéro de Téléphone"
                        onChange={handleOnChange}
                       required="true"/>
                    </div>
                  </div>
            
                </div>
                <div className="card-footer border-info d-grid">
    
                  <button type="submit" className="btn btn-primary" onClick={handleClose}>
                    valider
                  </button>
                </div>
                </form>
              </div>
            </div>
            <div className="col-md-12">
              <div className="card">
                <div className="card-header">
                  <IconCart3 className="i-va" />
                  <span className="ms-3">MA COMMANDE</span>
                </div>
                {items.map((item,index)=>{
                        return(
                <ul className="list-group list-group-flush" key={index}>
                  <li className="list-group-item d-flex justify-content-between lh-sm">
                    <div>
                      <h6 className="my-0">{item.name}</h6>
                    </div>
                    <span className="text-muted">{item.price*item.quantity} FCFA</span>
                  </li>
                </ul>)
                })}
                <div className="list-group-item d-flex justify-content-between py-3 mx-3">
                    <span>Total </span>
                    <strong>{cartTotal} FCFA</strong>
                </div>
              </div>
              
            </div>
            <button className="btn btn-danger mt-2 ms-3" style={{width:"90%"}} onClick={handleClose}>
                annuler la commande
            </button>
          </div>
        </div>
        </>
    )
}