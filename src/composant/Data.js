import {useState, useEffect, useContext} from 'react'
import axios from "axios"
import Produit from "./Produit"
import "bootstrap/dist/css/bootstrap.min.css"

import {CategoryContext} from "./CategoryContext"


export default function Data(){
    
    const [data, setData] = useState([])
    
    const [searchQuery, setSearchQuery] = useState("");
    
    //pagination
    
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [pageSize] = useState(15);
    
    
    const { selectedCategory } = useContext(CategoryContext);
    

    useEffect(()=>{
        const fetchdata = async()=>{
            const result = await axios('/.netlify/functions/produits')
            setData(result.data)
            setTotalPages(Math.ceil(result.data.length / pageSize));
            
        }
        
        fetchdata()
    }, [pageSize])
    
    const handlePageChange = (pageNumber) => {
      setCurrentPage(pageNumber);
    };
    
    const filteredData = data
    .filter((item) => !selectedCategory || item.categorie.id === selectedCategory.id)
    .filter((item) => item.name.toLowerCase().includes(searchQuery.toLowerCase()));

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentData = filteredData.slice(startIndex, endIndex);
    
    return(
        <>
          
          <div className="container-fluid">
            <div className="row gy-3">
              <div className="px-3 d-flex  pb-2 justify-content-center">
                <input
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="form-control d-md-none rounded-pill px-3"
                  style={{ width: '90%', height: '30px' }}
                  placeholder="Rechercher ..."
                />
                              <input
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="form-control d-none d-md-block rounded-pill px-3 mb-3"
                  style={{ width: '50%', height: '50px' }}
                  placeholder="Rechercher ..."
                />
              </div>
              

    
              {currentData.map((item) => {
                return <Produit key={item.id} {...item} item={item} />;
              })}
            </div>
    
            {totalPages > 1 && (
              <div className="d-flex justify-content-center pt-3">
                <ul className="pagination">
                  {[...Array(totalPages)].map((_, index) => {
                    const pageNumber = index + 1;
                    return (
                      <li key={pageNumber} className={`page-item ${currentPage === pageNumber ? 'active' : ''}`}>
                        <button className="page-link" onClick={() => handlePageChange(pageNumber)}>
                          {pageNumber}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </div>
        </>
    )
}
