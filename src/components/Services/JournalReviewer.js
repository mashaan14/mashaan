import * as React from 'react';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#fe2401",
      light: "#cc9169",
      lighter: "#f9fdfe",
    },
    secondary: {
      main: "#13273f",
    }
  },
});

const steps = [
  {
    label: 'Pattern Recognition',
    description: `Pattern Recognition was established 50 years ago. It is one of the top venues for machine learning research. I started reviewing for PR in 2021.`,
  },
  {
    label: 'Neurocomputing',
    description: `Neurocomputing is a peer-reviewed scientific journal covering research on artificial intelligence, machine learning, and neural computation. It was established in 1989 and is published by Elsevier. I started reviewing for Neurocomputing in 2024.`,
  },
  {
    label: 'Information Sciences',
    description:
      'Information Sciences is a venue for top research in information, knowledge engineering and intelligent systems. I started reviewing for Information Sciences in 2023.',
  },
  {
    label: 'Knowledge-Based Systems',
    description: `Knowledge-Based Systems is an international journal in the field of artificial intelligence. I started reviewing for Knowledge-Based Systems in 2024.`,
  },
  {
    label: 'ICT Express',
    description: `The ICT Express journal published by the Korean Institute of Communications and Information Sciences (KICS) is an international, peer-reviewed research publication covering all aspects of information and communication technology. I started reviewing for ICT Express in 2024.`,
  },
  {
    label: 'Expert Systems with Applications',
    description: `Expert Systems With Applications publishes original research relating to expert and intelligent systems. I started reviewing for Expert Systems With Applications in 2023.`,
  },
  {
    label: 'Array',
    description: `Array is an international open access journal covering a broad spectrum of topics in computer science. I started reviewing for Array in 2022.`,
  },  
  {
    label: 'The Journal of Ambient Intelligence and Humanized Computing',
    description: `Journal of Ambient Intelligence and Humanized Computing covers a wide range of topics in computer science. I started reviewing for this journal in 2021.`,
  },
  {
    label: 'International Journal of Digital Earth',
    description: `International Journal of Digital Earth covers research protecting the environment, and supporting future sustainable development. In 2023, I reviewed articles exploiting AI tools in environmental research.`,
  },    
];

export default function JournalReviewer() {
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = steps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
//, borderColor: '#13273f', bgcolor: '#f9fdfe'
  return (
    <ThemeProvider theme={theme}>      
    <Box sx={{ maxWidth: 400, flexGrow: 1, border: 1}}>
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          textAlign: 'left',
          height: 50,
          pl: 2,
          bgcolor: '#cc9169',
        }}
      >
        <Typography variant="body1" color="secondary" fontWeight="bold">{steps[activeStep].label}</Typography>
      </Paper>
      <Box sx={{ height: 255, maxWidth: 400, width: '100%', p: 2, textAlign: 'left'}}>
        {steps[activeStep].description}
      </Box>
      <MobileStepper
        variant="progress"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button 
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
    </ThemeProvider>
  );
}
