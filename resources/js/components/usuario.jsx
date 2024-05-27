import 'bootstrap/dist/css/bootstrap.css';
import React, { useContext, useState, useCallback } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import "../../css/datuser.css"
import { useDropzone } from "react-dropzone";
import { Exaplecontect } from "../context/contexto";
import axios from 'axios';
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

export const Cambiardat = () => {
    const example = useContext(Exaplecontect)
    const [files, setFiles] = useState([]);
    const [isImageLoaded, setIsImageLoaded] = useState(false); // Nuevo estado
    const [imagePath, setImagePath] = useState('');
    const onDrop = useCallback((acceptedFiles) => {
        setFiles(
            acceptedFiles.map((file) => {
                const objectUrl = URL.createObjectURL(file);
                setImagePath(file); // Guarda la dirección de la imagen
                return Object.assign(file, {
                    preview: objectUrl,
                });
            })
        );
        setIsImageLoaded(true);
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
    const fileList = files.map((file, index) => (
        <img key={index} src={file.preview} alt={file.name} className="img-redonda" />
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
    const guardar= async () => {
        let nom=document.getElementById("nombre").value
        let ape=document.getElementById("apellido").value
        let CI=document.getElementById("CI").value
        let email=document.getElementById("correo").value
        let dir=document.getElementById("direc").value
        let conA=document.getElementById("conA").value
        let conN= document.getElementById("conN").value

        const formData = new FormData();
        formData.append('nombre', nom);
        formData.append('apellido', ape);
        formData.append('ci', CI);
        formData.append('Email', email);
        formData.append('Dir', dir);
        formData.append('ConA', conA);
        formData.append('ConN', conN);
        formData.append('imagePath', imagePath); // Añade el archivo al FormData
        
        const response = await axios.post(`api/actu/${example.datos.email}`, formData);
        console.log(response);
    }
    return (
        <div className="datosUsuser">
            <header position="static" className='naver' style={stilos}>
                <Toolbar className='nav'>
                    <Typography variant="h5" >
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
            </header>
            <div className="containe" style={stilos}>
                <div className='nombreap'>
                    <div className="row">{/* foto nombre apellido cedula */}
                        <div className="col">
                            <div {...getRootProps()}>
                                <input {...getInputProps()} />
                                {!isImageLoaded && <p >Arrastra y suelta tus archivos aquí, o haz clic para seleccionar archivos</p>}
                                <ul>{fileList}</ul>
                            </div>
                        </div>
                        <div className="col-7">
                            <div className="container2">
                                <div className="row">
                                    <p className='col-3' >Nombre</p>
                                    <input type="text" id="nombre" className="col" />
                                </div>
                                <div className="row">
                                    <p className='col-3' >Apellido</p>
                                    <input type="text" id="apellido" className="col" />
                                </div>
                                <div className="row">
                                    <p className='col-3' >Cedula</p>
                                    <input type="number" id="CI" className="col" />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className='ubicacion'>

                    <div className="row">
                        <p className="col-2" >Correo</p>
                        <input type="email" className="col" id='correo' />
                    </div>
                    <div className="row">
                        <p className="col-2" >Direccion</p>
                        <input type="text" className="col" id='direc' />
                    </div>
                    <div className="row">
                        <p className='col-2' >Contraseña actual</p>
                        <input type="text" className='col' id='conA'/>

                    </div>
                    <div className="row">
                        <p className='col-2' >Contraseña nueva</p>
                        <input type="text" className='col' id='conN' />
                    </div>
                    <div className="row">
                        <select name="estado" id="" className='col-2' style={{ marginRight: "0.5%",estilo6}}>
                            <option value="Carabobo" style={estilo6}>Carabobo</option>
                            <option value="Amazonas"style={estilo6}>Amazonas</option>
                            <option value="Anzoátegui"style={estilo6}>Anzoátegui</option>
                            <option value="Apure"style={estilo6}>Apure</option>
                            <option value="Aragua"style={estilo6}>Aragua</option>
                            <option value="Bolívar"style={estilo6}>Bolívar</option>
                            <option value="Barinas"style={estilo6}>Barinas</option>
                            <option value="Cojedes"style={estilo6}>Cojedes</option>
                            <option value="Delta Amacuro"style={estilo6}>Delta Amacuro</option>
                            <option value="Distrito Capital	"style={estilo6}>Distrito Capital	</option>
                            <option value="Falcón"style={estilo6}>Falcón</option>
                            <option value="Guárico"style={estilo6}>Guárico	</option>
                            <option value="Lara"style={estilo6}>Lara</option>
                            <option value="Mérida"style={estilo6}>Mérida</option>
                        </select>
                        <input type="button" value="guardar" className='col-2' style={estilo6} onClick={guardar}/>
                    </div>
                </div>
            </div>
        </div>
    )
}