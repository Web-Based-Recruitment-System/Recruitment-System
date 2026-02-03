import "./About.css";
import HrAndEmpl from "../../../assets/images/Manager&FemaleBoss.jpg";
import BrainStorming from "../../../assets/images/EmployeesBrainStorming.jpg";
import EasyManagment from "../../../assets/images/easyManagement.jpg";

function About() {
  return (
    <div className="about-container">
      <h1 className="about-title">About Us</h1>
      <p className="about-subtitle">
        At <span className="brand">Get Hired</span>, we believe in people-first values: strong HR, open communication, and easy management.
      </p>

      <div className="about-grid">
        <div className="about-card">
          <div className="card-image">
            <img src={HrAndEmpl} alt="HR and employee" />
            <div className="card-overlay">Human Resources</div>
          </div>
          <div className="card-body">
            <p>
              We value the importance of a supportive and accessible Human Resources team. Our HR professionals are here to listen, guide, and address your concerns. Whether it’s benefits, career development, or workplace issues, our doors are always open.
            </p>
          </div>
        </div>

        <div className="about-card">
          <div className="card-image">
            <img src={BrainStorming} alt="employees brainstorming" />
            <div className="card-overlay">Open Communication</div>
          </div>
          <div className="card-body">
            <p>
              Communication is at the heart of success. At Get Hired, we foster open communication where every team member can express ideas, share feedback, and collaborate. Transparency strengthens relationships and drives innovation.
            </p>
          </div>
        </div>

        <div className="about-card">
          <div className="card-image">
            <img src={EasyManagment} alt="easy management" />
            <div className="card-overlay">Easy Management</div>
          </div>
          <div className="card-body">
            <p>
              We understand the importance of streamlined operations. Our commitment to easy management is reflected in user-friendly interfaces and simplified processes, allowing individuals to focus on growth and success.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
