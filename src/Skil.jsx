import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

export default function Skill({skillName, skillDescription, skillImage}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="160"
          image={skillImage}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {skillName}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
           {skillDescription}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
