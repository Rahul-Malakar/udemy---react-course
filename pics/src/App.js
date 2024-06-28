import { useState } from 'react';
import SearchBar from './components/SeachBar';
import ImageList from './components/ImageList';
import SearchImages from './api';
function App() {

  const [images,setImages] = useState([]);
  
  const handleSubmit = async (term) => {
    const result = await SearchImages(term);
    setImages(result);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images = {images}/>
    </div>
  );
}

export default App;
