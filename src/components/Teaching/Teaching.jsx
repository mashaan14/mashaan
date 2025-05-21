import React from "react";
import ServiceCard from "../Services/ServiceCard";
import "../Services/Services.css";

const Teaching = () => {
  const serviceData = [
    {
      title: "Sydney Polytechnic Institute",
      slides: [
        { subtitle: "Mathematical Foundations for Data Science", description: "I designed the teaching materials for this course (lecture slides, assignments, practical sessions, and exams). This course provides students with the mathematical foundations which are used in real-world data science context." },
        { subtitle: "Database Systems and Infrastructure", description: "I designed the teaching materials for this course (lecture slides, assignments, practical sessions, and exams). In this course, students learn how to leverage modern database systems to manage large amounts of data." },
        { subtitle: "Artificial Intelligence and Innovation", description: "I designed the teaching materials for this course (lecture slides, assignments, practical sessions, and exams). This course introduces students to informed and uninformed search, adversarial search, classification and advanced reasoning and algorithms." },
        { subtitle: "Professional Practice", description: "I designed the teaching materials for this course (lecture slides, assignments, practical sessions, and exams). This course introduces the students to what it means to be a professional in data science, computing, IT and related industries." },
        { subtitle: "Business Intelligence and Analytics", description: "I designed the teaching materials for this course (lecture slides, assignments, practical sessions, and exams). This course provides students the foundations of business analytics and business intelligence." },
        { subtitle: "Cloud Computing and Application Development", description: "I designed the teaching materials for this course (lecture slides, assignments, practical sessions, and exams). In this course, students learn about cloud service models and how to build applications on the cloud." },
        { subtitle: "Full-stack development", description: "I designed the outline and planner for this course as per the Australian Qualifications Framework (AQF). This course introduces students to the Internet and programming web applications." },
        { subtitle: "Cybersecurity and Information Assurance", description: "I designed the outline and planner for this course as per the Australian Qualifications Framework (AQF). This course focuses on protecting computer systems and their data from threats." },
        { subtitle: "Computer Networks", description: "I designed the outline and planner for this course as per the Australian Qualifications Framework (AQF). This unit introduces students to the science underpinning computer todays computer networking." },
        { subtitle: "Database Systems ", description: "I designed the outline and planner for this course as per the Australian Qualifications Framework (AQF). This course provides a comprehensive introduction to modern database systems." },
        { subtitle: "Computer Organization and Architecture", description: "I designed the outline and planner for this course as per the Australian Qualifications Framework (AQF). This course gives undergraduate students exposure to the ideas and techniques underlying computer architecture." },
      ],
    },
    {
      title: "University of Hail",
      slides: [
        { subtitle: "Advanced Database Systems", description: "I taught this course to undergraduate students This course exposes students to advanced database concepts such as transaction processing and concurrency control techniques." },
        { subtitle: "Data Structures and Algorithms", description: "I taught this course to undergraduate students, I usually had 80 enrolled students per semester. This course exposes students to advanced object-oriented programming and different types of data structures." },
        { subtitle: "Principles of Artificial Intelligence", description: "I redesigned the teaching material for this course and taught it to undergraduates. In this course, students learn the principles of artificial intelligence with topics such as constraint satisfaction and adversarial search." },
        { subtitle: "Fundamentals of Computer Engineering", description: "I taught this course to undergraduate students. This course introduces students to the fundamentals of computer engineering, which include topics like digital circuits, boolean algebra, and sequential circuit design." },
      ],
    },
  ];

  return (
    <div className="services-section">
      <div className="services-grid">
        {serviceData.map((service, index) => (
          <ServiceCard key={index} title={service.title} slides={service.slides} />
        ))}
      </div>
    </div>
  );
};

export default Teaching;
