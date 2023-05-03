import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import {useCart} from "react-use-cart"

import Offg  from "./Offg"

import Offd from "./Offd"



export default function BigMenu(){
    
    const {totalItems} = useCart()
    
    return(
        <header className="d-none d-md-block">
            <div className="d-flex justify-content-between align-items-center">
                <div>
                    <Offg />
                </div>
                <div>YATTE</div>
                <div>
                    <Button variant="white">
                         <i class="bi bi-cart3"></i>
                         <span className="translate-middle badge rounded-pill" style={{backgroundColor:"#e32727"}}>{totalItems}</span>
                    </Button>
                </div>
            </div>
        </header>
    )
}