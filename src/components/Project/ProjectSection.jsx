
import React, { useState } from "react";
import { useSpring, animated as a } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";
import "./ProjectSection.css";
import projectImg from "../../assets/project-img.png";
import projectImg2 from "../../assets/project-img-2.png";
import projectImg3 from "../../assets/project-img-3.png";
import projectImg4 from "../../assets/project-img-4.jpg";
import projectImg5 from "../../assets/project-img-5.png";

const projects = [
  {
    title: "School-Based Medical Management System",
    description: "A modern healthcare management platform for schools, clinics, and educational institutions. Streamlines medical facility operations and record-keeping.",
    image: projectImg,
    stack: ["PHP", "MySQL", "CSS"],
    link: "#"
  },
  {
    title: "School-Based Parking System",
    description: "A web application for managing parking slots, user authentication, and vehicle records within a school campus.",
    image: projectImg2,
    stack: ["Java", "JSP", "MySQL"],
    link: "#"
  },
  {
    title: "Tensura Wiki Portal",
    description: "A fan-made wiki for the anime Tensei Shitara Slime Datta Ken (That Time I Got Reincarnated as a Slime), featuring character bios, story summaries, and more.",
    image: projectImg3,
    stack: ["HTML", "CSS", "JavaScript"],
    link: "#"
  },
  {
    title: "Stock Management System",
    description: "A web-based stock management and attendance tracking system with user roles and CRUD features.",
    image: projectImg4,
    stack: ["PHP", "MySQL", "Bootstrap"],
    link: "#"
  },
  {
    title: "PetQuest - Lost Pet Finder",
    description: "A platform to help reunite lost pets with their families, featuring QR code generation and community reporting.",
    image: projectImg5,
    stack: ["PHP", "Bootstrap", "MySQL"],
    link: "#"
  }
];

export default function ProjectSection() {
  const [index, setIndex] = useState(0);
  const [{ x, rot, opacity }, api] = useSpring(() => ({
    x: 0, rot: 0, opacity: 1, config: { tension: 300, friction: 30 }
  }));

  const bind = useDrag(({ down, movement: [mx], direction: [xDir], velocity, last }) => {
    const trigger = Math.abs(mx) > 120 || (velocity > 0.3 && !down);
    if (trigger && last) {
      api.start({
        x: xDir > 0 ? 800 : -800,
        rot: xDir * 20,
        opacity: 0,
        immediate: false,
        onRest: () => {
          api.set({ x: 0, rot: 0, opacity: 1 });
          setIndex(i => (i + (xDir > 0 ? 1 : -1) + projects.length) % projects.length);
        }
      });
    } else {
      api.start({ x: down ? mx : 0, rot: down ? mx / 20 : 0, opacity: 1 });
    }
  });

  const project = projects[index];

  return (
    <section className="projects" id="projects">
      <div className="parallax-bg" aria-hidden="true"></div>
      <div className="project-stack-layout">
        <div className="project-info">
          <h2>Projects</h2>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <ul className="project-stack">
            {project.stack.map(tech => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </div>
        <div className="project-image-area">
          <a.div
            className="project-image-card"
            {...bind()}
            style={{
              x,
              rotateZ: rot,
              opacity,
              touchAction: "pan-y"
            }}
            tabIndex={0}
            aria-label="Drag or swipe to see next project"
          >
            <img
              src={project.image}
              alt={project.title}
              draggable="false"
              style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '1rem', boxShadow: '0 2px 12px rgba(0,0,0,0.08)', background: 'transparent', display: 'block', margin: 0 }}
              onMouseDown={e => e.preventDefault()}
              {...bind()}
            />
          </a.div>
        </div>
      </div>
    </section>
  );
}