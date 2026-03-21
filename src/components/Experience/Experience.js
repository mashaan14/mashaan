import React from 'react';
import ExperienceCard from './ExperienceCard';
import './Experience.css';

export default function Experience() {
  return (
    <div className="experience-section">
      <ExperienceCard
        title="Senior Engineer"
        location="Qualcomm, Riyadh, Saudi Arabia"
        time="2026 - Present"
        description="Supporting the delivery of Qualcomm's AI100-based accelerators for data centers."
      />
      <ExperienceCard
        title="Senior Data Scientist"
        location="SAB Bank, Riyadh, Saudi Arabia"
        time="2025 - 2026"
        description="Owned the end-to-end BI pipeline, from ingesting data (Oracle, SQL Server) through transformation and validation to Tableau reporting layers. I also designed and deployed machine learning and optimization models in a highly regulated banking environment, supporting workforce planning, operational eﬃciency, and decision automation.
"
      />
      <ExperienceCard
        title="Machine Learning Researcher"
        location="Independent Researcher, Riyadh, Saudi Arabia"
        time="2023 - 2025"
        description="Creating YouTube videos about Python machine learning experiments with PyTorch and JAX. I also worked on machine learning research with researchers from the University of Sydney and KFUPM. Our research focuses on Graph Neural Networks (GNNs) and 3D reconstruction.
"
      />
      <ExperienceCard
        title="Curriculum Development Collaborator"
        location="Sydney Polytechnic Institute, Remote"
        time="2023 - 2024"
        description="I was responsible for developing course outlines and planner documents for a new computer science undergraduate program offered by SPI, ensuring alignment with the Australian Qualifications Framework (AQF)."
      />
      <ExperienceCard
        title="Assistant Professor"
        location="University of Hail, Hail, Saudi Arabia"
        time="2021 - 2023"
        description="Participated in lecturing, laboratory teaching, and curriculum design for multiple undergraduate and graduate computer science courses."
      />
      <ExperienceCard
        title="Curriculum Development Collaborator"
        location="Sydney Polytechnic Institute, Sydney, Australia"
        time="2020 - 2021"
        description="I designed and developed course materials for courses such as (Mathematics for Data Science) and (Artificial Intelligence and Innovation), as part of my curriculum development work for a Master of Data Science program at SPI."
      />      
      <ExperienceCard
        title="System Engineer"
        location="SABIC, Jubail, Saudi Arabia"
        time="2010 - 2012"
        description="I was part of a team that secures and maintains on-premises data center. We upgraded the servers and network switches during plant online operation. The process involves ordering the hardware ahead, planning the upgrade, and documenting the process for future reference."
      />
      <ExperienceCard
        title="Intern"
        location="Saudi Aramco, Dhahran, Saudi Arabia"
        time="2009 - 2010"
        description="I completed an internship at Aramco's EXPEC ARC (Advanced Research Center). During that time, I developed an interface that populates the simulator output, which was large text files, into a database for interactive data access."
      />      
    </div>
  );
}