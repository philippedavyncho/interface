import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import {useCart} from "react-use-cart"

import "../index.css"

import Slider from "./Slider"

import Respanier from "./Respanier"

import Categorie from "./Categorie"




export default function Menu(){
    
    const {totalItems} = useCart()
    
    return(
        <>
        <header className="navbar navbar-expand-lg bd-navbar sticky-top" style={{backgroundColor: "#FFFFFF"}}>
            <nav className="container-xxl bd-gutter flex-wrap flex-lg-nowrap" aria-label="Main navigation">
                <div className="bd-navbar-toggle">
                  <button className="border-0 p-2 bg-white" type="button" data-bs-toggle="offcanvas" data-bs-target="#bdSidebar" aria-controls="bdSidebar" aria-label="Toggle docs navigation">
<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16" style={{color:"#030126"}}> <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/> </svg>
            
                    <span class="d-none fs-6 pe-1">Browse</span>
                  </button>
                </div>
                
                <span className="navbar-brand p-0 me-0 me-lg-2" aria-label="Bootstrap" style={{color:"#030126"}}>YATTE</span>
    
        <div class="d-flex">
        

      
            
            <button className=" position-relative border-0 bg-white " type="button" data-bs-toggle="offcanvas" data-bs-target="#bdNavbar" aria-controls="bdNavbar" aria-label="Toggle navigation">
                   <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16" style={{color:"#030126"}}>
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
</svg>
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill" style={{backgroundColor:"#e32727"}}>{totalItems}</span>
                    
                  </button>
            
            

        </div>
        
        <div class="offcanvas-lg offcanvas-end flex-grow-1" tabindex="-1" id="bdNavbar" aria-labelledby="bdNavbarOffcanvasLabel" data-bs-scroll="true">
      <div class="offcanvas-header px-4 pb-0">
        <p class="offcanvas-title" id="bdSidebarOffcanvasLabel"><img
                src="../../img/a2.png"
                width="42"
                alt="Visa"
                className="me-2"
              /></p>
        <button type="button" class="btn-close btn-close" data-bs-dismiss="offcanvas" aria-label="Close" data-bs-target="#bdNavbar"></button>
      </div>
      
      <div class="offcanvas-body">
        <Respanier />
      </div>
      
      
      
      
      
      
      
      
      
      
      
      
     </div>
     
     
     
     
     
            </nav>
        </header>
        <div style={{height:"10px", backgroundColor:"#090117"}} className="mb-0">
    
        </div>
        
        
        <Slider className="my-0"/>
        
        
        <div className="container-xxl bd-gutter mt-3 my-md-4 bd-layout">
            <aside className="bd-sidebar">
      <div className="offcanvas-lg offcanvas-start" tabindex="-1" id="bdSidebar" aria-labelledby="bdSidebarOffcanvasLabel">
        <div className="offcanvas-header border-bottom">
          <h5 className="offcanvas-title" id="bdSidebarOffcanvasLabel">NOS CATÉGORIES</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" data-bs-target="#bdSidebar"></button>
        </div>

        <div class="offcanvas-body">
            <div data-bs-dismiss="offcanvas" data-bs-target="#bdSidebar" >
                <Categorie />
            </div>
        </div>
      </div>
    </aside>
        </div>
        
        
        
        

        
        
        
        </>
    )
}