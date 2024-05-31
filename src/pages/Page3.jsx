import style from './page3.module.css';
import SuccessRateCard from './../components/cards/SuccessRateCard';


export default function Page3(){

    return(
        <div>
            <h1 className={style.heading}>Why Choose us?</h1>
            <div className={style.wrapper}>
                <SuccessRateCard heading={"98% Success Rate"}/>
                <SuccessRateCard heading={"100% Success Rate"}/>
                <SuccessRateCard heading={"100% Success Rate"}/>
            </div>
        </div>
    )
}