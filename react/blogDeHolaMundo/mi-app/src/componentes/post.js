import React from 'react';
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
} from "@mui/material";

function post({ titulo , descripcion , ruta , parrafo, alt, onclick}){
    return(
        <Card
         className="post-1" onClick={onclick}
         sx={{
            marginTop:"30px"
         }}>
            <CardActionArea>
                <CardMedia
                component="img"
                image={`/IMG/${ruta}.jpg`}
                height="200"
                alt="Card Image"
                />
                <CardContent>
                <h2>{titulo}</h2>
                <p>{descripcion}</p>
                <p>{parrafo}</p>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default post;