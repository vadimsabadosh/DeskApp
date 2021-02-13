import React, {Fragment, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import ColumnCard from  './ColumnCard';
import { CardGrid, Div } from '@vkontakte/vkui';
import firebase from 'firebase';
import CardCreate from './CardCreate';
import './Cards.css';

const Cards = ( {columnId }) => {
    const [cards, setCards] = useState([]);
     const addCards = (card) => setCards([...cards, card]);
    const removeCards = (removeId) => setCards(cards.filter(({ id }) => id !== removeId));

    useEffect(()=>{

        //Запрос в базу данных за колонками
        const db = firebase.firestore();
        
        db.collection("cards").where('columnId', '==', columnId).get().then((querySnapshot) => {
            const cards = [];
            querySnapshot.forEach((doc) => {
                const {columnID, name} = doc.data();
                cards.push({
                id: doc.id,
                columnID,
                name,

                });
            });
            setCards(cards);
        });
    }, []);
    return (
        <CardGrid>   
            {cards.map( ({ id, name }) => <ColumnCard id={id} key={id} onDelete={removeCards}>{name}</ColumnCard> )}  
            
            <div className='Card-wrapper'>
                <CardCreate columnId={columnId} onCreate={addCards}></CardCreate>
            </div>
            
        </CardGrid>
    )
}
Cards.propTypes = {
    columnId: PropTypes.string.isRequired
}
export default Cards;