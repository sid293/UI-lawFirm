import style from './page8.module.css';

export default function Page8(){

    return(
        <div className={style.wrapper}>
            <div className={style.section}>
                <h1 className={style.heading}>Subscribe Our Newsletter</h1>
                <div className={style.content}>
                    <input className={style.input} type="text" placeholder="Name" />
                    <input className={style.input} type="text" placeholder="Enter your Email" />
                    <button className={style.buton}>SEND</button>
                </div>
            </div>
        </div>
    )
}