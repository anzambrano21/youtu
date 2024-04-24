import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import '../../css/app.css'
const itemsPerPage = 5;
let res = await fetch('http://127.0.0.1:8000/api/usuario');
let myData = await res.json();
let data2 = myData;
const fetchData = async () => {
  res= await fetch('http://127.0.0.1:8000/api/usuario');
  myData = await res.json();
  data2=myData

};

export const adimistrador=()=>{
    return (
        <div className='container'>
          <div className='nav'>



            

            <div className="footer">

            </div>

        
        
        
        </div>
    );
}