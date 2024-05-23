// Recupera los datos del usuario de sessionStorage
import '../../css/home.css'
import React, { useContext } from 'react';
import { Exaplecontect } from "../context/contexto";

import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import { Link } from 'react-router-dom';

const modi = await fetch(`api/color/${1}`)
const modis = await modi.json();
let stilos={
  
};
let estilos2 = {
  
}
let  estilo3 = {

}
let estilo4={

}
let estilo5={

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
  estilo4={
    color: modis[0].colorC,
    fontSize: modis[0].tamSub.toString() + "px"
  }
  estilo5={
    color: modis[0].colorC,
    fontSize: modis[0].tamT.toString() + "px"
  }
}
export const Principal = () => {
  const example = useContext(Exaplecontect)
  console.log(example);
  function admin(){
    if (example["datos"]["rol"]===1) {
        return (      
        <Typography variant="h6"  >
        <Link className="nav-link" id="tab-register" data-mdb-pill-init to="/admin" role="tab"
          aria-controls="pills-register" aria-selected="false" style={estilo4}>Admin</Link>
      </Typography>)


    }
  }

  return (
    <div className='componentes'>
      <header position="static" className="naver"  style={stilos}>
        <Toolbar className='nav'>
          <Typography variant="h5" style={estilo4}>
            Youtube Amarillo
          </Typography>
          <div className='items'>
            <Typography variant="h6" >
              <Link className="nav-link" id="tab-register" data-mdb-pill-init to="/user" role="tab"
                aria-controls="pills-register" aria-selected="false" style={estilo4}>Usuario</Link>
            </Typography>
            {admin()}

          </div>


        </Toolbar>
      </header>
      <div className="banner" >

      </div>
      <section className=" py-2 my-2">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-md-5 col-lg-3" >
              <div className="card my-3" style={estilos2}>

                <img src="https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg" className="card-image-top" alt="thumbnail" />

                <div className="card-body">
                  <h3 className="card-title">What is HTML</h3>
                  <p className="card-text" style={estilo3}>HTML stands for Hyper Text Markup Language, It helps to learn web development and designing. </p>

                </div>
              </div>
            </div>

            <div className="col-md-5 col-lg-3">
              <div className="card my-3" style={estilos2}>

                <img src="https://images.pexels.com/photos/3848158/pexels-photo-3848158.jpeg" className="card-image-top" alt="thumbnail" />

                <div className="card-body">
                  <h3 className="card-title">Why We Use HTML</h3>
                  <p className="card-text" style={estilo3}>We use HTML to make website and that website helps to gain very much knowledge.Pellentesque dictum consequat tincidunt. Sed tincidunt tortor nec vulputate gravida.</p>

                </div>
              </div>
            </div>

            <div className="col-md-5 col-lg-3" >
              <div className="card my-3" style={estilos2}>

                <img src="https://images.pexels.com/photos/2343170/pexels-photo-2343170.jpeg" className="card-image-top" alt="thumbnail" />
                <div className="card-body">
                  <h3 className="card-title">Where do people came from?</h3>
                  <p className="card-text" style={estilo3} >Pellentesque dictum consequat tincidunt. Sed tincidunt tortor nec vulputate gravida. Nam sapien nisi, malesuada at sapien suscipit,</p>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      <footer style={stilos}>hola</footer>
    </div>
  )

}