// Recupera los datos del usuario de sessionStorage
import React, { useContext } from 'react';
import { Exaplecontect } from "../context/contexto";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import '../../css/home.css'



export const Principal = () => {
  const example = useContext(Exaplecontect)
  console.log(example);

  return (
    <div className='componentes'>
      <AppBar position="static" style={{ backgroundColor: '#EAEA12' }}>
        <Toolbar>
          <Typography variant="h6">
            Título de mi sitio web
          </Typography>
        </Toolbar>
      </AppBar>
      <section className="bg-light py-2 my-2">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-md-5 col-lg-3">
              <div className="card my-3">

                <img src="https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg" className="card-image-top" alt="thumbnail" />

                <div className="card-body">
                  <h3 className="card-title"><a href="#" className="text-secondary">What is HTML</a></h3>
                  <p className="card-text">HTML stands for Hyper Text Markup Language, It helps to learn web development and designing. </p>
                  <a href="#" className="btn btn-primary">Read More</a>
                </div>
              </div>
            </div>

            <div className="col-md-5 col-lg-3">
              <div className="card my-3">

                <img src="https://images.pexels.com/photos/3848158/pexels-photo-3848158.jpeg" className="card-image-top" alt="thumbnail" />

                <div className="card-body">
                  <h3 className="card-title"><a href="#" className="text-secondary">Why We Use HTML</a></h3>
                  <p className="card-text">We use HTML to make website and that website helps to gain very much knowledge.Pellentesque dictum consequat tincidunt. Sed tincidunt tortor nec vulputate gravida.</p>
                  <a href="#" className="btn btn-primary">Read More</a>
                </div>
              </div>
            </div>

            <div className="col-md-5 col-lg-3">
              <div className="card my-3">

                <img src="https://images.pexels.com/photos/2343170/pexels-photo-2343170.jpeg" className="card-image-top" alt="thumbnail" />
                <div className="card-body">
                  <h3 className="card-title"><a href="#" className="text-secondary">Where do people came from?</a></h3>
                  <p className="card-text">Pellentesque dictum consequat tincidunt. Sed tincidunt tortor nec vulputate gravida. Nam sapien nisi, malesuada at sapien suscipit,</p>
                  <a href="#" className="btn btn-primary">Read More</a>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>


      <footer>hola</footer>
    </div>
  )

}