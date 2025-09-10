import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

// const developerData = [
//   {
//     name: "Colleen Messina",
//     intro:
//       "Front-end developer and teacher in Shenzhen, China. When not studying, I like to cycle, collect POPMART memorabilia, play with my dog Hennessy or watch movies/ TV shows with my husband.",
//     photoName: "avatar.jpg",
//     skillList: "HTML + CSS, JavaScript, Git and GitHub, React",
//   },
// ];

const skills = [
  {
    skill: "HTML+CSS",
    level: "beginner",
    color: "#6D2BAD",
  },
  {
    skill: "JavaScript",
    level: "beginner",
    color: "#F8D23B",
  },
  {
    skill: "Git and GitHub",
    level: "beginner",
    color: "#171270",
  },
  {
    skill: "React",
    level: "beginner",
    color: "#0FDCFA",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="avatar.jpg" alt="Colleen Messina" />;
}

function Intro() {
  return (
    <div>
      <h1>Colleen Messina</h1>
      <p>
        Front-end developer and teacher in Shenzhen, China. When not studying, I
        like to cycle, collect POPMART memorabilia, play with my dog Hennessy or
        watch movies/ TV shows with my husband.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill skill={skill.skill} color={skill.color} level={skill.level} />
      ))}
    </div>
  );
}

function Skill({ skill, color, level }) {
  return (
    <li className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === "beginner" && "👶🏻"}
        {level === "intermediate" && "👍🏼"}
        {level === "advanced" && "💪🏼"}
      </span>
    </li>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
