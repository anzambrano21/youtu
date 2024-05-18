import React, { useContext } from 'react';
import { useState, useEffect } from 'react';
import '../../css/admin.css'
import { Button } from 'react-bootstrap';
import { Exaplecontect } from "../context/contexto"
import {Navigate } from 'react-router-dom';
const itemsPerPage = 5;
let res = await fetch('http://127.0.0.1:8000/api/usuario');
let myData = await res.json();
let data2 = myData;



export const Adimistrador = () => {
  const example = useContext(Exaplecontect)
  if (example["datos"]["rol"]!==1){
    return(<Navigate to="/home" />);
  }
  
  return (
    <div >

      <header className="main-header">
        <label htmlFor="btn-nav" className="btn-nav"><i className="fas fa-bars">=</i></label>
        <input type="checkbox" id="btn-nav" />

        <nav>
          <ul className="navigation">
            <li><a href="">Home</a></li>
            <li><a href="">Servicios</a></li>
            <li><a href="">Nosotros</a></li>
            <li><a href="">Contacto</a></li>
          </ul>
        </nav>

      </header>
      <CutomTable />


      <div className="footer">

      </div>




    </div>
  );
}
export const CutomTable = () => {


  const [currentPage, setCurrentPage] = useState(1);
  const [globalFilter, setglobalfilter] = useState('');


  if (globalFilter !== '') {
    data2 = myData.filter(dato => {
      return Object.values(dato).some(val =>
        String(val).toLowerCase().includes(globalFilter.toLowerCase())
      );
    });

  } else {

    data2 = myData;

  }
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  let currentData = data2.slice(startIndex, endIndex);

  const totalPages = Math.ceil(data2.length / itemsPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };
  const actualizar = (id) => {
    fetch(`http://127.0.0.1:8000/api/usuario/${id}`, {
      method: 'PUT',
    })
    window.location.reload();
  }

  // Función para filtrar los datos según el término de búsqueda
  return (
    <div >


      <div className='conTabl'>
        <table className="table table-striped">

          <thead>
            <tr>


              <th>Nombre</th>
              <th>Apellido</th>
              <th>Acciones</th>
              <th></th>
            </tr>
          </thead>
          <tbody>

            {currentData.map((item) => (

              <tr key={item.id} >

                <td>{item.nombreUser}</td>
                <td>{item.email}</td>
                <td><button className="btn btn-warning" onClick={() => dataedit = item}>Editar</button></td>
                <td>

                  {item.est === 'activado' ? (
                    <button
                      className="btn btn-danger"
                      onClick={() => actualizar(item.id)}
                    >
                      desactivar
                    </button>
                  ) : (
                    <button
                      className="btn btn-success"
                      onClick={() => actualizar(item.id)}
                    >
                      Activar
                    </button>
                  )}
                  </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className='conBoton'>
        <Button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="btn btn-primary">
          Anterior
        </Button>
        <span>Página {currentPage} de {totalPages}</span>
        <Button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="btn btn-primary">
          Siguiente
        </Button>
      </div>

      <footer>
        <p>Univecidad Jose Antonio Paez  Prefesor: JOSE SAAVEDRA</p>

      </footer>
    </div>
  );
};
