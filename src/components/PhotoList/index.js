import React, { useState } from 'react';
import Modal from '../Modal';

const PhotoList = ({ category }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState();

  const [photos] = useState([
    {
      name: 'Git Project Manager',
      category: 'projects',
      description: 'This application allows users to take in customer feedback and convert those tickets directly to GitHub issues.',
      url: 'https://git-ticketing-system.herokuapp.com/',
      github: 'https://github.com/BradCassityDev/git-ticketing-system',
    },
    {
      name: 'Budget Tracker',
      category: 'projects',
      description: 'This is a budget tracker for an individual to track daily transactions and maintain access both online and offline',
      url: 'https://budgeting-he.herokuapp.com/',
      github: 'https://github.com/heather-everton/budget-tracker-2',
    },
    {
      name: 'Note Taker',
      category: 'projects',
      description: 'This is a simple note taking application to capture notes and help you stay organized.',
      url: 'https://he-notepad.herokuapp.com/',
      github: 'https://github.com/heather-everton/Note-Taker',
    },
    {
      name: 'Team Profile Generator',
      category: 'projects',
      description: 'This is a simple Node.js application that can generate a website with your Team information',
      url: 'https://drive.google.com/file/d/1Sclf10NCXLUaL9arYSHldOtZrporza1R/view',
      github: 'https://github.com/heather-everton/Team-Profile-Generator',
    },
    {
      name: 'Space Research Service',
      category: 'projects',
      description: 'Ignite a love of learning, science, and astronomy while your kids are still young! Utilize our web application to allow your students to learn all about space and astronomy in a safe environment.',
      url: 'https://chazzkreutzkamp.github.io/group-project-one-Group4/',
      github: 'https://github.com/ChazzKreutzkamp/group-project-one-Group4',
    },
    {
      name: 'Weather Dashboard',
      category: 'projects',
      description: "Get a quiuck overview of today's weather and the upcoming forecast.",
      url: 'https://heather-everton.github.io/Weather-Dashboard/',
      github: 'https://github.com/heather-everton/Weather-Dashboard',
    },
    
  ]);

  const currentPhotos = photos.filter((photo) => photo.category === category);

  const toggleModal = (image, i) => {
    setCurrentPhoto({ ...image, index: i });
    setIsModalOpen(!isModalOpen);
  };
    
  return (
    <div>
        {isModalOpen && <Modal onClose={toggleModal} currentPhoto={currentPhoto} />}      
        <div className="flex-row">
        {currentPhotos.map((image, i) => (
          <div>
            <h5>{image.name} </h5>
            <img
            src={require(`../../assets/small/projects/${i}.jpg`).default}
            alt={image.name}
            className="img-thumbnail mx-1"
            onClick={() => toggleModal(image, i)}
            key={image.name}
          />
          </div>
          
        ))}
      </div>
    </div>
  );
};

export default PhotoList;
