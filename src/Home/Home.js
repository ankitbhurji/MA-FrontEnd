import styles from './Home.module.css'
import Category from '../components/Category/Category';
import Images from '../components/Images/Images';
import Shuffle from '../components/Shuffle/Shuffle';
import Filter from '../components/FIleter/Filter';

function Home1() {
    return ( 
        <div>
            <div className={styles.container}>
                <div className={styles.sub_container_1}>
                    <div className={styles.sub_container_1_1}>
                        <Filter/>
                        <Category/>
                        <Images/>
                    </div>
                    <Shuffle/>
                </div>
            </div>
        </div>
     );
}

export default Home1;