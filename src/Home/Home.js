import style from "./Home.module.css";
import Shuffle from "../components/Shuffle/Shuffle";
import Category from "../components/Category/Category";
import Filter from "../components/Filter/Filter";

function Home() {
    return (  
        <div className={style}>
            <div className={style.blue}>
                <div className={style.white}>
                    <Filter />
                    <Category />
                </div> 
                <Shuffle/>  
            </div> 
        </div>
    );
}

export default Home;