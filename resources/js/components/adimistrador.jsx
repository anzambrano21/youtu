import React, { useContext } from 'react';
import { useState, useEffect } from 'react';
import '../../css/admin.css'
import { Button } from 'react-bootstrap';
import { Exaplecontect } from "../context/contexto"
import { Navigate } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
const itemsPerPage = 5;
let res = await fetch('http://127.0.0.1:8000/api/usuario');
let myData = await res.json();
let data2 = myData;

const modi = await fetch(`http://127.0.0.1:8000/api/color/${1}`)
const modis = await modi.json();
let stilos = {

};
let estilos2 = {

}
let estilo3 = {

}
let estilo4 = {

}
let estilo5 = {

}
let estilo6 = {

}

if (modis.length === 1) {
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
  estilo4={
    color: modis[0].colorC,
    fontSize: modis[0].tamSub.toString() + "px"
  }
  estilo5={
    color: modis[0].colorC,
    fontSize: modis[0].tamT.toString() + "px"
  }
  estilo6={
    backgroundColor: modis[0].colorC,
    fontSize: modis[0].tamBotom .toString() + "px"
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
        <Toolbar className='enlace'>


          <div className='items'>
            <Typography variant="h6" >
              <Link className="nav-link" id="tab-register" data-mdb-pill-init to="/home" role="tab"
                aria-controls="pills-register" aria-selected="false" >Home</Link>
            </Typography>


          </div>


        </Toolbar>
        <label htmlFor="btn-nav" className="btn-nav"><i className="fas fa-bars">=</i></label>
        <input type="checkbox" id="btn-nav" />


        <nav style={estilos2}>
          <ul className="navigation">

            <li><Link to="color" >Ir a Cambiar Color</Link></li>
            <li><Link to="/admin" >Lista de usuario</Link></li>
            <li><a href="" >Nosotros</a></li>
            <li><a href="" >Contacto</a></li>
          </ul>
        </nav>

      </header>

      <Routes>
        <Route path='/' element={<CutomTable />} />
        <Route path='/color' element={<CambiarColor />} />
      </Routes>







      <footer style={stilos}>
        <p>Univecidad Jose Antonio Paez  Prefesor: JOSE SAAVEDRA</p>

      </footer>




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


      <div className='conTabl' style={stilos}>
        <table className="table table-striped">

          <thead>
            <tr>


              <th style={estilo4}>Nombre</th>
              <th style={estilo4}>Apellido</th>
              <th style={estilo4}>Acciones</th>
              <th></th>
            </tr>
          </thead>
          <tbody>

            {currentData.map((item) => (

              <tr key={item.id} >

                <td style={estilo4}>{item.nombreUser}</td>
                <td style={estilo4}>{item.email}</td>
                <td><button className="btn btn-warning" onClick={() => dataedit = item} style={estilo6}>Editar</button></td>
                <td>

                  {item.est === 'activado' ? (
                    <button
                      className="btn btn-danger"
                      onClick={() => actualizar(item.id)}
                      style={estilo6}
                    >
                      desactivar
                    </button>
                  ) : (
                    <button
                      className="btn btn-success"
                      onClick={() => actualizar(item.id)}
                      style={estilo6}
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
      <div className='conBoton row justify-content-center '>
        <Button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="btn btn-primary col" style={estilo6} >
          Anterior
        </Button>
        <span className='col'>Página {currentPage} de {totalPages}</span>
        <Button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="btn btn-primary col" style={estilo6}>
          Siguiente
        </Button>
      </div>


    </div>
  );
};
export const CambiarColor = () => {
  const [selectedValue, setSelectedValue] = useState('nada');
  const handleSelectChange = (e) => {
    setSelectedValue(e.target.value);
  };

  const cargar = async () => {
    let cp = document.getElementById("cP").value;
    let cs = document.getElementById("cS").value;
    let cc = document.getElementById("cC").value;
    let tp = document.getElementById("tP").value;
    let tt = document.getElementById("tT").value;
    let ts = document.getElementById("tS").value;
    let tb = document.getElementById("tB").value;
    if (!(Number(tt) > Number(ts)  && Number(ts)  > Number(tp))){
      alert("Los Tamaños de los Titulos debe ser Mayor que los Subtitulos  ");
    }
    let mod = {
      st: 1
    }
    let id
    if (selectedValue==="nada"){
      id=1
      mod = {
        Cp: cp,
        Cs: cs,
        Cc: cc,
        Tp: tp,
        Tt: tt,
        Ts: ts,
        Tb: tb,
        st: 1
      }

    } else if(selectedValue==="Triada"){
      id=2


    }else if(selectedValue==="Monocromatico"){
      id=0

    }else if (selectedValue==="Cuadrado"){
      id=3

    }
    
    
    const response = await axios.put(`http://127.0.0.1:8000/api/color/${id}`, mod);
    
    window.location.reload();


  }
  const desactivar = async () => {
    let mod = {
      st: 0

    }
    const response = await axios.put(`http://127.0.0.1:8000/api/color/${0}`, mod);
    window.location.reload();
  }
  




  return (
    <div className='contaiP' style={stilos}>
      <div className='contaiColor'>
        <div className="row justify-content-center">
          <p className="col-3" >color primario</p>
          <input type="color" name="" id="cP" className="col-5" />
        </div>
        <div className="row justify-content-center">
          <p className="col-3" >color secundario</p>
          <input type="color" name="" id="cS" className="col-5" />
        </div>
        <div className="row justify-content-center">
          <p className="col-3" >color complementario</p>
          <input type="color" name="" id="cC" className="col-5" />
        </div>
        <div className="row justify-content-center">
          <p className="col-3" >tamaño de parrafo</p>
          <input type="number" name="" id="tP" className="col-5" />
        </div>
        <div className="row justify-content-center">
          <p className="col-3" >tamaño de titulos</p>
          <input type="number" name="" id="tT" className="col-5" />
        </div>
        <div className="row justify-content-center">
          <p className="col-3" >tamaño de subtitulos</p>
          <input type="number" name="" id="tS" className="col-5" />
        </div>
        <div className="row justify-content-center">
          <p className="col-3" >tamaño de botones</p>
          <input type="number" name="" id="tB" className="col-5" />
        </div>
        <br />
        <div className="row justify-content-center">
        <p className='col-3 '>Modo de Distribucion</p>
          <select value={selectedValue} onChange={handleSelectChange} className='col-5'>
            <option value="nada"></option>
            <option value="Triada">Triada</option>
            <option value="Monocromatico">Monocromatico</option>
            <option value="Cuadrado">Cuadrado</option>
          </select>

        </div>
        <br />
        <div className="row justify-content-center">

          <input type="button" value="cargar" className='col-2' onClick={cargar} style={estilo6}/>
          <input type="button" value="desactivar" className='col-2' onClick={desactivar} style={estilo6}/>
        </div>


      </div>
    </div>
  );
}

