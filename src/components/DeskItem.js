import React from 'react';
import PropTypes from 'prop-types';
import {Card, Div, Button} from '@vkontakte/vkui';
import firebase from 'firebase/app';
import './Deskitem.css';

const  DeskItem =({id, children, onDelete, onClick})=>{

    
    
        const removeItem = () => {
            const db = firebase.firestore();
            // Add a new document in collection "cities"
            db.collection("desks")
            .doc(id)
            .delete()
            .then(() => onDelete(id))
            .catch(console.error)
        }

    

    return (
        <Card size="l" onClick={onClick}>
            
                <Div className='DeskItem_content'>{children}
                    <Button mode='destructive' onClick={removeItem}>Удалить</Button>
                </Div>
                
            
            
        </Card>
    )
}

DeskItem.propTypes = {
    id: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
    onClick: PropTypes.func.isRequired
}

export default DeskItem;