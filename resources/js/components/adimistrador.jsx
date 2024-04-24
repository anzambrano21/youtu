import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import '../../css/admin.css'
const itemsPerPage = 5;
let res = await fetch('http://127.0.0.1:8000/api/usuario');
let myData = await res.json();
let data2 = myData;
const fetchData = async () => {
  res = await fetch('http://127.0.0.1:8000/api/usuario');
  myData = await res.json();
  data2 = myData

};

export const Adimistrador = () => {
  return (
    <div className='container'>
      <header className="main-header">
        <label htmlFor="btn-nav" className="btn-nav"><i className="fas fa-bars"></i></label>
        <input type="checkbox" id="btn-nav"/>

          <nav>
            <ul className="navigation">
              <li><a href="">Home</a></li>
              <li><a href="">Servicios</a></li>
              <li><a href="">Nosotros</a></li>
              <li><a href="">Contacto</a></li>
            </ul>
          </nav>

      </header>
      <div className="footer">

      </div>




    </div>
  );
}