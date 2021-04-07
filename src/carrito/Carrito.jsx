import React, { useState } from 'react';
import CarritoListado from './CarritoListado';
import CarritoSeleccionados from './CarritoSeleccionados';

function Carrito(props) {
  const [articulos, setArticulos] = useState([
    { id: 1, producto: 'Heladera', precio: 50000 },
    { id: 2, producto: 'TV ecónomico', precio: 18000 },
    { id: 3, producto: 'TV intermedio', precio: 38000 },
    { id: 4, producto: 'TV costoso', precio: 78000 },
  ]);
  const [seleccionados, setSeleccionados] = useState([]);

  const agregarAlCarrito = (articuloAAgregar) => {
    const newSeleccionados = [...seleccionados];
    newSeleccionados.push({ ...articuloAAgregar });
    setSeleccionados(newSeleccionados);
  };

  const removerDelCarrito = (articuloARemover) => {
    const newSeleccionados = seleccionados.filter((item) => item.id != articuloARemover.id);
    setSeleccionados(newSeleccionados);
  };

  return (
    <div>
      <h3>Productos</h3>
      <CarritoListado 
          articulos={articulos} 
          agregarAlCarrito={agregarAlCarrito} 
      />

      <h3>Tu carrito</h3>
      <CarritoSeleccionados carrito={seleccionados} removerDelCarrito={removerDelCarrito} />
    </div>
  );
}

export default Carrito;
