import React, { useState } from 'react';

function CarritoListado(props) {

  return (
    <div>
      {props.articulos.map((unArticulo) => (
        <div 
          key={unArticulo.id} 
          onClick={() => props.agregarAlCarrito(unArticulo)}
        >
          {unArticulo.producto} ${unArticulo.precio}
        </div>
      ))}
    </div>
  );
}

export default CarritoListado;
