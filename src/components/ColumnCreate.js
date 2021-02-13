import React, {useState} from 'react';
import {Div} from '@vkontakte/vkui';
import firebase from 'firebase/app';
import PropTypes from 'prop-types';
import FormCreate from './FormCreate';
import './Columns.css';


const ColumnCreate = ({ onCreate, deskId }) => {

   
    const createColumn = ( name) => {
        

        const db = firebase.firestore();
        // Add a new document in collection "cities"
        return db.collection("columns")
        .add({ name, deskId })
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
        <Div className="Columns">
            <FormCreate 
            onSubmit={createColumn} 
            placeholder='Введите название колонки' 
            actionTitle='Создать колонку'/>
        </Div>
    )
}

ColumnCreate.propTypes = {
    onCreate: PropTypes.func.isRequired,
    deskId: PropTypes.string.isRequired
}

export default ColumnCreate;