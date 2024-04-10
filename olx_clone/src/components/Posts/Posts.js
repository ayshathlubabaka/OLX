import React, { useState } from 'react';
import Heart from '../../assets/Heart';
import './Posts.css';
import { Link } from 'react-router-dom';
import cardData from '../../assets/CardData';

function Posts({searchQuery}) {

  const filteredCards = cardData.filter((card) => {
    return card.name.toLowerCase().includes(searchQuery.toLowerCase()) || card.category.toLowerCase().includes(searchQuery.toLowerCase())
  })

  return (
    <div className="postParentDiv">
      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="cards cards-container">
          {filteredCards.map((card) => (
            <Link to={`/viewProduct/${card.id}`} key={card.id}> 
              <div className="card">
                <div className="favorite">
                  <Heart />
                </div>
                <div className="image">
                  <img src={card.imageUrl} alt="" />
                </div>
                <div className="content">
                  <p className="rate">{card.price}</p>
                  <span className="kilometer">{card.category}</span>
                  <p className="name">{card.name}</p>
                </div>
                <div className="date">
                  <span>{card.date}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Posts;
