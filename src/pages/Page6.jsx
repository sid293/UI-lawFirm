import TeamCard from './../components/cards/TeamCard';
import style from "./page6.module.css";
const Images = {
    profile1:require("./../assets/our-team1.png"),
    profile2:require("./../assets/our-team2.png"),
    profile3:require("./../assets/our-team3.png"),
    profile4:require("./../assets/our-team5.png"),
    profile5:require("./../assets/our-team5.png"),
    profile6:require("./../assets/our-team6.png"),
}

export default function Page6(){

    return(
        <div className={style.wrapper}>
            <h1 className={style.heading}>Our Team</h1>
            <div className={style.teamCards}>
                <TeamCard name={"Danial Def"} cases={"301"} img={Images.profile1} />
                <TeamCard name={"Sanfole"} cases={"850"} img={Images.profile2} />
                <TeamCard name={"Cesforila"} cases={"470"} img={Images.profile3} />
                <TeamCard name={"Colleen"} cases={"180"} img={Images.profile4} />
                <TeamCard name={"Haldone"} cases={"212"} img={Images.profile5} />
                <TeamCard name={"Nik Jeo"} cases={"350"} img={Images.profile6} />
            </div>
        </div>
    )
}