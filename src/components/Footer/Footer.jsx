import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <section className="footer" id="contact">
      <div className="icons-container">
        <div className="icons">
          <i className="fas fa-clock"></i>
          <h3>opening hours</h3>
          <p>07:00am to 10:00pm</p>
        </div>
        <div className="icons">
          <i className="fas fa-phone"></i>
          <h3>phone</h3>
          <p>+123-456-7890</p>
        </div>

        <div className="icons">
          <i className="fas fa-envelope"></i>
          <h3>email</h3>
          <p>resturent@gmail.com</p>
        </div>

        <div className="icons">
          <i className="fas fa-map"></i>
          <h3>address</h3>
          <p>palestine || gaza</p>
        </div>
      </div>

      <div className="share">
        <NavLink to="#" className="fab fa-facebook-f"></NavLink>
        <NavLink to="#" className="fab fa-instagram"></NavLink>
        <NavLink to="#" className="fab fa-linkedin"></NavLink>
        <NavLink to="#" className="fab fa-github"></NavLink>
      </div>

      <div className="credit">
        created by <span>mohanad kalloub</span> | all rights reserved!
      </div>
    </section>
  );
};
export default Footer;
