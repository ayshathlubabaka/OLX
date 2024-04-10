import React from 'react';
import { useParams } from 'react-router-dom';
import cardData from '../../assets/CardData'; // Import your card data
import './ViewProduct.css';

function View() {
  const { productId } = useParams();
  const product = cardData.find((card) => card.id === parseInt(productId, 10));

  if (!product) {
    return <div>Product not found</div>;
  }

  const { price, name, category, date, imageUrl, seller } = product;

  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img src={imageUrl} alt={name} />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>{price}</p>
          <span>{name}</span>
          <p>{category}</p>
          <span>{date}</span>
        </div>
        <div className="contactDetails">
          <p>Seller details</p>
          <p>{seller.name}</p>
          <p>{seller.phone}</p>
        </div>
      </div>
    </div>
  );
}

export default View;
