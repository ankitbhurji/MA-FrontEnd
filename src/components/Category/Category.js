import style from "./Category.module.css";
import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import {useNavigate} from "react-router-dom"


function Category() {

    let {category, shuffle} = useParams();
    const navigate = useNavigate();

    const [categoris, setCategories] = useState([]);

    function GetCategoryName(categoryName){
        navigate(`/${categoryName}/0`);
    }
    

    

    async function addData(){
        // const CategoryData = await CategoriesApi();
        // setCategories(CategoryData);
      const CategoryData = [
        { Name: "animal" },
        { Name: "science" },
        { Name: "nature" },
        { Name: "art" },
      ]
      setCategories(CategoryData)
    }

    

    useEffect(()=>{
        addData()
    }, [category])
    
    return ( 
        <div className={style.Category}>
            {
               categoris.map((x)=>{
                return <div className="col-3 btn btn-light" onClick={()=>{GetCategoryName(x.Name)}}>{x.Name}</div>
               })
            }
        </div>
     );
}

export default Category; 