import style from './plusButton.module.css';

export default function PlusButton(){

    return(
        <div className={style.wrapper} style={{color:"black"}}>
            <div className={style.plus} style={{textSize:"20px"}}>+</div>
        </div>
    )
}