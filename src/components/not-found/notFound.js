import React from 'react';
import { Link } from 'react-router-dom';

import './notFound.css';

//importar Material
import Button from 'material-ui/Button';

const notFound = () => (
    <div className="error">
        <h1>Página no encontrada</h1>
        <h2 className="e404">Error 404</h2>
        <Button variant="raised" component={Link} to="/" color="secondary">Ir al inicio</Button>
    </div>
);

export default notFound;