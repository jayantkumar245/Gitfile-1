import CV from "../../image/Jayant-kumar.pdf";

export default function Resumefile() {
  return (
    <div className="download">
      <a href={CV} download  className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
}
