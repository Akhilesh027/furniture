import React from 'react'
import './cat.css'

// Import images for each category
import seatingImg from '../images/c1.jpg'
import bowlsImg from '../images/Vases_1407_2.jpg'
import kidsImg from '../images/Kids_cat_1417.jpg'
import lampsImg from '../images/Table_lamps_1462.jpg'
import bathroomImg from '../images/Bathroom_acessories_1539.jpg'
import dinnerImg from '../images/Dinner_sets_1522.jpg'
import consoleImg from '../images/Console_table_1459.jpg'
import textilesImg from '../images/Textiles_1473.jpg'

const categories = [
  { title: "Seating", img: seatingImg },
  { title: "Decorative Bowls\nPlates and Dishes", img: bowlsImg },
  { title: "Kids Accessories", img: kidsImg },
  { title: "Table Lamps", img: lampsImg },
  { title: "Bathroom Accessories", img: bathroomImg },
  { title: "Dinner Sets", img: dinnerImg },
  { title: "Console Tables", img: consoleImg },
  { title: "Home Textiles", img: textilesImg },
]

const Cat = () => {
  return (
    <section className="trending-categories">
      <h2>TRENDING CATEGORIES</h2>
      <div className="category-grid">
        {categories.map((cat, index) => (
          <div 
            key={index} 
            className="category-card"
            style={{
              backgroundImage: `url(${cat.img})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="content">
              <h3>{cat.title.split('\n').map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  <br/>
                </React.Fragment>
              ))}</h3>
              <a href="#" className="button">Discover more</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Cat
