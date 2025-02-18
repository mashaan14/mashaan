import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Experiencecard from "./ExperienceCard";
import { ReactComponent as Icon_independent} from "../../Assets/Icon_independent.svg";
import { ReactComponent as Icon_SPI} from "../../Assets/Icon_SPI.svg";
import { ReactComponent as Icon_SABIC} from "../../Assets/Icon_SABIC.svg";
import { ReactComponent as Icon_ARAMCO} from "../../Assets/Icon_ARAMCO.svg";
import { ReactComponent as Icon_UOH} from "../../Assets/Icon_UOH.svg";

function Experience() {
  return (
    <Container className="Experience-section">
      <Container>
        <Experiencecard
              imgPath={Icon_independent}
              title="Machine learning researcher"
              location="Independent Researcher, Riyadh, Saudi Arabia"
              description="Working on machine learning research with researchers from the University of Sydney and KFUPM. Our research focuses on graph neural networks. I Designed the experiments using python ML libraries (scikit-learn, PyTorch, seaborn, and others)."
              time="2023 - present"
      />
      <br/> 
      <Experiencecard
              imgPath={Icon_SPI}
              title="Curriculum Development Collaborator"
              location="Sydney Polytechnic Institute, Remote"
              description="I was responsible for developing course outlines and planner documents for a new computer science undergraduate program offered by SPI, ensuring alignment with the Australian Qualifications Framework (AQF)."
              time="2023 - present"
      />
      <br/>        
      <Experiencecard
              imgPath={Icon_UOH}
              title="Assistant professor"
              location="University of Hail, Hail, Saudi Arabia"
              description="Participated in lecturing, laboratory teaching, and curriculum design for multiple undergraduate and graduate computer science courses."
              time="2021 - 2023"
      />
      <br/>        
      <Experiencecard
              imgPath={Icon_SPI}
              title="Curriculum Development Collaborator"
              location="Sydney Polytechnic Institute, Sydney, Australia"
              description="I designed and developed course materials, including lecture slides, assignments, practical sessions, and exams, for courses such as (Mathematics for Data Science) and (Artificial Intelligence and Innovation), as part of my curriculum development work for a Master of Data Science program at SPI."
              time="2020 - 2021"
      />
      <br/>        
      <Experiencecard
              imgPath={Icon_SABIC}
              title="System Engineer"
              location="SABIC, Jubail, Saudi Arabia"
              description="I was part of a team that secures and maintains the plant network. We upgraded the servers and network switches during plant online operation. The process involves ordering the hardware ahead, planning the upgrade, and documenting the process for future reference."
              time="2010 - 2012"
      />
      <br/>
      <Experiencecard
              imgPath={Icon_ARAMCO}
              title="Intern"
              location="Saudi Aramco, Dhahran, Saudi Arabia"
              description="I completed an internship at Aramco's EXPEC ARC (Advanced Research Center). During that time, I developed an interface that populates the simulator output, which was large text files, into a database for interactive data access."
              time="2009 - 2010"
      />
      </Container>
    </Container>
  );
}

export default Experience;
