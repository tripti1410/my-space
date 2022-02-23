import React from "react"
// import "./header.css"

const Header = () => {
  return (
    <header className="header" role="banner">
      <a href="/" className="logo">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 300 100"
          stroke="currentColor"
        >
          <title id="logo">logo- Trapti Rahangdale</title>
          <defs>
            <path
              id="curve-path-1"
              d="M 0 60 C 140 90 190 0 290 50 "
              strokeWidth="3"
              stroke="#f5b326"
              fill="none"
            />
            <path
              id="curve-path-2"
              d="M 0 56 C 140 86 190 0 290 46 "
              strokeWidth="3"
              stroke="#b4e6ff"
              fill="none"
            />
          </defs>
          <use xlinkHref="#curve-path-1" />
          <use xlinkHref="#curve-path-2" />
          <text fontSize="3rem" x="0" y="0" className="name-text">
            <textPath xlinkHref="#curve-path-1">
              <tspan dx="15">trapti</tspan>
              <tspan dx="15">rahangdale</tspan>
            </textPath>
          </text>
        </svg>
      </a>
      <nav className="navigation">
        <ul className="menu">
          <li className="menu-item">
            <a href="/about">About</a>
          </li>
          <li className="menu-item">
            <a href="/projects">Projects</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
