import {useState, useEffect, useContext} from 'react'
import axios from "axios"
import "bootstrap/dist/css/bootstrap.min.css"
import {CategoryContext} from "./CategoryContext"




export default function Categorie(){
    
    
    const [categories, setCategories] = useState([])
    
    
    const { setSelectedCategory } = useContext(CategoryContext);
    
    
    
    useEffect(()=>{
        const fetchdata = async()=>{
            const result = await axios('/.netlify/functions/categories')
            setCategories(result.data)
        }
        
        fetchdata()
    }, [])
    
    
    
    const handleCategorySelection = (nom)=>{
        setSelectedCategory(nom)
        
    }
    
    
    

    
    return(
    <>
        <p onClick={() => handleCategorySelection(null)}>Toutes les catégories</p>

        
        <div>
       {categories.map(categorie=>{
           return(
               <div>
               <hr />
               <p onClick={()=>handleCategorySelection(categorie)} className="me-2">{categorie.nom}</p>
               </div>
            )
       })}
       </div>
       
    </>
)
}