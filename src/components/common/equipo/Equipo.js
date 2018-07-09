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

  // Este metodo se ejecuta una vez que el componente se halla montado
  componentDidMount() {
    console.log('Done !')

    const localFavs = localStorage.getItem(this.props.nombre)
    console.log(localFavs)
    if (localFavs) {
      this.setState({ 
        favo: JSON.parse(localFavs)
      })
    }
  }

  // Escucha cada que el componente recibe una actualizacion
  componentDidUpdate() {
    console.log(this.props)

    //Uso de localStorage vamos a utilizar el metodo setItem y recibe dos valores el nombre y el valor
    localStorage.setItem(this.props.nombre, JSON.stringify(this.state.favo))
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
