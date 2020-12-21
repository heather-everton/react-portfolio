import React, { useState } from 'react';
import Nav from "./components/Nav";
import About from "./components/About";
import Gallery from "./components/Gallery";
import ContactForm from "./components/Contact";
import './index.css';

function App() {
  const [categories] = useState([
    {
      name: 'projects',
      description: 'My Recent Projects',
    },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  
  const [contactSelected, setContactSelected] = useState(false);
  const [resumeSelected, setResumeSelected] = useState(false);


  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        resumeSelected={resumeSelected}
        setContactSelected={setContactSelected}
        setResumeSelected={setResumeSelected}

      ></Nav>
      <main>
        <div>
        {!contactSelected ? (
          <>
            <About></About>
            <Gallery currentCategory={currentCategory}></Gallery>

          </>
        ) : (
            <ContactForm></ContactForm>
          )}
        </div>
      </main>
      <footer>
        <ul>
          <li>
            <a href="https://github.com/heather-everton/" target="_blank" rel="noreferrer">Github</a>
          </li>
          <li>
            <a href="linkedin.com/in/heather-everton-a4205065/" target="_blank" rel="noreferrer">LinkedIn</a>
          </li>
          <li>
            <a href="https://github.com/heather-everton/" target="_blank" rel="noreferrer">Github</a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
