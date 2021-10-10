import { Link } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';
import SEO from './Seo';

const Layout = ({ children }) => {
  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}
    >
      <SEO />
      <header className="py-1">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container">
            <Link className="navbar-brand" to="/">
              <img src={'/octorunLogo.png'} width="104" height="84" alt="" />
            </Link>
            {/* <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button> */}
            <div
              // className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              {/* <ul className="navbar-nav ml-auto"></ul> */}
              <div style={{ flex: 1 }} />
              <div className="my-2 my-lg-0 mr-0">
                <a
                  href="https://student-octorun.web.app/register"
                  className="btn btn-danger my-2 my-sm-0"
                  target="_"
                >
                  Book Free Trial Now
                </a>
                <span style={{ padding: '4px' }} />
                <a
                  href="https://student-octorun.web.app/"
                  target="_"
                  className="btn btn-outline-danger my-2 ml-2 my-sm-0 width-100px"
                >
                  Login
                </a>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <div style={{ flex: 1 }}>{children}</div>
      <div className="top-footer">
        <div className="w-100">
          <div className="row">
            <div className="col-lg-6 col-md-6 f-gcl p-5">
              <div className="row">
                <div className="col-lg-3">
                  <p>
                    <a
                      className="link"
                      style={{ color: '#808080' }}
                      href="#aboutUs"
                    >
                      About us
                    </a>
                  </p>
                  <p>
                    <a
                      className="link"
                      style={{ color: '#808080' }}
                      href="#courses"
                    >
                      Courses
                    </a>
                  </p>
                  <p>
                    <a
                      className="link"
                      style={{ color: '#808080' }}
                      href="#whyCoding"
                    >
                      Why Coding
                    </a>
                  </p>
                </div>
                <div className="col-lg-4">
                  <p>
                    <a
                      className="link"
                      style={{ color: '#808080' }}
                      href=""
                      target="_blank"
                    >
                      Teacher Login
                    </a>
                  </p>
                  <p>
                    <a
                      className="link"
                      style={{ color: '#808080' }}
                      href="https://student-octorun.web.app/register"
                      target="_blank"
                    >
                      Student Login
                    </a>
                  </p>
                  <p>
                    <a
                      className="link"
                      style={{ color: '#808080' }}
                      href=""
                      target="_blank"
                    >
                      Support
                    </a>
                  </p>
                </div>
                <div className="col-lg-5">
                  <p>
                    <Link
                      className="link"
                      style={{ color: '#808080' }}
                      to="/privacy-policy"
                    >
                      Privacy Policy
                    </Link>
                  </p>
                  <p>
                    <Link
                      className="link"
                      style={{ color: '#808080' }}
                      to="/fulfilment-refund-policy"
                    >
                      Fulfilment Policy
                    </Link>
                  </p>
                  <p>
                    <Link
                      style={{ color: '#808080' }}
                      to="/terms-and-conditions"
                    >
                      Terms and Conditions
                    </Link>
                  </p>
                  <p>
                    <Link
                      className="link"
                      style={{ color: '#808080' }}
                      to="/blog"
                    >
                      Blogs
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 f-gcr p-5">
              <h3 className="text-orange">CODE GALLERY</h3>
              <h4 className="text-orange">FOLLOW US :</h4>

              <div className="logoContainer">
                <a
                  className="link"
                  href="https://www.facebook.com/octorun/"
                  target="_blank"
                >
                  <img src={'/facebook_logo.png'} alt="facebook" />
                </a>
                <a
                  className="link"
                  href="https://twitter.com/octorun"
                  target="_blank"
                >
                  <img src={'/twitter_logo.png'} alt="twitter" />
                </a>
                <a
                  className="link"
                  href="https://www.youtube.com/channel/UCci8BQpKlhcSrYSLi-4Fgww/"
                  target="_blank"
                >
                  <img src={'/youtube_logo.png'} alt="youtube" />
                </a>
                <a
                  className="link"
                  href="http://linkedin.com/company/octorun"
                  target="_blank"
                >
                  <img
                    src={'/linkedin_logo.png'}
                    alt="linkedin"
                    style={{ width: '34px' }}
                  />
                </a>
                <a
                  className="link"
                  href="https://www.instagram.com/admin.octorun/"
                  target="_blank"
                >
                  <img src={'/instagram_logo.png'} alt="facebook" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="py-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <p className="mb-0 text-center text-white">
                Copyright Octorun, CosmosSoftwareLabs Pvt Ltd © 2021. All rights
                reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
