import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const App = () => {
    // useState hook to manage the current index of the displayed person
  const [index, setIndex ] = useState(0); // Initialize index state as 0
  const {name, job, image, text } = people[index]; // Destructure the properties of the current person

    // Function to display a random person
  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length); // Generate a random index
    if(randomNumber === index){ 
      randomNumber = index + 1; 
    }
    const newIndex = randomNumber % people.length; 
    setIndex(newIndex);
  };

  const nextPerson = () => {
    setIndex((currentIndex) => {
      const newIndex = (currentIndex + 1) % people.length;
      return newIndex;
    });
  };

  const prevPerson = () => {
    setIndex((currentIndex) => {
      const newIndex = (currentIndex - 1 + people.length) % people.length;;
        return newIndex;
      });
  };

  return (
    <main>
      <article className='review'>
        <div className='img-container'>
          <img src={image} alt={name} className='person-img'/>
          <span className='quote-icon'>
          <FaQuoteRight />
          </span>
        </div>
        <h2 className='author'>{name}</h2>
        <p className='job'>{job}</p>
        <p className="info">{text}</p>
        <div className="btn-container">
          <button className='prev-btn' onClick={prevPerson}>
            <FaChevronLeft />
          </button>
          <button className='next-btn' onClick={nextPerson}>
            <FaChevronRight />
          </button>
        </div>
        <button className="btn btn-hipster" onClick={randomPerson}>Surprise Me</button>
      </article>
    </main>
  )
}

export default App;
