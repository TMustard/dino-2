import React from "react";
import SkillList from "./skillList";

export default function Profile(props) {
  console.log(props.skillSet);

  const skills = props.skillSet.map((skill, iterator) => {
    return <SkillList key={iterator} skill={skill} />;
  });

  function clickHandler(event) {
    if (event.target.parentNode.classList.contains("profile-header")) {
      event.target.parentNode.parentNode.childNodes[1].classList.toggle("hidden");
    }
  }

  return (
    <li>
      <div className="profile-card">
        <header className="profile-header">
          <h2 onClick={clickHandler}>{props.dinoName}</h2>
          <img onClick={clickHandler} src={props.dinoPic} />
        </header>
        <section className="skills-container hidden">
          <h4>Skills</h4>
          <ul className="skills-list">{skills}</ul>
        </section>
      </div>
    </li>
  );
}
