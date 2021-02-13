import React, {Fragment, useState, useEffect} from 'react';
import {PanelHeaderSimple} from '@vkontakte/vkui';
import PropTypes from 'prop-types';
import DeskList from './DeskList';
import DeskCreate from './DeskCreate';

const Desks = ({onChangePanel, addDesk, desks, removeDesk, setDesks}) => {


    
    

    return (
        <Fragment>
            <PanelHeaderSimple>Мои доски</PanelHeaderSimple>
            
            <DeskCreate onCreate={addDesk}/>
            
            <DeskList desks={desks} onDelete={removeDesk} onLoadDesks={setDesks} onDesksClick={onChangePanel}/>

            
        </Fragment>
    )
};

Desks.propTypes = {
    onChangePanel: PropTypes.func.isRequired,
}

export default Desks;