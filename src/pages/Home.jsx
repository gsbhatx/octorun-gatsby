import React from 'react';
import { Link } from 'gatsby';
import CoursesComponent from '../components/organisms/courses/CoursesComponent';
const HomePage = () => {
  return (
    <>
      <div className="hero-section">
        <div className="bg-img">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="pt-5">
                  <p className="animate__animated animate__bounceInDown animate__delay-0s pb-1 mb-2">
                    <span className="text-orange">
                      Live Online Kids Coding Classes <br />
                      for age
                    </span>
                    <span
                      className="text-orange"
                      style={{ backgroundColor: 'rgba(255, 2555, 2555, 0.5)' }}
                    >
                      <strong> 6-14 years</strong>
                    </span>
                  </p>
                  <span className="animate__animated animate__bounceInDown animate__delay-0s">
                    <span
                      className="color-ora"
                      style={{ backgroundColor: 'rgba(255, 2555, 2555, 0.5)' }}
                    >
                      How to Book Free Trial
                    </span>
                  </span>
                  <div className="bg-white w-box px-3 py-3 animate__animated animate__bounceInDown animate__delay-0s mt-2">
                    <p className="lead w-20">Step 1</p>
                    <p className="w-80">
                      Register youself for free through your mobile number
                    </p>
                  </div>
                  <div className="bg-white w-box px-3 py-3 animate__animated animate__bounceInDown animate__delay-1s">
                    <p className="lead w-20">Step 2</p>
                    <p className="w-80">Choose Kids Age & Preferred Timeslot</p>
                  </div>
                  <div className="bg-white w-box px-3 py-3 animate__animated animate__bounceInDown animate__delay-2s">
                    <p className="lead w-20">Step 3</p>
                    <p className="w-80">
                      Click on Book Now & Enjoy your free Trial
                    </p>
                  </div>
                  <a
                    href="https://student-octorun.web.app/register"
                    className="btn btn-danger my-2 my-sm-0"
                    target="_"
                  >
                    Book Free Trial Now
                  </a>
                  <p className="py-2 animate__animated animate__bounceInDown animate__delay-3s">
                    <span className="text-orange">
                      <small>
                        Laptop/PC with good internet connection is needed for
                        classes
                      </small>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="why-coding" id="whyCoding">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h3 className="text-orange text-center mb-4">Why Coding?</h3>
              <p className="text-center font-weight-normal mb-4 line-height-change">
                <span className="color-ora1">
                  The National Education Policy{' '}
                </span>{' '}
                has emphasized on coding to be part of school curriculum. This
                course is designed to help your kid learn to code and will help
                your kid to perform better at school. During this course, your
                kid will also learn to create his own apps and games using
                coding. In the process of creating innovative apps, your kid
                will learn to excel in logic and structured way of thinking.
                Some of the other benefits of coding are :
              </p>
            </div>
            <div className="col-lg-3 col-md-3 col-6">
              <div className="text-center">
                <img src="/develop.png" alt="develop" />
                <p>Develop cognitive skill</p>
                <p className="text-center mt-3">
                  <small>
                    Coding helps the kid to develop the core skills to think,
                    read, learn, remember, reason, and concentrate
                  </small>
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-6">
              <div className="text-center">
                <img src="/problem-solving.png" alt="problem-solving" />
                <p>Learn problem - solving process</p>
                <p className="text-center mt-3">
                  <small>
                    The kid will learn to listen actively. analyse, decide on a
                    solution and communicate effectively while solving any
                    coding problem
                  </small>
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-6">
              <div className="text-center">
                <img src="/career.png" alt="career" />
                <p>
                  Build Career-Coding <br />
                  is the new literacy
                </p>
                <p className="text-center mt-3">
                  <small>
                    Developing interest in coding and programming skills will
                    help in building a career for your kid
                  </small>
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-6">
              <div className="text-center">
                <img src="/confidence.png" alt="confidence" />
                <p>Boost their confidence to be creative</p>
                <p className="text-center mt-3">
                  <small>
                    Coding transforms your child from a consumer of technology
                    to a innovator using technology and innovating boosts
                    confidence
                  </small>
                </p>
              </div>
            </div>
            <div className="col-lg-12 pt-6 pb-5 text-center">
              <a
                href="https://student-octorun.web.app/register"
                className="btn btn-danger my-2 my-sm-0"
                target="_"
              >
                Book Free Trial Now
              </a>
            </div>
          </div>
        </div>
      </div>
      <CoursesComponent />
      <div className="about-us" id="aboutUs">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h3 className="text-orange mb-4">
                <a>About Us</a>
              </h3>
            </div>
            <div className="col-lg-7 col-md-6 text-justify">
              <p className="text-orange pb-4 text-justify">
                <strong>OCTORUN</strong> was created to share our spirit of
                coding with the nextGen.
              </p>
              <p>
                With everything around us programmable, Coding is an essential
                skill now. There is a need to expose kids to programming now
                more than ever. We are helping parents and schools to bridge
                this gap with our team of experts in Pedagogy, Technology and
                Gaming while we make the classes as exciting and easy as we can
                for the kids. We have hired industry experienced and highly
                trained teachers to teach your kid as per the level and need of
                the kid
              </p>
              <div className="pt-4 pb-5">
                <Link
                  className="link contact-us-button"
                  style={{ color: '#808080' }}
                  to="/contactUs"
                >
                  <button className="btn-common contact-us-button">
                    Contact Us
                  </button>
                </Link>
              </div>
            </div>
            <div className="offset-lg-1 col-lg-3 col-md-6">
              <img
                src="/about-us.png"
                className="img-fluid mt-r"
                alt="about us"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default HomePage;
