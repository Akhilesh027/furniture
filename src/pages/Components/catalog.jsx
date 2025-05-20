import React from 'react';
import './Catalogues.css';
import img1 from '../images/55_South_New_Additions_2024_1000_1.jpg'
import img2 from '../images/Interiors_By_Premier_New_Additions_2024_1000_1.jpg'
import img3 from '../images/Bosieresized.png'
import img4 from '../images/Fiorirezised.png'
import Newsletter from './Newsletter';
const catalogues = [
  {
    title: "Fifty Five South New Additions",
    image: img1, // Replace with your actual image path
  },
  {
    title: "Interiors by Premier New Additions",
    image: img2,
  },
  {
    title: "Bosie",
    image: img3,
  },
  {
    title: "Fiori",
    image: img4,
  },
];

const Catalogues = () => {
  return (
    <div className="catalogues-container">
      <h2 className="catalogues-heading">CATALOGUES & LOOKBOOKS</h2>
      <div className="catalogues-grid">
        {catalogues.map((item, index) => (
          <div key={index} className="catalogue-card">
            <img src={item.image} alt={item.title} className="catalogue-image" />
            <h3 className="catalogue-title">{item.title}</h3>
             <a href="#" className="button">Discover more</a>
          </div>
        ))}
      </div>
                   

    </div>
  );
};

export default Catalogues;
