import React, {useState} from 'react';
import { Button, Div, Card, FormLayout, Input } from '@vkontakte/vkui';
import Icon28AddSquareOutline from '@vkontakte/icons/dist/28/add_square_outline';

import PropTypes from 'prop-types';

const modes = {
    button: 'button',
    form: 'form'
}
const statuses ={
    default: 'default',
    error: 'error'
}
const FormCreate = ({ onSubmit, placeholder, actionTitle }) => {

    const [mode, setMode] = useState(modes.button); // Значение появление формы или кнопки по уморлчанию
    const [name, setName] = useState('');
    const [status, setStatus] = useState(statuses.default);

    const reset = () => {
        setStatus(statuses.default);

        setName('');
        setMode(modes.button);
    }

    const submit = (event) => {
        if(event){
            event.preventDefault();
        }
        if(!name.trim().length){
            setStatus(statuses.error);
            return;
        }
        onSubmit(name).then(reset);
    }

    if (mode === modes.button){
        return (
            <Div>
                <Button 
                    onClick={() => setMode(modes.form)} 
                    size="l" 
                    mode="primary"
                    stretched 
                    before={
                    <Icon28AddSquareOutline width={24} height={24}/>
                    }>{actionTitle}
                    </Button>
            </Div>
        )
    }
    return (
        <Div>
            <Card size="l" mode="shadow">
                <FormLayout onSubmit={submit}>
                    <Input 
                    autoFocus 
                    value={name} 
                    onChange={(event) => setName(event.target.value)} 
                    status={status}
                    placeholder={placeholder}/>

                    <div>
                        <Button onClick={submit}>{actionTitle}</Button>
                        <Button onClick={reset} mode="tertiary">Отменить</Button>
                    </div>
                    
                </FormLayout>
            </Card>
        </Div>
    )
}

FormCreate.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    placeholder: PropTypes.string.isRequired,
    actionTitle: PropTypes.string.isRequired
}

export default FormCreate;