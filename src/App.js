import Data from "./composant/Data"
import {CartProvider} from "react-use-cart"
import {Routes,Route} from "react-router-dom"
import Menu from "./composant/Menu"
import Detail from "./composant/Detail"
import Order from "./composant/Order"
import Footer from "./composant/Footer"
import Produit from "./composant/Produit"
import BigMenu from "./composant/BigMenu"
import Offd from "./composant/Offd"

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function App(){
    return(
        <>
            
            <CartProvider>
                <ToastContainer />
                <BigMenu/>
                <Menu/>
                <Routes>
                    <Route path='/' element={<Data/>}/>
                    <Route path='/:produitId' element={<Detail/>}/>
                    <Route path='/order' element={<Order/>}/>
                    <Route path='/produit' element={<Produit/>}/>
                    <Route path='/Offd' element={<Offd/>}/>
                </Routes>
                <Footer/>
            </CartProvider>
            
        </>
    )
}