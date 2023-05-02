import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"


import Offg  from "./Offg"

import Offd from "./Offd"



export default function BigMenu(){
    
    
    
    return(
        <header className="d-none d-md-block">
            <div className="d-flex justify-content-between align-items-center">
                <div className="">
                    <Offg/>
                </div>
                <div>YATTE</div>
                <div className="">
                    <Offd/>
                </div>
            </div>
        </header>
    )
}