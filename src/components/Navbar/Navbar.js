import React from "react";
import "./navbar.css";

const Navbar = ({ cards }) => {
  if (!cards || cards.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <div className='navbar'>
      <h1>Navbar</h1>
      <div className='cards'>
        {cards.map((card, index) => (
          <div key={index} className='card'>
            <img src={card.urlToImage}></img>
            <h1>{card.name}</h1>
            <p>
              <b>Author:</b>
              {card.author}
            </p>
            <p>
              <b>Description:</b>
              {card.description}
            </p>
            <a href={card.url} target='_blank' rel='noopener noreferrer'>
              Procitaj vise
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
