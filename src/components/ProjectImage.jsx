// src/components/ProjectImage.jsx
import React from "react";

const ProjectImage = ({ className, src, alt }) => (
  <img className={className} src={src} alt={alt} loading="lazy" />
);

export default ProjectImage;
