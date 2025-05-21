import React from "react";
import EducationCard from "./EducationCard";
import "./Education.css"; 

const Education = () => {
  return (
    <div className="education-section">
      <div className="education-grid">
        <EducationCard
          degree="PhD in Computer Science"
          institution="The University of Sydney"
          location="Sydney, Australia"
          time="2017 - 2021"
          description="Focused on Artificial Intelligence, Machine Learning, and Human-Computer Interaction. Graduated with distinction."
          link="https://ses.library.usyd.edu.au/handle/2123/24091"
        />

        <EducationCard
          degree="Master of Science in Computer Science"
          institution="King Fahd University of Petroleum and Minerals (KFUPM)"
          location="Dhahran, Saudi Arabia"
          time="2013 – 2016"
          description="Focused on Artificial Intelligence, Machine Learning, and Human-Computer Interaction. Graduated with distinction."
          link="http://eprints.kfupm.edu.sa/139756/"
        />

        <EducationCard
          degree="Bachelor of Science in Computer Science"
          institution="University of Hail"
          location="Hail, Saudi Arabia"
          time="2005 – 2010"
          description="Completed with Honors. Projects included a collaborative health tracker app and a full-stack news aggregation platform."
        />
      </div>
    </div>
  );
};

export default Education;
