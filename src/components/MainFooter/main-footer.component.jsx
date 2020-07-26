import React from "react";
import "./main-footer.styles.scss";
import blog from "../../assets/blog.png";

function MainFooter(props) {
  return (
    <div
      className={`${
        props.path == "/add-course" || props.path == "/view-course"
          ? "main-footer"
          : props.path == "/profile"||props.path == "/courses"
          ?"main-footer-diff"
          :""
      } mt-5 ${props.path == "/course"||props.path == "/" ? "d-none" : ""}`}
    >
      <div className="footer-sections_container  d-flex mx-auto">
        <div className="footer-section footer-about">
          <h5 className="footer-section_header mb-4">About</h5>
          <div className="about-and-social-links">
            <p className="about m-0">
              <a href="#">Masterstudy</a> is Education Wordpress theme featured
              by Learning Management System (LMS) for online education.
            </p>
            <p className="developed-by">
              Developed by <a href="#">StylemixThemes</a>
            </p>
            <div className="social-links mb-2 d-flex align-items-center">
              <i className="fa fa-facebook-square mr-4"></i>
              <i className="fa fa-twitter mr-4"></i>
              <i className="fa fa-instagram mr-4"></i>
            </div>
          </div>
        </div>
        <div className="footer-section footer-contact">
          <h5 className="footer-section_header mb-4">Contact</h5>
          <p className="address mb-4">
            USA, Callifornia 20, First Avenue, Callifornia
          </p>
          <p className="tel m-0">Tel: +1 212 458 300 32</p>
          <p className="fax mb-3">Fax: +1 212 375 24 14</p>
          <a href="#" className="email">
            info@masterstudy.com
          </a>
        </div>
        <div className="footer-section footer-pages">
          <h5 className="footer-section_header mb-4">Pages</h5>
          <ul className="pages d-flex flex-wrap">
            <li className="page">Blog</li>
            <li className="page">Courses</li>
            <li className="page">Home</li>
            <li className="page">Membership A...</li>
            <li className="page">Shortcodes</li>
            <li className="page">Typography</li>
          </ul>
        </div>
        <div className="footer-section footer-blog">
          <h5 className="footer-section_header mb-4">Blog</h5>
          <div className="blog_container mb-2 d-flex justify-content-between">
            <div className="blog-img_container">
              <img src={blog} alt="" />
            </div>
            <div className="blog-details">
              <p className="blog-title mb-1">
                Our main target is to "Developing Yourself as a Leader"
              </p>
              <div className="blog-date">-- August 9, 2018</div>
            </div>
          </div>
          <div className="blog_container d-flex justify-content-between">
            <div className="blog-img_container">
              <img src={blog} alt="" />
            </div>
            <div className="blog-details">
              <p className="blog-title mb-1">
                Our main target is to "Developing Yourself as a Leader"
              </p>
              <div className="blog-date">-- August 9, 2018</div>
            </div>
          </div>
        </div>
      </div>
      {
          props.path == "/profile"||props.path == "/courses"?
          <p className="copyright mx-auto">Copyright &copy; 2020 MasterStudy Theme by <a href="#">Stylemix Themes</a></p>
          :null
      }
    </div>
  );
}

export default MainFooter;
