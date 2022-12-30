import style from "./Shuffle.module.css"

function Shuffle() {
    
    return ( 
        <div className={style.button}>
            <button  className="btn btn-warning btn-lg d-grid gap-2 col-3 mx-auto">Shuffle</button>
        </div>
     );
}

export default Shuffle;