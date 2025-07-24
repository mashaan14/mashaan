import React from "react";
import ProjectCard from "./ProjectCards";
import "./Projects.css";

const projectData = [
  {
    image: "https://github.com/mashaan14/YouTube-channel/blob/main/imgs/2025_07_14_jax_device_mesh.avif?raw=true",
    title: "JAX Performance Tips",
    description: "Videos about JAX parallelism and how to get free TPUs through Google's TPU Research Cloud.",
    links: [
      { label: "Parallelism using JAX Device Mesh", href: "https://youtu.be/6WK7R1HBPOc" },
      { label: "TPU Research Cloud", href: "https://youtu.be/PwYHoiB4Fag" },
      { label: "JAX JIT Compilation Explained", href: "https://youtu.be/1SQFVYVSuyE" }
    ]
  },  
  {
    image: "https://github.com/mashaan14/YouTube-channel/blob/main/imgs/2025_02_03_your_own_NeRF.avif?raw=true",
    title: "Neural Radiance Fields (NeRF) Experiments",
    description: "I performed 3D reconstruction experiments using recent NeRF advancements such as Mip-NeRF 360. Compute resources for these experiments were provided by Google Cloud TPUs and Lightning AI GPUs.",
    links: [
      { label: "VGG-SfM and Mip-NeRF 360", href: "https://youtu.be/6RNE155c7iA" },
      { label: "Mip-NeRF 360 on TPUs", href: "https://youtu.be/5aQpIiNohDA" },
      { label: "Nerfstudio on Lightning AI", href: "https://youtu.be/cgTYkjKL1b0" }
    ]
  },
  {
    image: "https://github.com/mashaan14/YouTube-channel/blob/main/imgs/2023-11-29-VisionTransformer-MNIST.avif?raw=true",
    title: "Visualizing Attention in a Vision Transformer on MNIST",
    description: "I built a Vision Transformer (ViT) model based on the “An Image is Worth 16x16 Words” paper. In this video, I’ll walk through building it in PyTorch, training it on MNIST, and testing it with some sample images to see how it responds.",
    links: [
      { label: "YouTube Tutorial", href: "https://youtu.be/y1ZmMcMYjkY" },
      { label: "Blog Post", href: "https://mashaan14.github.io/YouTube-channel/vision_transformers/2023_11_29_VisionTransformer_MNIST" }
    ]
  },
  {
    image: "https://github.com/mashaan14/YouTube-channel/blob/main/imgs/2025_05_12_DINOv2.avif?raw=true",
    title: "Self-Supervised Learning",
    description: "Videos exploring well-known SSL methods such as DINOv2 and I-JEPA.",
    links: [
      { label: "Inside DINOv2: Architecture Analysis", href: "https://youtu.be/j2_42Yx_1_w" },
      { label: "I-JEPA Explained", href: "https://youtu.be/Cw8vKl-jD44" },
      { label: "Self-Supervised Learning Review", href: "https://youtu.be/7NE0NH-PfkA" }
    ]
  },  
  {
    image: "https://github.com/mashaan14/YouTube-channel/blob/main/imgs/2024_05_27_GNN_sampling.avif?raw=true",
    title: "GNN Training with Mini-Batches",
    description: "In this tutorial series, I covered techniques for creating mini-batches for Graph Neural Network (GNN) training. I also implemented well-known samplers such as neighbor sampling and Cluster-GCN in JAX.",
    links: [
      { label: "Sampling Tutorial", href: "https://youtu.be/y0poBC8xN1k" },
      { label: "Neighbor Sampler in JAX", href: "https://youtu.be/YQwUlmUkJuI" },
      { label: "Cluster-GCN in JAX", href: "https://youtu.be/8mknbxIIf94" }
    ]
  },
  {
    image: "https://github.com/mashaan14/YouTube-channel/blob/main/imgs/2024_09_16_Swin_Transformer_Attention.avif?raw=true",
    title: "SWIN Transformer",
    description: "The Swin Transformer is a well-known transformer architecture for image classification and is usually used as a backbone for various downstream tasks in computer vision. In these two videos, I explain the Swin Transformer's code and demonstrate attention visualization.",
    links: [
      { label: "Swin Transformer Code", href: "https://youtu.be/LspWysWparE" },
      { label: "Swin Transformer Attention", href: "https://youtu.be/mtCTIGgzfbc" }
    ]
  },
  {
    image: "https://github.com/mashaan14/YouTube-channel/blob/main/imgs/2024_03_28_jax_ViT.avif?raw=true",
    title: "JAX Tutorials",
    description: "I've created YouTube tutorials demonstrating Vision Transformer and CNN implementations in JAX, a deep learning library that has become increasingly popular in the research community, especially for TPU experimentation.",
    links: [
      { label: "Vision Transformer in JAX", href: "https://youtu.be/LDwA31hARrA" },
      { label: "CNNs in JAX", href: "https://youtu.be/Q0vvh95wes8" },
      { label: "JAX Conv Layer Explained", href: "https://youtu.be/rn-RsD7IpIg" }
    ]
  },
  {
    image: "https://github.com/mashaan14/YouTube-channel/blob/main/imgs/2024_11_25_NeRF.avif?raw=true",
    title: "Neural Radiance Fields (NeRF) Tutorials",
    description: "I've created tutorials explaining the original NeRF algorithm and 3D Gaussian Splatting, two prominent techniques in 3D rendering using Neural Radiance Fields (NeRFs).",
    links: [
      { label: "Exploring a Tiny NeRF Code", href: "https://youtu.be/kszswpg7sjs" },
      { label: "3D Gaussian Splatting", href: "https://youtu.be/hGToeFGX-2M" }
    ]
  },
  {
    image: "https://github.com/mashaan14/YouTube-channel/blob/main/imgs/2024_02_05_GAT.avif?raw=true",
    title: "Graph Attention",
    description: "The Graph Attention Network (GAT) is a well-known architecture within the field of graph neural networks (GNNs). I created YouTube tutorials demonstrating GAT implementations using PyTorch Geometric, DGL, and Jraph.",
    links: [
      { label: "GAT with PyTorch Geometric", href: "https://youtu.be/AWkPjrZshug" },
      { label: "GAT with DGL", href: "https://youtu.be/-V-T7koEWig" },
      { label: "GAT with Jraph", href: "https://youtu.be/O1zGWMEgW7A" }
    ]
  },
  {
    image: "https://github.com/mashaan14/YouTube-channel/blob/main/imgs/2025_04_07_LightGCN.avif?raw=true",
    title: "Recommender Systems",
    description: "Videos exploring how to use graph neural networks to build recommender systems.",
    links: [
      { label: "Exploring LightGCN", href: "https://youtu.be/hVdlUyD9fic" },
      { label: "Graph Contrastive Learning", href: "https://youtu.be/ENVArKM2A3I" }
    ]
  },
  {
    image: "https://github.com/mashaan14/YouTube-channel/blob/main/imgs/2024_01_15_spectral_clustering.avif?raw=true",
    title: "Spectral Clustering",
    description: "Code walkthroughs for spectral clustering and sparse subspace clustering.",
    links: [
      { label: "A Guide to Spectral Clustering", href: "https://youtu.be/k7M1TMYac-Y" },
      { label: "Sparse Subspace Clustering", href: "https://youtu.be/xUmO_S7lLG8" }
    ]
  },
  {
    image: "https://github.com/mashaan14/YouTube-channel/blob/main/imgs/2025_03_03_TAPIR.avif?raw=true",
    title: "Detection and Tracking",
    description: "Computer vision experiments exploring object detection and point tracking.",
    links: [
      { label: "Hands-On with TAPIR", href: "https://youtu.be/U7jH_BiwVOU" },
      { label: "Object Detection with DETR", href: "https://youtu.be/Z3fXiV4Cmz4" }
    ]
  }
];

const Projects = () => {
  return (
    <div className="projects-container">
      {projectData.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
};

export default Projects;
