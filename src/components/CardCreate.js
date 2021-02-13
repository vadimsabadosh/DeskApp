import React, {useState} from 'react';

import firebase from 'firebase/app';
import PropTypes from 'prop-types';
import FormCreate from './FormCreate';



const CardCreate = ({ onCreate, columnId }) => {

   
    const createCard = ( name) => {
        

        const db = firebase.firestore();
        // Add a new document in collection "cities"
        return db.collection("cards")
        .add({ name, columnId })
        .then((docRef) => docRef.get())
        .then(doc => {
            onCreate({
                id: doc.id,
                ...doc.data()
            });
            
        })
        .catch(function(error) {
            console.error("Error writing document: ", error);
        });
        
    };

    
    return (
        
            <FormCreate 
            onSubmit={createCard} 
            placeholder='Введите название карточки' 
            actionTitle='Создать карточку'/>
        
    )
}

CardCreate.propTypes = {
    onCreate: PropTypes.func.isRequired,
    columnId: PropTypes.string.isRequired,
}

export default CardCreate;