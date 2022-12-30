import axios from "axios";


export default async function GalleryApi(category, FilterByDate, FilterByLike="", shuffle){
    
    // const url = `http://localhost:3000/api/discover/${category}`
    // const url = `http://localhost:3000/api/discover/${category}?sortByLike=${FilterByLike}&sortByDate=${FilterByDate}&shuffle=${shuffle}`
    // const url = `http://localhost:3000/api/discover/${category}/${shuffle}?filterByLike=${FilterByLike}&filterByDate=${FilterByDate}`
    const url = `https://ma-backend.onrender.com/api/discover/${category}/${shuffle}?filterByLike=${FilterByLike}&filterByDate=${FilterByDate}`
    const allGallery = await axios.get(url);
    return allGallery.data;
    
    
}

