import styles from './Category.module.css'

import React, { useState, useEffect } from 'react'
import CategoriesApi from "../../api/categories";
import { useParams } from "react-router-dom";
import {useNavigate} from "react-router-dom"
import axios from "axios";

function Category() {

    let {category, shuffle} = useParams();
    const navigate = useNavigate();

    const [categoris, setCategories] = useState([]);

    function GetCategoryName(categoryName){
        navigate(`/${categoryName}/0`);
    }

    async function addData(){
        const CategoryData = await CategoriesApi();
        setCategories(CategoryData);
      
        // if(!category){
        //     const DefaultCategory = categoris[0].Name
        //     navigate(`/${DefaultCategory}/0`);
        //     console.log(categoris[0].Name);
        //     console.log("ok");
        // }
        
    }

    useEffect(()=>{
        addData()
    }, [category])


    return ( 
        <div>
            <div className={styles.category_container}>
                {
                    categoris.map((category)=>{
                        return(
                            <div onClick={()=>{GetCategoryName(category.Name)}} className={styles.categories}>{category.Name}</div>
                        )
                    })
                }
            </div>
        </div>
     );
}

export default Category;