import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Inicio, Navega,Registro } from './inicio'
import {Adimistrador} from "./adimistrador";
import SessionContext from "./contextos"


function Prin() {
    const [sessionData, setSessionData] = useState(null);

    useEffect(() => {
        axios.get('/api/secion')
            .then(response => {
                setSessionData(response.data);
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }, []);
    return (
        <BrowserRouter>
            
            <Routes>
                <Route path='/' element={<Inicio/>}/>
                <Route path='/registro' element={<Registro/>} />
                <Route path='/admin' element={<Adimistrador/>}/>
            </Routes>

            
        </BrowserRouter>
    );
}

export default Prin;

if (document.getElementById('inicio')) {
    const Index = ReactDOM.createRoot(document.getElementById("inicio"));

    Index.render(
        <React.StrictMode>
            <Prin />
        </React.StrictMode>
    )
}
