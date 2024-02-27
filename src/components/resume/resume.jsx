import "./resume.css";
import { cv } from "../../data/Data";
import Card from "./card";
function Resume() {
  return (
    <section id="resume" className="resume graaay">
      <div className="mainhead">
        <h2>resume</h2>
      </div>
      <div className="container resume__container">
        <div className="resume__groub">
          <h3 className="resume__heading">Education</h3>
          <div className="resume__items">
            {cv.map((val, id) => {
              if (val.category === "education") {
                return (
                  <Card
                    key={id}
                    title={val.title}
                    subtitle={val.subtitle}
                    date={val.date}
                    description={val.description}
                  />
                );
              }
            })}
          </div>
        </div>

        <div className="resume__groub">
          <h3 className="resume__heading">Experience</h3>
          <div className="resume__items">
            {cv.map((val, id) => {
              if (val.category === "experience") {
                return (
                  <Card
                    key={id}
                    title={val.title}
                    subtitle={val.subtitle}
                    date={val.date}
                    description={val.description}
                  />
                );
              }
            })}
          </div>
        </div>
      </div>
      <div className="dowload">
        <a href="https://drive.google.com/uc?export=download&id=13G4v65VxJah7MxrnVfwcyypuFf6d3pFC">
          Download C.V
        </a>
      </div>
    </section>
  );
}

export default Resume;
