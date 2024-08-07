import * as React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
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
      main: "#BD570F",
      light: "#DEAB87",
      lighter: "#f9fdfe",
    },
    secondary: {
      main: "#13273f",
    }
  },
});

const steps = [
  {
    code: 'MDS602',
    title: 'Mathematical Foundations for Data Science',
    description: `I designed the teaching materials for this course (lecture slides, assignments, practical sessions, and exams). This course provides students with the mathematical foundations which are used in real-world data science context.`,
  },
  {
    code: 'MDS604',
    title: 'Database Systems and Infrastructure',
    description:
      'I designed the teaching materials for this course (lecture slides, assignments, practical sessions, and exams). In this course, students learn how to leverage modern database systems to manage large amounts of data.',
  },
  {
    code: 'MDS607',
    title: 'Artificial Intelligence and Innovation',
    description:
      'I designed the teaching materials for this course (lecture slides, assignments, practical sessions, and exams). This course introduces students to informed and uninformed search, adversarial search, classification and advanced reasoning and algorithms.',
  },
  {
    code: 'MDS608',
    title: 'Professional Practice',
    description:
      'I designed the teaching materials for this course (lecture slides, assignments, practical sessions, and exams). This course introduces the students to what it means to be a professional in data science, computing, IT and related industries.',
  },
  {
    code: 'MDS609',
    title: 'Business Intelligence and Analytics',
    description:
      'I designed the teaching materials for this course (lecture slides, assignments, practical sessions, and exams). This course provides students the foundations of business analytics and business intelligence.',
  },
  {
    code: 'MDS615',
    title: 'Cloud Computing and Application Development',
    description:
      'I designed the teaching materials for this course (lecture slides, assignments, practical sessions, and exams). In this course, students learn about cloud service models and how to build applications on the cloud.',
  },
  {
    code: 'U322',
    title: 'Full-stack development',
    description: `I designed the outline and planner for this course as per the Australian Qualifications Framework (AQF). This course introduces students to the Internet and programming web applications.`,
  },
  {
    code: 'U312',
    title: 'Cybersecurity and Information Assurance',
    description:
      'I designed the outline and planner for this course as per the Australian Qualifications Framework (AQF). This course focuses on protecting computer systems and their data from threats.',
  },
  {
    code: 'U222',
    title: 'Computer Networks',
    description:
      'I designed the outline and planner for this course as per the Australian Qualifications Framework (AQF). This unit introduces students to the science underpinning computer todays computer networking.',
  },  
  {
    code: 'U211',
    title: 'Database Systems',
    description:
      'I designed the outline and planner for this course as per the Australian Qualifications Framework (AQF). This course provides a comprehensive introduction to modern database systems.',
  },
  {
    code: 'U122',
    title: 'Computer Organization and Architecture',
    description:
      'I designed the outline and planner for this course as per the Australian Qualifications Framework (AQF). This course gives undergraduate students exposure to the ideas and techniques underlying computer architecture.',
  },  
];

export default function SPI() {
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = steps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

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
          bgcolor: '#DEAB87',
        }}
      >
        <Typography variant="body1" color="#13273f" fontWeight="bold">{steps[activeStep].code}</Typography>
      </Paper>
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          textAlign: 'left',
          height: 50,
          pl: 2,
          bgcolor: '#DEAB87',
        }}
      >
        <Typography variant="body1" color="#13273f">{steps[activeStep].title}</Typography>
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
