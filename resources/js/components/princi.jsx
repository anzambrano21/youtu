import React, {useContext } from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Inicio,Registro } from './inicio'
import {Adimistrador} from "./adimistrador";
import ExamplecontexProvier, {Exaplecontect}from "../context/contexto"
import {Principal} from "./principal"
import {Cambiardat} from "./usuario"



function Prin() {
    const example=useContext(Exaplecontect)
    
    return (
        <BrowserRouter>
            
            <Routes>
                <Route path='/' element={<Inicio/>}/>
                <Route path='/registro' element={<Registro/>} />
                
                <Route path='/home' element={<Principal/>}/>
                <Route path='/admin/*' element={<Adimistrador/>}/>
                <Route path='/user' element={<Cambiardat/>}/>
            </Routes>

            
        </BrowserRouter>
    );
}

export default Prin;

if (document.getElementById('inicio')) {
    const Index = ReactDOM.createRoot(document.getElementById("inicio"));

    Index.render(
        <ExamplecontexProvier>
            <Prin />
        </ExamplecontexProvier>
    )
}
