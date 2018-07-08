import React, { Component } from 'react';

// Estilos
import './Equipo.css';
import { Icon } from 'material-ui';

class Equipo extends Component {

  state  = {
    favo: { value: 'star' }
  }

  setFavorito() {
    console.log('Favorito :)');

    // 1. Respaldamos el estado existente
    const favo = { ...this.state.favo }

    // 2. Vamos a modificar el valor 
    favo.value = favo.value === 'star' ? 'star_selected' : 'star';

    //3. Recargamos el estado
    this.setState({ favo });

  }
  render() {
    return (
      <div>
        <img className="team-logo" src={this.props.logo} alt={this.props.nombre} />
        <Icon onClick={this.setFavorito.bind(this)} className={this.state.favo.value}>star_rate</Icon>
      </div>
    );
  }
}

export default Equipo;
