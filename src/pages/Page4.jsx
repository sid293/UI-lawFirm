import style from './page4.module.css';
// import area1 from './../assets/area1.png';
// import area2 from './../assets/area2.png';
const images = {
    area1:require('../assets/area1.png'),
    area2:require('../assets/area2.png'),
    area3:require('../assets/area3.png'),
    area4:require('../assets/area4.png'),
    area5:require('../assets/area5.png'),
    area6:require('../assets/area6.png'),
};

export default function Page4(){

    return(
        <div className={style.wraper}>
            <h1 className={style.heading}>Area of Practices</h1>
            <div className={style.wrapper}>
            <div className={style.images}>
                <div>
                    <img style={{height:"100%", width:"100%"}} src={images.area1} alt="area" />
                </div>
                <div>
                    <img style={{height:"100%", width:"100%"}} src={images.area2} alt="area" />
                </div>
                <div>
                    <img style={{height:"100%", width:"100%"}} src={images.area3} alt="area" />
                </div>
                <div>
                    <img style={{height:"100%", width:"100%"}} src={images.area4} alt="area" />
                </div>
                <div>
                    <img style={{height:"100%", width:"100%"}} src={images.area5} alt="area" />
                </div>
                <div>
                    <img style={{height:"100%", width:"100%"}} src={images.area6} alt="area" />
                </div>
            </div>
            </div>
        </div>
    )
}