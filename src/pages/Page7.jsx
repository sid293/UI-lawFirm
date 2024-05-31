import style from "./page7.module.css";
import ControlledAccordions from "../components/Accordion/ControlledAccordions";

export default function Page7(){

    return(
        <div className={style.wrapper}>
            <div className={style.section1}>
                <h1 className={style.heading}>FAQ</h1>
                <p className={style.sec1description}>Amet minim mollit non deserunt ullamco est sit<br/>
                aliqua dolor do amet sint. </p>
            </div>
            <div className={style.section2}>
                <ControlledAccordions/>
            </div>
        </div>
    )
}