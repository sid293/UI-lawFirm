import style from './page2.module.css';

export default function Page2(){

    return(
        <div className={style.wrapper}>
            <div>
                <p className={style.intro}>Let's Introduce <br/> Ourself</p>
            </div>
            <div className={style.section2}>
                <div>
                    <h3 className={style.heading} >Crimial Lawyer</h3> 
                    <p  className={style.description} >Amet minim mollit non deserunt ullamco est <br/>
                        sit aliqua dolor do amet sint. Velit officia consequatduis <br/>
                        enim velit mollit Exercitation</p>
                </div>
            </div>
        </div>
    )
}