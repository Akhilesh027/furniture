import React, { useState } from "react";
import "./ProductCarousel.css";
import p1 from '../images/p1.webp'
import p2 from '../images/p2.webp'
import p3 from '../images/p3.webp'
import p4 from '../images/p4.webp'
import p5 from '../images/p5.webp'
import p6 from '../images/p6.webp'
import p7 from '../images/p7.webp'
import p8 from '../images/p8.webp'
const products = [
  {
    id: 1,
    name: "Montreal Black Boucle Effect Curved Lounge Chair With Swivel Base",
    image: p1
  },
  {
    id: 2,
    name: "Montreal Ivory Boucle Effect Curved Lounge Chair With Swivel Base",
    image: p2
  },
  {
    id: 3,
    name: "Montreal Black Boucle Effect Armless Lounge Chair",
    image: p3
  },
  {
    id: 4,
    name: "Montreal Ivory Boucle Effect Armless Lounge Chair",
    image: p4
  },
  {
    id: 5,
    name: "Modern Beige Lounge Chair With Wooden Legs",
    image: p5
  },
  {
    id: 6,
    name: "Premium Blue Fabric Lounge Chair With Metal Base",
    image: p6
  },
  {
    id: 7,
    name: "Elegant Grey High-Back Lounge Chair",
    image: p7
  },
  {
    id: 8,
    name: "Luxury Olive Green Boucle Lounge Chair",
    image: p8
  }
];

const ProductCarousel = () => {
  const [index, setIndex] = useState(0);
  const visible = 4;

  const handlePrev = () => {
    setIndex((prev) => (prev - visible + products.length) % products.length);
  };

  const handleNext = () => {
    setIndex((prev) => (prev + visible) % products.length);
  };

  const getVisibleProducts = () => {
    return [...products, ...products].slice(index, index + visible);
  };

  return (
    <div className="carousel-container">
      <h2 className="carousel-title">LATEST PRODUCTS</h2>
      <div className="carousel-wrapper">
        <button className="arrow left" onClick={handlePrev}>
          &#8249;
        </button>
        <div className="carousel-track">
          {getVisibleProducts().map((product) => (
            <div className="product-card" key={product.id}>
              <img src={product.image} alt={product.name} />
              <p className="product-name">{product.name}</p>
            </div>
          ))}
        </div>
        <button className="arrow right" onClick={handleNext}>
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default ProductCarousel;
