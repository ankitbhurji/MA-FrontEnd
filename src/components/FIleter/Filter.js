import styles from './Filter.module.css'
import { useSearchParams } from "react-router-dom";
import { useParams } from "react-router-dom";

function Filter() {

    let {category} = useParams();
    let [searchParams, setSearchParams] = useSearchParams();

    function FilterChange(event){
        const name = event.target.name
        if(name=='asd'||name=="desd"){
            setSearchParams({filterByDate:name})
        }else{
            setSearchParams({filterByLike:name})
        }        
    }

    return ( 
        <div className={styles.filter_container}>
            <div className="btn-group dropstart">
                <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown">
                    FILTER
                </button>
                <ul className="dropdown-menu" onClick={FilterChange}>
                    <li><a name="true" className="dropdown-item">By Like</a></li>
                    <li><a name="asd" value="asd" className="dropdown-item">By Date(asd)</a></li>
                    <li><a name="desd" value="desd" className="dropdown-item">By Date(desd)</a></li>
                </ul>
            </div>
        </div>
     );
}

export default Filter;