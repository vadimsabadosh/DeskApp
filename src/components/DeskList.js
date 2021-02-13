import React, {useEffect} from 'react';
import DeskItem from './DeskItem';
import { CardGrid} from '@vkontakte/vkui';
import PropTypes from 'prop-types';
import firebase from 'firebase/app';


const DeskList = ({desks, onDelete, onLoadDesks, onDesksClick}) => {

    //Запрос в базу данных за досками
    useEffect(()=>{
        const db = firebase.firestore();
        
        db.collection("desks").get().then((querySnapshot) => {
            const desks = [];
            querySnapshot.forEach((doc) => {
                desks.push({
                id: doc.id,
                name: doc.data().name,
                });
            });
            onLoadDesks(desks);
        });
    }, []);
    ////

    if(!desks.length){
        return null;
    }

    return (
        <CardGrid>
            {desks.map(({id, name}) => (
            <DeskItem 
            onClick={() => onDesksClick(id)} 
            key={id} 
            id={id} 
            onDelete={onDelete}>
                {name}
                </DeskItem>
                ))}

        </CardGrid>
    )

}

DeskList.propTypes = {
    desks: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
    })).isRequired,
    onDelete: PropTypes.func.isRequired,
    onLoadDesks: PropTypes.func.isRequired,
    onDesksClick: PropTypes.func.isRequired,
}


export default DeskList;