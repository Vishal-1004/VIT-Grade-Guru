import React from "react";
import { FaGithub } from "react-icons/fa";
import { TbMathSymbols } from "react-icons/tb";
import { BiError } from "react-icons/bi";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const Navigate = useNavigate();

  const handleClick = (link) => {
    Navigate(`/${link}`);
  };

  return (
    <NavbarStyle>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid mx-0">
          <Link className="navbar-brand" to="/">
            <img
              src="./logo.png"
              alt=""
              width="58"
              height="26"
              className="d-inline-block align-text-top"
            />
            <span className="logo-name">&nbsp;Grade Guru</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="btn-frg-style ms-auto">
              <button
                type="button"
                className="btn btn-outline-success px-3 me-3 my-1"
                onClick={() => handleClick("formula")}
              >
                <div className="d-flex align-items-center">
                  <TbMathSymbols /> &nbsp; Formula
                </div>
              </button>
              <button
                type="button"
                className="btn btn-outline-danger me-3 my-1"
                onClick={() => handleClick("report")}
              >
                <div className="d-flex align-items-center">
                  <BiError /> &nbsp; Report Issue
                </div>
              </button>
              <a
                className="btn btn-outline-dark px-3 me-3 my-1"
                href="/"
                role="button"
              >
                <div className="d-flex align-items-center">
                  <FaGithub /> &nbsp; Source Code
                </div>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </NavbarStyle>
  );
};

const NavbarStyle = styled.section`
  .logo-name {
    font-weight: 400 !important;
    font-size: 1.5rem;
  }

  @media (max-width: 768px) {
    .btn-frg-style {
      margin: 0 !important;
      display: flex;
      width: fit-content;
      justify-content: center;
      flex-direction: column;
    }
  }
`;

export default Navbar;
