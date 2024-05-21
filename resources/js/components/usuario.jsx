import 'bootstrap/dist/css/bootstrap.css';
import React, { useContext } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import "../../css/datuser.css"

export const Cambiardat = () => {
    return (
        <div className="datosUsuser">
            <AppBar position="static" style={{ backgroundColor: '#EAEA12' }}>
                <Toolbar className='nav'>
                    <Typography variant="h6">
                        youtube amarillo
                    </Typography>
                    <div className='items'>
                        <Typography variant="h6"  >
                            <Link className="nav-link" id="tab-register" data-mdb-pill-init to="/" role="tab"
                                aria-controls="pills-register" aria-selected="false" >usuario</Link>
                        </Typography>
                        <Typography variant="h6" >
                            <Link className="nav-link" id="tab-register" data-mdb-pill-init to="/admin" role="tab"
                                aria-controls="pills-register" aria-selected="false" >admin</Link>
                        </Typography>
                    </div>


                </Toolbar>
            </AppBar>


            <div className="container">
                <div className='nombreap'>
                    <div className="row">{/* foto nombre apellido cedula */}

                        <div className="col">

                        </div>

                        <div className="col">
                            <div className="container2">
                                <div className="row">
                                    <p className='col'>Nombre</p>
                                    <input type="text" id="loginName" className="col" />
                                </div>
                                <div className="row">
                                    <p className='col'>Apellido</p>
                                    <input type="text" id="loginName" className="col" />
                                </div>
                                <div className="row">
                                    <p className='col'>Cedula</p>
                                    <input type="number" id="loginName" className="col" />
                                </div>
                            </div>

                        </div>



                    </div>
                </div>
                <div className='ubicacion'>
                <div className="row gy-5">{/*correo rif direccion y estado  */}
                    <p className="col-1">Correo</p>
                    <input type="text" className="col" />
                    <p className="col-1">RIF</p>
                    <input type="text" className="col" />
                    <p className="col-2">Direccion</p>
                    <input type="text" className="col" />

                </div>
                <div className="row gy-5" >
                    <p className='col-2'>contraseña actual</p>
                    <input type="text" className='col' />
                    
                    <p className='col-2'>contraseña nueva</p>
                    <input type="text" className='col' />


                </div>
                <div className="row">
                    <select name="" id="" className='col-2' style={{ marginRight: "0.5%" }}></select>
                    <input type="button" value="guardar" className='col-2' />
                </div>
                </div>

                
            </div>

        </div>
    )
}