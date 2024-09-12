import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#BD570F",
      light: "#DEAB87",
    },
    secondary: {
      main: "#13273f",
    }
  },
});


const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});
//<Img alt="complex" src={props.imgPath}/>
export default function Experiencecard(props) {
  return (
    <ThemeProvider theme={theme}>
    <Paper className="Experience-card-view"
      sx={{
        p: 2,
        margin: 'auto',
        flexGrow: 1,
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <props.imgPath className="Experience-icons"/>            
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
            <Grid item xs={8}>
              <Typography gutterBottom variant="subtitle1" color="secondary" component="div" align="left">
                {props.title}
              </Typography>
              <Typography variant="body2" color="primary" gutterBottom align="left">
                {props.location}
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="subtitle1" color="primary" component="div">
                {props.time}
              </Typography>
            </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" color="secondary" align="left">
              {props.description}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
    </ThemeProvider>
  );
}