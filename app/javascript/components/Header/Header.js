import React from "react";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
      <div className="container">
        {/* <%= link_to  "Yummy Restaurant", root_path, className: "navbar-brand" %> */}

        <a className="navbar-brand" href="/">
          Yummy Restaurant
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
  );
};

export default Header;
