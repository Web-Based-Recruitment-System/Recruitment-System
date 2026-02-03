import Footer from "../Footer/Footer";
import "../Home/Home.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Get Hired!</h1>
          <p className="hero-tagline">
            Bridging Careers, Fostering Talent – Your Gateway to Professional Success!
          </p>
          <button
            className="hero-btn"
            onClick={() => navigate("/signup")}
          >
            Sign Up & Start Applying 🚀
          </button>
        </div>
      </section>

      <section className="features">
        <div className="feature">
          <h3>🌟 Seamless Experience</h3>
          <p>Our portal makes applying for jobs simple, fast, and transparent.</p>
        </div>
        <div className="feature">
          <h3>🤝 Connect with Talent</h3>
          <p>We bridge the gap between employers and exceptional candidates.</p>
        </div>
        <div className="feature">
          <h3>🌍 Diversity & Innovation</h3>
          <p>We foster an inclusive environment that values creativity and growth.</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;
