import React from "react";
import { Outlet, Link } from "react-router-dom";

function Layout() {
  return (
    <div className="min-h-screen  flex flex-col border-4 border-red-500">
      {/* Navbar 
      <nav className="navbar navbar-expand-lg navbar-light bg-black border">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Library Management
          </Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="navbar-brand" to="/">
                  Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/pages/books">
                  Books
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/members">
                  Members
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/settings">
                  Settings
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>*/}

      {/* This is where child pages will render */}
      <div className="min-h-full bg-gray-700  row  ">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
