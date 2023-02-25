import styles from './Shuffle.module.css'
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
        <div>
            <div className={styles.shffle_container}>
                    <button onClick={ShuffleClick} className={styles.shuffle_button}>Shuffle</button>
            </div>
        </div>
     );
}

export default Shuffle;