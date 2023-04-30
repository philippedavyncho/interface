import {useParams} from "react-router-dom"
import axios from "axios"
import {useState, useEffect} from "react"
import Produit from "./Produit"
import { ReactComponent as IconTruck } from "bootstrap-icons/icons/truck.svg";
import {useCart} from "react-use-cart"

import { toast } from 'react-toastify';



export default function Detail (){

    const [data, setData] = useState([])
    const [recommandations, setRecommandations] = useState([])
    const {produitId}=useParams()
    
    const {addItem} = useCart()

    useEffect(()=>{
        const fetchData = async()=>{
            const result = await axios('/.netlify/functions/produits')
            setData(result.data)
        }
        fetchData()
    }, [])
    
    const filteredData = data.filter(item => item.id === parseInt(produitId))
    const item = filteredData[0]

    useEffect(() => {
        if (data.length > 0) {
            const filteredData = data.filter(item => item.id === parseInt(produitId))
            const item = filteredData[0]
            const recommandationsData = data.filter(
                recommandation => recommandation.categorie.id === item.categorie.id && recommandation.id !== item.id
            )
            setRecommandations(recommandationsData)
        }
    }, [data, produitId])

    return(
        <>
            {item && (
                <>
                <div className="row g-1 d-md-none">
                    <div className="col-4">
                         <img src={item.image} alt={item.name} className="img-fluid p-0 mx-0" style={{height:"120px"}}/>
                    </div>
                    <div className="col-8">
                        <p className="h6">{item.name}</p>
                         <p>{item.description}</p>
                         <button className="btn text-white" style={{backgroundColor:"#413beb", fontSize:"12px"}} onClick={() => {
                          addItem(item);
                          toast.info("Un article a été ajouter aux panier");
                        }}>
                    Ajouter au panier
                    </button>
                    </div>
                </div>
                
                
                <div className="d-flex d-none d-md-inline-flex">
                    <div className="me-3">
                        <img src={item.image} alt={item.name} className="img-fluid p-0 mx-0" style={{width:"400px"}}/>
                    </div>
                    <div>
                        <p className="h3">{item.name}</p>
                         <p className="fs-3">{item.description}</p>
                    </div>
                </div>
                
                </>
            )}
            
            <div className="alert alert-info my-3 mx-2">
                <p className="m-0 text-center" style={{fontSize:"10px"}}>
                  <IconTruck className="i-va me-2"/> livraison gratuite pour tout achat de plus de 100 mille francs
                </p>
              </div>
            
            

            {recommandations.length > 0 && (
                <div className="container-fluid">
                <div className="row g-3">
                    <p>Nous vous recommandons aussi ces articles</p>
                    {recommandations.map((item) => {
                    return <Produit key={item.id} {...item} item={item} />;
                  })}
                </div>
                </div>
            )}
        </>
    )
}
