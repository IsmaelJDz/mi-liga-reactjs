import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Estilos
import './Liga.css';

// Material
import Button from 'material-ui/Button';

// Componentes
import Equipo from './../common/equipo/Equipo';
import Jugador from './../common/jugador/Jugador';

// Imagenes
// import LogoFelinos from './../../assets/logos/felinos.png';
// import LogoPiratas from './../../assets/logos/piratas.png';
// import LogoTiburones from './../../assets/logos/tiburones.png';
// import FotoSergio from './../../assets/fotos/sergio.png';
// import FotoManuel from './../../assets/fotos/manuel.png';
// import FotoJose from './../../assets/fotos/jose.png';
// import FotoPaco from './../../assets/fotos/paco.png';

import equiposJson from '../../assets/data/equipos.json';


class Liga extends Component {

  state = {
    equipos: [],
    jugadores: []
  }

  componentDidMount () {
    let equipos = { ...this.state.equipos }
    equipos = equiposJson;
    this.setState({ equipos });

    fetch('https://api-mi-liga.now.sh/api/jugadores')
    .then((res) => res.json())
    .then( dataJugadores => {
      this.setState({ jugadores: dataJugadores })
    })
  }

  render() {
    return (
      <div className="contenedor">
        <div className="lista-equipos">
          {
            this.state.equipos.map((equipo, i) =>{
              return <Equipo
                      key={i}
                      nombre={equipo.nombre}
                      logo={ require('./../../assets/logos/'+equipo.logo) } />
            })
          }
          {/* <Equipo nombre="Felinos" logo={LogoFelinos} />
          <Equipo nombre="Piratas" logo={LogoPiratas} />
          <Equipo nombre="Tiburones" logo={LogoTiburones} /> */}
        </div>

        <Button variant="raised" component={Link} to="/calendario/felinos" color="secondary">Ir a calendario</Button>

        <div className="lista-jugadores">
          {
            this.state.jugadores.map((jugador, i) =>{
              return <Jugador
                      key={i}
                      nombre={jugador.nombre}
                      foto={ require('./../../assets/fotos/'+jugador.foto) } />
            })
          }
          {/* <Jugador nombre="Sergio" foto={FotoSergio} />
          <Jugador nombre="Manuel" foto={FotoManuel} />
          <Jugador nombre="Jose" foto={FotoJose} />
          <Jugador nombre="Paco" foto={FotoPaco} /> */}
        </div>
      </div>
    );
  }
}

export default Liga;
