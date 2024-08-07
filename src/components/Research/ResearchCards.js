import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#BD570F",
      light: "#DEAB87",
      lighter: "#f9fdfe",
    },
    secondary: {
      main: "#13273f",
    }
  },
});

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function ResearchCard(props) {
  return (
    <ThemeProvider theme={theme}>
    <Card sx={{ minWidth: 275 }} className="project-card-view">
      <CardContent>
        <Typography align="left" sx={{ fontSize: 14 }} color="secondary" gutterBottom>
          {props.author}          
        </Typography>
        <Typography align="left" variant="h5" component="div">
          {props.title}          
        </Typography>
        <Typography align="left" sx={{ mb: 1.5 }} color="primary">
          {props.journal}          
        </Typography>
      </CardContent>
      <CardActions>
        {props.Button1Text && (
        <Button
          size="small"
          color="primary"
          href={props.Button1Link}
        >
          {props.Button1Text}          
        </Button>
        )}
        {props.Button2Text && (
        <Button
          size="small"
          color="primary"
          href={props.Button2Link}
        >
          {props.Button2Text}          
        </Button>
        )}
        {props.Button3Text && (
        <Button
          size="small"
          color="primary"
          href={props.Button3Link}
        >
          {props.Button3Text}          
        </Button>
        )}        
      </CardActions>
    </Card>
    </ThemeProvider>
  );
}
