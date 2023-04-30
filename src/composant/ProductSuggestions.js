import {useCart} from "react-use-cart"
import axios from "axios"
import {useState, useEffect} from "react"


export default function ProductSuggestions (){
    
    const {items} = useCart()
    
    const [recommandations, setRecommandations] = useState([])
    
    
    
    
    
    useEffect(() => {
        if (items.length > 0) {

            const recommandationsData = items.filter(
                (recommandation, item) => recommandation.categorie.id === item.categorie.id && recommandation.id !== item.id
            )
            setRecommandations(recommandationsData)
        }
    }, [items])
    
    
    return(
        <>
            {recommandations.length > 0 && (
                <div>
                    <h3>Produits recommandés:</h3>
                    {recommandations.map((recommandation) => (
                        <div key={recommandation.id}>
                            <h4>{recommandation.name}</h4>
                            <p>{recommandation.description}</p>
                            <p>{recommandation.categorie.nom}</p>
                        </div>
                    ))}
                </div>
            )}
        </>
    )
}
