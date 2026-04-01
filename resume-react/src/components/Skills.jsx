const skills = [
  'Java', 'Spring Boot', 'SQL', 'Git', 'RESTful APIs',
  'HTML/CSS/JavaScript', 'React', 'TypeScript', 'Vite',
  'Three.js / WebGL', 'MySQL', 'PostgreSQL', 'Flyway', 'AWS', 'Terraform',
  'CI/CD', 'Docker', 'Agile Methodologies', 'Problem Solving',
];

function Skills() {
  return (
    <section id="skills" className="section">
      <h2 className="section-title">Skills</h2>
      <ul className="skills-list">
        {skills.map((skill) => (
          <li key={skill} className="skill-item">{skill}</li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
