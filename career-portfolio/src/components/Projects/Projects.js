import "./Projects.css";
import IMG1 from "../../image/first-project.png";
import IMG2 from "../../image/second-project.png";
import IMG3 from "../../image/third-project.png";
import IMG4 from "../../image/fourth-project.png";
import IMG5 from "../../image/fifth-project.png";
import IMG6 from "../../image/portfolio6.jpg";

export default function Projects() {
  return (
    <section id="projects">
      <h5>My Recent Works</h5>
      <h2>Projects</h2>
      <div className="container portfolio_container">
        <article className="portfolio_item">
          <div className="portfolio_item_image">
            <img src={IMG1} alt="portfolio1" />
          </div>
          <h3>Todo List Project</h3>
          <div className="portfolio_item_cta">
            <a href="https://github.com/jayantkumar245/Project-1-Todo-list-.git" className="btn" target="_blank">
              Github
            </a>
            <a
              href="http//:www.github.com"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item_image">
            <img src={IMG2} alt="portfolio1" />
          </div>
          <h3>Expense tracker Project</h3>
          <div className="portfolio_item_cta">
            <a href="https://github.com/jayantkumar245/Project-3-Expense-Tracker.git" className="btn" target="_blank">
              Github
            </a>
            <a
              href="http//:www.github.com"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item_image">
            <img src={IMG3} alt="portfolio1" />
          </div>
          <h3>MyNote Project</h3>
          <div className="portfolio_item_cta">
            <a href="https://github.com/jayantkumar245/Project-2-Note-App-.git" className="btn" target="_blank">
              Github
            </a>
            <a
              href="http//:www.github.com"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item_image">
            <img src={IMG4} alt="portfolio1" />
          </div>
          <h3>Vowel Counter Project</h3>
          <div className="portfolio_item_cta">
            <a href="https://github.com/jayantkumar245/Project-4-vowel-counter.git" className="btn" target="_blank">
              Github
            </a>
            <a
              href="http//:www.github.com"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item_image">
            <img src={IMG5} alt="portfolio1" />
          </div>
          <h3>Memory Game Project</h3>
          <div className="portfolio_item_cta">
            <a href="https://github.com/jayantkumar245/Project-5-Memory-game.git" className="btn" target="_blank">
              Github
            </a>
            <a
              href="http//:www.github.com"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item_image">
            <img src={IMG6} alt="portfolio1" />
          </div>
          <h3>Music App Project</h3>
          <div className="portfolio_item_cta">
            <a href="https://github.com/jayantkumar245/Project-6-Music-app-using-React.git" className="btn" target="_blank">
              Github
            </a>
            <a
              href="http//:www.github.com"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}
