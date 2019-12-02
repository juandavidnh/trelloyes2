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
                            id={card.id}
                            title={card.title}
                            content={card.content}
                            onDeleteItem={props.onDeleteItem}
                        />
                    )
                )}
                <button 
                    type="button" 
                    className="List-add-button"
                    onClick={() => props.onAddItem(props.id)}>
                    + Add Random Card
                </button>
            </div>
        </section>
    )
}

export default List;