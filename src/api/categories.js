import axios from "axios";


async function CategoriesApi(categoryName){
    // const url = "http://localhost:3000/api/discover/categories"
    const url = "https://ma-backend.onrender.com/api/discover/categories"
    // const url = `http://localhost:3000/api/discover/nature/0`
    const allCategories = await axios.get(url)
    return allCategories.data;
}



export default CategoriesApi;
