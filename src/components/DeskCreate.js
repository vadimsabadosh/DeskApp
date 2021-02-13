import React, {useState} from 'react';

import firebase from 'firebase/app';
import PropTypes from 'prop-types';
import FormCreate from './FormCreate';



const DeskCreate = ({ onCreate }) => {

   
    const createDesk = ( name) => {
        

        const db = firebase.firestore();
        // Add a new document in collection "cities"
        return db.collection("desks")
        .add({ name })
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
            onSubmit={createDesk} 
            placeholder='Введите название доски' 
            actionTitle='Создать доску'/>
        
    )
}

DeskCreate.propTypes = {
    onCreate: PropTypes.func.isRequired
}

export default DeskCreate;