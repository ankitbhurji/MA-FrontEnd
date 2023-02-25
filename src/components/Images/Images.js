import styles from './Images.module.css'

import { useEffect, useState } from "react";
import GalleryApi from "../../api/discover";
import LikeApi from "../../api/like";
import { useParams } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

function Images() {

    let {category, shuffle} = useParams();
    const [images, setImages] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const FilterByDate = searchParams.get("filterByDate");
    const FilterByLike = searchParams.get("filterByLike");

    async function AllImages(){
        const allData = await GalleryApi(category, FilterByDate, FilterByLike, shuffle);
        setImages(allData);
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
            <div className={styles.image_container}>
                {images.map((image)=>{
                    return(
                        <div className={styles.images}>
                            <img src={image.ImageURL}/>
                            <div className={styles.image_info}>
                                <div>
                                    <i style={image.Like==0 ?{color: "#C8C8C8"} : {color:"red"}} 
                                        onClick={()=>{ClickLike(image._id)}} 
                                        className= {"fa fa-heart"}
                                    > 
                                    </i>
                                </div>
                                <div>{image.Name}</div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
     );
}

export default Images;