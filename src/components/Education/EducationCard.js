import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { Flag } from 'semantic-ui-react';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { ReactComponent as Flag_of_Saudi_Arabia} from "../../Assets/Flag_of_Saudi_Arabia.svg";
import { ReactComponent as Flag_of_Australia} from "../../Assets/Flag_of_Australia.svg";

const theme = createTheme({
  palette: {
    primary: {
      main: "#BD570F",
      light: "#cc9169",
      lighter: "#f9fdfe",
    },
    secondary: {
      main: "#13273f",
    }
  },
});


export default function EducationCard() {
  return (
    <ThemeProvider theme={theme}>
      <Timeline align="alternate" >

        <TimelineItem>
          <TimelineOppositeContent>
            <Typography color="primary">2017 - 2021</Typography>
            <Typography color="secondary">Sydney, Australia <Flag_of_Australia className="flag-icons"/></Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot/>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent height="200px">
            <Typography color="secondary">THE UNIVERSITY OF SYDNEY</Typography>
            <Typography color="primary">Ph.D. in Computer Science</Typography>
            <Link href="https://ses.library.usyd.edu.au/handle/2123/24091" color="inherit">
              {'Thesis'}
            </Link>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent>
            <Typography color="primary">2013 - 2016</Typography>
            <Typography color="secondary">Dhahran, Saudi Arabia <Flag_of_Saudi_Arabia className="flag-icons"/></Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent height="200px">
            <Typography color="secondary">KFUPM</Typography>
            <Typography color="primary">M.Sc. in Computer Science</Typography>
            <Link href="http://eprints.kfupm.edu.sa/139756/" color="inherit">
              {'Thesis'}
            </Link>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent>
            <Typography color="primary">2005 - 2010</Typography>
            <Typography>Hail, Saudi Arabia <Flag_of_Saudi_Arabia className="flag-icons"/></Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />            
          </TimelineSeparator>
          <TimelineContent height="200px">
            <Typography color="secondary">UNIVERSITY OF HAIL</Typography>
            <Typography color="primary">B.Sc. in Computer Science</Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </ThemeProvider>
  );
}
