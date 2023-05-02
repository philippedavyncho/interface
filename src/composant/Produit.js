import "bootstrap/dist/css/bootstrap.min.css"

import {useCart} from "react-use-cart"

import {Link} from "react-router-dom"

import { toast } from 'react-toastify';


export default function Produit({name, price, image, item, id}){
    
    
    
    
    const {addItem} = useCart()
    
    
    
    
    
    return(
        <>
            <div className='col-md-3 col-4 g-1'>
                <div className="card">
                  <Link to={`/${id}`}>
                    <img src={image} className="card-img-top d-none d-md-block" alt={name} style={{width:"200px"}}/>
            
                  <img src={image} className="card-img-top d-md-none w-300" alt={name}/>
                  </Link>
                  <div className="card-body text-center d-none d-md-block">
            
                    <h5 className="card-title d-none d-md-block">{name}</h5>
                    <h5 className="card-title d-md-none" style={{fontSize:"10px"}}>{name}</h5>
                    <p className="card-text d-none d-md-block"><strong>{price}</strong> Fcfa</p>
                    <p className="card-text  d-md-none" style={{fontSize:"10px"}}><strong>{price}</strong> Fcfa</p>
                    
                    <button href="#" className="d-none d-md-inline btn text-white" style={{backgroundColor:"#413beb"}} onClick={()=>addItem(item)}>Ajouter au panier</button>
                  </div>
                  
                  <div className="card-body  d-md-none">
                    <h5 className="card-title" style={{fontSize:"10px"}}>{name}</h5>
                    <p className="card-text  d-md-none" style={{fontSize:"12px"}}><strong>{price}</strong> Fcfa</p>
                    
                    <button href="#" className="d-none d-md-inline btn text-white" style={{backgroundColor:"#413beb"}} onClick={()=>addItem(item)}>Ajouter au panier</button>
                  </div>
                  
                  
                  <div  className=" d-md-none text-white text-center rounded-bottom py-2" style={{backgroundColor:"#413beb", fontSize:"10px"}} onClick={() => {
                          addItem(item);
                          toast.info("Un article a été ajouter aux panier");
                        }}>Ajouter au panier</div>
                </div>
            </div>

        </>
    )
}

