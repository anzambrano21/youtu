import React, { useContext } from 'react';
import { useState, useEffect } from 'react';
import '../../css/admin.css'
import { Button } from 'react-bootstrap';
import { Exaplecontect } from "../context/contexto"
import { Navigate } from 'react-router-dom';
const itemsPerPage = 5;
let res = await fetch('http://127.0.0.1:8000/api/usuario');
let myData = await res.json();
let data2 = myData;

const modi = await fetch(`api/color/${1}`)
const modis = await modi.json();
let stilos={
  
};
let estilos2 = {
  
}
let  estilo3 = {

}


if (modis[0].est === 1) {
  stilos = {
    backgroundColor: modis[0].colorP
  }
  estilos2 = {
    backgroundColor: modis[0].colorS
  }
  estilo3 = {
    color: modis[0].colorC,
    fontSize: modis[0].tamP.toString() + "px"
  }
}





export const Adimistrador = () => {
  const example = useContext(Exaplecontect)
  if (example["datos"]["rol"] !== 1) {
    return (<Navigate to="/home" />);
  }

  return (
    <div >

      <header className="main-header" style={stilos}>
        <label htmlFor="btn-nav" className="btn-nav"><i className="fas fa-bars">=</i></label>
        <input type="checkbox" id="btn-nav" />

        <nav style={estilos2}>
          <ul className="navigation">
            <li><a href="" style={estilo3}>Home</a></li>
            <li><a href="" style={estilo3}>Servicios</a></li>
            <li><a href="" style={estilo3}>Nosotros</a></li>
            <li><a href="" style={estilo3}>Contacto</a></li>
          </ul>
        </nav>

      </header>
      <CambiarColor />


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
export const CambiarColor = () => {
  const cargar = async () => {
    let cp = document.getElementById("cP").value;
    let cs = document.getElementById("cS").value;
    let cc = document.getElementById("cC").value;
    let tp = document.getElementById("tP").value;
    let tt = document.getElementById("tT").value
    let ts = document.getElementById("tS").value
    let tb = document.getElementById("tB").value
    let mod = {
      Cp: cp,
      Cs: cs,
      Cc: cc,
      Tp: tp,
      Tt: tt,
      Ts: ts,
      Tb: tb,
      st: 1
    }
    console.log(mod);
    const response = await axios.put(`api/color/${1}`, mod);


  }
  const desactivar = async () => {
    let mod = {
      st: 0

    }
    const response = await axios.put(`api/color/${1}`, mod);
    console.log(response);
  }

  return (
    <div className='contaiP' style={stilos}>
      <div className='contaiColor'>
        <div className="row justify-content-center">
          <p className="col-3" style={estilo3}>color primario</p>
          <input type="color" name="" id="cP" className="col-5" />
        </div>
        <div className="row justify-content-center">
          <p className="col-3" style={estilo3}>color secundario</p>
          <input type="color" name="" id="cS" className="col-5" />
        </div>
        <div className="row justify-content-center">
          <p className="col-3" style={estilo3}>color complementario</p>
          <input type="color" name="" id="cC" className="col-5" />
        </div>
        <div className="row justify-content-center">
          <p className="col-3" style={estilo3}>tamaño de parrafo</p>
          <input type="number" name="" id="tP" className="col-5" />
        </div>
        <div className="row justify-content-center">
          <p className="col-3" style={estilo3}>tamaño de titulos</p>
          <input type="number" name="" id="tT" className="col-5" />
        </div>
        <div className="row justify-content-center">
          <p className="col-3" style={estilo3}>tamaño de subtitulos</p>
          <input type="number" name="" id="tS" className="col-5" />
        </div>
        <div className="row justify-content-center">
          <p className="col-3" style={estilo3}>tamaño de botones</p>
          <input type="number" name="" id="tB" className="col-5" />
        </div>
        <div className="row justify-content-center">

          <input type="button" value="cargar" className='col-2' onClick={cargar} />
          <input type="button" value="desactivar" className='col-2' onClick={desactivar} />
        </div>


      </div>
    </div>
  );
}
