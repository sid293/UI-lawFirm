import style from './teamCard.module.css';

export default function TeamCard({img,name,cases}){

    return(
        <div className={style.wrapper}>
            <div className={style.profile}>
                <img className={style.image} src={img} alt="profile"/>
            </div>
            <div className={style.data}>
                <div style={{width:"100%"}}>
                    <p className={style.name}>{name}</p><br/>
                    <p className={style.cases}>{cases} Cases</p>
                </div>
            </div>
        </div>
    )
}