import React from 'react'
import "./style.css"

const MenuCard = ({menuData}) => { 
    
    return (
        <>
        <h1>List of Some Programing Languages</h1>
        <section className="main-card--cointainer">
         {menuData.map((CurElem) => {
             const {id,name,image,description,price } = CurElem;
            return (
                <>
                <div className="card-container" key={id}>
                <div className="card">
                    <div className="card-body">
                    <span className="card-number card-circle subtle">{id}</span>
                    <span className="card-author subtle">{name}</span>
                    <h2 className="card-title">{name}</h2>
                    <span className='card-description-subtle card-read'>{description}</span>
                    <div className="cars-read">-</div>
                </div>
                <img src={image} alt="images" />
              <span className="card-tag subtle"><a href="https://en.wikipedia.org/wiki/Programming_language" target="_blank" rel="noopener noreferrer">Learn More</a></span>
            </div>
        </div> 
        </>
        )
        })}
        </section>          
        </>
    )
}

export default MenuCard
