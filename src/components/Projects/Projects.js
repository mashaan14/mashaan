import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Grid from '@mui/material/Grid';
import ProjectCard from "./ProjectCards";
import Github from "./Github";
import VisionTransformer from "../../Assets/Projects/VisionTransformer-MNIST.gif";
import UDA from "../../Assets/Projects/UDA.gif";
import SGC from "../../Assets/Projects/SGC.gif";
import GCN from "../../Assets/Projects/GCN.png";
import RPTreeSpectralNet from "../../Assets/Projects/RPTree-SpectralNet.png";
import RPTree from "../../Assets/Projects/RPTree.png";
import SCParameterFree from "../../Assets/Projects/SCParameterFree.png";
import SC from "../../Assets/Projects/SC.png";
import ASCNoisy from "../../Assets/Projects/ASCNoisy.png";
import YouTube from "../../Assets/Projects/YouTube.png";
import GNN_mini_batch from "../../Assets/Projects/GNN_mini_batch.png";

/*
depending on the image you have enter the corresponding "padding-bottom value" in size variable
aspect ratio  | padding-bottom value
--------------|----------------------
    1:1       |       100%
    16:9      |       56.25%
    4:3       |       75%
    3:2       |       66.66%
    8:5       |       62.5%
*/

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>

      <Github />

      <br></br> <br></br>
      
      <h1 className="project-heading">
        <strong>Projects</strong>
      </h1>

      <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <Col md={4} className="project-card">
          <ProjectCard
            size = "56.25%"
            imgPath={YouTube}
            imgTitle={YouTube}
            title="YouTube channel"
            description="I create YouTube videos documenting my machine learning experiments. Each video typically begins with a discussion of a relevant research paper or book chapter and concludes with a live coding demonstration. The accompanying code is then shared on GitHub for future reference."
            Button1Text = "YouTube"
            Button1Link = "https://youtube.com/@mashaan14"
            Button2Text = "GitHub"
            Button2Link = "https://github.com/mashaan14/YouTube-channel"
          />  
        </Col>      
        <Col md={4} className="project-card">
          <ProjectCard
            size = "49.25%"
            imgPath={VisionTransformer}
            imgTitle={VisionTransformer}
            title="Visualizing attention maps in MNIST vision transformer"
            description="Vision transformers are taking over CNNs. This code plots the attention maps of a trained vision transformer."
            Button1Text = "YouTube"
            Button1Link = "https://youtu.be/y1ZmMcMYjkY"
            Button2Text = "GitHub"
            Button2Link = "https://github.com/mashaan14/VisionTransformer-MNIST/tree/main"
          />
        </Col>   
        <Col md={4} className="project-card">
          <ProjectCard
            size = "56.25%"
            imgPath={GNN_mini_batch}
            imgTitle={GNN_mini_batch}
            title="Mini Batches in Graph Neural Network"
            description="Neural nets are trained in mini batches. Mini batching points or images is easy. But mini batching nodes on a graph is not straightforward. In this video, I talked about creating mini batches for Graph Neural Network (GNN) training."
            Button1Text = "YouTube"
            Button1Link = "https://youtu.be/y0poBC8xN1k"
            Button2Text = "GitHub"
            Button2Link = "https://github.com/mashaan14/YouTube-channel/blob/main/notebooks/2024_05_27_GNN_sampling.ipynb"
          />  
        </Col>                  
        <Col md={4} className="project-card">
          <ProjectCard
            size = "49.25%"
            imgPath={UDA}
            imgTitle={UDA}
            title="Implementing Unsupervised Domain Adaptation (UDA) algorithms"
            description="We built three GitHub repositories, each of which was associated with one UDA algorithm. ADDA, DANN, and SENTRY are well-known benchmarks for domain adaptation tasks."
            Button1Text = "ADDA"
            Button1Link = "https://github.com/mashaan14/ADDA-toy"
            Button2Text = "DANN"
            Button2Link = "https://github.com/mashaan14/DANN-toy"
            Button3Text = "SENTRY"
            Button3Link = "https://github.com/mashaan14/SENTRY-toy"
          />
        </Col>
        <Col md={4} className="project-card">
          <ProjectCard
            size = "100%"
            imgPath={SGC}
            imgTitle={SGC}
            title="Constructing graphs for simple graph convolution (SGC)"
            description="Simple Graph Convolution (SGC) uses feature propagation to classify points. The graph on this gif is not optimal, different colors (classes) should not mix. Our job is to find a graph that does not mix different colors (classes)."
            Button1Text = "arXiv preprint"
            Button1Link = "https://doi.org/10.48550/arXiv.2302.12000"
            Button2Text = "GitHub"
            Button2Link = "https://github.com/mashaan14/PAtree-SGC"            
          />
        </Col>
        <Col md={4} className="project-card">
          <ProjectCard
            size = "51.25%"
            imgPath={GCN}
            imgTitle={GCN}
            title="Random projection forest initialization for graph convolutional networks (GCNs)"
            description="Graph convolutional networks (GCNs) need to be initialized using a graph. We initialized the GCN using rpForest graph, which produces better accuracy compared with other graphs."
            Button1Text = "arXiv preprint"
            Button1Link = "https://doi.org/10.48550/arXiv.2302.12000"
            Button2Text = "GitHub"
            Button2Link = "https://github.com/mashaan14/PAtree-SGC"            
          />
        </Col>
        <Col md={4} className="project-card">
          <ProjectCard
            size = "49.25%"
            imgPath={RPTreeSpectralNet}
            imgTitle={RPTreeSpectralNet}
            title="Random projection tree similarities for graph clustering"
            description="Similarities based on rpTrees are better than knn similarities. They don't restrict points to have a fixed number of neighbors, which leads to better connectivity and better clustering."
            Button1Text = "Open access paper"
            Button1Link = "https://doi.org/10.1016/j.array.2022.100274"
            Button2Text = "GitHub"
            Button2Link = "https://github.com/mashaan14/RPTree-SpectralNet"            
          />
        </Col>
        <Col md={4} className="project-card">
          <ProjectCard
            size = "49.25%"
            imgPath={RPTree}
            imgTitle={RPTree}
            title="Dispersion of points in random projection trees"
            description="Random projection trees are used to perform k-nearest neighbor. Maximizing the dispersion of points will ensure that true neighbors will not be separated."
            Button1Text = "Open access paper"
            Button1Link = "https://doi.org/10.1109/ACCESS.2022.3195488"
            Button2Text = "GitHub"
            Button2Link = "https://github.com/mashaan14/RPTree"            
          />
        </Col>
        <Col md={4} className="project-card">
          <ProjectCard
            size = "49.25%"
            imgPath={SCParameterFree}
            imgTitle={SCParameterFree}
            title="A parameter-free graph reduction for efficient spectral clustering"
            description="Reducing the graph edges without manually tuned parameters to run spectral clustering efficiently."
            Button1Text = "Open access paper"
            Button1Link = "https://doi.org/10.1016/j.array.2022.100192"
            Button2Text = "GitHub"
            Button2Link = "https://github.com/mashaan14/SC-parameter-free"
          />
        </Col>
        <Col md={4} className="project-card">
          <ProjectCard
            size = "49.25%"
            imgPath={SC}
            imgTitle={SC}
            title="Refining a k-nearest neighbor graph for a computationally efficient spectral clustering"
            description="The k-nearest neighbor graph restricts all vertices to have the same number of edges, which could affect the quality of clustering. We developed a refined graph where unnecessary edges are removed."
            Button1Text = "arXiv preprint"
            Button1Link = "https://doi.org/10.48550/arXiv.2302.11296"
            Button2Text = "GitHub"
            Button2Link = "https://github.com/mashaan14/Spectral-Clustering"
          />
        </Col>
        <Col md={4} className="project-card">
          <ProjectCard
            size = "30.25%"
            imgPath={ASCNoisy}
            imgTitle={ASCNoisy}
            title="Approximate spectral clustering density-based similarity for noisy datasets"
            description="Approximation graphs are usually sensitive to noise. We introduced a graph filtering scheme to remove edges from noisy points."
            Button1Text = "arXiv preprint"
            Button1Link = "https://doi.org/10.48550/arXiv.2302.11298"
            Button2Text = "GitHub"
            Button2Link = "https://github.com/mashaan14/ASC-noisy"
          />
        </Col>                
      </Row>        
      </Container>
    </Container>
  );
}

export default Projects;
