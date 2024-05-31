import style from './page9.module.css';
import Vector from './../assets/Vector.png';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';

export default function Page9(){

    return(
        <div className={style.wrapper}>
            <div className={style.content}>
                <div className={style.upperContent}>
                    <div className={style.icon}>
                        <img src={Vector} alt="vec" />
                        <div>IGSTUDIO</div>
                    </div>
                    <div className={style.navs}>
                        <div>Home</div>
                        <div>Attorneys</div>
                        <div>Practice Areas</div>
                        <div>About Us</div>
                    </div>
                    <div className={style.iconsWrapper}>
                        <div className={style.icons}>
                            <InstagramIcon/>
                            <FacebookIcon/>
                            <TwitterIcon/>
                            <PinterestIcon/>
                        </div>

                    </div>
                </div>
                <div className={style.lowerContent}>
                    <div>© 2020 Acme. All right reserved.</div>
                    <div>Privacy Policy</div>
                    <div>Terms of Service</div>
                </div>
            </div>
        </div>
    )
}