import React from "react";
import ServiceCard from "./ServiceCard";
import "./Services.css";

const Services = () => {
  const serviceData = [
    {
      title: "Journal Reviewer",
      slides: [
        { subtitle: "Pattern Recognition", description: "Pattern Recognition was established 50 years ago. It is one of the top venues for machine learning research. I started reviewing for PR in 2021." },
        { subtitle: "Neural Networks", description: "Neural Networks journal, established in 1988, is a prominent journal that has significantly contributed to the development and application of neural computation in AI and related fields. I started reviewing for Neural Networks journal in 2025." },
        { subtitle: "Neurocomputing", description: "Neurocomputing is a peer-reviewed scientific journal covering research on artificial intelligence, machine learning, and neural computation. It was established in 1989 and is published by Elsevier. I started reviewing for Neurocomputing in 2024." },
        { subtitle: "Information Sciences", description: "Information Sciences is a venue for top research in information, knowledge engineering and intelligent systems. I started reviewing for Information Sciences in 2023." },
        { subtitle: "Knowledge-Based Systems", description: "Knowledge-Based Systems is an international journal in the field of artificial intelligence. I started reviewing for Knowledge-Based Systems in 2024." },
        { subtitle: "Engineering Applications of Artificial Intelligence", description: "The journal Engineering Applications of Artificial Intelligence started publishing in 1988. The journal provides forum of work describing the practical application of AI methods in all branches of engineering." },
        { subtitle: "Pattern Recognition Letters", description: "Pattern Recognition Letters was started in 1982. It aims at rapid publication of concise articles of a broad interest in pattern recognition." },
        { subtitle: "ICT Express", description: "The ICT Express journal published by the Korean Institute of Communications and Information Sciences (KICS) is an international, peer-reviewed research publication covering all aspects of information and communication technology. I started reviewing for ICT Express in 2024." },
        { subtitle: "Expert Systems with Applications", description: "Expert Systems With Applications publishes original research relating to expert and intelligent systems. I started reviewing for Expert Systems With Applications in 2023." },
        { subtitle: "The Journal of Ambient Intelligence and Humanized Computing", description: "Journal of Ambient Intelligence and Humanized Computing covers a wide range of topics in computer science. I started reviewing for this journal in 2021." },        
      ],
    },
    {
      title: "Conference Organization",
      slides: [
        { subtitle: "ICONIP2023", description: "The 30th International Conference on Neural Information Processing (ICONIP) was held between November 20-23, 2023 in Changsha, China. I served as a member of the Program committee." },
        { subtitle: "CDMA2022", description: "The 7th International Conference on Data Science and Machine Learning Applications (CDMA) was held between March 1-3, 2022 in Riyadh, Saudi Arabia. I served as a memeber of the Technical Program committee." },
      ],
    },
    {
      title: "Consultation Services",
      slides: [
        { subtitle: "Curriculum Development", description: "I wrote the teaching material for four postgraduate courses in data science for Sydney Polytechnic Institute (SPI). I also designed the course planner for five undergraduate courses offered by SPI." },
        { subtitle: "Training Courses", description: "I reviewed the AI and deep learning courses offered by the Arab Bureau of Education for the Gulf States (ABEGS)." },
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

export default Services;
