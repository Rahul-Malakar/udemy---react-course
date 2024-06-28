import ImageShow from "./ImageShow";
import './imageList.css'
function ImageList({images}) {

  const renderedImages = images.map((image)=>{
    return (
      <div key={image.id}>
        <ImageShow image = {image} />
      </div>
      
    )
  })
    return (
      <div className="imageList">{renderedImages}</div>
    )
  }
  
  export default ImageList;
  