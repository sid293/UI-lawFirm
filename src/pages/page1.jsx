import Navbar from "./../components/Navbar";
import style from './page1.module.css';
import HeroImage from "./../assets/hero.png";
import Buton from "./../components/button/Buton";
import EmailIcon from '@mui/icons-material/Email';


export default function Page1(){

    return(
        <div>
            <Navbar></Navbar>
            <div style={{display:"flex",justifyContent:"space-between", height:"85vh", backgroundColor:"black",border:"2px solid black"}}>
                <div style={{paddingLeft:"10vw"}}>
                    <p className={style.heading}>You don't have to <br /><b>Fight them Alone.</b></p>
                    <p className={style.loremtext}>Lorem ipsum dolor sit amet consectetur adipiscing elit blandit, curabitur sodales conubia ut inceptos faucibus himenaeos tortor eget, hac massa gravida arcu interdum proin curae.</p>
                    <div className={style.email}>
                        <EmailIcon sx={{color:"#545454"}}></EmailIcon>
                        <input className={style.emailInput} placeHolder="Enter your email address" type="email" />
                        <Buton text={"Let's Talk"} />
                    </div>
                </div>
                <div style={{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"}} >
                    <img src={HeroImage} style={{height:"70%"}} alt="hero" />
                </div>
            </div>
        </div>
    )
}