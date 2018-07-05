import React from 'react';
class HolaMundo extends React.Component {
    render(){
        return (
            <div>
                {/*Comentario en jsx*/}
                <p>Hola mundo! {this.props.nombre}</p>
                <p>Hola mundo2!</p>
            </div>
        )
    }
}

export default HolaMundo;