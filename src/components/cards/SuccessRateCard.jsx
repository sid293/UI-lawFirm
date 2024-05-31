import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import giftLogo from './../../assets/giftIcon.png';
import Buton from './../button/Buton';
import style from './successRateCard.module.css';

export default function SuccessRateCard({heading}){

    return(
        <div className={style.wrapper}>
            <Card className={style.card} sx={{ maxWidth: 345, color:"white" }}>
                <CardActionArea className={style.cardActionArea}>
                    <div style={{display:"flex",justifyContent:"start",padding:"20px"}}>
                        <img src={giftLogo} alt="giftlogo"/>
                    </div>
                    <CardContent sx={{textAlign:"left"}}>
                        <Typography gutterBottom variant="h5" component="div">
                            {heading}                            
                        </Typography>
                        <Typography className={style.description} variant="body2" color="text.secondary">
                            Amet minim mollit non deserunt ullamco est
                            sit aliqua dolor do amet sint. Velit officia
                            consequatduis enim velit mollit Exer.
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Buton text={"Read More"}></Buton>
                </CardActions>
            </Card>
        </div>
    )
}
