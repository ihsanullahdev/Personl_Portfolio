import "./projects.css";
import { FaGithubSquare } from "react-icons/fa";

import amazonImage from "../../assets/amazon_logo.png";
import expensiveTracker from "../../assets/Expensive_Tracker.png";
import foodRecipeFinder from "../../assets/Food_Recipe.png";
import TodoCrudApp from "../../assets/Todo_App.png";
import Portfolio from "../../assets/Portfolio.png";
import weatherApp from "../../assets/weatherApp.png";

const projects = [
  {
    title: "Amazon-Inspired E-Commerce UI",
    description:
      "A responsive e-commerce interface inspired by Amazon, built as one of my early frontend projects to practice modern UI development and component-based design.",
    image: amazonImage,
    technologies: ["React.js", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/ihsanullahdev/RectCode_AmazonClone_Project",
    Live: "https://rect-code-amazon-clone-project-4pte.vercel.app",
  },
  {
    title: "Expense Tracker",
    description:
      "A responsive expense tracking application built with React and JavaScript. It allows users to manage income and expenses, view their current balance, and keep track of recent transactions through a clean and simple interface.",
    image: expensiveTracker,
    technologies: ["React.js", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/ihsanullahdev/Expensive_Tracker",
    Live: "https://expensive-tracker-e7gm.vercel.app/",
  },
  {
    title: "Food Recipe Finder",
    description:
      "A dynamic recipe search application built with HTML, CSS, JavaScript, and a recipe API. Users can search for recipes, explore food results, and view recipe details through a clean and responsive interface.",
    image: foodRecipeFinder,
    technologies: ["HTML", "CSS", "JavaScript", "API Integration"],
    github: "https://github.com/ihsanullahdev/food-recipe-website",
    Live: "https://food-recipe-website-qqae.vercel.app/",
  },
  {
    title: "TODO CRUD APP",
    description:
      "A Todo CRUD application built with React.js and Tailwind CSS that allows users to create, view, update, and delete tasks through a clean and responsive interface.",
    image: TodoCrudApp,
    technologies: ["React.js", "Tailwind CSS", "JavaScript", "CRUD"],
    github: "https://github.com/ihsanullahdev/Todo_CRUD_App",
    Live: "https://todo-crud-app-9cj3.vercel.app/",
  },
  {
    title: "Weather App",
    description:
      "A responsive weather application that uses a weather API to display real-time weather information based on the searched location, including temperature, conditions, humidity, wind, pressure, and feels-like temperature.",
    image: weatherApp,
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Weather API",
      "API Integration",
    ],
    github: "https://github.com/ihsanullahdev/Weather-App",
    Live: " https://weather-app-silk-alpha-72.vercel.app/",
  },
  {
    title: "Personal Developer Portfolio",
    description:
      "A responsive personal portfolio website built with React.js to showcase my skills, projects, experience, and frontend development journey through a clean and modern interface.",
    image: Portfolio,
    technologies: [
      "React.js",
      "JavaScript",
      "CSS",
      "React Router",
      "Responsive Design",
    ],
    github: "#",
    Live: "personl-portfolio-tau.vercel.app",
  },
];

function Projects() {
  return (
    <section className="projects_container">
      {/* Header */}
      <div className="projects_header">
        <h1>Projects</h1>
        <p>
          A selection of frontend projects built through practical learning and
          hands-on development.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="projects_grid">
        {projects.map((project) => (
          <article className="project_card" key={project.title}>
            {/* Image */}
            <div className="project_image">
              <img src={project.image} alt={project.title} />
            </div>

            {/* Content */}
            <div className="project_content">
              <h2>{project.title}</h2>

              <p>{project.description}</p>

              {/* Technologies */}
              <div className="project_technologies">
                {project.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>

              {/* Links */}
              <div className="project_links">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${project.title} GitHub repository`}
                >
                  <FaGithubSquare size={24} />
                  <span>GitHub</span>
                </a>
                <a href={project.Live} target="_blank">
                  <button>View Project</button>
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
