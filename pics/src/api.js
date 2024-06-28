import axios from 'axios';

const SearchImages = async(term) => {
  
  const response = await axios.get('https://api.unsplash.com/search/photos/', {
    headers: {
      Authorization: process.env.REACT_APP_AUTH_ACCESS_KEY,
    },
    params: {
      query: term,
      per_page: 30
    },
  });
  
  return response.data.results;
};

export default SearchImages;