import style from "./Shuffle.module.css"
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState } from "react";

function Shuffle() {
    const navigate = useNavigate();
    let {category} = useParams();
    
    const [suffleNumber, setSuffleNumber] = useState(0)
    if(suffleNumber==5){
        setSuffleNumber(0);
    };

    function ShuffleClick(){
        setSuffleNumber(suffleNumber + 1);
        navigate(`/${category}/${suffleNumber}`);     
    };

    return ( 
        <div className={style.button}>
            <button onClick={ShuffleClick} className="btn btn-warning btn-lg d-grid gap-2 col-3 mx-auto">Shuffle</button>
        </div>
     );
}

export default Shuffle;