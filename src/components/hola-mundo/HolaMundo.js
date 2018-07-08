import React from 'react';
import Button from 'material-ui/Button';

import './HolaMundo.css';
class HolaMundo extends React.Component {
    render(){
        return (
            <div>
                {/*Comentario en jsx*/}
                <p>Hola mundo! {this.props.nombre}</p>
                <p>Hola mundo2!</p>
                <p className="desc">Hola como estan esta es una pequeña descripcion de mi</p>
                <Button variant="raised" color="primary">Enviar</Button>
            </div>
        )
    }
}

export default HolaMundo;