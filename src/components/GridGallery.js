import React, {useState} from 'react';
import imagesList from './Gallery'
import './GridGallery.css';
import ReactPaginate from 'react-paginate';

import ModalImage from 'react-modal-image';




function GridGallery() {
    const [isOpen, setIsOpen] = useState(false);

    const handleShowDialog =
      useState({isOpen: true});
      console.log('test');    

    const [image, setImage] = useState(imagesList.slice(0, 12));
    
    const[pageNumber, setPageNum] = useState(0);

    const imagesPerPage = 9;
    const pagesVisited = pageNumber * imagesPerPage;

    const displayImages = image.slice(pagesVisited, pagesVisited + imagesPerPage).map((image) => {
     return(
       <ModalImage 
          className={'img-modal'}  
          small={image.src}
          large={image.src}
          hideDownload
       />
      
     );

    });

    const pageCount = Math.ceil(image.length/ imagesPerPage)

    const changePage = ({selected}) => {
      setPageNum(selected);
    }
  
  return (
    <div>
      <div className="gallery-container">
      <h1>Gallery</h1>
      <h3>Find Insperation For Your Next Project</h3>
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        activeClassName={"paginationActive"}
      />
      <div className="gallery">
        <div className="images-container">
          {displayImages}
        </div>{/*End images-container */}
      </div>{/*End gallery */}
      </div>{/*End gallery-container */}
    </div>//End return div
  )
}

export default GridGallery 

