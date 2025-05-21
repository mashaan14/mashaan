import React from "react";
import ResearchCard from "./ResearchCard";
import "./Research.css"; // You can keep all layout styles here

export default function Research() {
  return (
    <div className="research-page">
      <div className="research-links-top">
        <a href="https://orcid.org/0000-0002-7864-0011">ORCID</a>
        <a href="https://scholar.google.com/citations?user=V3YkUVgAAAAJ&hl=en">Scholar</a>
      </div>

      <div className="research-grid">
        <ResearchCard
          author="M. Alshammari, J. Stavrakakis, A. F. Ahmed and M. Takatsuka"
          title="Random Projection Forest Initialization for Graph Convolutional Networks"
          journal="MethodsX, Volume 11, 2023"
          links={[
            { label: "Article", href: "https://www.sciencedirect.com/science/article/pii/S2215016123003126" },
            { label: "GitHub", href: "https://github.com/mashaan14/RPTree-GCN" },
          ]}
        />
        <ResearchCard
          author="M. Alshammari, J. Stavrakakis, A. F. Ahmed and M. Takatsuka"
          title="Random Projection Tree Similarity Metric for SpectralNet"
          journal="Array, Volume 15, 2023"
          links={[
            { label: "Article", href: "https://doi.org/10.1016/j.array.2022.100274" },
            { label: "GitHub", href: "https://github.com/mashaan14/RPTree-SpectralNet" },
          ]}
        />
        <ResearchCard
          author="M. Alshammari, J. Stavrakakis, A. F. Ahmed and M. Takatsuka"
          title="The Effect of Points Dispersion on the k-nn Search in Random Projection Forests"
          journal="IEEE Access, Volume 10, 2022"
          links={[
            { label: "Article", href: "https://doi.org/10.1109/ACCESS.2022.3195488" },
            { label: "GitHub", href: "https://github.com/mashaan14/RPTree" },
          ]}
        />
        <ResearchCard
          author="M. Alshammari, J. Stavrakakis and M. Takatsuka"
          title="A Parameter-Free Graph Reduction for Spectral Clustering and Spectralnet"
          journal="Array, Volume 15, 2022"
          links={[
            { label: "Article", href: "https://doi.org/10.1016/j.array.2022.100192" },
            { label: "GitHub", href: "https://github.com/mashaan14/SC-parameter-free" },
          ]}
        />
        <ResearchCard
          author="M. Alshammari and M. Alshayeb"
          title="The Effect of the Dataset Size on the Accuracy of Software Defect Prediction Models: An Empirical Study"
          journal="AInteligencia Artificial, 2021"
          links={[
            { label: "Article", href: "http://www.journal.iberamia.org/index.php/intartif/article/view/638" },
          ]}
        />   
        <ResearchCard
          author="M. Alshammari, J. Stavrakakis and M. Takatsuka"
          title="Refining a k-nearest neighbor graph for a computationally efficient spectral clustering"
          journal="Pattern Recognition, Volume 114, 2021"
          links={[
            { label: "Article", href: "https://doi.org/10.1016/j.patcog.2021.107869" },
            { label: "arXiv", href: "https://doi.org/10.48550/arXiv.2302.11296" },            
            { label: "GitHub", href: "https://github.com/mashaan14/Spectral-Clustering" },
          ]}
        />  
        <ResearchCard
          author="M. Alshammari and M. Takatsuka"
          title="Approximate spectral clustering density-based similarity for noisy datasets"
          journal="Pattern Recognition Letters, Volume 128, 2019"
          links={[
            { label: "Article", href: "https://doi.org/10.1016/j.patrec.2019.08.020" },
            { label: "arXiv", href: "https://doi.org/10.48550/arXiv.2302.11298" },            
            { label: "GitHub", href: "https://github.com/mashaan14/ASC-noisy" },
          ]}
        />  
        <ResearchCard
          author="M. Alshammari and M. Takatsuka"
          title="Approximate spectral clustering with eigenvector selection and self-tuned k"
          journal="Pattern Recognition Letters, Volume 122, 2019"
          links={[
            { label: "Article", href: "https://doi.org/10.1016/j.patrec.2019.02.006" },
            { label: "arXiv", href: "https://doi.org/10.48550/arXiv.2302.11297" },            
            { label: "GitHub", href: "https://github.com/mashaan14/ASC-self-tuned-k" },
          ]}
        />  
        <ResearchCard
          author="M. Alshammari and M. Takatsuka"
          title="Approximate Spectral Clustering using Topology Preserving Methods and Local Scaling"
          journal="The 25th International Conference on Neural Information Processing (ICONIP 2018), 2018."
          links={[
            { label: "Article", href: "https://link.springer.com/chapter/10.1007%2F978-3-030-04212-7_10" },
          ]}
        />          
        <ResearchCard
          author="U. Baroudi, M. Bin-Yahya, M. Alshammari, U. Yaqoub"
          title="Ticket-Based QoS Routing Optimization using Genetic Algorithm for WSN Applications in Smart Grid"
          journal="Journal of Ambient Intelligence and Humanized Computing, 2018."
          links={[
            { label: "Article", href: "https://link.springer.com/article/10.1007%2Fs12652-018-0906-0" },       
            { label: "GitHub", href: "https://github.com/mashaan14/GA-WSN-SmartGrid" },
          ]}
        />   
        <ResearchCard
          author="E. S. M. El-Alfy, M. Alshammari"
          title="Towards scalable rough set based attribute subset selection for intrusion detection using parallel genetic algorithm in MapReduce"
          journal="Simulation Modelling Practice and Theory, Volume 64, 2016"
          links={[
            { label: "Article", href: "https://doi.org/10.1016/j.simpat.2016.01.010" },       
          ]}
        />   
        <ResearchCard
          author="M. Alshammari, E. S. M. El-Alfy"
          title="MapReduce implementation for minimum reduct using parallel genetic algorithm"
          journal="6th International Conference on Information and Communication Systems (ICICS), 2015"
          links={[
            { label: "Article", href: "https://ieeexplore.ieee.org/document/7103194/?arnumber=7103194&newsearch=true&queryText=mashaan%20alshammari" },       
          ]}
        />                                                           
      </div>
    </div>
  );
}
