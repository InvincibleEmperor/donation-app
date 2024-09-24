import React, { useState } from "react";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <header id="akc-header" className="akc-header">
      <nav className="akc-main-header navbar flex flex-col py-0">
        {/* Top Header */}
        <div className="akc-top-header w-full bg-gray-100">
          <div className="container mx-auto">
            <div className="flex justify-between items-center">
              <div className="flex gap-4 items-center">
                <ul className="akc-socialLinks flex gap-4 items-center">
                  <li>
                    <a
                      href="https://www.facebook.com/profile.php?id=100089590148688"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-gray-700"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/company/akshaya-chaitanya/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-gray-700"
                    >
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/Akshaychaitanya"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-gray-700"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/channel/UC0lP40okaCRcPV495GoTp5Q"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-gray-700"
                    >
                      <i className="fab fa-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex items-center">
                <a
                  href="mailto:[email protected]"
                  className="flex items-center text-gray-500 mr-6"
                >
                  <i className="fa-solid fa-envelope mr-2"></i>
                  [email&#160;protected]
                </a>
                <a
                  href="tel:08928991161"
                  className="flex items-center text-gray-500"
                >
                  <i className="fa-solid fa-phone mr-2"></i>+91 89289 91161
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Main Header */}
        <div className="container mx-auto py-3 flex justify-between items-center relative">
          <a
            className="navbar-brand m-0 p-0"
            href="index.html"
            target="_self"
            rel="noopener noreferrer"
          >
            <img
              className="p-0"
              src="public/assets/images/akshaya-chaitanya-logo-03.webp"
              alt="logo"
              style={{ width: "150px" }}
            />
          </a>
          <div className="flex items-center">
            <a
              href="donate.html"
              className="nav-link btn akc-heart-btn block lg:hidden"
              target="_self"
              rel="noopener noreferrer"
            >
              <img
                src="public/assets/images/akc-heart-01.webp"
                alt="akc heart"
                className="inline mr-2"
              />
              <span>Donate</span>
            </a>
            <button
              className="navbar-toggler border-0 p-0 lg:hidden"
              onClick={() => setIsNavOpen(!isNavOpen)}
            >
              <div id="akc-hamburger">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </button>
          </div>

          <div
            className={`collapse navbar-collapse w-full lg:flex justify-end items-center ${
              isNavOpen ? "block" : "hidden"
            }`}
            id="navbarNav"
          >
            <ul className="navbar-nav w-full lg:flex lg:items-center lg:justify-end">
              <li className="nav-item">
                <a className="nav-link akc-nav-link" href="index.html">
                  Home
                </a>
              </li>
              <li className="nav-item dropdown relative">
                <a
                  className="nav-link dropdown-toggle akc-pc-nav"
                  href="#"
                  onClick={() => setIsNavOpen(!isNavOpen)}
                >
                  About <i className="fa-solid fa-angle-down"></i>
                </a>
                <ul
                  className={`dropdown-menu absolute ${
                    isNavOpen ? "block" : "hidden"
                  }`}
                >
                  <li>
                    <a
                      className="dropdown-item nav-link"
                      href="about-trusted-ngo.html"
                    >
                      About Akshaya Chaitanya
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item nav-link"
                      href="our-kitchen-in-mumbai.html"
                    >
                      Our Kitchen in Mumbai
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item nav-link"
                      href="mou-with-government-departments.html"
                    >
                      MOU with Government Departments
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item nav-link"
                      href="board-of-trustees.html"
                    >
                      Board of Trustees
                    </a>
                  </li>
                </ul>
              </li>
              {/* More Nav Items */}
              <li className="nav-item">
                <a
                  className="nav-link akc-nav-link"
                  href="donate/charity-on-birthday-special-occasion.html"
                >
                  Birthday Special
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link akc-nav-link"
                  href="donate/corporate-social-responsibilty-for-organisation.html"
                >
                  Partner With Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link akc-nav-link" href="blog.html">
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link akc-nav-link" href="contact-ngo.html">
                  Contact Us
                </a>
              </li>
              <li className="nav-item hidden lg:block">
                <a
                  className="nav-link btn akc-heart-btn"
                  href="donate.html"
                  target="_self"
                  rel="noopener noreferrer"
                >
                  <img
                    width="100%"
                    height="auto"
                    src="public/assets/images/akc-heart-01.webp"
                    alt="akc heart"
                    className="inline mr-2"
                  />
                  <span>Donate</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
