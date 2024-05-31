// import Buton from "./../components/button/Buton";
import style from "./page5.module.css";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ClientCard from "../components/cards/ClientCard";
const image = {
    person1: require("../assets/client1.png"),
    person2: require("../assets/client2.png"),
    person3: require("../assets/client3.png"),
}

export default function Page5(){

    return(
        <div className={style.wrapper}>
            <div className={style.header}>
                <div><p className={style.heading}>What says our <br/>happy Clients</p></div>
                <div className={style.arrows}>
                    <div className={style.arrow}>
                        <ArrowBackIcon/>
                    </div>
                    <div className={style.arrow}>
                        <ArrowForwardIcon/>
                    </div>
                </div>
            </div>
            <div className={style.cards}>
                <ClientCard img={image.person1} heading={"Jane Cooper"}/>
                <ClientCard img={image.person2} heading={"Devon Lane"}/>
                <ClientCard img={image.person3} heading={"Robert Fox"}/>
            </div>
        </div>
    )
}