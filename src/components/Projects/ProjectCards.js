import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

const StyledCardActions = styled(CardActions)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column', // Stack buttons vertically
  alignItems: 'flex-start', // Align items to the left
  justifyContent: 'flex-start',
}));

const StyledButton = styled(Button)(() => ({
  width: 'fit-content', // Make buttons fit their content
}));

export default function ResearchCard(props) {
  return (
    <Card sx={{ minWidth: 275, minHeight: 275 }} className="project-card-view">
      <CardMedia
        sx={{paddingTop: props.size}}
        image={props.imgPath}
        title={props.imgTitle}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" align="left">
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" align="left">
          {props.description}
        </Typography>
      </CardContent>
      <StyledCardActions sx={{ '& > :not(:first-of-type)': { ml: 0 } }}>
      {props.Button1Text && (
        <StyledButton sx={{ color: "#BD570F" }} size="small" href={props.Button1Link}>
          {props.Button1Text}          
        </StyledButton>
        )}
        {props.Button2Text && (
        <StyledButton sx={{ color: "#BD570F" }} size="small" href={props.Button2Link}>
          {props.Button2Text}          
        </StyledButton>
        )}
        {props.Button3Text && (
        <StyledButton sx={{ color: "#BD570F" }} size="small" href={props.Button3Link}>
          {props.Button3Text}          
        </StyledButton>
        )}
      </StyledCardActions>
    </Card>
  );
}
