import React from "react";

const Header = () => {
  return (
    <header className="header">
      <h1 className="logo">
        <svg xmlns="http://www.w3.org/2000/svg" width="300px" height="100px" viewBox="0 0 300 100" stroke="currentColor">
          <title id="logo">logo</title>
          <defs>
            <path id="curvePath" d="M 0 60 C 140 90 190 0 290 50 " stroke="#D17702" fill="none" />
          </defs>
          <use xlinkHref="#curvePath" />
          <text fontSize="3rem" x="0" y="0" className="name-text">
            <textPath xlinkHref="#curvePath" >
              <tspan fontSize="7rem" dy="25">T</tspan>
              <tspan dx="-15">rapti</tspan>
              <tspan fontSize="7rem" dx="10" dy="2" rotate="10">R</tspan>
              <tspan dx="-5">ahangdale</tspan>
            </textPath>
          </text>
        </svg>
      </h1>
      {/* <nav className="navigation"><ul className="menu"><li className="menu-item">About</li><li className="menu-item">Writing</li></ul></nav> */}
    </header>
  )
}

export default Header;