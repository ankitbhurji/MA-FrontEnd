import { useEffect, useState } from "react";
import style from "./Images.module.css";
import LikeApi from "../../api/like";
import GalleryApi from "../../api/discover";
import { useParams } from "react-router-dom";
import { useSearchParams } from "react-router-dom";


function Images() {
    let {category, shuffle} = useParams();
    const [images, setImages] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const FilterByDate = searchParams.get("filterByDate");
    const FilterByLike = searchParams.get("filterByLike");

    async function AllImages(){
        // const allData = await GalleryApi(category, FilterByDate, FilterByLike, shuffle);
        const allData = [
                { Name: "animal",
                ImageURL: "www"
                },
                { Name: "science",
                ImageURL: "www"    
                },
                { Name: "science",
                ImageURL: "www"    
                },
                { Name: "science",
                ImageURL: "www"    
                }
            ]
        setImages(allData);
        console.log(allData);
        
    }


    


    async function ClickLike(ImageId){
        await LikeApi(ImageId);
        await AllImages();
    }

    

    useEffect(()=>{ 
        AllImages()
    }, [category, FilterByDate, FilterByLike, shuffle])


   


    return ( 
        <div>
            <div className={style.Images}>
                {
                    images.map((values)=>{
                        return <div>
                                    <div className={style.Img}><img src={values.ImageURL} alt="Trulli"/></div>
                                    <p className={style.like}><i style={values.Like==0 ?{color: "#C8C8C8"} : {color:"red"}} onClick={()=>{ClickLike(values._id)}} className= {"fa fa-heart"}> </i> {values.Name}</p>
                               </div>
                        
                    })
                }
            </div>
        </div>
     ); 
}

export default Images;