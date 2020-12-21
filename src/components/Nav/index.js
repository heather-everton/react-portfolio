import React from 'react';
// import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {
  const {
    contactSelected,
    setContactSelected,
  } = props;

  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          <span role="img" aria-label="computer"> 🖥️</span> Heather Everton
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a data-testid="about" href="#about" onClick={() => setContactSelected(false)}>
              About me
            </a>
          </li>
          <li className={`mx-2 ${contactSelected && 'navActive'}`}>
            <span onClick={() => setContactSelected(true)}>Contact</span>
          </li>
          <li className="mx-2">
            <a data-testid="projects" href="#projects" onClick={() => setContactSelected(false)}>
              Projects
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
