import style from "./Home.module.css";
import Shuffle from "../components/Shuffle/Shuffle";
import Category from "../components/Category/Category";

function Home() {
    return (  
        <div className={style}>
            <div className={style.blue}>
                <div className={style.white}>
                    <Category />
                </div> 
                <Shuffle/>  
            </div> 
        </div>
    );
}

export default Home;