import React from 'react';
import './List.css';
import Card from './Card';

function List(props){
    const cardsArray = props.cards;


    return (
        <section className="List">
            <header className="List-header">
                <h2>{props.header}</h2>
            </header>
            <div className="List-cards">
                {cardsArray.map(
                    (card)=>(
                        <Card 
                            key={card.id}
                            title={card.title}
                            content={card.content}
                        />
                    )
                )}
                <button type="button" className="List-add-button">
                    + Add Random Card
                </button>
            </div>
        </section>
    )
}

export default List;