import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Github from "./Github";
import VisionTransformer from "../../Assets/Projects/VisionTransformer-MNIST.gif";
import RPTreeSpectralNet from "../../Assets/Projects/RPTree-SpectralNet.png";
import RPTree from "../../Assets/Projects/RPTree.png";
import SCParameterFree from "../../Assets/Projects/SCParameterFree.png";
import SC from "../../Assets/Projects/SC.png";
import ASCNoisy from "../../Assets/Projects/ASCNoisy.png";

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
            imgPath={"https://github.com/mashaan14/YouTube-channel/blob/main/imgs/2025_02_03_your_own_NeRF.png?raw=true"}
            title="Neural Radiance Fields (NeRF) Experiments"
            description="I performed 3D reconstruction experiments using recent NeRF advancements such as Mip-NeRF 360. Compute resources for these experiments were provided by Google Cloud TPUs and Lightning AI GPUs."
            Button1Text = "VGG-SfM and Mip-NeRF 360"
            Button1Link = "https://youtu.be/6RNE155c7iA"
            Button2Text = "Mip-NeRF 360 on TPUs"
            Button2Link = "https://youtu.be/5aQpIiNohDA"
            Button3Text = "Nerfstudio on Lightning AI"
            Button3Link = "https://youtu.be/cgTYkjKL1b0"
          />
        </Col>        
        <Col md={4} className="project-card">
          <ProjectCard
            size = "49.25%"
            imgPath={VisionTransformer}
            imgTitle={VisionTransformer}
            title="Visualizing Attention in a Vision Transformer on MNIST"
            description="I implemented a Vision Transformer (ViT) model, which was based on the paper “An Image is Worth 16x16 Words: Transformers for Image Recognition at Scale”. In this video, the focus is on (1) building a PyTorch Vision Transformer (ViT) model, (2) training the model on the MNIST dataset imported from torchvision, and (3) feeding test samples to the transformer and visualizing its responses."
            Button1Text = "YouTube Tutorial"
            Button1Link = "https://youtu.be/y1ZmMcMYjkY"
            Button2Text = "Blog Post"
            Button2Link = "https://mashaan14.github.io/YouTube-channel/vision_transformers/2023_11_29_VisionTransformer_MNIST"
          />
        </Col>   
        <Col md={4} className="project-card">
          <ProjectCard
            size = "56.25%"
            imgPath={"https://github.com/mashaan14/YouTube-channel/blob/main/imgs/2024_05_27_GNN_sampling.png?raw=true"}
            title="GNN Training with Mini-Batches"
            description="Neural nets are trained using mini-batches. Creating mini-batches of points or images is easy. But mini-batching nodes on a graph is not straightforward, because graph data is interconnected. In this tutorial series, I covered techniques for creating mini-batches for Graph Neural Network (GNN) training. I also implemented well-known samplers such as neighbor sampling and Cluster-GCN in JAX."
            Button1Text = "Sampling Tutorial"
            Button1Link = "https://youtu.be/y0poBC8xN1k"
            Button2Text = "Neighbor Sampler"
            Button2Link = "https://youtu.be/YQwUlmUkJuI"
            Button3Text = "Cluster-GCN"
            Button3Link = "https://youtu.be/8mknbxIIf94"
          />  
        </Col>
        <Col md={4} className="project-card">
          <ProjectCard
            size = "56.25%"
            imgPath={"https://github.com/mashaan14/YouTube-channel/blob/main/imgs/2024_09_16_Swin_Transformer_Attention.png?raw=true"}
            title="SWIN Transformer"
            description="The Swin Transformer is a well-known transformer architecture for image classification and is usually used as a backbone for various downstream tasks in computer vision. In these two videos, I explain the Swin Transformer's code and demonstrate attention visualization."
            Button1Text = "Swin Transformer Code"
            Button1Link = "https://youtu.be/LspWysWparE"
            Button2Text = "Swin Transformer Attention"
            Button2Link = "https://youtu.be/mtCTIGgzfbc"
          />  
        </Col>        
        <Col md={4} className="project-card">
          <ProjectCard
            size = "56.25%"
            imgPath={"https://github.com/mashaan14/YouTube-channel/blob/main/imgs/2024_03_28_jax_ViT.png?raw=true"}
            title="JAX Tutorials"
            description="I've created YouTube tutorials demonstrating Vision Transformer and CNN implementations in JAX, a deep learning library that has become increasingly popular in the research community, especially for TPU experimentation."
            Button1Text = "Vision Transformer in JAX"
            Button1Link = "https://youtu.be/LDwA31hARrA"
            Button2Text = "CNNs in JAX"
            Button2Link = "https://youtu.be/Q0vvh95wes8"
            Button3Text = "JAX Conv Layer Explained"
            Button3Link = "https://youtu.be/rn-RsD7IpIg"
          />  
        </Col>        
        <Col md={4} className="project-card">
          <ProjectCard
            size = "56.25%"
            imgPath={"https://github.com/mashaan14/YouTube-channel/blob/main/imgs/2024_11_25_NeRF.png?raw=true"}
            title="Neural Radiance Fields (NeRF) Tutorials"
            description="I've created tutorials explaining the original NeRF algorithm and 3D Gaussian Splatting, two prominent techniques in 3D rendering using Neural Radiance Fields (NeRFs)."
            Button1Text = "Exploring a Tiny NeRF Code"
            Button1Link = "https://youtu.be/kszswpg7sjs"
            Button2Text = "3D Gaussian Splatting Optimization"
            Button2Link = "https://youtu.be/hGToeFGX-2M"
          />  
        </Col>
        <Col md={4} className="project-card">
          <ProjectCard
            size = "56.25%"
            imgPath={"https://github.com/mashaan14/YouTube-channel/blob/main/imgs/2024_02_05_GAT.png?raw=true"}
            title="Graph Attention"
            description="The Graph Attention Network (GAT) is a well-known architecture within the field of graph neural networks (GNNs). I created YouTube tutorials demonstrating GAT implementations using PyTorch Geometric, DGL, and Jraph."
            Button1Text = "GAT with PyTorch Geometric"
            Button1Link = "https://youtu.be/AWkPjrZshug"
            Button2Text = "GAT with DGL"
            Button2Link = "https://youtu.be/-V-T7koEWig"
            Button3Text = "GAT with Jraph"
            Button3Link = "https://youtu.be/O1zGWMEgW7A"
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
            Button2Text = "GitHub Repository"
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
            Button2Text = "GitHub Repository"
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
            Button2Text = "GitHub Repository"
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
            Button2Text = "GitHub Repository"
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
            Button2Text = "GitHub Repository"
            Button2Link = "https://github.com/mashaan14/ASC-noisy"
          />
        </Col>                
      </Row>        
      </Container>
    </Container>
  );
}

export default Projects;
