import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import CardActions from '@mui/'
import Typography from '@mui/material/Typography';
// import { CardActionArea } from '@mui/material';
import {CardActionArea} from '@mui/material';
import style from './clientCard.module.css';

export default function ClientCard({img,heading}){

    return(
        <div className={style.wrapper}>
            <Card className={style.card} sx={{ maxWidth: 345 }}>
                <CardActionArea className={style.cardActionArea}>
                    <div className={style.imageDiv} style={{display:"flex",justifyContent:"start",padding:"20px"}}>
                        <img src={img} alt="giftlogo"/>
                    </div>
                    <CardContent className={style.cardContent} sx={{textAlign:"left"}}>
                        <Typography gutterBottom sx={{color:"white"}} variant="h5" component="div">
                            {heading}                            
                        </Typography>
                        <Typography sx={{color:"white"}} className={style.position}>CEO of Hunt</Typography>
                        <Typography className={style.description} sx={{color:"gray"}} variant="body2" color="text.secondary">
                            Amet minim mollit non deserunt ullamco est
                            sit aliqua dolor do amet sint. Velit officia
                            consequatduis enim velit mollit Exer. sit
                            aliqua dolor do amet sint. Velit officia
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    )
}