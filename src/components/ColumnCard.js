import React from 'react';
import {Card, Div, Button} from '@vkontakte/vkui';
import PropTypes from 'prop-types';
import './ColumnCard.css';
import firebase from 'firebase/app';
import Icon16CancelCircleOutline from '@vkontakte/icons/dist/16/cancel_circle_outline';

const ColumnCard = ({ children, id, onDelete }) => {

    const deleteCard = () => {
        
        const db = firebase.firestore();
        // Add a new document in collection "cities"
        db.collection("cards")
        .doc(id)
        .delete()
        .then(() => onDelete(id))
        .catch(console.error)
    
    };

    return (
    <Card  size="l">
        <Div className='ColumnCard-wrapper'>
                {children} 
                <Button  onClick={deleteCard} mode='tertiary' className='btn-card' before={<Icon16CancelCircleOutline/>}></Button>
        </Div>
    </Card>
    )
}
ColumnCard.propTypes = {
   children : PropTypes.node.isRequired
}
export default ColumnCard;