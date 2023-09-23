import React from 'react';

function MainNavbar() {
  return (
    <nav className="navbar align-items-stretch navbar-light flex-md-nowrap p-0">
      <form action="#" className="main-navbar__search w-100 d-none d-md-flex d-lg-flex">
        <div className="input-group input-group-seamless ml-3">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <i className="fas fa-search"></i>
            </div>
          </div>
          <input className="navbar-search form-control" type="text" placeholder="Search for something..." aria-label="Search" />
        </div>
      </form>
      <ul className="navbar-nav border-left flex-row">
        <li className="nav-item border-right dropdown notifications">
          {/* Notifications content */}
        </li>
        <li className="nav-item dropdown">
          {/* User profile dropdown */}
        </li>
      </ul>
      <nav className="nav">
        <a href="#" className="nav-link nav-link-icon toggle-sidebar d-md-inline d-lg-none text-center border-left" data-toggle="collapse" data-target=".header-navbar" aria-expanded="false" aria-controls="header-navbar">
          <i className="material-icons">&#xE5D2;</i>
        </a>
      </nav>
    </nav>
  );
}

export default MainNavbar;
