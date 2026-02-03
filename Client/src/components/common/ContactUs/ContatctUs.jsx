import './Contact.css';

function ContactUs() {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Us</h1>

      <div className="contact-cards">
        <div className="contact-card">
          <h3>👨‍💻 Rohan Rendale</h3>
          <p>FullStack Developer</p>
          <p>
            📧 Email: <a href="mailto:rohanrendale5@gmail.com">rohanrendale5@gmail.com</a>
          </p>
           <p>📱 Mobile: +91 9555414192</p>
          
        </div>

        <div className="contact-card">
          <h3>👨‍💻 Prajwal Patil</h3>
          <p>FullStack Developer</p>
          <p>
            📧 Email: <a href="mailto:prajwal96@gmail.com">prajwal96@gmail.com</a>
          </p>
          <p>📱 Mobile: +91 9555414192</p>
        </div>

        <div className="contact-card">
          <h3>👨‍💻 Amar More</h3>
          <p>FullStack Developer</p>
          <p>
            📧 Email: <a href="mailto:amar09@gmail.com">mar09@gmail.com</a>
          </p>
          <p>📱 Mobile: +91 9555414882</p>
        </div>
      </div>

      <div className="contact-address">
        <h3>📍 Address</h3>
        <p>Sunbeam - Karad</p>
      </div>
    </div>
  );
}

export default ContactUs;
