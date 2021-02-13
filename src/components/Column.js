import React from 'react';
import {Header, Div, Card, Button, ActionSheet, ActionSheetItem, usePlatform, IOS} from '@vkontakte/vkui';
import PropTypes from 'prop-types';
import './Column.css';
import Cards from './Cards';
import firebase from 'firebase/app';
import './Style.css';
import Icon24MoreHorizontal from '@vkontakte/icons/dist/24/more_horizontal';

const Column = ( { name, id, onDelete, setPopout } ) => {

    const deleteColumn = () => {
        
            const db = firebase.firestore();
            // Add a new document in collection "cities"
            db.collection("columns")
            .doc(id)
            .delete()
            .then(() => onDelete(id))
            .catch(console.error)
        
    };
    const osname = usePlatform();

    const showPopupColumn = () => {
        const close = () => setPopout(null);
        setPopout((
            <ActionSheet onClose={close}>
            
            <ActionSheetItem autoclose mode="destructive" onClick={deleteColumn}>
              Удалить
            </ActionSheetItem>
            {osname === IOS && <ActionSheetItem autoclose mode="cancel">Отменить</ActionSheetItem>}
          </ActionSheet>
        ));
    }
    return (    
        
            <Div className="Column">
                <div className='Column-header'>
                    <Header className='ColorWhite'>{name}</Header>
                    <Button 
                    className='Column-header__button'
                    mode="overlay_outline" 
                    onClick={showPopupColumn}
                    >
                        <Icon24MoreHorizontal/>
                    </Button>
                </div>
                <Card className='Columns__wrapper'>
                    <Div>
                            
                    </Div>
                    <Div>
                    
                        <Cards columnId={id}/>
                    </Div>
                </Card>
            </Div>
            
     
    )
}

Column.propTypes = {
    id: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
}
export default Column;
