import 'bootstrap/dist/css/bootstrap.css';
import React, { useContext, useState, useCallback } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import "../../css/datuser.css"
import { useDropzone } from "react-dropzone";

import { Exaplecontect } from "../context/contexto";

export const Cambiardat = () => {
    const example = useContext(Exaplecontect)
    
    const [files, setFiles] = useState([]);
    const [isImageLoaded, setIsImageLoaded] = useState(false); // Nuevo estado

    const onDrop = useCallback((acceptedFiles) => {
        setFiles(
            acceptedFiles.map((file) =>
                Object.assign(file, {
                    preview: URL.createObjectURL(file),
                })
            )
        );
        setIsImageLoaded(true); // Establece el estado a verdadero cuando se carga una imagen
    }, []);

    const { getRootProps, getInputProps } = useDropzone({ 
        onDrop,
        onDropAccepted: () => {
            onDrop();
            setFiles([]); // Limpia el estado de los archivos después de agregar el nuevo
        },
        maxFiles: 1, // Acepta solo un archivo
        onDropRejected: () => alert('Por favor, sube solo imágenes.'), // Alerta si el archivo no es una imagen
    });

    const fileList = files.map((file) => (
        
            <img src={file.preview} alt={file.name} className="img-redonda" />
        
    ));

    function admin() {
        if (example["datos"]["rol"] === 1) {
            return (
                <Typography variant="h6" >
                    <Link className="nav-link" id="tab-register" data-mdb-pill-init to="/admin" role="tab"
                        aria-controls="pills-register" aria-selected="false" >admin</Link>
                </Typography>)
        }
    }
    return (
        <div className="datosUsuser">
            <AppBar position="static" style={{ backgroundColor: '#EAEA12' }}>
                <Toolbar className='nav'>
                    <Typography variant="h5">
                        Youtube Amarillo
                    </Typography>
                    <div className='items'>
                        <Typography variant="h6" >
                            <Link className="nav-link" id="tab-register" data-mdb-pill-init to="/home" role="tab"
                                aria-controls="pills-register" aria-selected="false" >Home</Link>
                        </Typography>
                        {admin()}

                    </div>


                </Toolbar>
            </AppBar>


            <div className="containe">
                <div className='nombreap'>
                    <div className="row">{/* foto nombre apellido cedula */}
                        <div className="col">
                            <div {...getRootProps()}>
                                <input {...getInputProps()} />
                                {!isImageLoaded && <p>Arrastra y suelta tus archivos aquí, o haz clic para seleccionar archivos</p>}
                                <ul>{fileList}</ul>
                            </div>
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

                    <div className="row">
                        <p className="col-2">Correo</p>
                        <input type="text" className="col" />
                    </div>
                    <div className="row">
                        <p className="col-2">RIF</p>
                        <input type="text" className="col" />
                    </div>
                    <div className="row">
                        <p className="col-2">Direccion</p>
                        <input type="text" className="col" />
                    </div>
                    <div className="row">
                        <p className='col-2'>contraseña actual</p>
                        <input type="text" className='col' />

                    </div>
                    <div className="row">
                        <p className='col-2'>contraseña nueva</p>
                        <input type="text" className='col' />
                    </div>
                    <div className="row">
                        <select name="estado" id="" className='col-2' style={{ marginRight: "0.5%" }}>
                            <option value="Carabobo">Carabobo</option>
                            <option value="Amazonas">Amazonas</option>
                            <option value="Anzoátegui">Anzoátegui</option>
                            <option value="Apure">Apure</option>
                            <option value="Aragua">Aragua</option>
                            <option value="Bolívar">Bolívar</option>
                            <option value="Barinas">Barinas</option>
                            <option value="Cojedes">Cojedes</option>
                            <option value="Delta Amacuro">Delta Amacuro</option>
                            <option value="Distrito Capital	">Distrito Capital	</option>
                            <option value="Falcón">Falcón</option>
                            <option value="Guárico">Guárico	</option>
                            <option value="Lara">Lara</option>
                            <option value="Mérida">Mérida</option>
                        </select>
                        <input type="button" value="guardar" className='col-2' />
                    </div>


                </div>


            </div>

        </div>
    )
}