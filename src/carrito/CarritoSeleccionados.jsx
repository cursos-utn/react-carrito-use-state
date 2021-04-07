import React from 'react';

function CarritoSeleccionados(props) {
  console.log(props);
  return (
    <div>
      {props.carrito.map((unProducto) => (
        <div key={unProducto.id} onClick={() => props.removerDelCarrito(unProducto)}>
          {unProducto.producto}
        </div>
      ))}
    </div>
  );
}

export default CarritoSeleccionados;
